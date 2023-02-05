"use strict";(self.webpackChunkfull_stack_chronicles=self.webpackChunkfull_stack_chronicles||[]).push([[6828],{54994:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>c,contentTitle:()=>o,default:()=>s,frontMatter:()=>r,metadata:()=>i,toc:()=>u});var n=a(83117),l=(a(67294),a(3905));const r={slug:"gcp-templates-for-c4-diagrams-using-plantuml",title:"GCP Templates for C4 Diagrams using PlantUML",authors:["jeffreyaven"],draft:!1,hide_table_of_contents:!0,image:"images/gcp-c4.png",tags:["c4model","diagramming","gcp","google-cloud-platform","googlecloudplatform","plantuml","software-architecture"],keywords:["c4model","diagramming","gcp","google-cloud-platform","googlecloudplatform","plantuml","software-architecture"]},o=void 0,i={permalink:"/gcp-templates-for-c4-diagrams-using-plantuml",editUrl:"https://github.com/stackql/fullstackchronicles.io/edit/main/src/blog/2020-08-14-gcp-templates-for-c4-diagrams-using-plantuml/index.md",source:"@site/blog/2020-08-14-gcp-templates-for-c4-diagrams-using-plantuml/index.md",title:"GCP Templates for C4 Diagrams using PlantUML",description:"GCP C4 Diagramming",date:"2020-08-14T00:00:00.000Z",formattedDate:"August 14, 2020",tags:[{label:"c4model",permalink:"/tags/c-4-model"},{label:"diagramming",permalink:"/tags/diagramming"},{label:"gcp",permalink:"/tags/gcp"},{label:"google-cloud-platform",permalink:"/tags/google-cloud-platform"},{label:"googlecloudplatform",permalink:"/tags/googlecloudplatform"},{label:"plantuml",permalink:"/tags/plantuml"},{label:"software-architecture",permalink:"/tags/software-architecture"}],readingTime:1.96,hasTruncateMarker:!1,authors:[{name:"Jeffrey Aven",title:"Technologist and Cloud Consultant",url:"https://www.linkedin.com/in/jeffreyaven/",imageURL:"https://s.gravatar.com/avatar/f96573d092470c74be233e1dded5376f?s=80",key:"jeffreyaven"}],frontMatter:{slug:"gcp-templates-for-c4-diagrams-using-plantuml",title:"GCP Templates for C4 Diagrams using PlantUML",authors:["jeffreyaven"],draft:!1,hide_table_of_contents:!0,image:"images/gcp-c4.png",tags:["c4model","diagramming","gcp","google-cloud-platform","googlecloudplatform","plantuml","software-architecture"],keywords:["c4model","diagramming","gcp","google-cloud-platform","googlecloudplatform","plantuml","software-architecture"]},prevItem:{title:"Cloud Bigtable Primer Part II \u2013 Row Key Selection and Schema Design",permalink:"/cloud-bigtable-primer-part-ii-row-key-selection-and-schema-design"},nextItem:{title:"Cloud Bigtable Primer - Part I",permalink:"/cloud-bigtable-primer-part-i"}},c={authorsImageUrls:[void 0]},u=[{value:"PlantUML",id:"plantuml",level:2},{value:"C4 Diagrams",id:"c4-diagrams",level:2},{value:"GCP Architecture Diagramming using C4",id:"gcp-architecture-diagramming-using-c4",level:2}],m={toc:u};function s(e){let{components:t,...r}=e;return(0,l.kt)("wrapper",(0,n.Z)({},m,r,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("p",null,(0,l.kt)("img",{alt:"GCP C4 Diagramming",src:a(43550).Z,width:"150",height:"120"})),(0,l.kt)("p",null,"I am a believer in the mantra of ",(0,l.kt)("em",{parentName:"p"},(0,l.kt)("strong",{parentName:"em"},"\u201cEverything-as-Code\u201d")),", this includes diagrams and other architectural artefacts. Enter PlantUML\u2026"),(0,l.kt)("h2",{id:"plantuml"},"PlantUML"),(0,l.kt)("p",null,(0,l.kt)("a",{parentName:"p",href:"https://plantuml.com/"},"PlantUML")," is an open-source tool which allows users to create UML diagrams from an intuitive DSL (Domain Specific Language). PlantUML is built on top of Graphviz and enables software architects and designers to use code to create Sequence Diagrams, Use Case Diagrams, Class Diagrams, State and Activity Diagrams and much more."),(0,l.kt)("h2",{id:"c4-diagrams"},"C4 Diagrams"),(0,l.kt)("p",null,"PlantUML can be extended to support the ",(0,l.kt)("a",{parentName:"p",href:"https://c4model.com/"},"C4 model")," for visualising software architecture. Which describes software in different layers including Context, Container, Component and Code diagrams."),(0,l.kt)("h2",{id:"gcp-architecture-diagramming-using-c4"},"GCP Architecture Diagramming using C4"),(0,l.kt)("p",null,"PlantUML and C4 can be used to produce cloud architectures, there are official libraries available through PlantUML for Azure and AWS service icons, however these do not exist for GCP yet. There are several open source libraries available, however I have made an attempt to simplify the implementation."),(0,l.kt)("p",null,"The code below can be used to generate a C4 diagram describing a GCP architecture including official GCP service icons:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},'@startuml\n!define GCPPuml https://raw.githubusercontent.com/gamma-data/GCP-C4-PlantUML/master/templates\n\n!includeurl GCPPuml/C4\\_Context.puml\n!includeurl GCPPuml/C4\\_Component.puml\n!includeurl GCPPuml/C4\\_Container.puml\n!includeurl GCPPuml/GCPC4Integration.puml\n!includeurl GCPPuml/GCPCommon.puml\n\n!includeurl GCPPuml/Networking/CloudDNS.puml\n!includeurl GCPPuml/Networking/CloudLoadBalancing.puml\n!includeurl GCPPuml/Compute/ComputeEngine.puml\n!includeurl GCPPuml/Storage/CloudStorage.puml\n!includeurl GCPPuml/Databases/CloudSQL.puml\n\ntitle Sample C4 Diagram with GCP Icons\n\nPerson(publisher, "Publisher")\nSystem\\_Ext(device, "User")\n\nBoundary(gcp,"gcp-project") {\n  CloudDNS(dns, "Managed Zone", "Cloud DNS")\n  CloudLoadBalancing(lb, "L7 Load Balancer", "Cloud Load Balancing")\n  CloudStorage(bucket, "Static Content Bucket", "Cloud Storage")\n  Boundary(region, "gcp-region") {\n    Boundary(zonea, "zone a") {\n      ComputeEngine(gcea, "Content Server", "Compute Engine")\n      CloudSQL(csqla, "Dynamic Content", "Cloud SQL")\n    }\n    Boundary(zoneb, "zone b") {\n      ComputeEngine(gceb, "Content Server", "Compute Engine")\n      CloudSQL(csqlb, "Dynamic Content\\\\n(Read Replica)", "Cloud SQL")\n    }\n  }\n}\n\nRel(device, dns, "resolves name")\nRel(device, lb, "makes request")\nRel(lb, gcea, "routes request")\nRel(lb, gceb, "routes request")\nRel(gcea, bucket, "get static content")\nRel(gceb, bucket, "get static content")\nRel(gcea, csqla, "get dynamic content")\nRel(gceb, csqla, "get dynamic content")\nRel(csqla, csqlb, "replication")\nRel(publisher,bucket,"publish static content")\n\n@enduml\n')),(0,l.kt)("p",null,"The preceding code generates the diagram below:"),(0,l.kt)("p",null,(0,l.kt)("a",{target:"_blank",href:a(53832).Z},(0,l.kt)("img",{src:a(49616).Z,width:"662",height:"1437"}))),(0,l.kt)("p",null,"Additional services can be added and used in your diagrams by adding them to your includes, such as:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"!includeurl GCPPuml/DataAnalytics/BigQuery.puml\n!includeurl GCPPuml/DataAnalytics/CloudDataflow.puml\n!includeurl GCPPuml/AIandMachineLearning/AIHub.puml\n!includeurl GCPPuml/AIandMachineLearning/CloudAutoML.puml\n!includeurl GCPPuml/DeveloperTools/CloudBuild.puml\n!includeurl GCPPuml/HybridandMultiCloud/Stackdriver.puml\n!includeurl GCPPuml/InternetofThings/CloudIoTCore.puml\n!includeurl GCPPuml/Migration/TransferAppliance.puml\n!includeurl GCPPuml/Security/CloudIAM.puml\n' and more\u2026\n")),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"The complete template library is available at:"),(0,l.kt)("p",{parentName:"blockquote"},(0,l.kt)("a",{parentName:"p",href:"https://github.com/gamma-data/GCP-C4-PlantUML"},"https://github.com/gamma-data/GCP-C4-PlantUML"))),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"if you have enjoyed this post, please consider ",(0,l.kt)("a",{parentName:"p",href:"https://www.buymeacoffee.com/jeffreyaven"},(0,l.kt)("strong",{parentName:"a"},"buying me a coffee \u2615"))," to help me keep writing!")))}s.isMDXComponent=!0},3905:(e,t,a)=>{a.d(t,{Zo:()=>m,kt:()=>g});var n=a(67294);function l(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){l(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,n,l=function(e,t){if(null==e)return{};var a,n,l={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(l[a]=e[a]);return l}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(l[a]=e[a])}return l}var c=n.createContext({}),u=function(e){var t=n.useContext(c),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},m=function(e){var t=u(e.components);return n.createElement(c.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},p=n.forwardRef((function(e,t){var a=e.components,l=e.mdxType,r=e.originalType,c=e.parentName,m=i(e,["components","mdxType","originalType","parentName"]),p=u(a),g=l,d=p["".concat(c,".").concat(g)]||p[g]||s[g]||r;return a?n.createElement(d,o(o({ref:t},m),{},{components:a})):n.createElement(d,o({ref:t},m))}));function g(e,t){var a=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var r=a.length,o=new Array(r);o[0]=p;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i.mdxType="string"==typeof e?e:l,o[1]=i;for(var u=2;u<r;u++)o[u]=a[u];return n.createElement.apply(null,o)}return n.createElement.apply(null,a)}p.displayName="MDXCreateElement"},53832:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/files/Sample-C4-Diagram-with-GCP-Icons-291a0d7d898c0130b13e980e6752ec79.png"},49616:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/Sample-C4-Diagram-with-GCP-Icons-291a0d7d898c0130b13e980e6752ec79.png"},43550:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/gcp-c4-2dfa642388856ec47d841196e16f1e0f.png"}}]);