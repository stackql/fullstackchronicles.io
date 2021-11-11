"use strict";(self.webpackChunkcloudy_with_a_chance_of_big_data=self.webpackChunkcloudy_with_a_chance_of_big_data||[]).push([[8024],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return f}});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),u=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=u(e.components);return r.createElement(s.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),d=u(n),f=a,m=d["".concat(s,".").concat(f)]||d[f]||c[f]||i;return n?r.createElement(m,o(o({ref:t},p),{},{components:n})):r.createElement(m,o({ref:t},p))}));function f(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:a,o[1]=l;for(var u=2;u<i;u++)o[u]=n[u];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},15939:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return s},contentTitle:function(){return u},metadata:function(){return p},assets:function(){return c},toc:function(){return d},default:function(){return m}});var r=n(83117),a=n(80102),i=(n(67294),n(3905)),o=n(59943),l=["components"],s={slug:"azure-static-web-app-review",title:"Azure Static Web App Review",authors:["jeffreyaven"],draft:!1,hide_table_of_contents:!0,image:"images/AzureStaticWebApp.png",tags:["azure","jamstack","microsoft-azure","netlify","progressive-web-application","pwa","react","single-page-application","spa","vercel","vue-js"],keywords:["azure","jamstack","microsoft-azure","netlify","progressive-web-application","pwa","react","single-page-application","spa","vercel","vue-js"]},u=void 0,p={permalink:"/azure-static-web-app-review",editUrl:"https://github.com/cloudywithachanceofbigdata/cloudywithachanceofbigdata.github.io/tree/main/src/blog/blog/2021-06-18-azure-static-web-app-review/index.md",source:"@site/blog/2021-06-18-azure-static-web-app-review/index.md",title:"Azure Static Web App Review",description:"The Azure Static Web App feature is relatively new in the Azure estate which has recently become generally available, I thought I would take it for a test drive and discuss my findings.",date:"2021-06-18T00:00:00.000Z",formattedDate:"June 18, 2021",tags:[{label:"azure",permalink:"/tags/azure"},{label:"jamstack",permalink:"/tags/jamstack"},{label:"microsoft-azure",permalink:"/tags/microsoft-azure"},{label:"netlify",permalink:"/tags/netlify"},{label:"progressive-web-application",permalink:"/tags/progressive-web-application"},{label:"pwa",permalink:"/tags/pwa"},{label:"react",permalink:"/tags/react"},{label:"single-page-application",permalink:"/tags/single-page-application"},{label:"spa",permalink:"/tags/spa"},{label:"vercel",permalink:"/tags/vercel"},{label:"vue-js",permalink:"/tags/vue-js"}],readingTime:2.59,truncated:!1,authors:[{name:"Jeffrey Aven",title:"Technologist and Cloud Consultant",url:"https://www.linkedin.com/in/jeffreyaven/",imageURL:"https://s.gravatar.com/avatar/f96573d092470c74be233e1dded5376f?s=80",key:"jeffreyaven"}],prevItem:{title:"Use BigQuery to trigger Cloud Run",permalink:"/use-bigquery-to-trigger-cloud-run"},nextItem:{title:"Introducing the Metadata Hub (MDH)",permalink:"/introducing-the-metadata-hub-mdh"}},c={authorsImageUrls:[void 0]},d=[{value:"Deploying Static Web Apps in Azure",id:"deploying-static-web-apps-in-azure",children:[],level:2},{value:"GitHub Actions",id:"github-actions",children:[],level:2},{value:"Preview or Staging Releases",id:"preview-or-staging-releases",children:[],level:2},{value:"Routes and Authorization",id:"routes-and-authorization",children:[],level:2},{value:"Pros",id:"pros",children:[],level:2},{value:"Cons",id:"cons",children:[],level:2}],f={toc:d};function m(e){var t=e.components,n=(0,a.Z)(e,l);return(0,i.kt)("wrapper",(0,r.Z)({},f,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"The Azure Static Web App feature is relatively new in the Azure estate which has recently become generally available, I thought I would take it for a test drive and discuss my findings."),(0,i.kt)("p",null,"I am a proponent of the JAMStack architecture for front end applications and a user of CD enabled CDN services like Netlify, so this Azure feature was naturally appealing to me."),(0,i.kt)("p",null,"Azure SWAs allow you to serve static assets (like JavaScript) without a origin server, meaning you don\u2019t need a web server, are able to streamline content distribution and web app performance, and reduce the attack surface area of your application."),(0,i.kt)("p",null,"The major advantage to using is simplicity, no scaffolding or infra requirements and it is seamlessly integrated into your CI/CD processes (natively if you are using GitHub)."),(0,i.kt)("h2",{id:"deploying-static-web-apps-in-azure"},"Deploying Static Web Apps in Azure"),(0,i.kt)("p",null,"Pretty simple to setup, aside from a name and a resource group, you just need to supply:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"a ",(0,i.kt)("strong",{parentName:"li"},"location")," (Azure region to be used for serverless back end APIs via Azure Function Apps) note that this is not a location where the static web is necessarily running"),(0,i.kt)("li",{parentName:"ul"},"a GitHub or GitLab ",(0,i.kt)("strong",{parentName:"li"},"repo URL")),(0,i.kt)("li",{parentName:"ul"},"the ",(0,i.kt)("strong",{parentName:"li"},"branch")," you wish to use to trigger production deployments (e.g. ",(0,i.kt)("inlineCode",{parentName:"li"},"main"),")"),(0,i.kt)("li",{parentName:"ul"},"a ",(0,i.kt)("strong",{parentName:"li"},"path")," to your code within your app (e.g. where your ",(0,i.kt)("inlineCode",{parentName:"li"},"package.json")," file is located)"),(0,i.kt)("li",{parentName:"ul"},"an ",(0,i.kt)("strong",{parentName:"li"},"output folder")," (e.g. ",(0,i.kt)("inlineCode",{parentName:"li"},"dist"),") this should not exist in your repo"),(0,i.kt)("li",{parentName:"ul"},"a project or personal access ",(0,i.kt)("strong",{parentName:"li"},"token")," for your GitHub account (alternatively you can perform an interactive OAuth2.0 consent if using the portal)")),(0,i.kt)("p",null,"An example is shown here:"),(0,i.kt)(o.Z,{id:"eef5a25ed01327a180711fd64370c457",mdxType:"Gist"}),(0,i.kt)("h2",{id:"github-actions"},"GitHub Actions"),(0,i.kt)("p",null,"Using the consent provided (either using the OAuth flow or by providing a token), Azure Static Web Apps will automagically create the GitHub Actions workflow to deploy your application on a push or merge event to your repo. This includes providing scoped API credentials to Azure to allow access to the Static Web App resource using secrets in GitHub (which are created automagically as well). An example workflow is shown here:"),(0,i.kt)(o.Z,{id:"8e7ad2bdd9ba351368c5aedad289e972",mdxType:"Gist"}),(0,i.kt)("h2",{id:"preview-or-staging-releases"},"Preview or Staging Releases"),(0,i.kt)("p",null,"Similar to the functionality in analogous services like Netlify, you can configure preview releases of your application to be deployed from specified branches on pull request events."),(0,i.kt)("h2",{id:"routes-and-authorization"},"Routes and Authorization"),(0,i.kt)("p",null,"Routes (for SPAs) need to be provided to Azure by using a file named ",(0,i.kt)("inlineCode",{parentName:"p"},"staticwebapp.config.json")," located in the application root of your repo (same level as you ",(0,i.kt)("inlineCode",{parentName:"p"},"package.json")," file). You can also specify response codes and whether the rout requires authentication as shown here:"),(0,i.kt)(o.Z,{id:"7dd3bcf05474da551b3d311ae0729e18",mdxType:"Gist"}),(0,i.kt)("h2",{id:"pros"},"Pros"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Globally distributed CDN"),(0,i.kt)("li",{parentName:"ul"},"Increased security posture, reduced attack surface area"),(0,i.kt)("li",{parentName:"ul"},"Simplified architecture and deployment"),(0,i.kt)("li",{parentName:"ul"},"No App Service Plan required \u2013 cost reduction"),(0,i.kt)("li",{parentName:"ul"},"Enables Continuous Deployment \u2013 incl preview/staging environments"),(0,i.kt)("li",{parentName:"ul"},"TLS and DNS can be easily configured for your app")),(0,i.kt)("h2",{id:"cons"},"Cons"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Serverless API locations are limited"),(0,i.kt)("li",{parentName:"ul"},"Integration with other VCS/CI/CD systems like GitLab would need to be custom built (GitHub and Azure DevOps is integrated)")),(0,i.kt)("p",null,"Overall, this is a good feature for deploying SPAs or PWAs in Azure."))}m.isMDXComponent=!0},59943:function(e,t,n){var r=n(67294);n(45697);function a(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function i(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}var o=function(e){function t(){return a(this,t),i(this,e.apply(this,arguments))}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,e),t.prototype.componentDidMount=function(){this._updateIframeContent()},t.prototype.componentDidUpdate=function(e,t){this._updateIframeContent()},t.prototype._defineUrl=function(){var e=this.props,t=e.id,n=e.file;return"https://gist.github.com/"+t+".js"+(n?"?file="+n:"")},t.prototype._updateIframeContent=function(){var e=this.props,t=e.id,n=e.file,r=this.iframeNode,a=r.document;r.contentDocument?a=r.contentDocument:r.contentWindow&&(a=r.contentWindow.document);var i='<html><head><base target="_parent"><style>*{font-size:12px;}</style></head><body '+("onload=\"parent.document.getElementById('"+(n?"gist-"+t+"-"+n:"gist-"+t)+"').style.height=document.body.scrollHeight + 'px'\"")+">"+('<script type="text/javascript" src="'+this._defineUrl()+'"><\/script>')+"</body></html>";a.open(),a.writeln(i),a.close()},t.prototype.render=function(){var e=this,t=this.props,n=t.id,a=t.file;return r.createElement("iframe",{ref:function(t){e.iframeNode=t},width:"100%",frameBorder:0,id:a?"gist-"+n+"-"+a:"gist-"+n})},t}(r.PureComponent);t.Z=o}}]);