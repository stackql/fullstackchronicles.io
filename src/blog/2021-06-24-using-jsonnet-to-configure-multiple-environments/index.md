---
slug: "using-jsonnet-to-configure-multiple-environments"
title: "Using Jsonnet to Configure Multiple Environments"
authors:	
  - markstella
draft: false
hide_table_of_contents: true
tags: 
  - "ci-cd"
  - "configuration"
  - "envconfig"
  - "environments"
  - "hocon"
  - "json"
  - "jsonnet"
keywords:	
  - "ci-cd"
  - "configuration"
  - "envconfig"
  - "environments"
  - "hocon"
  - "json"
  - "jsonnet"
---

Everytime I start a new project I try and optimise how the application can work across multiple envronments. For those who don't have the luxury of developing everything in docker containers or isolated spaces, you will know my pain. How do I write code that can run on my local `dev` environment, migrate to the shared `test` and `ci` environment and ultimately still work in `production`.

In the past I tried exotic options like dynamically generating `YAML` or `JSON` using Jinja. I then graduated to `HOCON` which made my life so much easier. This was until I stumbled across [Jsonnet](https://jsonnet.org/). For those who have not seen this in action, think JSON meets Jinja meets HOCON (a Frankenstein creation that I have actually built in the past)

To get a feel for how it looks, below is a contrived example where I require 3 environments (dev, test and production) that have different paths, databases and vault configuration.

Essentially, when this config is run through the Jsonnet templating engine, it will expect a variable '`ENV`' to ultimately refine the `environment` entry to the one we specifically want to use.

A helpful thing I like to do with my programs is give users a bit of information as to what environments can be used. For me, running a cli that requires args should be as informative as possible - so listing out all the environments is mandatory. I achieve this with a little trickery and a lot of help from the [click](https://click.palletsprojects.com/) package!

```jsonnet
local exe = "application.exe";

local Environment(prefix) = {
  root: "/usr/" + prefix + "/app",
  path: self.root + "/bin/" + exe,
  database: std.asciiUpper(prefix) + "_DB",
  tmp_dir: "/tmp/" + prefix
};

local Vault = {
  local uri = "http://127.0.0.1:8200/v1/secret/app",
  _: {},
  dev: {
      secrets_uri: uri,
      approle: "local"
  },
  tst: {
      secrets_uri: uri,
      approle: "local"
  },
  prd: {
      secrets_uri: "https://vsrvr:8200/v1/secret/app",
      approle: "sa_user"
  }
};

{

  environments: {
    _: {},
    dev: Environment("dev") + Vault[std.extVar("ENV")],
    tst: Environment("tst") + Vault[std.extVar("ENV")],
    prd: Environment("prd") + Vault[std.extVar("ENV")]
  },

  environment: $["environments"][std.extVar("ENV")],
}
```

The trick I perform is to have a placeholder entry '`_`' that I use to initially render the template. I then use the generated JSON file and get all the environment keys so I can feed that directly into click.

```python
from typing import Any, Dict
import click
import json
import _jsonnet
from pprint import pprint

ENV_JSONNET = 'environment.jsonnet'
ENV_PFX_PLACEHOLDER = '_'

def parse_environment(prefix: str) -> Dict[str, Any]:
    _json_str = _jsonnet.evaluate_file(ENV_JSONNET, ext_vars={'ENV': prefix})
    return json.loads(_json_str)

_config = parse_environment(prefix=ENV_PFX_PLACEHOLDER)

_env_prefixes = [k for k in _config['environments'].keys() if k != ENV_PFX_PLACEHOLDER]


@click.command(name="EnvMgr")
@click.option(
    "-e",
    "--environment",
    required=True,
    type=click.Choice(_env_prefixes, case_sensitive=False),
    help="Which environment this is executing on",
)
def cli(environment: str) -> None:
    config = parse_environment(environment)
    pprint(config['environment'])


if __name__ == "__main__":
    cli()
```

This now allows me to execute the application with both list checking (has the user selected an allowed environment?) and the autogenerated help that click provides.

Below shows running the cli with no arguments:

```shell
$> python cli.py

Usage: cli.py [OPTIONS]
Try 'cli.py --help' for help.

Error: Missing option '-e' / '--environment'. Choose from:
        dev,
        prd,
        tst
```

Executing the application with a valid environment:

```shell
$> python cli.py -e dev

{'approle': 'local',
 'database': 'DEV_DB',
 'path': '/usr/dev/app/bin/application.exe',
 'root': '/usr/dev/app',
 'secrets_uri': 'http://127.0.0.1:8200/v1/secret/app',
 'tmp_dir': '/tmp/dev'}
```

Executing the application with an invalid environment:

```shell
$> python cli.py -e prd3

Usage: cli.py [OPTIONS]
Try 'cli.py --help' for help.

Error: Invalid value for '-e' / '--environment': 'prd3' is not one of 'dev', 'prd', 'tst'.
```

This is only the tip of what Jsonnet can provide, I am continually learning more about the templating engine and the tool.