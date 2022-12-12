"use strict";(self.webpackChunkfull_stack_chronicles=self.webpackChunkfull_stack_chronicles||[]).push([[58821],{3905:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>m});var a=r(67294);function s(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function n(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){s(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,a,s=function(e,t){if(null==e)return{};var r,a,s={},o=Object.keys(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||(s[r]=e[r]);return s}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(s[r]=e[r])}return s}var l=a.createContext({}),h=function(e){var t=a.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):n(n({},t),e)),r},c=function(e){var t=h(e.components);return a.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var r=e.components,s=e.mdxType,o=e.originalType,l=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),u=h(r),m=s,d=u["".concat(l,".").concat(m)]||u[m]||p[m]||o;return r?a.createElement(d,n(n({ref:t},c),{},{components:r})):a.createElement(d,n({ref:t},c))}));function m(e,t){var r=arguments,s=t&&t.mdxType;if("string"==typeof e||s){var o=r.length,n=new Array(o);n[0]=u;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:s,n[1]=i;for(var h=2;h<o;h++)n[h]=r[h];return a.createElement.apply(null,n)}return a.createElement.apply(null,r)}u.displayName="MDXCreateElement"},1977:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>n,default:()=>p,frontMatter:()=>o,metadata:()=>i,toc:()=>h});var a=r(83117),s=(r(67294),r(3905));const o={slug:"sick-of-hearing-about-service-mesh-heres-what-you-need-to-know",title:"Sick of hearing about Service Mesh? Here\u2019s what you need to know...",authors:["tomklimovski"],draft:!1,hide_table_of_contents:!0,image:"images/service-mesh-1.png",tags:["k8s","kubernetes","service-mesh","servicemesh"],keywords:["k8s","kubernetes","service-mesh","servicemesh"]},n=void 0,i={permalink:"/sick-of-hearing-about-service-mesh-heres-what-you-need-to-know",editUrl:"https://github.com/stackql/fullstackchronicles.io/tree/main/src/blog/blog/2020-01-09-sick-of-hearing-about-service-mesh-heres-what-you-need-to-know/index.md",source:"@site/blog/2020-01-09-sick-of-hearing-about-service-mesh-heres-what-you-need-to-know/index.md",title:"Sick of hearing about Service Mesh? Here\u2019s what you need to know...",description:"Service Mesh",date:"2020-01-09T00:00:00.000Z",formattedDate:"January 9, 2020",tags:[{label:"k8s",permalink:"/tags/k-8-s"},{label:"kubernetes",permalink:"/tags/kubernetes"},{label:"service-mesh",permalink:"/tags/service-mesh"},{label:"servicemesh",permalink:"/tags/servicemesh"}],readingTime:3.38,hasTruncateMarker:!1,authors:[{name:"Tom Klimovski",title:"Senior Cloud Engineer",url:"https://github.com/tomklimovskigamma",imageURL:"http://2.gravatar.com/avatar/58faa98ad68138dd1997f828f00a882e?s=80",key:"tomklimovski"}],frontMatter:{slug:"sick-of-hearing-about-service-mesh-heres-what-you-need-to-know",title:"Sick of hearing about Service Mesh? Here\u2019s what you need to know...",authors:["tomklimovski"],draft:!1,hide_table_of_contents:!0,image:"images/service-mesh-1.png",tags:["k8s","kubernetes","service-mesh","servicemesh"],keywords:["k8s","kubernetes","service-mesh","servicemesh"]},prevItem:{title:"Google Cloud SQL \u2013 Availability, Replication, Failover for PostgreSQL \u2013 Part I",permalink:"/google-cloud-sql-ha-backup-and-recovery-replication-failover-and-security-for-postgresql"},nextItem:{title:"The Ultimate AWS to GCP Thesaurus",permalink:"/ultimate-aws-to-gcp-thesaurus"}},l={authorsImageUrls:[void 0]},h=[{value:"Ok, so what is this thing?",id:"ok-so-what-is-this-thing",level:2},{value:"Proxies",id:"proxies",level:2}],c={toc:h};function p(e){let{components:t,...o}=e;return(0,s.kt)("wrapper",(0,a.Z)({},c,o,{components:t,mdxType:"MDXLayout"}),(0,s.kt)("p",null,(0,s.kt)("img",{alt:"Service Mesh",src:r(59610).Z,width:"151",height:"106"})),(0,s.kt)("p",null,"So you\u2019ve started delivering a new project and it\u2019s all about this \u201cCloud Native\u201d or \u201cMicroservices\u201d thing. You\u2019re a Delivery Manager or Software Engineer at some type of company and someone has lightly peppered a meeting with a term, \u2018Mesh\u2019."),(0,s.kt)("p",null,"They possibly said event mesh. Or better yet, they mentioned a service mesh. As time went on you kept hearing more and more about the service mesh. You\u2019ve attempted to read up about it, digested a whole bunch of new terms and still didn\u2019t completely understand what the Mesh even does, why you would need it or why the hype train around this technology shows no sign of stopping. This article is an attempt to provide a focused guide to the service mesh, and why it is so interesting."),(0,s.kt)("h2",{id:"ok-so-what-is-this-thing"},"Ok, so what is this thing?"),(0,s.kt)("p",null,"Truth be told, the service mesh is actually pretty simple. It\u2019s built around the idea of small, repeatable bits of software, in this case userspace proxies, stuck very close to your services. This is called the ",(0,s.kt)("strong",{parentName:"p"},(0,s.kt)("em",{parentName:"strong"},"data plane")),". In addition to the userspace proxies, you also get a bunch of management processes, which is referred to as the ",(0,s.kt)("strong",{parentName:"p"},(0,s.kt)("em",{parentName:"strong"},"control plane")),". Simply put, the data plane (userspace proxies) intercepts all calls between services and the control plane (management processes) coordinates the wholesale behaviour of those proxies. This allows you to perform sweeping changes across your service landscape via the control planes API\u2019s, operators and provides the capability to measure your mesh as a whole."),(0,s.kt)("p",null,"Before we get into the engineering of what the proxies are, let\u2019s go with an example."),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},"The business has bought some software."),(0,s.kt)("li",{parentName:"ul"},"The engineers are tasked with deploying this software in their Kubernetes cluster."),(0,s.kt)("li",{parentName:"ul"},"The engineers first task is to containerise this application, expose its functionality to downstream applications and deploy it to the cluster in a repeatable, continuous fashion."),(0,s.kt)("li",{parentName:"ul"},"There\u2019s a requirement in your organisation that says \u2018I need all communications to this vendors software as TLS1.3\u2019. Or, \u2018I would like to measure all API latency from this application\u2019.")),(0,s.kt)("p",null,"The engineer replies \u2018I can\u2019t make changes to a third party application! What do I do?\u2019. Service mesh to the rescue."),(0,s.kt)("p",null,"Using a service mesh, you can deploy a proxy right next to your vendor container and in effect, abstract away the complexities of measurement and data transport mechanisms, and allow the vendor software to concentrate on it\u2019s business logic."),(0,s.kt)("p",null,"This vendor container is now part of the ",(0,s.kt)("strong",{parentName:"p"},(0,s.kt)("em",{parentName:"strong"},"service mesh")),"."),(0,s.kt)("h2",{id:"proxies"},"Proxies"),(0,s.kt)("p",null,"When we talk about proxies, we usually discuss things in OSI model terminology, that is to say Layers 1 through 7. Most of the time when it comes to proxies, you\u2019re comparing Layer 4 to Layer 7. Here\u2019s a quick run-down:"),(0,s.kt)("p",null,"Layer 4 (L4) -> operates with the delivery of messages with no regard to the content of the messages. They would simply forward network packets to and from the server without inspecting any part of the packets."),(0,s.kt)("p",null,"Layer 7 (L7) -> this is a higher level, application layer. This deals with the actual content of the message. If you were routing network traffic, you could do this at L7 in a much more sophisticated way because you can now make decisions based on the packets messages within."),(0,s.kt)("p",null,"Why pick between L4 and L7? ",(0,s.kt)("em",{parentName:"p"},"Speed"),"."),(0,s.kt)("p",null,"Back to the service mesh, these userspace proxies are L7-aware TCP proxies. Think ",(0,s.kt)("em",{parentName:"p"},(0,s.kt)("strong",{parentName:"em"},"NGINX"))," or ",(0,s.kt)("em",{parentName:"p"},(0,s.kt)("strong",{parentName:"em"},"haproxy")),". There are different proxies; ",(0,s.kt)("a",{parentName:"p",href:"https://linkerd.io/"},"Linkerd")," is an ultralight service mesh for Kubernetes. The most popular is ",(0,s.kt)("a",{parentName:"p",href:"https://www.envoyproxy.io/"},"Envoy"),", which was created by the ride-share company Lyft. Above, I also mentioned NGINX and haproxy which are also quite popular. So what differentiates NGINX proxies from the service mesh? Their ",(0,s.kt)("em",{parentName:"p"},"focus"),". You would implement NGINX as an Ingress proxy (traffic entering your network), but when it comes to proxies that focus on traffic between services, that\u2019s when the service mesh proxy comes in to play."),(0,s.kt)("p",null,"Ok, probably time for a diagram now that we\u2019ve explained the Data Plane."),(0,s.kt)("p",null,(0,s.kt)("a",{target:"_blank",href:r(37418).Z},(0,s.kt)("img",{src:r(74051).Z,width:"871",height:"562"}))),(0,s.kt)("p",null,"Tune in for part 2 for when we discuss the Control Plane!"))}p.isMDXComponent=!0},37418:(e,t,r)=>{r.d(t,{Z:()=>a});const a=r.p+"assets/files/service-mesh-74fe164528e1f23a50f21eb48aeeb2c0.png"},59610:(e,t,r)=>{r.d(t,{Z:()=>a});const a=r.p+"assets/images/service-mesh-1-d7868fc724132b5e947edad350e8e1ed.png"},74051:(e,t,r)=>{r.d(t,{Z:()=>a});const a=r.p+"assets/images/service-mesh-74fe164528e1f23a50f21eb48aeeb2c0.png"}}]);