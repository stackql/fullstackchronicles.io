"use strict";(self.webpackChunkcloudy_with_a_chance_of_big_data=self.webpackChunkcloudy_with_a_chance_of_big_data||[]).push([[6572],{3905:function(e,t,n){n.d(t,{Zo:function(){return d},kt:function(){return h}});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=a.createContext({}),c=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},d=function(e){var t=c(e.components);return a.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,l=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),u=c(n),h=r,g=u["".concat(l,".").concat(h)]||u[h]||p[h]||i;return n?a.createElement(g,o(o({ref:t},d),{},{components:n})):a.createElement(g,o({ref:t},d))}));function h(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=u;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:r,o[1]=s;for(var c=2;c<i;c++)o[c]=n[c];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},48292:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return s},contentTitle:function(){return l},metadata:function(){return c},assets:function(){return d},toc:function(){return p},default:function(){return h}});var a=n(87462),r=n(63366),i=(n(67294),n(3905)),o=["components"],s={slug:"simple-tasker-configuration-driven-orchestration",title:"Simple Tasker: Configuration driven orchestration",authors:["markstella"],draft:!1,hide_table_of_contents:!0,tags:["data-lineage","orchestration","python"],keywords:["data-lineage","orchestration","python"]},l=void 0,c={permalink:"/cloudywithachanceofbigdata.github.io/simple-tasker-configuration-driven-orchestration",editUrl:"https://github.com/cloudywithachanceofbigdata/cloudywithachanceofbigdata.github.io/tree/main/src/blog/blog/2021-06-15-simple-tasker-configuration-driven-orchestration/index.md",source:"@site/blog/2021-06-15-simple-tasker-configuration-driven-orchestration/index.md",title:"Simple Tasker: Configuration driven orchestration",description:"Recently I found myself at a client that were using a third party tool to scan all their enterprise applications in order to collate their data lineage. They had spent two years onboarding applications to the tool, resulting in a large technical mess that was hard to debug and impossible to extend. As new applications were integrated onto the platform, developers were forced to think of new ways of connecting and tranforming the data so it could be consumed.",date:"2021-06-15T00:00:00.000Z",formattedDate:"June 15, 2021",tags:[{label:"data-lineage",permalink:"/cloudywithachanceofbigdata.github.io/tags/data-lineage"},{label:"orchestration",permalink:"/cloudywithachanceofbigdata.github.io/tags/orchestration"},{label:"python",permalink:"/cloudywithachanceofbigdata.github.io/tags/python"}],readingTime:5.67,truncated:!1,authors:[{name:"Mark Stella",title:"Senior Cloud Engineer",url:"https://github.com/mpstella",imageURL:"http://1.gravatar.com/avatar/9a7465656212285f24f64326cd38d6c9?s=80",key:"markstella"}],prevItem:{title:"Masking Private Keys in CI/CD Pipelines in GitLab",permalink:"/cloudywithachanceofbigdata.github.io/masking-private-keys-in-ci-cd-pipelines-in-gitlab"},nextItem:{title:"Okta Admin Command Line Interface",permalink:"/cloudywithachanceofbigdata.github.io/okta-admin-command-line-interface"}},d={authorsImageUrls:[void 0]},p=[{value:"Tasks and self discovery",id:"tasks-and-self-discovery",children:[]},{value:"The configuration",id:"the-configuration",children:[]},{value:"Orchestration and validation",id:"orchestration-and-validation",children:[]},{value:"Putting it together - sample tasks",id:"putting-it-together---sample-tasks",children:[]}],u={toc:p};function h(e){var t=e.components,n=(0,r.Z)(e,o);return(0,i.kt)("wrapper",(0,a.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"Recently I found myself at a client that were using a third party tool to scan all their enterprise applications in order to collate their data lineage. They had spent two years onboarding applications to the tool, resulting in a large technical mess that was hard to debug and impossible to extend. As new applications were integrated onto the platform, developers were forced to think of new ways of connecting and tranforming the data so it could be consumed."),(0,i.kt)("p",null,"The general approach was: ",(0,i.kt)("inlineCode",{parentName:"p"},"setup scanner")," -> ",(0,i.kt)("inlineCode",{parentName:"p"},"scan application")," -> ",(0,i.kt)("inlineCode",{parentName:"p"},"modify results")," -> ",(0,i.kt)("inlineCode",{parentName:"p"},"upload results")," -> ",(0,i.kt)("inlineCode",{parentName:"p"},"backup results")," -> ",(0,i.kt)("inlineCode",{parentName:"p"},"cleanup workspace")," -> ",(0,i.kt)("inlineCode",{parentName:"p"},"delete anything older than 'X' days")),(0,i.kt)("p",null,"Each developer had their own style of doing this - involving shell scripts, python scripts, SQL and everything in between. Worse, there was slabs of code replicated across the entire repository, with variables and paths changed depending on the use case."),(0,i.kt)("p",null,"My tasks was to create a framework that could orchestrate the scanning and adhered to the following philosophies:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"DRY (Don't Repeat Yourself)"),(0,i.kt)("li",{parentName:"ul"},"Config driven"),(0,i.kt)("li",{parentName:"ul"},"Version controlled"),(0,i.kt)("li",{parentName:"ul"},"Simple to extend"),(0,i.kt)("li",{parentName:"ul"},"Idempotent")),(0,i.kt)("p",null,"It also had to be written in Python as that was all the client was skilled in."),(0,i.kt)("p",null,"After looking at what was on the market (Airflow and Prefect being the main contenders) I decided to roll my own simplified orchestrator that required as little actual coding as possible and could be setup by configuration."),(0,i.kt)("p",null,"In choosing a configuration format, I settled on ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/lightbend/config/blob/master/HOCON.md"},"HOCON")," as it closely resembled JSON but has advanced features such as interpolation, substitions and the ability to include other hocon files - this would drastically reduce the amount of boilerplate configuration required."),(0,i.kt)("p",null,"Because I had focused so heavily on being configuration driven, I also needed the following charecteristics to be delivered:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Self discovery of task types (more on this later)"),(0,i.kt)("li",{parentName:"ul"},"Configuration validation at startup")),(0,i.kt)("h2",{id:"tasks-and-self-discovery"},"Tasks and self discovery"),(0,i.kt)("p",null,"As I wanted anyone to be able to rapidly extend the framework by adding tasks, I needed to reduce as much repetition and boilerplate as possible. Ideally, I wanted a developer to just have to think about writing code and not have to deal with how to integrate this."),(0,i.kt)("p",null,"To achieve this, we needed a way of registering new 'tasks' that would become available to the framework. I wanted a developer to simply have to subclass the main Task class and implement a run function - the rest would be taken care of."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-python"},"class TaskRegistry:\n\n    def __init__(self) -> None:\n        self._registry = {}\n\n    def register(self, cls: type) -> None:\n        n = getattr(cls, 'task_name', cls.__name__).lower()\n        self._registry[n] = cls\n\n    def registered(self) -> List[str]:\n        return list(self._registry.keys())\n\n    def has(self, name: str) -> bool:\n        return name in self._registry\n\n    def get(self, name: str) -> type:\n        return self._registry[name]\n\n    def create(self, name: str, *args, **kwargs) -> object:\n        try:\n            return self._registry[name](*args, **kwargs)\n        except KeyError:\n            raise ClassNotRegisteredException(name)\n\n\nregistry = TaskRegistry()\n")),(0,i.kt)("p",null,"Once the registry was instantiated, any new Tasks that inherited from 'Task' would automatically be added to the registry. We could then use the ",(0,i.kt)("inlineCode",{parentName:"p"},"create(name)")," function to instantiate any class - essentially a pythonic ",(0,i.kt)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/Factory_method_pattern"},"Factory Method")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-python"},"class Task(ABC):\n\n    def __init__(self) -> None:\n        self.logger = logging.getLogger(self.__class__.__name__)\n\n    def __init_subclass__(cls) -> None:\n        registry.register(cls)\n\n    @abstractmethod\n    def run(self, **kwargs) -> bool:\n        raise NotImplementedError\n")),(0,i.kt)("p",null,"For the framework to automatically register the classes, it was important to follow the project structure. As long as the task resided in the 'tasks' module, we could scan this at runtime and register each task."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-text"},"\u2514\u2500\u2500 simple_tasker\n    \u251c\u2500\u2500 __init__.py\n    \u251c\u2500\u2500 cli.py\n    \u2514\u2500\u2500 tasks\n        \u251c\u2500\u2500 __init__.py\n        \u251c\u2500\u2500 archive.py\n        \u2514\u2500\u2500 shell_script.py\n")),(0,i.kt)("p",null,"This was achieved with a simple dynamic module importer"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-python"},'modules = glob.glob(join(dirname(__file__), "*.py"))\n\nfor f in modules:\n    if isfile(f) and not f.endswith("__init__.py"):\n        __import__(f"{Task.__module__}.{basename(f)[:-3]}")\n')),(0,i.kt)("h2",{id:"the-configuration"},"The configuration"),(0,i.kt)("p",null,"In designing how the configuration would bind to the task, I needed to capture the ",(0,i.kt)("inlineCode",{parentName:"p"},"name")," (what object to instanticate) and what ",(0,i.kt)("inlineCode",{parentName:"p"},"args")," to pass to the instantiated run function. I decided to model it as below with everything under a 'tasks' array"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-text"},'tasks: [\n    {\n        name: shell_script\n        args: {\n            script_path: uname\n            script_args: -a\n        }\n    },\n    {\n        name: shell_script\n        args: {\n            script_path: find\n            script_args: [${CWD}/simple_tasker/tasks, -name, "*.py"]\n        }\n    },\n    {\n        name: archive\n        args: {\n            input_directory_path: ${CWD}/simple_tasker/tasks\n            target_file_path: /tmp/${PLATFORM}_${TODAY}.tar.gz\n        }\n    }\n]\n')),(0,i.kt)("h2",{id:"orchestration-and-validation"},"Orchestration and validation"),(0,i.kt)("p",null,"As mentioned previously, one of the goals was to ensure the configuration was valid prior to any execution. This meant that the framework needed to validate whether tha task ",(0,i.kt)("inlineCode",{parentName:"p"},"name")," referred to a registered task, and that all mandatory ",(0,i.kt)("inlineCode",{parentName:"p"},"arguments")," were addressed in the configuration. Determining whether the task was registered was just a simple key check, however to validate the arguments to the run required some inspection - I needed to get all args for the run function and filter out 'self' and any asterisk args (","*","args, ","*","*","kwargs)"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-python"},'def get_mandatory_args(func) -> List[str]:\n\n    mandatory_args = []\n    for k, v in inspect.signature(func).parameters.items():\n        if (\n            k != "self"\n            and v.default is inspect.Parameter.empty\n            and not str(v).startswith("*")\n        ):\n            mandatory_args.append(k)\n\n    return mandatory_args\n')),(0,i.kt)("p",null,"And finally onto the actual execution bit. The main functionality required here is to validate that the config was defined correctly, then loop through all tasks and execute them - passing in any args."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-python"},'class Tasker:\n\n    def __init__(self, path: Path, env: Dict[str, str] = None) -> None:\n\n        self.logger = logging.getLogger(self.__class__.__name__)\n        self._tasks = []\n\n        with wrap_environment(env):\n            self._config = ConfigFactory.parse_file(path)\n\n\n    def __validate_config(self) -> bool:\n\n        error_count = 0\n\n        for task in self._config.get("tasks", []):\n            name, args = task["name"].lower(), task.get("args", {})\n\n            if registry.has(name):\n                for arg in get_mandatory_args(registry.get(name).run):\n                    if arg not in args:\n                        print(f"Missing arg \'{arg}\' for task \'{name}\'")\n                        error_count += 1\n            else:\n                print(f"Unknown tasks \'{name}\'")\n                error_count += 1\n\n            self._tasks.append((name, args))\n\n        return error_count == 0\n\n    def run(self) -> bool:\n\n        if self.__validate_config():\n\n            for name, args in self._tasks:\n                exe = registry.create(name)\n                self.logger.info(f"About to execute: \'{name}\'")\n                if not exe.run(**args):\n                    self.logger.error(f"Failed tasks \'{name}\'")\n                    return False\n\n            return True\n        return False\n')),(0,i.kt)("h2",{id:"putting-it-together---sample-tasks"},"Putting it together - sample tasks"),(0,i.kt)("p",null,"Below are two examples of how easy it is to configure the framework. We have a simple folder archiver that will tar/gz a directory based on 2 input parameters."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-python"},"class Archive(Task):\n\n    def __init__(self) -> None:\n        super().__init__()\n\n    def run(self, input_directory_path: str, target_file_path: str) -> bool:\n\n        self.logger.info(f\"Archiving '{input_directory_path}' to '{target_file_path}'\")\n\n        with tarfile.open(target_file_path, \"w:gz\") as tar:\n            tar.add(\n                input_directory_path,\n                arcname=os.path.basename(input_directory_path)\n            )\n        return True\n")),(0,i.kt)("p",null,"A more complex example would be the ability to execute shell scripts (or os functions) by passing in some optional variables and variables that can either be a string or list."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-python"},'class ShellScript(Task):\n\n    task_name = "shell_script"\n\n    def __init__(self) -> None:\n        super().__init__()\n\n    def run(\n        self,\n        script_path: str,\n        script_args: Union[str, List[str]] = None,\n        working_directory_path: str = None\n    ) -> bool:\n\n        cmd = [script_path]\n\n        if isinstance(script_args, str):\n            cmd.append(script_args)\n        else:\n            cmd += script_args\n\n        try:\n\n            result = subprocess.check_output(\n                cmd,\n                stderr=subprocess.STDOUT,\n                cwd=working_directory_path\n            ).decode("utf-8").splitlines()\n\n            for o in result:\n                self.logger.info(o)\n\n        except (subprocess.CalledProcessError, FileNotFoundError) as e:\n            self.logger.error(e)\n            return False\n\n        return True\n')),(0,i.kt)("p",null,"You can view the entire implementation ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/mpstella/simple_tasker"},"here")))}h.isMDXComponent=!0}}]);