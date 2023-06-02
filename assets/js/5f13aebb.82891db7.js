"use strict";(self.webpackChunkfull_stack_chronicles=self.webpackChunkfull_stack_chronicles||[]).push([[72592],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>m});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=r.createContext({}),p=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=p(e.components);return r.createElement(l.Provider,{value:t},e.children)},d="mdxType",f={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),d=p(n),u=a,m=d["".concat(l,".").concat(u)]||d[u]||f[u]||o;return n?r.createElement(m,i(i({ref:t},c),{},{components:n})):r.createElement(m,i({ref:t},c))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=u;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[d]="string"==typeof e?e:a,i[1]=s;for(var p=2;p<o;p++)i[p]=n[p];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},56577:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>s,default:()=>u,frontMatter:()=>i,metadata:()=>l,toc:()=>c});var r=n(87462),a=(n(67294),n(3905)),o=n(59943);const i={slug:"use-deno-deploy-to-serve-non-traditional-artifacts",title:"Use Deno Deploy to Serve Non-Traditional Artifacts",authors:["jeffreyaven"],draft:!1,image:"/img/blog/use-deno-deploy-to-serve-non-traditional-artifacts.png",tags:["deno deploy","deno","javascript","typescript","api","openapi","stackql"],keywords:["deno deploy","deno","javascript","typescript","api","openapi","stackql"],description:"This article demonstrates the use of Deno Deploy to serve static text files as non-traditional development artifacts."},s=void 0,l={permalink:"/use-deno-deploy-to-serve-non-traditional-artifacts",editUrl:"https://github.com/stackql/fullstackchronicles.io/edit/main/src/blog/2022-12-31-use-deno-deploy-to-serve-non-traditional-artifacts/index.md",source:"@site/blog/2022-12-31-use-deno-deploy-to-serve-non-traditional-artifacts/index.md",title:"Use Deno Deploy to Serve Non-Traditional Artifacts",description:"This article demonstrates the use of Deno Deploy to serve static text files as non-traditional development artifacts.",date:"2022-12-31T00:00:00.000Z",formattedDate:"December 31, 2022",tags:[{label:"deno deploy",permalink:"/tags/deno-deploy"},{label:"deno",permalink:"/tags/deno"},{label:"javascript",permalink:"/tags/javascript"},{label:"typescript",permalink:"/tags/typescript"},{label:"api",permalink:"/tags/api"},{label:"openapi",permalink:"/tags/openapi"},{label:"stackql",permalink:"/tags/stackql"}],readingTime:.705,hasTruncateMarker:!1,authors:[{name:"Jeffrey Aven",title:"Technologist and Cloud Consultant",url:"https://www.linkedin.com/in/jeffreyaven/",imageURL:"https://s.gravatar.com/avatar/f96573d092470c74be233e1dded5376f?s=80",key:"jeffreyaven"}],frontMatter:{slug:"use-deno-deploy-to-serve-non-traditional-artifacts",title:"Use Deno Deploy to Serve Non-Traditional Artifacts",authors:["jeffreyaven"],draft:!1,image:"/img/blog/use-deno-deploy-to-serve-non-traditional-artifacts.png",tags:["deno deploy","deno","javascript","typescript","api","openapi","stackql"],keywords:["deno deploy","deno","javascript","typescript","api","openapi","stackql"],description:"This article demonstrates the use of Deno Deploy to serve static text files as non-traditional development artifacts."},prevItem:{title:"Introducing GitVer - an alternative versioning scheme",permalink:"/gitver-an-alternative-versioning-scheme-to-semver-or-calver"},nextItem:{title:"Apache Beam in Five Minutes",permalink:"/apache-beam-in-five-minutes"}},p={authorsImageUrls:[void 0]},c=[{value:"The code",id:"the-code",level:2},{value:"The deployment",id:"the-deployment",level:2}],d={toc:c},f="wrapper";function u(e){let{components:t,...n}=e;return(0,a.kt)(f,(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"In the ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/stackql/stackql"},(0,a.kt)("strong",{parentName:"a"},"stackql"))," project we needed an API to serve configuration file packages (stackql providers) to the stackql application at runtime.  "),(0,a.kt)("p",null,"Traditional artifact repositories or package managers were unsuitable as they were mainly designed for container images, JavaScript modules, Python packages etc.  The artifacts, in this case, are signed tarball sets of OpenAPI specification documents (text files).  "),(0,a.kt)("p",null,"We have recently moved our provider registry (",(0,a.kt)("a",{parentName:"p",href:"https://github.com/stackql/stackql-provider-registry"},(0,a.kt)("strong",{parentName:"a"},"stackql-provider-registry")),") to use ",(0,a.kt)("a",{parentName:"p",href:"https://deno.com/deploy"},(0,a.kt)("strong",{parentName:"a"},"Deno Deploy"))," as the serving layer (the API).  "),(0,a.kt)("h2",{id:"the-code"},"The code"),(0,a.kt)("p",null,"The code is reasonably straightforward as shown here:  "),(0,a.kt)(o.Z,{id:"8747fa98e61e411373a95dbe2e261bd6",mdxType:"Gist"}),(0,a.kt)("h2",{id:"the-deployment"},"The deployment"),(0,a.kt)("p",null,"We are using GitHub Actions to push assets and code to Deno Deploy, this was straightforward as well as you can see here:  "),(0,a.kt)(o.Z,{id:"e4e98f427c80ecee4f82fb8731565289",mdxType:"Gist"}),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"if you have enjoyed this post, please consider ",(0,a.kt)("a",{parentName:"p",href:"https://www.buymeacoffee.com/jeffreyaven"},(0,a.kt)("strong",{parentName:"a"},"buying me a coffee \u2615"))," to help me keep writing!")))}u.isMDXComponent=!0},59943:(e,t,n)=>{n.d(t,{Z:()=>o});var r=n(67294);function a(e,t){return a=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e},a(e,t)}const o=function(e){var t,n;function o(){return e.apply(this,arguments)||this}n=e,(t=o).prototype=Object.create(n.prototype),t.prototype.constructor=t,a(t,n);var i=o.prototype;return i.componentDidMount=function(){this._updateIframeContent()},i.componentDidUpdate=function(e,t){this._updateIframeContent()},i._defineUrl=function(){var e=this.props,t=e.id,n=e.file;return"https://gist.github.com/"+t+".js"+(n?"?file="+n:"")},i._updateIframeContent=function(){var e=this.props,t=e.id,n=e.file,r=this.iframeNode,a=r.document;r.contentDocument?a=r.contentDocument:r.contentWindow&&(a=r.contentWindow.document);var o='<html><head><base target="_parent"><style>*{font-size:12px;}</style></head><body '+("onload=\"parent.document.getElementById('"+(n?"gist-"+t+"-"+n:"gist-"+t)+"').style.height=document.body.scrollHeight + 'px'\"")+">"+('<script type="text/javascript" src="'+this._defineUrl()+'"><\/script>')+"</body></html>";a.open(),a.writeln(o),a.close()},i.render=function(){var e=this,t=this.props,n=t.id,a=t.file;return r.createElement("iframe",{ref:function(t){e.iframeNode=t},width:"100%",frameBorder:0,id:a?"gist-"+n+"-"+a:"gist-"+n})},o}(r.PureComponent)}}]);