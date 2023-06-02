---
slug: "simple-tasker-configuration-driven-orchestration"
title: "Simple Tasker: Configuration driven orchestration"
authors:	
  - markstella
draft: false
hide_table_of_contents: true
image: "/img/fullstackchronicles-cover-image.png"
tags: 
  - "data-lineage"
  - "orchestration"
  - "python"
keywords:	
  - "data-lineage"
  - "orchestration"
  - "python"
---

Recently I found myself at a client that were using a third party tool to scan all their enterprise applications in order to collate their data lineage. They had spent two years onboarding applications to the tool, resulting in a large technical mess that was hard to debug and impossible to extend. As new applications were integrated onto the platform, developers were forced to think of new ways of connecting and tranforming the data so it could be consumed.

The general approach was: `setup scanner` -> `scan application` -> `modify results` -> `upload results` -> `backup results` -> `cleanup workspace` -> `delete anything older than 'X' days`

Each developer had their own style of doing this - involving shell scripts, python scripts, SQL and everything in between. Worse, there was slabs of code replicated across the entire repository, with variables and paths changed depending on the use case.

My tasks was to create a framework that could orchestrate the scanning and adhered to the following philosophies:

- DRY (Don't Repeat Yourself)
- Config driven
- Version controlled
- Simple to extend
- Idempotent

It also had to be written in Python as that was all the client was skilled in.

After looking at what was on the market (Airflow and Prefect being the main contenders) I decided to roll my own simplified orchestrator that required as little actual coding as possible and could be setup by configuration.

In choosing a configuration format, I settled on [HOCON](https://github.com/lightbend/config/blob/master/HOCON.md) as it closely resembled JSON but has advanced features such as interpolation, substitions and the ability to include other hocon files - this would drastically reduce the amount of boilerplate configuration required.

Because I had focused so heavily on being configuration driven, I also needed the following charecteristics to be delivered:

- Self discovery of task types (more on this later)
- Configuration validation at startup

## Tasks and self discovery

As I wanted anyone to be able to rapidly extend the framework by adding tasks, I needed to reduce as much repetition and boilerplate as possible. Ideally, I wanted a developer to just have to think about writing code and not have to deal with how to integrate this.

To achieve this, we needed a way of registering new 'tasks' that would become available to the framework. I wanted a developer to simply have to subclass the main Task class and implement a run function - the rest would be taken care of.

```python
class TaskRegistry:

    def __init__(self) -> None:
        self._registry = {}

    def register(self, cls: type) -> None:
        n = getattr(cls, 'task_name', cls.__name__).lower()
        self._registry[n] = cls

    def registered(self) -> List[str]:
        return list(self._registry.keys())

    def has(self, name: str) -> bool:
        return name in self._registry

    def get(self, name: str) -> type:
        return self._registry[name]

    def create(self, name: str, *args, **kwargs) -> object:
        try:
            return self._registry[name](*args, **kwargs)
        except KeyError:
            raise ClassNotRegisteredException(name)


registry = TaskRegistry()
```

Once the registry was instantiated, any new Tasks that inherited from 'Task' would automatically be added to the registry. We could then use the `create(name)` function to instantiate any class - essentially a pythonic [Factory Method](https://en.wikipedia.org/wiki/Factory_method_pattern)

```python
class Task(ABC):

    def __init__(self) -> None:
        self.logger = logging.getLogger(self.__class__.__name__)

    def __init_subclass__(cls) -> None:
        registry.register(cls)

    @abstractmethod
    def run(self, **kwargs) -> bool:
        raise NotImplementedError
```

For the framework to automatically register the classes, it was important to follow the project structure. As long as the task resided in the 'tasks' module, we could scan this at runtime and register each task.

```text
└── simple_tasker
    ├── __init__.py
    ├── cli.py
    └── tasks
        ├── __init__.py
        ├── archive.py
        └── shell_script.py
```

This was achieved with a simple dynamic module importer

```python
modules = glob.glob(join(dirname(__file__), "*.py"))

for f in modules:
    if isfile(f) and not f.endswith("__init__.py"):
        __import__(f"{Task.__module__}.{basename(f)[:-3]}")
```

## The configuration

In designing how the configuration would bind to the task, I needed to capture the `name` (what object to instanticate) and what `args` to pass to the instantiated run function. I decided to model it as below with everything under a 'tasks' array

```text
tasks: [
    {
        name: shell_script
        args: {
            script_path: uname
            script_args: -a
        }
    },
    {
        name: shell_script
        args: {
            script_path: find
            script_args: [${CWD}/simple_tasker/tasks, -name, "*.py"]
        }
    },
    {
        name: archive
        args: {
            input_directory_path: ${CWD}/simple_tasker/tasks
            target_file_path: /tmp/${PLATFORM}_${TODAY}.tar.gz
        }
    }
]
```

## Orchestration and validation

As mentioned previously, one of the goals was to ensure the configuration was valid prior to any execution. This meant that the framework needed to validate whether tha task `name` referred to a registered task, and that all mandatory `arguments` were addressed in the configuration. Determining whether the task was registered was just a simple key check, however to validate the arguments to the run required some inspection - I needed to get all args for the run function and filter out 'self' and any asterisk args (\*args, \*\*kwargs)

```python
def get_mandatory_args(func) -> List[str]:

    mandatory_args = []
    for k, v in inspect.signature(func).parameters.items():
        if (
            k != "self"
            and v.default is inspect.Parameter.empty
            and not str(v).startswith("*")
        ):
            mandatory_args.append(k)

    return mandatory_args
```

And finally onto the actual execution bit. The main functionality required here is to validate that the config was defined correctly, then loop through all tasks and execute them - passing in any args.

```python
class Tasker:

    def __init__(self, path: Path, env: Dict[str, str] = None) -> None:

        self.logger = logging.getLogger(self.__class__.__name__)
        self._tasks = []

        with wrap_environment(env):
            self._config = ConfigFactory.parse_file(path)


    def __validate_config(self) -> bool:

        error_count = 0

        for task in self._config.get("tasks", []):
            name, args = task["name"].lower(), task.get("args", {})

            if registry.has(name):
                for arg in get_mandatory_args(registry.get(name).run):
                    if arg not in args:
                        print(f"Missing arg '{arg}' for task '{name}'")
                        error_count += 1
            else:
                print(f"Unknown tasks '{name}'")
                error_count += 1

            self._tasks.append((name, args))

        return error_count == 0

    def run(self) -> bool:

        if self.__validate_config():

            for name, args in self._tasks:
                exe = registry.create(name)
                self.logger.info(f"About to execute: '{name}'")
                if not exe.run(**args):
                    self.logger.error(f"Failed tasks '{name}'")
                    return False

            return True
        return False
```

## Putting it together - sample tasks

Below are two examples of how easy it is to configure the framework. We have a simple folder archiver that will tar/gz a directory based on 2 input parameters.

```python
class Archive(Task):

    def __init__(self) -> None:
        super().__init__()

    def run(self, input_directory_path: str, target_file_path: str) -> bool:

        self.logger.info(f"Archiving '{input_directory_path}' to '{target_file_path}'")

        with tarfile.open(target_file_path, "w:gz") as tar:
            tar.add(
                input_directory_path,
                arcname=os.path.basename(input_directory_path)
            )
        return True
```

A more complex example would be the ability to execute shell scripts (or os functions) by passing in some optional variables and variables that can either be a string or list.

```python
class ShellScript(Task):

    task_name = "shell_script"

    def __init__(self) -> None:
        super().__init__()

    def run(
        self,
        script_path: str,
        script_args: Union[str, List[str]] = None,
        working_directory_path: str = None
    ) -> bool:

        cmd = [script_path]

        if isinstance(script_args, str):
            cmd.append(script_args)
        else:
            cmd += script_args

        try:

            result = subprocess.check_output(
                cmd,
                stderr=subprocess.STDOUT,
                cwd=working_directory_path
            ).decode("utf-8").splitlines()

            for o in result:
                self.logger.info(o)

        except (subprocess.CalledProcessError, FileNotFoundError) as e:
            self.logger.error(e)
            return False

        return True
```

You can view the entire implementation [here](https://github.com/mpstella/simple_tasker)
