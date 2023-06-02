"use strict";(self.webpackChunkfull_stack_chronicles=self.webpackChunkfull_stack_chronicles||[]).push([[96329],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>h});var a=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var s=a.createContext({}),u=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},c=function(e){var t=u(e.components);return a.createElement(s.Provider,{value:t},e.children)},d="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,r=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),d=u(n),m=i,h=d["".concat(s,".").concat(m)]||d[m]||p[m]||r;return n?a.createElement(h,o(o({ref:t},c),{},{components:n})):a.createElement(h,o({ref:t},c))}));function h(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=n.length,o=new Array(r);o[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[d]="string"==typeof e?e:i,o[1]=l;for(var u=2;u<r;u++)o[u]=n[u];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},19155:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>u,contentTitle:()=>l,default:()=>m,frontMatter:()=>o,metadata:()=>s,toc:()=>c});var a=n(87462),i=(n(67294),n(3905)),r=n(59943);const o={slug:"test-driven-infrastructure-and-test-automation-with-ansible-molecule-and-azure",title:"Test Driven Infrastructure and Test Automation with Ansible, Molecule and Azure",authors:["chrisottinger"],draft:!1,hide_table_of_contents:!0,image:"images/molecule-ansible-azure.png",tags:["ansible","azure","cloud","infrastructure-code","molecule","python","test-automation"],keywords:["ansible","azure","cloud","infrastructure-code","molecule","python","test-automation"]},l=void 0,s={permalink:"/test-driven-infrastructure-and-test-automation-with-ansible-molecule-and-azure",editUrl:"https://github.com/stackql/fullstackchronicles.io/edit/main/src/blog/2019-01-31-test-driven-infrastructure-and-test-automation-with-ansible-molecule-and-azure/index.md",source:"@site/blog/2019-01-31-test-driven-infrastructure-and-test-automation-with-ansible-molecule-and-azure/index.md",title:"Test Driven Infrastructure and Test Automation with Ansible, Molecule and Azure",description:"Molecule Ansible Azure",date:"2019-01-31T00:00:00.000Z",formattedDate:"January 31, 2019",tags:[{label:"ansible",permalink:"/tags/ansible"},{label:"azure",permalink:"/tags/azure"},{label:"cloud",permalink:"/tags/cloud"},{label:"infrastructure-code",permalink:"/tags/infrastructure-code"},{label:"molecule",permalink:"/tags/molecule"},{label:"python",permalink:"/tags/python"},{label:"test-automation",permalink:"/tags/test-automation"}],readingTime:4.465,hasTruncateMarker:!1,authors:[{name:"Chris Ottinger",title:"Senior Technologist",url:"https://github.com/datwiz",imageURL:"http://0.gravatar.com/avatar/f9af9c3fae755ac170c5798c53c5267d?s=80",key:"chrisottinger"}],frontMatter:{slug:"test-driven-infrastructure-and-test-automation-with-ansible-molecule-and-azure",title:"Test Driven Infrastructure and Test Automation with Ansible, Molecule and Azure",authors:["chrisottinger"],draft:!1,hide_table_of_contents:!0,image:"images/molecule-ansible-azure.png",tags:["ansible","azure","cloud","infrastructure-code","molecule","python","test-automation"],keywords:["ansible","azure","cloud","infrastructure-code","molecule","python","test-automation"]},prevItem:{title:"The Streaming Data Warehouse",permalink:"/the-streaming-data-warehouse-kappa-architecture-and-data-warehousing-re-imagined"},nextItem:{title:"S3 Object Notifications using Lambda and SES",permalink:"/s3-object-notifications-using-lambda-and-ses"}},u={authorsImageUrls:[void 0]},c=[{value:"Azure setup",id:"azure-setup",level:2},{value:"Setup a working environment",id:"setup-a-working-environment",level:2},{value:"Create a Docker image for Ansible+Molecule+Azure",id:"create-a-docker-image-for-ansiblemoleculeazure",level:2},{value:"Create a Docker workspace",id:"create-a-docker-workspace",level:2},{value:"Log into an Azure subcription",id:"log-into-an-azure-subcription",level:2},{value:"Create an empty Ansible role with Molecule",id:"create-an-empty-ansible-role-with-molecule",level:2},{value:"Spin up an Azure VM",id:"spin-up-an-azure-vm",level:2},{value:"Write a failing test",id:"write-a-failing-test",level:2},{value:"Execute the failing test",id:"execute-the-failing-test",level:2},{value:"Write a task to install <code>nginx</code>",id:"write-a-task-to-install-nginx",level:2},{value:"Apply the role",id:"apply-the-role",level:2},{value:"Execute the passing test",id:"execute-the-passing-test",level:2},{value:"Cleanup",id:"cleanup",level:2}],d={toc:c},p="wrapper";function m(e){let{components:t,...o}=e;return(0,i.kt)(p,(0,a.Z)({},d,o,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Molecule Ansible Azure",src:n(40644).Z,width:"524",height:"351"})),(0,i.kt)("p",null,"A few years back, before the rise of the hyper-scalers, I had my first infracode 'aha moment' with OpenStack. The second came with ",(0,i.kt)("a",{parentName:"p",href:"https://kitchen.ci/"},"Kitchen"),"."),(0,i.kt)("p",null,"I had already been using test driven development for application code and configuration automation for infrastructure but Kitchen brought the two together. Kitchen made it possible to write tests, spin up infrastructure, and then tear everything down again - the Red/Green/Refactor cycle for infrastructure. What made this even better was that it wasn't a facsimile of a target environment, it was the same - same VM's, same OS, same network."),(0,i.kt)("p",null,"Coming from a Chef background for configuration automation, Kitchen is a great fit to the Ruby ecosystem. Kitchen works with Ansible and Azure, but a Ruby environment and at least a smattering of Ruby coding skills are required."),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://molecule.readthedocs.io/"},"Molecule")," provides a similar red-green development cycle to Kitchen, but without the need to step outside of the familiar Python environment."),(0,i.kt)("p",null,"Out of the box, Molecule supports development of Ansible roles using either a Docker or Virtual Box infrastructure provider. Molecule also leverages the Ansible drivers for private and public cloud platforms."),(0,i.kt)("p",null,"Molecule can be configured to test an individual role or collections of roles in Ansible playbooks."),(0,i.kt)("p",null,"This tutorial demonstrates how to use Molecule with Azure to develop and test an individual Ansible role following the red/green/refactor infracode workflow, which can be generalised as:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Red"),"-"," write a failing infrastructure test"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Green")," - write the Ansible tasks needed to pass the test"),(0,i.kt)("li",{parentName:"ul"},"Refactor - repeat the process")),(0,i.kt)("p",null,"The steps required for this tutorial are as follows:"),(0,i.kt)("h2",{id:"azure-setup"},"Azure setup"),(0,i.kt)("p",null,"Ensure there is an existing Azure Resource Group that will be used for infracode development and testing. Within the resource group, ensure there is a single virtual network (vnet) with a single subnet. Ansible will use these for the default network setup."),(0,i.kt)("h2",{id:"setup-a-working-environment"},"Setup a working environment"),(0,i.kt)("p",null,"There are a number of options for setting up a Python environment for Ansible and Molecule, including Python virtualenv or a Docker container environment."),(0,i.kt)("h2",{id:"create-a-docker-image-for-ansiblemoleculeazure"},"Create a Docker image for Ansible+Molecule+Azure"),(0,i.kt)("p",null,"This tutorial uses a Docker container environment. A ",(0,i.kt)("inlineCode",{parentName:"p"},"Dockerfile")," for the image can be found in ",(0,i.kt)("inlineCode",{parentName:"p"},"./molecule-azure-image/Dockerfile"),". The image sets up a sane Python3 environment with Ansible, Ansible","[","azure","]",", and Molecule ",(0,i.kt)("inlineCode",{parentName:"p"},"pip")," modules installed."),(0,i.kt)(r.Z,{id:"4bd0c2ccae06dcaedffc2d91e594145f",mdxType:"Gist"}),(0,i.kt)("h2",{id:"create-a-docker-workspace"},"Create a Docker workspace"),(0,i.kt)("p",null,"Setup a working environment using the Docker image with Ansible, Molecule, and the ",(0,i.kt)("inlineCode",{parentName:"p"},"azure-cli")," installed."),(0,i.kt)(r.Z,{id:"f80ef20a720914cfd4e02cf9783fec06",mdxType:"Gist"}),(0,i.kt)("p",null,"This example assumes the following:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"a resource group already exists with access rights to create virtual machines; and"),(0,i.kt)("li",{parentName:"ul"},"the resource group contains a single vnet with a single subnet")),(0,i.kt)("h2",{id:"log-into-an-azure-subcription"},"Log into an Azure subcription"),(0,i.kt)("p",null,"Ansible supports a number of different methods for authenticating with Azure. This example uses the ",(0,i.kt)("inlineCode",{parentName:"p"},"azure-cli")," to login interactively."),(0,i.kt)(r.Z,{id:"fd8987e7f724de5393a411c24c74978b",mdxType:"Gist"}),(0,i.kt)("h2",{id:"create-an-empty-ansible-role-with-molecule"},"Create an empty Ansible role with Molecule"),(0,i.kt)("p",null,"Molecule provides an ",(0,i.kt)("inlineCode",{parentName:"p"},"init")," function with defaults for various providers. The molecule-azure-role-template creates an empty role with scaffolding for Azure."),(0,i.kt)(r.Z,{id:"f9b301d950a2254ab9af4806f2110544",mdxType:"Gist"}),(0,i.kt)("p",null,"Check that the environment is working by running the following code:"),(0,i.kt)(r.Z,{id:"d56c3cd1e25b51acc634e5adb8a0a256",mdxType:"Gist"}),(0,i.kt)("p",null,"The output should look be similar to\u2026"),(0,i.kt)(r.Z,{id:"a3f8aed99a7c910588a5651d8cabf0e8",mdxType:"Gist"}),(0,i.kt)("h2",{id:"spin-up-an-azure-vm"},"Spin up an Azure VM"),(0,i.kt)("p",null,"Spin up a fresh VM to be used for infra-code development."),(0,i.kt)(r.Z,{id:"14a621ee65f9c2db583ed5ef94274c71",mdxType:"Gist"}),(0,i.kt)("p",null,"Molecule provides a handy option for logging into the new VM:"),(0,i.kt)(r.Z,{id:"456aa8a8860bf785b382e18ede204d33",mdxType:"Gist"}),(0,i.kt)("p",null,"There is now a fresh Ubuntu 18.04 virtual machine ready for infra-code development. For this example, a basic Nginx server will be installed and verified."),(0,i.kt)("h2",{id:"write-a-failing-test"},"Write a failing test"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://testinfra.readthedocs.io/en/latest/"},"Testinfra")," provides a ",(0,i.kt)("inlineCode",{parentName:"p"},"pytest")," based framework for verifying server and infrastructure configuration. Molecule then manages the execution of those ",(0,i.kt)("inlineCode",{parentName:"p"},"testinfra")," tests. The Molecule template provides a starting point for crafting tests of your own. For this tutorial, installation of the ",(0,i.kt)("inlineCode",{parentName:"p"},"nginx")," service is verified. Modify the tests file using ",(0,i.kt)("inlineCode",{parentName:"p"},"vi molecule/default/tests/test_default.py")),(0,i.kt)(r.Z,{id:"5b22b20a192aecbecb8cc229cb5f2a69",mdxType:"Gist"}),(0,i.kt)("h2",{id:"execute-the-failing-test"},"Execute the failing test"),(0,i.kt)("p",null,"The Ansible task needed to install and enable ",(0,i.kt)("inlineCode",{parentName:"p"},"nginx")," has not yet been written, so the test should fail:"),(0,i.kt)(r.Z,{id:"38eb4bb776a41db7aa68f5962a97af62",mdxType:"Gist"}),(0,i.kt)("p",null,"If the initial sample tests in ",(0,i.kt)("inlineCode",{parentName:"p"},"test_default.py")," are kept, then 3 tests should fail and 2 tests should pass."),(0,i.kt)("h2",{id:"write-a-task-to-install-nginx"},"Write a task to install ",(0,i.kt)("inlineCode",{parentName:"h2"},"nginx")),(0,i.kt)("p",null,"Add a task to install the ",(0,i.kt)("inlineCode",{parentName:"p"},"nginx")," service using ",(0,i.kt)("inlineCode",{parentName:"p"},"vi tasks/main.yml"),":"),(0,i.kt)(r.Z,{id:"40d884f0c3a39fc4b3e921d451d60358",mdxType:"Gist"}),(0,i.kt)("h2",{id:"apply-the-role"},"Apply the role"),(0,i.kt)("p",null,"Apply the role to the instance created using Molecule."),(0,i.kt)(r.Z,{id:"5787aee41e2e3e9373f656677567ae41",mdxType:"Gist"}),(0,i.kt)("p",null,"The ",(0,i.kt)("inlineCode",{parentName:"p"},"nginx")," package should now be installed, both enabled and started, and listening on port 80. Note that the ",(0,i.kt)("inlineCode",{parentName:"p"},"nginx")," instance will not be accessible from the Internet due to the Azure network security rules. The ",(0,i.kt)("inlineCode",{parentName:"p"},"nginx")," instance can be confirmed manually by logging into the instance and using ",(0,i.kt)("inlineCode",{parentName:"p"},"curl")," to make a request to the ",(0,i.kt)("inlineCode",{parentName:"p"},"nginx")," service."),(0,i.kt)(r.Z,{id:"fb02518e7129bf28e27822c42221f706",mdxType:"Gist"}),(0,i.kt)("h2",{id:"execute-the-passing-test"},"Execute the passing test"),(0,i.kt)("p",null,"After applying the Ansible task to the instance, the ",(0,i.kt)("inlineCode",{parentName:"p"},"testinfra")," tests should now pass."),(0,i.kt)(r.Z,{id:"b6359519ca6068615f8f1473636f90ea",mdxType:"Gist"}),(0,i.kt)("h2",{id:"cleanup"},"Cleanup"),(0,i.kt)("p",null,"Now that the Ansible role works as defined in the test specification, the development environment can be cleaned up."),(0,i.kt)(r.Z,{id:"150971a02b3f4b2c65d551cb09a203d0",mdxType:"Gist"}),(0,i.kt)("p",null,"Molecule removes the Azure resources created to develop and test the configuration role. Note that deletion may take a few minutes."),(0,i.kt)("p",null,"Finally, once you are done, exit the container environment. If the container was started with the ",(0,i.kt)("inlineCode",{parentName:"p"},"--rm")," switch, the container will also be removed, leaving you with a clean workspace and newly minted Ansible role with automated test cases."),(0,i.kt)(r.Z,{id:"4fbb00b116b1a389b0343f6424b19a1b",mdxType:"Gist"}))}m.isMDXComponent=!0},59943:(e,t,n)=>{n.d(t,{Z:()=>r});var a=n(67294);function i(e,t){return i=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e},i(e,t)}const r=function(e){var t,n;function r(){return e.apply(this,arguments)||this}n=e,(t=r).prototype=Object.create(n.prototype),t.prototype.constructor=t,i(t,n);var o=r.prototype;return o.componentDidMount=function(){this._updateIframeContent()},o.componentDidUpdate=function(e,t){this._updateIframeContent()},o._defineUrl=function(){var e=this.props,t=e.id,n=e.file;return"https://gist.github.com/"+t+".js"+(n?"?file="+n:"")},o._updateIframeContent=function(){var e=this.props,t=e.id,n=e.file,a=this.iframeNode,i=a.document;a.contentDocument?i=a.contentDocument:a.contentWindow&&(i=a.contentWindow.document);var r='<html><head><base target="_parent"><style>*{font-size:12px;}</style></head><body '+("onload=\"parent.document.getElementById('"+(n?"gist-"+t+"-"+n:"gist-"+t)+"').style.height=document.body.scrollHeight + 'px'\"")+">"+('<script type="text/javascript" src="'+this._defineUrl()+'"><\/script>')+"</body></html>";i.open(),i.writeln(r),i.close()},o.render=function(){var e=this,t=this.props,n=t.id,i=t.file;return a.createElement("iframe",{ref:function(t){e.iframeNode=t},width:"100%",frameBorder:0,id:i?"gist-"+n+"-"+i:"gist-"+n})},r}(a.PureComponent)},40644:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/molecule-ansible-azure-2437124ec0927c07c287635f016a6265.png"}}]);