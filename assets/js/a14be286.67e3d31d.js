"use strict";(self.webpackChunkfull_stack_chronicles=self.webpackChunkfull_stack_chronicles||[]).push([[76727],{3905:(e,a,t)=>{t.d(a,{Zo:()=>d,kt:()=>h});var n=t(67294);function r(e,a,t){return a in e?Object.defineProperty(e,a,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[a]=t,e}function i(e,a){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);a&&(n=n.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),t.push.apply(t,n)}return t}function s(e){for(var a=1;a<arguments.length;a++){var t=null!=arguments[a]?arguments[a]:{};a%2?i(Object(t),!0).forEach((function(a){r(e,a,t[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(t,a))}))}return e}function o(e,a){if(null==e)return{};var t,n,r=function(e,a){if(null==e)return{};var t,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)t=i[n],a.indexOf(t)>=0||(r[t]=e[t]);return r}(e,a);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)t=i[n],a.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var l=n.createContext({}),c=function(e){var a=n.useContext(l),t=a;return e&&(t="function"==typeof e?e(a):s(s({},a),e)),t},d=function(e){var a=c(e.components);return n.createElement(l.Provider,{value:a},e.children)},u="mdxType",p={inlineCode:"code",wrapper:function(e){var a=e.children;return n.createElement(n.Fragment,{},a)}},m=n.forwardRef((function(e,a){var t=e.components,r=e.mdxType,i=e.originalType,l=e.parentName,d=o(e,["components","mdxType","originalType","parentName"]),u=c(t),m=r,h=u["".concat(l,".").concat(m)]||u[m]||p[m]||i;return t?n.createElement(h,s(s({ref:a},d),{},{components:t})):n.createElement(h,s({ref:a},d))}));function h(e,a){var t=arguments,r=a&&a.mdxType;if("string"==typeof e||r){var i=t.length,s=new Array(i);s[0]=m;var o={};for(var l in a)hasOwnProperty.call(a,l)&&(o[l]=a[l]);o.originalType=e,o[u]="string"==typeof e?e:r,s[1]=o;for(var c=2;c<i;c++)s[c]=t[c];return n.createElement.apply(null,s)}return n.createElement.apply(null,t)}m.displayName="MDXCreateElement"},73619:(e,a,t)=>{t.r(a),t.d(a,{assets:()=>l,contentTitle:()=>s,default:()=>p,frontMatter:()=>i,metadata:()=>o,toc:()=>c});var n=t(87462),r=(t(67294),t(3905));const i={slug:"databricks-in-five-minutes",title:"Databricks in 5 Minutes",authors:["jeffreyaven"],draft:!1,image:"/img/blog/databricks-in-five-minutes.png",tags:["databricks","big data","data science","machine learning"],keywords:["databricks","big data","data science","machine learning"],description:"This article provides a quick and concise introduction to Databricks - a unified platform for big data analytics and machine learning."},s=void 0,o={permalink:"/databricks-in-five-minutes",editUrl:"https://github.com/stackql/fullstackchronicles.io/edit/main/src/blog/2023-06-02-databricks-in-five-minutes/index.md",source:"@site/blog/2023-06-02-databricks-in-five-minutes/index.md",title:"Databricks in 5 Minutes",description:"This article provides a quick and concise introduction to Databricks - a unified platform for big data analytics and machine learning.",date:"2023-06-02T00:00:00.000Z",formattedDate:"June 2, 2023",tags:[{label:"databricks",permalink:"/tags/databricks"},{label:"big data",permalink:"/tags/big-data"},{label:"data science",permalink:"/tags/data-science"},{label:"machine learning",permalink:"/tags/machine-learning"}],readingTime:3.73,hasTruncateMarker:!1,authors:[{name:"Jeffrey Aven",title:"Technologist and Cloud Consultant",url:"https://www.linkedin.com/in/jeffreyaven/",imageURL:"https://s.gravatar.com/avatar/f96573d092470c74be233e1dded5376f?s=80",key:"jeffreyaven"}],frontMatter:{slug:"databricks-in-five-minutes",title:"Databricks in 5 Minutes",authors:["jeffreyaven"],draft:!1,image:"/img/blog/databricks-in-five-minutes.png",tags:["databricks","big data","data science","machine learning"],keywords:["databricks","big data","data science","machine learning"],description:"This article provides a quick and concise introduction to Databricks - a unified platform for big data analytics and machine learning."},nextItem:{title:"Netlify logging to SumoLogic Without Log Drains",permalink:"/netlify-logging-to-sumologic-without-log-drains"}},l={authorsImageUrls:[void 0]},c=[{value:"Summary",id:"summary",level:2},{value:"Architecture",id:"architecture",level:2},{value:"Clusters",id:"clusters",level:2},{value:"Workspaces and Notebooks",id:"workspaces-and-notebooks",level:2},{value:"Databricks File System (DBFS)",id:"databricks-file-system-dbfs",level:2},{value:"Delta Lake and Lakehouse",id:"delta-lake-and-lakehouse",level:2},{value:"Delta Live Tables",id:"delta-live-tables",level:2},{value:"Medallion Architecture",id:"medallion-architecture",level:2}],d={toc:c},u="wrapper";function p(e){let{components:a,...i}=e;return(0,r.kt)(u,(0,n.Z)({},d,i,{components:a,mdxType:"MDXLayout"}),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://databricks.com/"},(0,r.kt)("strong",{parentName:"a"},"Databricks"))," is a unified data management and analytics platform built by the creators of Apache Spark. It provides a collaborative environment for data scientists, engineers, and business analysts to work together. This brief overview will walk you through the basics of Databricks."),(0,r.kt)("h2",{id:"summary"},"Summary"),(0,r.kt)("p",null,'Databricks is a cloud-based "as-a-Service" platform for data management and analytics powered by Apache Spark. It enables organizations to deploy scalable, high-performance analytics workloads against large-scale datasets in their cloud environments. Databricks also supports multiple languages (SQL, Python, R, Scala, and Java), interactive notebooks and collaborative features, job scheduling, and more. The Databricks platform supports batch and stream processing and analytics, integrating with various data sources and formats.  '),(0,r.kt)("h2",{id:"architecture"},"Architecture"),(0,r.kt)("p",null,"The Databricks architecture consists of two main components: the ",(0,r.kt)("strong",{parentName:"p"},"Control Plane")," and the ",(0,r.kt)("strong",{parentName:"p"},"Data Plane"),".  "),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Databricks Architecture",src:t(82857).Z,width:"780",height:"892"})),(0,r.kt)("p",null,"The user interfaces and APIs are located in the  ",(0,r.kt)("strong",{parentName:"p"},"Control Plane"),". It's where users write code in notebooks, manage clusters, and schedule jobs. The Control Plane does not handle customer data directly.  "),(0,r.kt)("p",null,"The ",(0,r.kt)("strong",{parentName:"p"},"Data Plane")," - deployed in the customer's cloud environment and managed by the Control Plane - is where compute clusters (Apache Spark clusters) and storage resources are located. Spark jobs run in the Data Plane to process a customer's data.  "),(0,r.kt)("p",null,"This architecture enables a clear separation of responsibilities and increases overall system security. By keeping customer data within the Data Plane, Databricks ensures that sensitive information remains in the customer's environment and control.  "),(0,r.kt)("p",null,"Databricks supports a multi-cloud architecture, allowing customers to choose between AWS, Azure, and Google Cloud as their preferred environment for the Data Plane.  "),(0,r.kt)("h2",{id:"clusters"},"Clusters"),(0,r.kt)("p",null,"Databricks allows you to create Spark clusters required to execute notebook code. Clusters can be ",(0,r.kt)("strong",{parentName:"p"},"Job Clusters")," used mainly for non-interactive or scheduled workloads, or ",(0,r.kt)("strong",{parentName:"p"},"All Purpose Clusters")," which are mainly used for ad-hoc, interactive analysis operations. All-Purpose Clusters are shared clusters that multiple users can run commands on simultaneously. The Databricks Control Plane provides cluster automation, scaling, and collaboration capabilities."),(0,r.kt)("h2",{id:"workspaces-and-notebooks"},"Workspaces and Notebooks"),(0,r.kt)("p",null,"The ",(0,r.kt)("strong",{parentName:"p"},"Workspace")," is a personalized space where users can create notebooks, import libraries, and run jobs. ",(0,r.kt)("strong",{parentName:"p"},"Notebooks")," are documents combining code execution, visualizations, and narrative. They support Python, R, Scala, and SQL. Databricks notebooks are similar to popular notebook environments such as Jupyter Notebooks and Apache Zeppelin Notebooks.  "),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Databricks Notebook",src:t(24958).Z,width:"959",height:"940"})),(0,r.kt)("h2",{id:"databricks-file-system-dbfs"},"Databricks File System (DBFS)"),(0,r.kt)("p",null,"DBFS is an abstraction layer on top of scalable object storage and offers the benefits of distributed storage without needing local file I/O. DBFS can be used as a source or target for jobs, and Databricks offers multiple utilities for working with DBFS.  "),(0,r.kt)("h2",{id:"delta-lake-and-lakehouse"},"Delta Lake and Lakehouse"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://delta.io/"},(0,r.kt)("strong",{parentName:"a"},"Delta Lake"))," is an open-source project providing ACID transactions, scalable metadata handling, and unifying streaming and batch data processing on top of your existing data lake. It brings reliability to data lakes, and it is fully compatible with Apache Spark APIs.  "),(0,r.kt)("p",null,"A ",(0,r.kt)("strong",{parentName:"p"},"Lakehouse")," is a new kind of data management paradigm combining the benefits of data warehouses and data lakes. It provides a data warehouse's reliability, performance, and transactional capabilities with schema-on-read flexibility and low-cost data lake storage."),(0,r.kt)("h2",{id:"delta-live-tables"},"Delta Live Tables"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Delta Live Tables")," represent the state of a streaming dataset, views, or materialized views. Delta Live Tables provide improved data availability, quality, and reliability."),(0,r.kt)("h2",{id:"medallion-architecture"},"Medallion Architecture"),(0,r.kt)("p",null,"The ",(0,r.kt)("strong",{parentName:"p"},"Medallion Architecture")," is a methodology for organizing data in your data lake. This is not a new concept; it has been around for a while in the field of data engineering. The names for the layers might differ (like ",(0,r.kt)("em",{parentName:"p"},"Raw"),", ",(0,r.kt)("em",{parentName:"p"},"Clean"),", and ",(0,r.kt)("em",{parentName:"p"},"Refined")," etc), but the concept remains the same. It provides a guideline to systematically organize the data transformation process, with a clear separation between stages.  "),(0,r.kt)("p",null,"The Medallion Architecture is named after the 'bronze', 'silver', and 'gold' stages of refining raw material.  "),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Bronze")," tables, also known as raw tables, store the raw data ingested from various sources. This data is in its original form and hasn't undergone any transformation or cleaning.  "),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Silver")," tables contain cleansed and enriched data. This results from applying transformations, such as deduplication and schema normalization, to the bronze data.  "),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Gold")," tables hold business-level aggregates often used for reporting and dashboarding. This might be like daily active users or revenue by geography and product.  "),(0,r.kt)("p",null,"This architecture aims to separate data processing into logical layers and allow different teams to work on each layer independently. The Databricks Lakehouse is designed to support this methodology."),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"if you have enjoyed this post, please consider ",(0,r.kt)("a",{parentName:"p",href:"https://www.buymeacoffee.com/jeffreyaven"},(0,r.kt)("strong",{parentName:"a"},"buying me a coffee \u2615"))," to help me keep writing!")))}p.isMDXComponent=!0},82857:(e,a,t)=>{t.d(a,{Z:()=>n});const n=t.p+"assets/images/DatabricksArchitecture-5a9500ee8df34ccf7122f0c1f8e1cd8c.png"},24958:(e,a,t)=>{t.d(a,{Z:()=>n});const n=t.p+"assets/images/databricks-notebook-685d45b9cc50b3e574a87ce578ea29d6.png"}}]);