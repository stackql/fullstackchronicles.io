"use strict";(self.webpackChunkfull_stack_chronicles=self.webpackChunkfull_stack_chronicles||[]).push([[18984],{3905:(e,t,a)=>{a.d(t,{Zo:()=>h,kt:()=>d});var r=a(67294);function o(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function n(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?n(Object(a),!0).forEach((function(t){o(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):n(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,r,o=function(e,t){if(null==e)return{};var a,r,o={},n=Object.keys(e);for(r=0;r<n.length;r++)a=n[r],t.indexOf(a)>=0||(o[a]=e[a]);return o}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(r=0;r<n.length;r++)a=n[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(o[a]=e[a])}return o}var l=r.createContext({}),c=function(e){var t=r.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},h=function(e){var t=c(e.components);return r.createElement(l.Provider,{value:t},e.children)},u="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var a=e.components,o=e.mdxType,n=e.originalType,l=e.parentName,h=s(e,["components","mdxType","originalType","parentName"]),u=c(a),m=o,d=u["".concat(l,".").concat(m)]||u[m]||p[m]||n;return a?r.createElement(d,i(i({ref:t},h),{},{components:a})):r.createElement(d,i({ref:t},h))}));function d(e,t){var a=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var n=a.length,i=new Array(n);i[0]=m;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[u]="string"==typeof e?e:o,i[1]=s;for(var c=2;c<n;c++)i[c]=a[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,a)}m.displayName="MDXCreateElement"},18497:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>p,frontMatter:()=>n,metadata:()=>s,toc:()=>c});var r=a(87462),o=(a(67294),a(3905));const n={slug:"introducing-service-mesh-part-ii",title:"Introducing Service Mesh Part II",authors:["tomklimovski"],draft:!1,hide_table_of_contents:!0,image:"images/service-mesh-1.png",tags:["k8s","kubernetes","service-mesh","servicemesh"],keywords:["k8s","kubernetes","service-mesh","servicemesh"]},i=void 0,s={permalink:"/introducing-service-mesh-part-ii",editUrl:"https://github.com/stackql/fullstackchronicles.io/edit/main/src/blog/2020-01-21-introducing-service-mesh-part-ii/index.md",source:"@site/blog/2020-01-21-introducing-service-mesh-part-ii/index.md",title:"Introducing Service Mesh Part II",description:"Service Mesh",date:"2020-01-21T00:00:00.000Z",formattedDate:"January 21, 2020",tags:[{label:"k8s",permalink:"/tags/k-8-s"},{label:"kubernetes",permalink:"/tags/kubernetes"},{label:"service-mesh",permalink:"/tags/service-mesh"},{label:"servicemesh",permalink:"/tags/servicemesh"}],readingTime:4.625,hasTruncateMarker:!1,authors:[{name:"Tom Klimovski",title:"Senior Cloud Engineer",url:"https://github.com/tomklimovskigamma",imageURL:"http://2.gravatar.com/avatar/58faa98ad68138dd1997f828f00a882e?s=80",key:"tomklimovski"}],frontMatter:{slug:"introducing-service-mesh-part-ii",title:"Introducing Service Mesh Part II",authors:["tomklimovski"],draft:!1,hide_table_of_contents:!0,image:"images/service-mesh-1.png",tags:["k8s","kubernetes","service-mesh","servicemesh"],keywords:["k8s","kubernetes","service-mesh","servicemesh"]},prevItem:{title:"Google Cloud SQL \u2013 Availability for PostgreSQL \u2013 Part II (Read Replicas)",permalink:"/google-cloud-sql-availability-for-postgresql-read-replicas"},nextItem:{title:"Google Cloud SQL \u2013 Availability, Replication, Failover for PostgreSQL \u2013 Part I",permalink:"/google-cloud-sql-ha-backup-and-recovery-replication-failover-and-security-for-postgresql"}},l={authorsImageUrls:[void 0]},c=[{value:"Refresher",id:"refresher",level:2},{value:"Why?",id:"why",level:2},{value:"Let&#39;s break it down",id:"lets-break-it-down",level:2},{value:"In short",id:"in-short",level:2}],h={toc:c},u="wrapper";function p(e){let{components:t,...n}=e;return(0,o.kt)(u,(0,r.Z)({},h,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Service Mesh",src:a(44079).Z,width:"151",height:"106"})),(0,o.kt)("p",null,"This is a follow up to the previous post:"),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://cloudywithachanceofbigdata.com/sick-of-hearing-about-service-mesh-heres-what-you-need-to-know/"},(0,o.kt)("strong",{parentName:"a"},"Sick of hearing about Service Mesh? Here\u2019s what you need to know..."))),(0,o.kt)("h2",{id:"refresher"},"Refresher"),(0,o.kt)("p",null,"A refresher on the data plane, and what the userspace proxy can perform:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Routing:")," Given a REST request for ",(0,o.kt)("inlineCode",{parentName:"li"},"/hello")," from the local service instance, where should that request be sent?"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Load Balancing:")," Once routing has done its job, to which upstream service instance should the request be sent? With what timeout? If the request fails, should it be retried?"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Authorisation and Authentication:")," For requests that are incoming, can cryptographic functions determine the authenticity of that requests? Is the called allowed to invoke the requested endpoint?"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Observability:")," Detailed logging, statistics, distributed tracing data so that operators can understand the traffic flow and debug problems as they occur"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Service Discovery:")," What backend/upstream service instances are available?"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Health Checking:")," Are upstream service instances healthy and ready to accept traffic?")),(0,o.kt)("p",null,"The control plane is slightly less complex. For the data plane to act in a coordinated fashion, the control plane gives you the machinery to make that happen. This is the magical part of the service mesh; the control plane takes a set of isolated sidecar proxies and turns them into a distributed system. The control plane in turn provides an API to allow the user to modify and inspect the behaviour of the data plane."),(0,o.kt)("p",null,"You can see from the diagram below the proxies are right next to the service in the same node. We usually call those 'sidecar' containers."),(0,o.kt)("p",null,(0,o.kt)("a",{target:"_blank",href:a(3401).Z},(0,o.kt)("img",{src:a(15952).Z,width:"1068",height:"689"}))),(0,o.kt)("p",null,"The diagram above gives you a high level indication of what the service mesh would look like. What if I don't have many services? Then the service mesh probably isn't for you. That's a whole lot of machinery to run a single proxy! Having said this, if your solution is running hundreds or thousands of services, then you're going to require a whole heap of proxies."),(0,o.kt)("p",null,"So there you have it. The service mesh with its control and data plane. To put it simply, the goal of the control plane is to monitor and set a policy that will eventually be enacted by the data plane."),(0,o.kt)("h2",{id:"why"},"Why?"),(0,o.kt)("p",null,"You've taken over a project, and the security team have mandated the use of the service mesh. You've never used it yourself before, and the confusion as to why we need another thing is getting you down. An additional thing next to my container that will add latency? And consume resources? And I have to maintain it?! Why would anyone need or want this?"),(0,o.kt)("p",null,"While there are a few answers to this, the most important answer is something I alluded to in an example in part 1 of this series: this design is a great way to add additional logic into the system. Not only can you add additional logic (to containers possibly outside of your control) but you can do this uniformly across the entire mesh! ",(0,o.kt)("em",{parentName:"p"},"The service mesh gives you features that are critical for running software that's uniform across your whole stack")),(0,o.kt)("p",null,"The set of features that the service mesh can provide include reliability features (Retries, timeouts etc), observability features (latencies, volume etc) and security features (mTLS, access control etc)."),(0,o.kt)("h2",{id:"lets-break-it-down"},"Let's break it down"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Server-side software relies on these critical features")," If you're building any type of modern server-side software that's predicated on multiple services, think API's and web-apps, and if you're continually adding features to this in a short timeframe, then all the features listed above become critical for you. Your applications must be reliable, observable and most importantly secure. This is exactly what the service mesh helps you with."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"One view to rule them all")," The features mentioned above are language-agnostic, don't care about your framework, who wrote it or any part of your development life cycle. They give you, your team and your company a consistent way to deploy changes across your service landscape"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Decoupled from application code")," It's important to have a single place to include application and business logic, and not have the nightmare of managing that in multiple components of your system. The core stewardship of the functionality that the service mesh provides lies at the ",(0,o.kt)("em",{parentName:"p"},"platform level"),". This includes maintenance, deployments, operation etc. The application can be updated and deployed by developers maintaining the application, and the service mesh can change without the application being involved."),(0,o.kt)("h2",{id:"in-short"},"In short"),(0,o.kt)("p",null,"Yes, while the features of the service mesh could be implemented as application code, this solution would not help in driving uniform features sets across the whole system, which is the value proposition for the service mesh."),(0,o.kt)("p",null,(0,o.kt)("em",{parentName:"p"},"If you're a business-logic developer"),", you probably don't need to worry about the service mesh. Keep pumping out that new fangled business logic that makes the software oh-so-usable"),(0,o.kt)("p",null,(0,o.kt)("em",{parentName:"p"},"If you're in a platform role")," and most likely using ",(0,o.kt)("em",{parentName:"p"},"Kubernetes"),", then you should be right on top of the service mesh! That is unless your architecture dictates a monolith. You're going to have a lot of services talking to one another, all tied together with an overarching dependency."),(0,o.kt)("p",null,(0,o.kt)("em",{parentName:"p"},"If you're in a platform role with no Kubernetes")," but a bunch of microservices, you should maybe care a little bit about the service mesh, but without the power of Kubernetes and the ease of deployment it brings, you'll have to weigh up how you intend to manage all those proxies."),(0,o.kt)("p",null,"I hope you enjoyed this article, please feel free to reach out to me at:"),(0,o.kt)("p",null,"Tom Klimovski",(0,o.kt)("br",{parentName:"p"}),"\n","Principal Consultant, Gamma Data",(0,o.kt)("br",{parentName:"p"}),"\n",(0,o.kt)("a",{parentName:"p",href:"mailto:tom.klimovski@gammadata.io"},"tom.klimovski@gammadata.io")))}p.isMDXComponent=!0},3401:(e,t,a)=>{a.d(t,{Z:()=>r});const r=a.p+"assets/files/control-data-plane-5cd2a8598fa552440a65343abd9e762c.png"},15952:(e,t,a)=>{a.d(t,{Z:()=>r});const r=a.p+"assets/images/control-data-plane-5cd2a8598fa552440a65343abd9e762c.png"},44079:(e,t,a)=>{a.d(t,{Z:()=>r});const r=a.p+"assets/images/service-mesh-1-d7868fc724132b5e947edad350e8e1ed.png"}}]);