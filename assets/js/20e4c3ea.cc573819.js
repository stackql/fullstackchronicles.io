"use strict";(self.webpackChunkfull_stack_chronicles=self.webpackChunkfull_stack_chronicles||[]).push([[99852],{3905:(e,t,a)=>{a.d(t,{Zo:()=>u,kt:()=>m});var r=a(67294);function i(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function n(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?n(Object(a),!0).forEach((function(t){i(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):n(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,r,i=function(e,t){if(null==e)return{};var a,r,i={},n=Object.keys(e);for(r=0;r<n.length;r++)a=n[r],t.indexOf(a)>=0||(i[a]=e[a]);return i}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(r=0;r<n.length;r++)a=n[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(i[a]=e[a])}return i}var s=r.createContext({}),p=function(e){var t=r.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},u=function(e){var t=p(e.components);return r.createElement(s.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var a=e.components,i=e.mdxType,n=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),d=p(a),m=i,f=d["".concat(s,".").concat(m)]||d[m]||c[m]||n;return a?r.createElement(f,o(o({ref:t},u),{},{components:a})):r.createElement(f,o({ref:t},u))}));function m(e,t){var a=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var n=a.length,o=new Array(n);o[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:i,o[1]=l;for(var p=2;p<n;p++)o[p]=a[p];return r.createElement.apply(null,o)}return r.createElement.apply(null,a)}d.displayName="MDXCreateElement"},52097:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>p,contentTitle:()=>l,default:()=>d,frontMatter:()=>o,metadata:()=>s,toc:()=>u});var r=a(83117),i=(a(67294),a(3905)),n=a(59943);const o={slug:"azure-static-web-app-review",title:"Azure Static Web App Review",authors:["jeffreyaven"],draft:!1,hide_table_of_contents:!0,image:"images/AzureStaticWebApp.png",tags:["azure","jamstack","microsoft-azure","netlify","progressive-web-application","pwa","react","single-page-application","spa","vercel","vue-js"],keywords:["azure","jamstack","microsoft-azure","netlify","progressive-web-application","pwa","react","single-page-application","spa","vercel","vue-js"]},l=void 0,s={permalink:"/azure-static-web-app-review",editUrl:"https://github.com/stackql/fullstackchronicles.io/tree/main/src/blog/blog/2021-06-18-azure-static-web-app-review/index.md",source:"@site/blog/2021-06-18-azure-static-web-app-review/index.md",title:"Azure Static Web App Review",description:"Azure Static WebApp",date:"2021-06-18T00:00:00.000Z",formattedDate:"June 18, 2021",tags:[{label:"azure",permalink:"/tags/azure"},{label:"jamstack",permalink:"/tags/jamstack"},{label:"microsoft-azure",permalink:"/tags/microsoft-azure"},{label:"netlify",permalink:"/tags/netlify"},{label:"progressive-web-application",permalink:"/tags/progressive-web-application"},{label:"pwa",permalink:"/tags/pwa"},{label:"react",permalink:"/tags/react"},{label:"single-page-application",permalink:"/tags/single-page-application"},{label:"spa",permalink:"/tags/spa"},{label:"vercel",permalink:"/tags/vercel"},{label:"vue-js",permalink:"/tags/vue-js"}],readingTime:2.605,hasTruncateMarker:!1,authors:[{name:"Jeffrey Aven",title:"Technologist and Cloud Consultant",url:"https://www.linkedin.com/in/jeffreyaven/",imageURL:"https://s.gravatar.com/avatar/f96573d092470c74be233e1dded5376f?s=80",key:"jeffreyaven"}],frontMatter:{slug:"azure-static-web-app-review",title:"Azure Static Web App Review",authors:["jeffreyaven"],draft:!1,hide_table_of_contents:!0,image:"images/AzureStaticWebApp.png",tags:["azure","jamstack","microsoft-azure","netlify","progressive-web-application","pwa","react","single-page-application","spa","vercel","vue-js"],keywords:["azure","jamstack","microsoft-azure","netlify","progressive-web-application","pwa","react","single-page-application","spa","vercel","vue-js"]},prevItem:{title:"Use BigQuery to trigger Cloud Run",permalink:"/use-bigquery-to-trigger-cloud-run"},nextItem:{title:"Introducing the Metadata Hub (MDH)",permalink:"/introducing-the-metadata-hub-mdh"}},p={authorsImageUrls:[void 0]},u=[{value:"Deploying Static Web Apps in Azure",id:"deploying-static-web-apps-in-azure",level:2},{value:"GitHub Actions",id:"github-actions",level:2},{value:"Preview or Staging Releases",id:"preview-or-staging-releases",level:2},{value:"Routes and Authorization",id:"routes-and-authorization",level:2},{value:"Pros",id:"pros",level:2},{value:"Cons",id:"cons",level:2}],c={toc:u};function d(e){let{components:t,...o}=e;return(0,i.kt)("wrapper",(0,r.Z)({},c,o,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Azure Static WebApp",src:a(60548).Z,width:"70",height:"70"})),(0,i.kt)("p",null,"The Azure Static Web App feature is relatively new in the Azure estate which has recently become generally available, I thought I would take it for a test drive and discuss my findings."),(0,i.kt)("p",null,"I am a proponent of the JAMStack architecture for front end applications and a user of CD enabled CDN services like Netlify, so this Azure feature was naturally appealing to me."),(0,i.kt)("p",null,"Azure SWAs allow you to serve static assets (like JavaScript) without a origin server, meaning you don\u2019t need a web server, are able to streamline content distribution and web app performance, and reduce the attack surface area of your application."),(0,i.kt)("p",null,"The major advantage to using is simplicity, no scaffolding or infra requirements and it is seamlessly integrated into your CI/CD processes (natively if you are using GitHub)."),(0,i.kt)("h2",{id:"deploying-static-web-apps-in-azure"},"Deploying Static Web Apps in Azure"),(0,i.kt)("p",null,"Pretty simple to setup, aside from a name and a resource group, you just need to supply:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"a ",(0,i.kt)("strong",{parentName:"li"},"location")," (Azure region to be used for serverless back end APIs via Azure Function Apps) note that this is not a location where the static web is necessarily running"),(0,i.kt)("li",{parentName:"ul"},"a GitHub or GitLab ",(0,i.kt)("strong",{parentName:"li"},"repo URL")),(0,i.kt)("li",{parentName:"ul"},"the ",(0,i.kt)("strong",{parentName:"li"},"branch")," you wish to use to trigger production deployments (e.g. ",(0,i.kt)("inlineCode",{parentName:"li"},"main"),")"),(0,i.kt)("li",{parentName:"ul"},"a ",(0,i.kt)("strong",{parentName:"li"},"path")," to your code within your app (e.g. where your ",(0,i.kt)("inlineCode",{parentName:"li"},"package.json")," file is located)"),(0,i.kt)("li",{parentName:"ul"},"an ",(0,i.kt)("strong",{parentName:"li"},"output folder")," (e.g. ",(0,i.kt)("inlineCode",{parentName:"li"},"dist"),") this should not exist in your repo"),(0,i.kt)("li",{parentName:"ul"},"a project or personal access ",(0,i.kt)("strong",{parentName:"li"},"token")," for your GitHub account (alternatively you can perform an interactive OAuth2.0 consent if using the portal)")),(0,i.kt)("p",null,"An example is shown here:"),(0,i.kt)(n.Z,{id:"eef5a25ed01327a180711fd64370c457",mdxType:"Gist"}),(0,i.kt)("h2",{id:"github-actions"},"GitHub Actions"),(0,i.kt)("p",null,"Using the consent provided (either using the OAuth flow or by providing a token), Azure Static Web Apps will automagically create the GitHub Actions workflow to deploy your application on a push or merge event to your repo. This includes providing scoped API credentials to Azure to allow access to the Static Web App resource using secrets in GitHub (which are created automagically as well). An example workflow is shown here:"),(0,i.kt)(n.Z,{id:"8e7ad2bdd9ba351368c5aedad289e972",mdxType:"Gist"}),(0,i.kt)("h2",{id:"preview-or-staging-releases"},"Preview or Staging Releases"),(0,i.kt)("p",null,"Similar to the functionality in analogous services like Netlify, you can configure preview releases of your application to be deployed from specified branches on pull request events."),(0,i.kt)("h2",{id:"routes-and-authorization"},"Routes and Authorization"),(0,i.kt)("p",null,"Routes (for SPAs) need to be provided to Azure by using a file named ",(0,i.kt)("inlineCode",{parentName:"p"},"staticwebapp.config.json")," located in the application root of your repo (same level as you ",(0,i.kt)("inlineCode",{parentName:"p"},"package.json")," file). You can also specify response codes and whether the rout requires authentication as shown here:"),(0,i.kt)(n.Z,{id:"7dd3bcf05474da551b3d311ae0729e18",mdxType:"Gist"}),(0,i.kt)("h2",{id:"pros"},"Pros"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Globally distributed CDN"),(0,i.kt)("li",{parentName:"ul"},"Increased security posture, reduced attack surface area"),(0,i.kt)("li",{parentName:"ul"},"Simplified architecture and deployment"),(0,i.kt)("li",{parentName:"ul"},"No App Service Plan required \u2013 cost reduction"),(0,i.kt)("li",{parentName:"ul"},"Enables Continuous Deployment \u2013 incl preview/staging environments"),(0,i.kt)("li",{parentName:"ul"},"TLS and DNS can be easily configured for your app")),(0,i.kt)("h2",{id:"cons"},"Cons"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Serverless API locations are limited"),(0,i.kt)("li",{parentName:"ul"},"Integration with other VCS/CI/CD systems like GitLab would need to be custom built (GitHub and Azure DevOps is integrated)")),(0,i.kt)("p",null,"Overall, this is a good feature for deploying SPAs or PWAs in Azure."))}d.isMDXComponent=!0},59943:(e,t,a)=>{a.d(t,{Z:()=>o});var r=a(67294);a(45697);function i(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function n(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}const o=function(e){function t(){return i(this,t),n(this,e.apply(this,arguments))}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,e),t.prototype.componentDidMount=function(){this._updateIframeContent()},t.prototype.componentDidUpdate=function(e,t){this._updateIframeContent()},t.prototype._defineUrl=function(){var e=this.props,t=e.id,a=e.file;return"https://gist.github.com/"+t+".js"+(a?"?file="+a:"")},t.prototype._updateIframeContent=function(){var e=this.props,t=e.id,a=e.file,r=this.iframeNode,i=r.document;r.contentDocument?i=r.contentDocument:r.contentWindow&&(i=r.contentWindow.document);var n='<html><head><base target="_parent"><style>*{font-size:12px;}</style></head><body '+("onload=\"parent.document.getElementById('"+(a?"gist-"+t+"-"+a:"gist-"+t)+"').style.height=document.body.scrollHeight + 'px'\"")+">"+('<script type="text/javascript" src="'+this._defineUrl()+'"><\/script>')+"</body></html>";i.open(),i.writeln(n),i.close()},t.prototype.render=function(){var e=this,t=this.props,a=t.id,i=t.file;return r.createElement("iframe",{ref:function(t){e.iframeNode=t},width:"100%",frameBorder:0,id:i?"gist-"+a+"-"+i:"gist-"+a})},t}(r.PureComponent)},60548:(e,t,a)=>{a.d(t,{Z:()=>r});const r="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEYAAABGCAYAAABxLuKEAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsQAAA7EAZUrDhsAAAMWSURBVHhe7Zu/i9RQEIBfzhUOUbmDa9zWE8HGRhAFxULQYkUsrQTF0kbRwj9BsbexsLKyEAUtrlE4r7bxB7etp8KBhx7Lya0bM2bCzr19k7wk773k2PkgyySXhLwvM5OES6I4QQkTRMkUH3rwMp0T1Pf7V1Q8HKookSIZo/Ht3iU1g7FAgAoSMQwihqFQTP92T63d7anugVlcMsnzmxf+r/P2Vg+XmIF1YNoN5DZf0yC6D19hlGKzDog7NbcX51L0ddoGmzF1zuyji8cxStGlAG3PHOkxDKyYOql+580HjHhOPF7CqJ3kZowuxySryjqrW0kp/U5+Wozc+TJIj2EQMQwihiE6s/JVeowByRgGEcMgYhiMPebaYhej6eBpfw2jMZIxDCKGoZVibiykU5O0OmOalCOlxNA6MTRLnqxj0ABBxLjoGS72UQbvYuhgqg7MxT7K4lWMPoii0ji7H4MEuq6+XQg53sSUlQIc4f91FVyOFzFVpNgQUo5zMVWl0O1ebGBgIJQcp2JcZcr6EAOGEHKciXElxRbfcpyIqSuFXo2KsoXiU05tMS4yhV6N8vqLCV9yaouhA4GzTc9+CC7P7cyylY1tjOpRWwwcFMjJDm6+kx6sLcc644EM/mJgiV6CIOXjcPLNiio46TGZHIqtHPqKyLOfGFgAUuAkZCxvKmdSACdiMuDgKGUypwy6FICWkwucioGD0+Xk9RwqDt6AsMGUKWUbtg1OxQB6WcEgrs7jjMYCGeA7TagJkxTXmZLhXEwGlTOI65dVSCmANzGAXlb0CkSzpQjYLqQUwKsYvefQqwbNoKKbQrrd6ua2dymAVzEADALKqm6DzPbh8pKch3cxu5VGxNDnmSrPViFoRAzIgMn23qUJGi0lm3uXppAew2B8P2bx4D6MpoP+rwFGY+TlRAYpJQOjP1tqBn6EnSyfO5x+Xhx1Our00pd06ZTz/vzR9PNiFe2J1cnrSs0mj6+jEf55CoEUiZLO8uOzUp9eK/lSn0GaL4OIYRAxDCKGQcQwiBgGEcMgYhhEDIOIYRAxRpT6Bzu/BUCZFYmdAAAAAElFTkSuQmCC"}}]);