"use strict";(self.webpackChunkcloudy_with_a_chance_of_big_data=self.webpackChunkcloudy_with_a_chance_of_big_data||[]).push([[6285],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return f}});var a=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var s=a.createContext({}),u=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},c=function(e){var t=u(e.components);return a.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,o=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),d=u(n),f=i,m=d["".concat(s,".").concat(f)]||d[f]||p[f]||o;return n?a.createElement(m,r(r({ref:t},c),{},{components:n})):a.createElement(m,r({ref:t},c))}));function f(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=n.length,r=new Array(o);r[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:i,r[1]=l;for(var u=2;u<o;u++)r[u]=n[u];return a.createElement.apply(null,r)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},58215:function(e,t,n){n.d(t,{Z:function(){return i}});var a=n(67294);function i(e){var t=e.children,n=e.hidden,i=e.className;return a.createElement("div",{role:"tabpanel",hidden:n,className:i},t)}},9877:function(e,t,n){n.d(t,{Z:function(){return c}});var a=n(83117),i=n(67294),o=n(72389),r=n(30662),l=n(86010),s="tabItem_LplD";function u(e){var t,n,o,u=e.lazy,c=e.block,p=e.defaultValue,d=e.values,f=e.groupId,m=e.className,g=i.Children.map(e.children,(function(e){if((0,i.isValidElement)(e)&&void 0!==e.props.value)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})),b=null!=d?d:g.map((function(e){var t=e.props;return{value:t.value,label:t.label,attributes:t.attributes}})),h=(0,r.lx)(b,(function(e,t){return e.value===t.value}));if(h.length>0)throw new Error('Docusaurus error: Duplicate values "'+h.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.');var y=null===p?p:null!=(t=null!=p?p:null==(n=g.find((function(e){return e.props.default})))?void 0:n.props.value)?t:null==(o=g[0])?void 0:o.props.value;if(null!==y&&!b.some((function(e){return e.value===y})))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+y+'" but none of its children has the corresponding value. Available values are: '+b.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");var v=(0,r.UB)(),w=v.tabGroupChoices,k=v.setTabGroupChoices,C=(0,i.useState)(y),S=C[0],E=C[1],_=[],T=(0,r.o5)().blockElementScrollPositionUntilNextRender;if(null!=f){var x=w[f];null!=x&&x!==S&&b.some((function(e){return e.value===x}))&&E(x)}var O=function(e){var t=e.currentTarget,n=_.indexOf(t),a=b[n].value;a!==S&&(T(t),E(a),null!=f&&k(f,a))},j=function(e){var t,n=null;switch(e.key){case"ArrowRight":var a=_.indexOf(e.currentTarget)+1;n=_[a]||_[0];break;case"ArrowLeft":var i=_.indexOf(e.currentTarget)-1;n=_[i]||_[_.length-1]}null==(t=n)||t.focus()};return i.createElement("div",{className:"tabs-container"},i.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,l.Z)("tabs",{"tabs--block":c},m)},b.map((function(e){var t=e.value,n=e.label,o=e.attributes;return i.createElement("li",(0,a.Z)({role:"tab",tabIndex:S===t?0:-1,"aria-selected":S===t,key:t,ref:function(e){return _.push(e)},onKeyDown:j,onFocus:O,onClick:O},o,{className:(0,l.Z)("tabs__item",s,null==o?void 0:o.className,{"tabs__item--active":S===t})}),null!=n?n:t)}))),u?(0,i.cloneElement)(g.filter((function(e){return e.props.value===S}))[0],{className:"margin-vert--md"}):i.createElement("div",{className:"margin-vert--md"},g.map((function(e,t){return(0,i.cloneElement)(e,{key:t,hidden:e.props.value!==S})}))))}function c(e){var t=(0,o.Z)();return i.createElement(u,(0,a.Z)({key:String(t)},e))}},88448:function(e,t,n){n.r(t),n.d(t,{assets:function(){return f},contentTitle:function(){return p},default:function(){return b},frontMatter:function(){return c},metadata:function(){return d},toc:function(){return m}});var a=n(83117),i=n(80102),o=(n(67294),n(3905)),r=n(9877),l=n(58215),s=n(59943),u=["components"],c={slug:"aws-deployments-with-cloudformation-and-gitlab-ci",title:"Simplified AWS Deployments with CloudFormation and GitLab CI",authors:["jeffreyaven"],draft:!1,image:"/img/blog/gitlabci-cloudformation-featured-image.png",tags:["gitlab","gitlabci","aws","awscloudformation","infrastructureascode","iac","cloudautomation"],keywords:["gitlab","gitlabci","aws","awscloudformation","infrastructureascode","iac","cloudautomation"],description:"A simple pattern for deploying stacks in AWS using CloudFormation templates using GitLab CI which allows you to review changes before deploying."},p=void 0,d={permalink:"/aws-deployments-with-cloudformation-and-gitlab-ci",editUrl:"https://github.com/stackql/fullstackchronicles.io/tree/main/src/blog/blog/2021-11-11-aws-deployments-with-cloudformation-and-gitlab-ci/index.md",source:"@site/blog/2021-11-11-aws-deployments-with-cloudformation-and-gitlab-ci/index.md",title:"Simplified AWS Deployments with CloudFormation and GitLab CI",description:"A simple pattern for deploying stacks in AWS using CloudFormation templates using GitLab CI which allows you to review changes before deploying.",date:"2021-11-11T00:00:00.000Z",formattedDate:"November 11, 2021",tags:[{label:"gitlab",permalink:"/tags/gitlab"},{label:"gitlabci",permalink:"/tags/gitlabci"},{label:"aws",permalink:"/tags/aws"},{label:"awscloudformation",permalink:"/tags/awscloudformation"},{label:"infrastructureascode",permalink:"/tags/infrastructureascode"},{label:"iac",permalink:"/tags/iac"},{label:"cloudautomation",permalink:"/tags/cloudautomation"}],readingTime:2.125,truncated:!1,authors:[{name:"Jeffrey Aven",title:"Technologist and Cloud Consultant",url:"https://www.linkedin.com/in/jeffreyaven/",imageURL:"https://s.gravatar.com/avatar/f96573d092470c74be233e1dded5376f?s=80",key:"jeffreyaven"}],frontMatter:{slug:"aws-deployments-with-cloudformation-and-gitlab-ci",title:"Simplified AWS Deployments with CloudFormation and GitLab CI",authors:["jeffreyaven"],draft:!1,image:"/img/blog/gitlabci-cloudformation-featured-image.png",tags:["gitlab","gitlabci","aws","awscloudformation","infrastructureascode","iac","cloudautomation"],keywords:["gitlab","gitlabci","aws","awscloudformation","infrastructureascode","iac","cloudautomation"],description:"A simple pattern for deploying stacks in AWS using CloudFormation templates using GitLab CI which allows you to review changes before deploying."},prevItem:{title:"Simplifying Large CloudFormation Templates using Jsonnet",permalink:"/simplifying-large-cloudformation-templates-using-jsonnet"},nextItem:{title:"From Wordpress to Jamstack",permalink:"/from-wordpress-to-jamstack"}},f={authorsImageUrls:[void 0]},m=[{value:"How it works",id:"how-it-works",level:2},{value:"Prerequisites",id:"prerequisites",level:2},{value:"<code>.gitlab-ci.yml</code> code",id:"gitlab-ciyml-code",level:2},{value:"Reviewing change sets (plans) and applying",id:"reviewing-change-sets-plans-and-applying",level:2}],g={toc:m};function b(e){var t=e.components,c=(0,i.Z)(e,u);return(0,o.kt)("wrapper",(0,a.Z)({},g,c,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Managing cloud deployments and IaC pipelines can be challenging.  I\u2019ve put together a simple pattern for deploying stacks in AWS using CloudFormation templates using GitLab CI.  "),(0,o.kt)("p",null,"This deployment framework enables you to target different environments based upon refs (branches or tags) for instance deploy to a dev environment for a push or merge into develop and deploy to prod on a push or merge into main, otherwise just lint/validate (e.g., for a push to a non-protected feature branch).  Templates are uploaded to a designated S3 bucket and staged for use in the pipeline and can be retained as an additional audit trail (in addition to the GitLab project history).  "),(0,o.kt)("p",null,"Furthermore, you can review changes (by inspecting change set contents) before deploying, saving you from fat finger deployments \ud83d\ude0a.  "),(0,o.kt)("h2",{id:"how-it-works"},"How it works"),(0,o.kt)("p",null,"The logic is described here:  "),(0,o.kt)(r.Z,{defaultValue:"flow",values:[{label:"Flow",value:"flow"},{label:"PlantUML",value:"plantuml"}],mdxType:"Tabs"},(0,o.kt)(l.Z,{value:"flow",mdxType:"TabItem"},(0,o.kt)("p",null,(0,o.kt)("a",{target:"_blank",href:n(96651).Z},(0,o.kt)("img",{alt:"GitLab CI",src:n(44013).Z,width:"449",height:"774"}))," ")),(0,o.kt)(l.Z,{value:"plantuml",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-plantuml"},'@startuml\n\npartition prepare {\n  (*) --\x3e === S1 ===\n  === S1 === --\x3e "Validate Template"\n  --\x3e === S2 ===\n  === S1 === --\x3e "Check Stack State"\n  --\x3e === S2 ===\n}\n\npartition publish {\n  --\x3e "Publish Template to S3"\n}\n\npartition plan {\n  --\x3e "Stack Exists?"\n  --\x3e === S3 ===\n  === S3 === --\x3e [Yes] "Create Change Set"\n  === S3 === --\x3e [No] === S4 ===\n  "Create Change Set" --\x3e === S4 ===\n}\n\npartition deploy {\n  --\x3e "MANUAL: Review Changes"\n  --\x3e "Deploy Change Set"\n}\n\n--\x3e(*)\n\n@enduml\n')))),(0,o.kt)("p",null,"The pipleline looks like this in GitLab:  "),(0,o.kt)("p",null,(0,o.kt)("a",{target:"_blank",href:n(74620).Z},(0,o.kt)("img",{alt:"GitLab CI",src:n(85151).Z,width:"1264",height:"859"})),"  "),(0,o.kt)("h2",{id:"prerequisites"},"Prerequisites"),(0,o.kt)("p",null,"You will need to set up GitLab CI variables for ",(0,o.kt)("inlineCode",{parentName:"p"},"AWS_ACCESS_KEY_ID"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"AWS_SECRET_ACCESS_KEY")," and optionally ",(0,o.kt)("inlineCode",{parentName:"p"},"AWS_DEFAULT_REGION"),".  You can do this via ",(0,o.kt)("strong",{parentName:"p"},"Settings -> CI/CD -> Variables")," in your GitLab project.   As ",(0,o.kt)("inlineCode",{parentName:"p"},"AWS_ACCESS_KEY_ID")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"AWS_SECRET_ACCESS_KEY")," are secrets, they should be configured as ",(0,o.kt)("inlineCode",{parentName:"p"},"protected")," (as they are only required for protected branches) and ",(0,o.kt)("inlineCode",{parentName:"p"},"masked")," so they are not printed in job logs."),(0,o.kt)("h2",{id:"gitlab-ciyml-code"},(0,o.kt)("inlineCode",{parentName:"h2"},".gitlab-ci.yml")," code"),(0,o.kt)("p",null,"The GitLab CI code is shown here:  "),(0,o.kt)(s.Z,{id:"d561e9f002048b4e4be4043cf185d1bd",mdxType:"Gist"}),(0,o.kt)("h2",{id:"reviewing-change-sets-plans-and-applying"},"Reviewing change sets (plans) and applying"),(0,o.kt)("p",null,"Once a pipeline is triggered for an existing stack it will run hands off until a change set (plan) is created.  You can inspect the plan by clicking on the Plan GitLab CI job where you would see output like this:  "),(0,o.kt)("p",null,(0,o.kt)("a",{target:"_blank",href:n(78731).Z},(0,o.kt)("img",{alt:"Change Set",src:n(1250).Z,width:"1264",height:"879"})),"  "),(0,o.kt)("p",null,"If you are OK with the changes proposed, you can simply hit the play button on the last stage of the pipeline (Deploy).  Voil\xe0, stack deployed, enjoy!"))}b.isMDXComponent=!0},78731:function(e,t,n){t.Z=n.p+"assets/files/gitlab-ci-cloudformation-plan-fab980e936956a28a98a13ec4f20d48d.png"},74620:function(e,t,n){t.Z=n.p+"assets/files/gitlab-ci-0f1e6af130941985838f49a568c723d4.png"},96651:function(e,t,n){t.Z=n.p+"assets/files/gitlabci-cloudformation-flow-27282ec6781a04b2c32d1ac1d5fa01a5.png"},59943:function(e,t,n){var a=n(67294);n(45697);function i(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function o(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}var r=function(e){function t(){return i(this,t),o(this,e.apply(this,arguments))}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,e),t.prototype.componentDidMount=function(){this._updateIframeContent()},t.prototype.componentDidUpdate=function(e,t){this._updateIframeContent()},t.prototype._defineUrl=function(){var e=this.props,t=e.id,n=e.file;return"https://gist.github.com/"+t+".js"+(n?"?file="+n:"")},t.prototype._updateIframeContent=function(){var e=this.props,t=e.id,n=e.file,a=this.iframeNode,i=a.document;a.contentDocument?i=a.contentDocument:a.contentWindow&&(i=a.contentWindow.document);var o='<html><head><base target="_parent"><style>*{font-size:12px;}</style></head><body '+("onload=\"parent.document.getElementById('"+(n?"gist-"+t+"-"+n:"gist-"+t)+"').style.height=document.body.scrollHeight + 'px'\"")+">"+('<script type="text/javascript" src="'+this._defineUrl()+'"><\/script>')+"</body></html>";i.open(),i.writeln(o),i.close()},t.prototype.render=function(){var e=this,t=this.props,n=t.id,i=t.file;return a.createElement("iframe",{ref:function(t){e.iframeNode=t},width:"100%",frameBorder:0,id:i?"gist-"+n+"-"+i:"gist-"+n})},t}(a.PureComponent);t.Z=r},1250:function(e,t,n){t.Z=n.p+"assets/images/gitlab-ci-cloudformation-plan-fab980e936956a28a98a13ec4f20d48d.png"},85151:function(e,t,n){t.Z=n.p+"assets/images/gitlab-ci-0f1e6af130941985838f49a568c723d4.png"},44013:function(e,t,n){t.Z=n.p+"assets/images/gitlabci-cloudformation-flow-27282ec6781a04b2c32d1ac1d5fa01a5.png"}}]);