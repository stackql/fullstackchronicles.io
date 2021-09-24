"use strict";(self.webpackChunkcloudy_with_a_chance_of_big_data=self.webpackChunkcloudy_with_a_chance_of_big_data||[]).push([[5418],{3905:function(e,n,t){t.d(n,{Zo:function(){return p},kt:function(){return h}});var i=t(67294);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function r(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);n&&(i=i.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,i)}return t}function a(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?r(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):r(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,i,o=function(e,n){if(null==e)return{};var t,i,o={},r=Object.keys(e);for(i=0;i<r.length;i++)t=r[i],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(i=0;i<r.length;i++)t=r[i],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var c=i.createContext({}),s=function(e){var n=i.useContext(c),t=n;return e&&(t="function"==typeof e?e(n):a(a({},n),e)),t},p=function(e){var n=s(e.components);return i.createElement(c.Provider,{value:n},e.children)},u={inlineCode:"code",wrapper:function(e){var n=e.children;return i.createElement(i.Fragment,{},n)}},m=i.forwardRef((function(e,n){var t=e.components,o=e.mdxType,r=e.originalType,c=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),m=s(t),h=o,d=m["".concat(c,".").concat(h)]||m[h]||u[h]||r;return t?i.createElement(d,a(a({ref:n},p),{},{components:t})):i.createElement(d,a({ref:n},p))}));function h(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var r=t.length,a=new Array(r);a[0]=m;var l={};for(var c in n)hasOwnProperty.call(n,c)&&(l[c]=n[c]);l.originalType=e,l.mdxType="string"==typeof e?e:o,a[1]=l;for(var s=2;s<r;s++)a[s]=t[s];return i.createElement.apply(null,a)}return i.createElement.apply(null,t)}m.displayName="MDXCreateElement"},43775:function(e,n,t){t.r(n),t.d(n,{frontMatter:function(){return l},contentTitle:function(){return c},metadata:function(){return s},assets:function(){return p},toc:function(){return u},default:function(){return h}});var i=t(87462),o=t(63366),r=(t(67294),t(3905)),a=["components"],l={slug:"using-jsonnet-to-configure-multiple-environments",title:"Using Jsonnet to Configure Multiple Environments",authors:["markstella"],draft:!1,hide_table_of_contents:!0,tags:["ci-cd","configuration","envconfig","environments","hocon","json","jsonnet"],keywords:["ci-cd","configuration","envconfig","environments","hocon","json","jsonnet"]},c=void 0,s={permalink:"/cloudywithachanceofbigdata.github.io/using-jsonnet-to-configure-multiple-environments",editUrl:"https://github.com/cloudywithachanceofbigdata/cloudywithachanceofbigdata.github.io/tree/main/src/blog/blog/2021-06-24-using-jsonnet-to-configure-multiple-environments/index.md",source:"@site/blog/2021-06-24-using-jsonnet-to-configure-multiple-environments/index.md",title:"Using Jsonnet to Configure Multiple Environments",description:"Everytime I start a new project I try and optimise how the application can work across multiple envronments. For those who don't have the luxury of developing everything in docker containers or isolated spaces, you will know my pain. How do I write code that can run on my local dev environment, migrate to the shared test and ci environment and ultimately still work in production.",date:"2021-06-24T00:00:00.000Z",formattedDate:"June 24, 2021",tags:[{label:"ci-cd",permalink:"/cloudywithachanceofbigdata.github.io/tags/ci-cd"},{label:"configuration",permalink:"/cloudywithachanceofbigdata.github.io/tags/configuration"},{label:"envconfig",permalink:"/cloudywithachanceofbigdata.github.io/tags/envconfig"},{label:"environments",permalink:"/cloudywithachanceofbigdata.github.io/tags/environments"},{label:"hocon",permalink:"/cloudywithachanceofbigdata.github.io/tags/hocon"},{label:"json",permalink:"/cloudywithachanceofbigdata.github.io/tags/json"},{label:"jsonnet",permalink:"/cloudywithachanceofbigdata.github.io/tags/jsonnet"}],readingTime:2.975,truncated:!1,authors:[{name:"Mark Stella",title:"Senior Cloud Engineer",url:"https://github.com/mpstella",imageURL:"http://1.gravatar.com/avatar/9a7465656212285f24f64326cd38d6c9?s=80",key:"markstella"}],nextItem:{title:"Use BigQuery to trigger Cloud Run",permalink:"/cloudywithachanceofbigdata.github.io/use-bigquery-to-trigger-cloud-run"}},p={authorsImageUrls:[void 0]},u=[],m={toc:u};function h(e){var n=e.components,t=(0,o.Z)(e,a);return(0,r.kt)("wrapper",(0,i.Z)({},m,t,{components:n,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"Everytime I start a new project I try and optimise how the application can work across multiple envronments. For those who don't have the luxury of developing everything in docker containers or isolated spaces, you will know my pain. How do I write code that can run on my local ",(0,r.kt)("inlineCode",{parentName:"p"},"dev")," environment, migrate to the shared ",(0,r.kt)("inlineCode",{parentName:"p"},"test")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"ci")," environment and ultimately still work in ",(0,r.kt)("inlineCode",{parentName:"p"},"production"),"."),(0,r.kt)("p",null,"In the past I tried exotic options like dynamically generating ",(0,r.kt)("inlineCode",{parentName:"p"},"YAML")," or ",(0,r.kt)("inlineCode",{parentName:"p"},"JSON")," using Jinja. I then graduated to ",(0,r.kt)("inlineCode",{parentName:"p"},"HOCON")," which made my life so much easier. This was until I stumbled across ",(0,r.kt)("a",{parentName:"p",href:"https://jsonnet.org/"},"Jsonnet"),". For those who have not seen this in action, think JSON meets Jinja meets HOCON (a Frankenstein creation that I have actually built in the past)"),(0,r.kt)("p",null,"To get a feel for how it looks, below is a contrived example where I require 3 environments (dev, test and production) that have different paths, databases and vault configuration."),(0,r.kt)("p",null,"Essentially, when this config is run through the Jsonnet templating engine, it will expect a variable '",(0,r.kt)("inlineCode",{parentName:"p"},"ENV"),"' to ultimately refine the ",(0,r.kt)("inlineCode",{parentName:"p"},"environment")," entry to the one we specifically want to use."),(0,r.kt)("p",null,"A helpful thing I like to do with my programs is give users a bit of information as to what environments can be used. For me, running a cli that requires args should be as informative as possible - so listing out all the environments is mandatory. I achieve this with a little trickery and a lot of help from the ",(0,r.kt)("a",{parentName:"p",href:"https://click.palletsprojects.com/"},"click")," package!"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-jsonnet"},'local exe = "application.exe";\n\nlocal Environment(prefix) = {\n  root: "/usr/" + prefix + "/app",\n  path: self.root + "/bin/" + exe,\n  database: std.asciiUpper(prefix) + "_DB",\n  tmp_dir: "/tmp/" + prefix\n};\n\nlocal Vault = {\n  local uri = "http://127.0.0.1:8200/v1/secret/app",\n  _: {},\n  dev: {\n      secrets_uri: uri,\n      approle: "local"\n  },\n  tst: {\n      secrets_uri: uri,\n      approle: "local"\n  },\n  prd: {\n      secrets_uri: "https://vsrvr:8200/v1/secret/app",\n      approle: "sa_user"\n  }\n};\n\n{\n\n  environments: {\n    _: {},\n    dev: Environment("dev") + Vault[std.extVar("ENV")],\n    tst: Environment("tst") + Vault[std.extVar("ENV")],\n    prd: Environment("prd") + Vault[std.extVar("ENV")]\n  },\n\n  environment: $["environments"][std.extVar("ENV")],\n}\n')),(0,r.kt)("p",null,"The trick I perform is to have a placeholder entry '",(0,r.kt)("inlineCode",{parentName:"p"},"_"),"' that I use to initially render the template. I then use the generated JSON file and get all the environment keys so I can feed that directly into click."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},"from typing import Any, Dict\nimport click\nimport json\nimport _jsonnet\nfrom pprint import pprint\n\nENV_JSONNET = 'environment.jsonnet'\nENV_PFX_PLACEHOLDER = '_'\n\ndef parse_environment(prefix: str) -> Dict[str, Any]:\n    _json_str = _jsonnet.evaluate_file(ENV_JSONNET, ext_vars={'ENV': prefix})\n    return json.loads(_json_str)\n\n_config = parse_environment(prefix=ENV_PFX_PLACEHOLDER)\n\n_env_prefixes = [k for k in _config['environments'].keys() if k != ENV_PFX_PLACEHOLDER]\n\n\n@click.command(name=\"EnvMgr\")\n@click.option(\n    \"-e\",\n    \"--environment\",\n    required=True,\n    type=click.Choice(_env_prefixes, case_sensitive=False),\n    help=\"Which environment this is executing on\",\n)\ndef cli(environment: str) -> None:\n    config = parse_environment(environment)\n    pprint(config['environment'])\n\n\nif __name__ == \"__main__\":\n    cli()\n")),(0,r.kt)("p",null,"This now allows me to execute the application with both list checking (has the user selected an allowed environment?) and the autogenerated help that click provides."),(0,r.kt)("p",null,"Below shows running the cli with no arguments:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"$> python cli.py\n\nUsage: cli.py [OPTIONS]\nTry 'cli.py --help' for help.\n\nError: Missing option '-e' / '--environment'. Choose from:\n        dev,\n        prd,\n        tst\n")),(0,r.kt)("p",null,"Executing the application with a valid environment:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"$> python cli.py -e dev\n\n{'approle': 'local',\n 'database': 'DEV_DB',\n 'path': '/usr/dev/app/bin/application.exe',\n 'root': '/usr/dev/app',\n 'secrets_uri': 'http://127.0.0.1:8200/v1/secret/app',\n 'tmp_dir': '/tmp/dev'}\n")),(0,r.kt)("p",null,"Executing the application with an invalid environment:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"$> python cli.py -e prd3\n\nUsage: cli.py [OPTIONS]\nTry 'cli.py --help' for help.\n\nError: Invalid value for '-e' / '--environment': 'prd3' is not one of 'dev', 'prd', 'tst'.\n")),(0,r.kt)("p",null,"This is only the tip of what Jsonnet can provide, I am continually learning more about the templating engine and the tool."))}h.isMDXComponent=!0}}]);