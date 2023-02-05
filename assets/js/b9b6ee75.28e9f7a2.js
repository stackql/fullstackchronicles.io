"use strict";(self.webpackChunkfull_stack_chronicles=self.webpackChunkfull_stack_chronicles||[]).push([[51594],{43055:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>u,contentTitle:()=>s,default:()=>g,frontMatter:()=>l,metadata:()=>c,toc:()=>p});var a=n(83117),r=(n(67294),n(3905)),o=n(25487),i=n(86023);const l={slug:"scaling-up-prefect-with-gitstorage",title:"Scaling up Prefect with GitStorage",authors:["chrisottinger"],draft:!1,image:"/img/blog/scaling-up-prefect-with-gitstorage-featured-image.png",tags:["prefect","gitlab","docker","etl"],keywords:["prefect","gitlab","docker","etl"]},s=void 0,c={permalink:"/scaling-up-prefect-with-gitstorage",editUrl:"https://github.com/stackql/fullstackchronicles.io/edit/main/src/blog/2022-02-28-scaling-up-prefect-with-gitstorage/index.md",source:"@site/blog/2022-02-28-scaling-up-prefect-with-gitstorage/index.md",title:"Scaling up Prefect with GitStorage",description:"Prefect.io is a python based Data Engineering toolbox for building and",date:"2022-02-28T00:00:00.000Z",formattedDate:"February 28, 2022",tags:[{label:"prefect",permalink:"/tags/prefect"},{label:"gitlab",permalink:"/tags/gitlab"},{label:"docker",permalink:"/tags/docker"},{label:"etl",permalink:"/tags/etl"}],readingTime:6.12,hasTruncateMarker:!1,authors:[{name:"Chris Ottinger",title:"Senior Technologist",url:"https://github.com/datwiz",imageURL:"http://0.gravatar.com/avatar/f9af9c3fae755ac170c5798c53c5267d?s=80",key:"chrisottinger"}],frontMatter:{slug:"scaling-up-prefect-with-gitstorage",title:"Scaling up Prefect with GitStorage",authors:["chrisottinger"],draft:!1,image:"/img/blog/scaling-up-prefect-with-gitstorage-featured-image.png",tags:["prefect","gitlab","docker","etl"],keywords:["prefect","gitlab","docker","etl"]},prevItem:{title:"Simple CLI Application to Login to Okta using PKCE",permalink:"/simple-cli-pkce-auth-using-okta"},nextItem:{title:"Implementing a Serverless SFTP Gateway using the AWS Transfer Family",permalink:"/implementing-a-serverless-sftp-gateway-using-the-aws-transfer-family"}},u={authorsImageUrls:[void 0]},p=[{value:"Out of the box - Prefect DockerStorage",id:"out-of-the-box---prefect-dockerstorage",level:2},{value:"Prefect Git Storage",id:"prefect-git-storage",level:2},{value:"Pushing the flow code",id:"pushing-the-flow-code",level:3},{value:"Registering the flow",id:"registering-the-flow",level:3},{value:"Next Steps - Run Config",id:"next-steps---run-config",level:2}],f={toc:p};function g(e){let{components:t,...l}=e;return(0,r.kt)("wrapper",(0,a.Z)({},f,l,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://prefect.io"},"Prefect.io")," is a python based Data Engineering toolbox for building and\noperating Data Pipelines.  Out of the box, Prefect provides an initial workflow for managing data\npipelines that results in a container image per data pipeline job."),(0,r.kt)("p",null,"The one-to-one relationship between data pipeline jobs and container images enables data engineers to\ncraft pipelines that are loosely coupled and don't require a shared runtime environment configuration.\nHowever, as the number of data pipeline jobs grow the default container per job approach starts to\nintroduce workflow bottlenecks and lifecycle management overheads.  For example, in order\nto update software components used by flows, such as upgrading the version of Prefect, all the data\npipeline job images have to be rebuilt and redeployed.  Additionally the container image per job workflow\nintroduces a wait time for data engineers to re-build data pipeline container images and test flows\ncentrally on Prefect Server or Prefect Cloud environment."),(0,r.kt)("p",null,"Fortunately, Prefect comes to its own rescue with the ability to open up the box, exposing the flexibility\nin the underlying framework."),(0,r.kt)("h2",{id:"out-of-the-box---prefect-dockerstorage"},"Out of the box - Prefect DockerStorage"),(0,r.kt)("p",null,"Out of the box, Prefect provides a simple workflow for defining and deploying data pipelines as container images.\nAfter getting a first data pipeline running in a local environment, the attention turns to scaling up development\nand deploying flows into a managed environment, using either the Prefect Cloud service or a Prefect Server."),(0,r.kt)("p",null,"Combining Prefect Cloud or Prefect Server with Kubernetes provides a flexible and scalable platform\nsolution for moving data pipelines into production.  There are a number of options for packaging\ndata pipeline flow code for execution on kubernetes clusters.  The Docker Storage option provides\nthe workflow for bundling the data pipeline job code into container images, enabling a common\ncontrolled execution environment and well understood distribution mechanism.  The data pipeline runs as\na pod using the flow container image."),(0,r.kt)("p",null,"Prefect Docker Storage workflow steps for building and deploying data pipeline flows include:"),(0,r.kt)(o.Z,{defaultValue:"steps",values:[{label:"Steps",value:"steps"},{label:"PlantUML",value:"plantuml"}],mdxType:"Tabs"},(0,r.kt)(i.Z,{value:"steps",mdxType:"TabItem"},(0,r.kt)("p",null,(0,r.kt)("a",{target:"_blank",href:n(43824).Z},(0,r.kt)("img",{alt:"Workflow Steps",src:n(85544).Z,width:"253",height:"435"}))," ")),(0,r.kt)(i.Z,{value:"plantuml",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},'@startuml "docker-storage-workflow"\n(*) --\x3e "package flow code\ninto a container image" \n--\x3e "register Prefect flow\nusing image reference"\n--\x3e "push image to container registry"\n--\x3e "run flow in Prefect Server or Cloud\n(new image pulled from registry)"\n--\x3e (*)\n@enduml\n')))),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"packaging a flow (python code) as a serialised/pickled object into a container image"),(0,r.kt)("li",{parentName:"ul"},"registering the flow using the container image name"),(0,r.kt)("li",{parentName:"ul"},"pushing the container image to a container repository accessible from the kubernetes cluster"),(0,r.kt)("li",{parentName:"ul"},"running the flow by running an instance of the named container image as a kubernetes pod")),(0,r.kt)("p",null,"This is relatively simple immutable workflow.  Each data pipeline flow version is effectively a unique and\nself contained 'point-in-time' container image.  This initial workflow can also be extended to package\nmultiple related flows into a single container image, reducing the number of resulting container images.\nBut, as the number of data pipeline jobs grow, there issues of container image explosion and data engineering\nproductivity remain."),(0,r.kt)("p",null,"Using Prefect GitStorage for flows addresses both container image proliferation as well as development\nbottlenecks."),(0,r.kt)("h2",{id:"prefect-git-storage"},"Prefect Git Storage"),(0,r.kt)("p",null,"Prefect ",(0,r.kt)("a",{parentName:"p",href:"https://docs.prefect.io/orchestration/flow_config/storage.html#git"},"Git Storage")," provides a workflow for developing and deploying data pipelines directly from git repositories,\nsuch as Gitlab or Github.  The data pipeline code (python) is pulled from the git repository on each invocation\nwith the ability to reference git branches and git tags.  This approach enables:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"reducing the number of container images to the number of different runtime configurations to be supported."),(0,r.kt)("li",{parentName:"ul"},"improving the data engineering development cycle time by removing the need to build and push container images\non each code change."),(0,r.kt)("li",{parentName:"ul"},"when combined with kubernetes Prefect Run Configs and Job templates, enables selection of specific runtime environment images")),(0,r.kt)("p",null,"Note that the GitStorage option does required access from the runtime kubernetes cluster to the central git storage\nservice, e.g. gitlab, github, etc."),(0,r.kt)("p",null,"Prefect Git Storage workflow steps for 'building' and deploying data pipeline flows include:"),(0,r.kt)(o.Z,{defaultValue:"steps",values:[{label:"Steps",value:"steps"},{label:"PlantUML",value:"plantuml"}],mdxType:"Tabs"},(0,r.kt)(i.Z,{value:"steps",mdxType:"TabItem"},(0,r.kt)("p",null,(0,r.kt)("a",{target:"_blank",href:n(41113).Z},(0,r.kt)("img",{alt:"Workflow Steps",src:n(51159).Z,width:"253",height:"361"}))," ")),(0,r.kt)(i.Z,{value:"plantuml",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},'@startuml "git-storage-workflow"\n(*) --\x3e "push commited flow code\nchanges to git service"\n--\x3e "register PrefectFlow\nusing branch or tag reference"\n--\x3e "run flow in Prefect Server or Cloud\n(code pulled from git service)"\n--\x3e (*)\n@enduml\n')))),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"pushing the committed code to the central git service"),(0,r.kt)("li",{parentName:"ul"},"registering the flow using the git repository url and branch or tag reference"),(0,r.kt)("li",{parentName:"ul"},"running the flow by pulling the reference code from the git service in a kubernetes pod")),(0,r.kt)("p",null,"The container image build and push steps are removed from the developer feedback cycle time.\nDepending on network bandwidth and image build times, this can save remove 5 to 10 minutes from each deployment iteration."),(0,r.kt)("h3",{id:"pushing-the-flow-code"},"Pushing the flow code"),(0,r.kt)("p",null,"Once a set of changes to the data pipeline code has been committed, push to the central git service."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"$ git commit\n$ git push\n")),(0,r.kt)("h3",{id:"registering-the-flow"},"Registering the flow"),(0,r.kt)("p",null,"The flow can be registered with Prefect using either a branch (HEAD or latest) or tag reference.  Assuming\na workflow with feature branches:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"feature branches: register the flow code using the feature branch.  This enables the latest version (HEAD)\nof the pushed flow code to be used for execution.  It also enables skipping re-registration of the flow on new\nchanges as the HEAD of the branch is pulled on each flow run"),(0,r.kt)("li",{parentName:"ul"},"main line branches: register pinned versions of the flow using git tags.  This enables the use of a\nspecific version of the flow code to be pulled on each flow run, regardless of future changes.")),(0,r.kt)("p",null,"Determining the which reference to use:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},'# using gitpython module to work with repo info\nfrom git import Repo\n\n# presidence for identifing where to find the flow code\n# BUILD_TAG => GIT_BRANCH => active_branch\nbuild_tag = branch_name = None\nbuild_tag = os.getenv("BUILD_TAG", "")\nif build_tag == "":\n  branch_name = os.getenv("GIT_BRANCH", "")\n  if branch_name == "":\n    branch_name = str(Repo(os.getcwd()).active_branch)\n')),(0,r.kt)("p",null,"Configuring Prefect Git storage:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},"from prefect.storage import Git\nimport my_flows.hello_flow as flow # assuming flow is defined in ./my_flows/flow.py\n\n# example using Gitlab\n# either branch_name or tag must be empty string \"\" or None\nstorage = Git(\n    repo_host=git_hostname,\n    repo=repo_path,\n    flow_path=f\"{flow.__name__.replace('.','/')}.py\",\n    flow_name=flow.flow.name,\n    branch_name=branch_name,\n    tag=build_tag,\n    git_token_secret_name=git_token_secret_name,\n    git_token_username=git_token_username\n)\n\nstorage.add_flow(flow.flow)\nflow.flow.storage = storage\n\nflow.flow.regsiter(build=False)\n")),(0,r.kt)("p",null,"Once registered, the flow storage details can be viewed in the Prefect Server or Prefect Cloud UI.  In this example, Prefect will use the ",(0,r.kt)("inlineCode",{parentName:"p"},"HEAD")," version of the ",(0,r.kt)("inlineCode",{parentName:"p"},"main")," branch on each flow run."),(0,r.kt)("p",null,(0,r.kt)("a",{target:"_blank",href:n(68092).Z},(0,r.kt)("img",{alt:"hello flow storage details",src:n(42160).Z,width:"678",height:"339"}))),(0,r.kt)("h2",{id:"next-steps---run-config"},"Next Steps - Run Config"),(0,r.kt)("p",null,"With Prefect Git Storage the runtime configuration and environment management is decoupled from the\ndata pipeline development workflow.  Unlike with Docker Storage, with Git Storage, the runtime\nexecution environment and data pipeline development workflows are defined and managed separately.\nAs an added benefit, the developer feedback loop cycle time is also reduced."),(0,r.kt)("p",null,"With the data engineering workflow addressed, the next step in scaling out the Prefect solution\nturns to configuration and lifecycle management of the runtime environment for data pipelines.\nPrefect Run Configs and Job templates provide the tools retaining the flexibility on container\nimage based runtime environments with improved manageability."))}g.isMDXComponent=!0},86023:(e,t,n)=>{n.d(t,{Z:()=>i});var a=n(67294),r=n(34334);const o="tabItem_Ymn6";function i(e){let{children:t,hidden:n,className:i}=e;return a.createElement("div",{role:"tabpanel",className:(0,r.Z)(o,i),hidden:n},t)}},25487:(e,t,n)=>{n.d(t,{Z:()=>x});var a=n(83117),r=n(67294),o=n(34334),i=n(76775),l=n(61994),s=n(74879),c=n(9954);function u(e){return function(e){return r.Children.map(e,(e=>{if((0,r.isValidElement)(e)&&"value"in e.props)return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))}(e).map((e=>{let{props:{value:t,label:n,attributes:a,default:r}}=e;return{value:t,label:n,attributes:a,default:r}}))}function p(e){const{values:t,children:n}=e;return(0,r.useMemo)((()=>{const e=t??u(n);return function(e){const t=(0,s.l)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,n])}function f(e){let{value:t,tabValues:n}=e;return n.some((e=>e.value===t))}function g(e){let{queryString:t=!1,groupId:n}=e;const a=(0,i.k6)(),o=function(e){let{queryString:t=!1,groupId:n}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!n)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return n??null}({queryString:t,groupId:n});return[(0,l._X)(o),(0,r.useCallback)((e=>{if(!o)return;const t=new URLSearchParams(a.location.search);t.set(o,e),a.replace({...a.location,search:t.toString()})}),[o,a])]}function d(e){const{defaultValue:t,queryString:n=!1,groupId:a}=e,o=p(e),[i,l]=(0,r.useState)((()=>function(e){let{defaultValue:t,tabValues:n}=e;if(0===n.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!f({value:t,tabValues:n}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${n.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const a=n.find((e=>e.default))??n[0];if(!a)throw new Error("Unexpected error: 0 tabValues");return a.value}({defaultValue:t,tabValues:o}))),[s,u]=g({queryString:n,groupId:a}),[d,m]=function(e){let{groupId:t}=e;const n=function(e){return e?`docusaurus.tab.${e}`:null}(t),[a,o]=(0,c.Nk)(n);return[a,(0,r.useCallback)((e=>{n&&o.set(e)}),[n,o])]}({groupId:a}),h=(()=>{const e=s??d;return f({value:e,tabValues:o})?e:null})();(0,r.useLayoutEffect)((()=>{h&&l(h)}),[h]);return{selectedValue:i,selectValue:(0,r.useCallback)((e=>{if(!f({value:e,tabValues:o}))throw new Error(`Can't select invalid tab value=${e}`);l(e),u(e),m(e)}),[u,m,o]),tabValues:o}}var m=n(51085),h=n(35074);const b="tabList__CuJ",w="tabItem_LNqP";function k(e){let{className:t,block:n,selectedValue:i,selectValue:l,tabValues:s}=e;const c=[],{blockElementScrollPositionUntilNextRender:u}=(0,m.o5)(),p=e=>{const t=e.currentTarget,n=c.indexOf(t),a=s[n].value;a!==i&&(u(t),l(a))},f=e=>{var t;let n=null;switch(e.key){case"Enter":p(e);break;case"ArrowRight":{const t=c.indexOf(e.currentTarget)+1;n=c[t]??c[0];break}case"ArrowLeft":{const t=c.indexOf(e.currentTarget)-1;n=c[t]??c[c.length-1];break}}null==(t=n)||t.focus()};return r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,o.Z)("tabs",{"tabs--block":n},t)},s.map((e=>{let{value:t,label:n,attributes:l}=e;return r.createElement("li",(0,a.Z)({role:"tab",tabIndex:i===t?0:-1,"aria-selected":i===t,key:t,ref:e=>c.push(e),onKeyDown:f,onClick:p},l,{className:(0,o.Z)("tabs__item",w,null==l?void 0:l.className,{"tabs__item--active":i===t})}),n??t)})))}function v(e){let{lazy:t,children:n,selectedValue:a}=e;if(n=Array.isArray(n)?n:[n],t){const e=n.find((e=>e.props.value===a));return e?(0,r.cloneElement)(e,{className:"margin-top--md"}):null}return r.createElement("div",{className:"margin-top--md"},n.map(((e,t)=>(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==a}))))}function y(e){const t=d(e);return r.createElement("div",{className:(0,o.Z)("tabs-container",b)},r.createElement(k,(0,a.Z)({},e,t)),r.createElement(v,(0,a.Z)({},e,t)))}function x(e){const t=(0,h.Z)();return r.createElement(y,(0,a.Z)({key:String(t)},e))}},3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>g});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),c=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=c(e.components);return a.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},f=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),f=c(n),g=r,d=f["".concat(s,".").concat(g)]||f[g]||p[g]||o;return n?a.createElement(d,i(i({ref:t},u),{},{components:n})):a.createElement(d,i({ref:t},u))}));function g(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=f;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:r,i[1]=l;for(var c=2;c<o;c++)i[c]=n[c];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}f.displayName="MDXCreateElement"},68092:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/files/flow-storage-details-e2be96914a590e405cacb47ffc0eceaa.png"},43824:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/files/image1-3eb8a74efcfb6b3a329f69dd9b89ca34.png"},41113:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/files/image2-d57463bea4147ef77047e87d3b7a49a7.png"},42160:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/flow-storage-details-e2be96914a590e405cacb47ffc0eceaa.png"},85544:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/image1-3eb8a74efcfb6b3a329f69dd9b89ca34.png"},51159:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/image2-d57463bea4147ef77047e87d3b7a49a7.png"}}]);