"use strict";(self.webpackChunkcloudy_with_a_chance_of_big_data=self.webpackChunkcloudy_with_a_chance_of_big_data||[]).push([[3262],{3905:function(e,a,t){t.d(a,{Zo:function(){return p},kt:function(){return m}});var r=t(67294);function n(e,a,t){return a in e?Object.defineProperty(e,a,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[a]=t,e}function i(e,a){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);a&&(r=r.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),t.push.apply(t,r)}return t}function o(e){for(var a=1;a<arguments.length;a++){var t=null!=arguments[a]?arguments[a]:{};a%2?i(Object(t),!0).forEach((function(a){n(e,a,t[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(t,a))}))}return e}function s(e,a){if(null==e)return{};var t,r,n=function(e,a){if(null==e)return{};var t,r,n={},i=Object.keys(e);for(r=0;r<i.length;r++)t=i[r],a.indexOf(t)>=0||(n[t]=e[t]);return n}(e,a);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)t=i[r],a.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(n[t]=e[t])}return n}var c=r.createContext({}),l=function(e){var a=r.useContext(c),t=a;return e&&(t="function"==typeof e?e(a):o(o({},a),e)),t},p=function(e){var a=l(e.components);return r.createElement(c.Provider,{value:a},e.children)},d={inlineCode:"code",wrapper:function(e){var a=e.children;return r.createElement(r.Fragment,{},a)}},u=r.forwardRef((function(e,a){var t=e.components,n=e.mdxType,i=e.originalType,c=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),u=l(t),m=n,h=u["".concat(c,".").concat(m)]||u[m]||d[m]||i;return t?r.createElement(h,o(o({ref:a},p),{},{components:t})):r.createElement(h,o({ref:a},p))}));function m(e,a){var t=arguments,n=a&&a.mdxType;if("string"==typeof e||n){var i=t.length,o=new Array(i);o[0]=u;var s={};for(var c in a)hasOwnProperty.call(a,c)&&(s[c]=a[c]);s.originalType=e,s.mdxType="string"==typeof e?e:n,o[1]=s;for(var l=2;l<i;l++)o[l]=t[l];return r.createElement.apply(null,o)}return r.createElement.apply(null,t)}u.displayName="MDXCreateElement"},51389:function(e,a,t){t.r(a),t.d(a,{frontMatter:function(){return s},contentTitle:function(){return c},metadata:function(){return l},assets:function(){return p},toc:function(){return d},default:function(){return m}});var r=t(83117),n=t(80102),i=(t(67294),t(3905)),o=["components"],s={slug:"the-streaming-data-warehouse-kappa-architecture-and-data-warehousing-re-imagined",title:"The Streaming Data Warehouse",authors:["jeffreyaven"],draft:!1,hide_table_of_contents:!0,image:"images/sdw.png",tags:["data-warehousing","kafka","kappa-architecture","stream-processing","streaming-analytics"],keywords:["data-warehousing","kafka","kappa-architecture","stream-processing","streaming-analytics"]},c=void 0,l={permalink:"/the-streaming-data-warehouse-kappa-architecture-and-data-warehousing-re-imagined",editUrl:"https://github.com/cloudywithachanceofbigdata/cloudywithachanceofbigdata.github.io/tree/main/src/blog/blog/2019-02-14-the-streaming-data-warehouse-kappa-architecture-and-data-warehousing-re-imagined/index.md",source:"@site/blog/2019-02-14-the-streaming-data-warehouse-kappa-architecture-and-data-warehousing-re-imagined/index.md",title:"The Streaming Data Warehouse",description:"Kappa Architecture and Data Warehousing re-imagined",date:"2019-02-14T00:00:00.000Z",formattedDate:"February 14, 2019",tags:[{label:"data-warehousing",permalink:"/tags/data-warehousing"},{label:"kafka",permalink:"/tags/kafka"},{label:"kappa-architecture",permalink:"/tags/kappa-architecture"},{label:"stream-processing",permalink:"/tags/stream-processing"},{label:"streaming-analytics",permalink:"/tags/streaming-analytics"}],readingTime:3.43,truncated:!1,authors:[{name:"Jeffrey Aven",title:"Technologist and Cloud Consultant",url:"https://www.linkedin.com/in/jeffreyaven/",imageURL:"https://s.gravatar.com/avatar/f96573d092470c74be233e1dded5376f?s=80",key:"jeffreyaven"}],prevItem:{title:"GCP Networking for AWS Professionals",permalink:"/gcp-networking-for-aws-professionals"},nextItem:{title:"Test Driven Infrastructure and Test Automation with Ansible, Molecule and Azure",permalink:"/test-driven-infrastructure-and-test-automation-with-ansible-molecule-and-azure"}},p={authorsImageUrls:[void 0]},d=[{value:"Kappa Architecture and Data Warehousing re-imagined",id:"kappa-architecture-and-data-warehousing-re-imagined",children:[],level:3}],u={toc:d};function m(e){var a=e.components,s=(0,n.Z)(e,o);return(0,i.kt)("wrapper",(0,r.Z)({},u,s,{components:a,mdxType:"MDXLayout"}),(0,i.kt)("h3",{id:"kappa-architecture-and-data-warehousing-re-imagined"},"Kappa Architecture and Data Warehousing re-imagined"),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Streaming Data Warehouse",src:t(50471).Z})),(0,i.kt)("p",null,"The aspiration to extend data analysis (predictive, descriptive or otherwise) to streaming event data has been common across every enterprise scale program I have been involved with. Often, however, this aspiration goes unrealised as it tends to slide down the priority scale as we still grapple with legacy batch oriented integration patterns and processes."),(0,i.kt)("p",null,"Event processing is not a new concept, real time event and transaction processing has been a standard feature for security, digital and operations functions for some time, however in the Data Warehousing, BI and Advanced Analytics worlds it is often spoken about but rarely implemented, except for tech companies of course. In many cases personalization is still a batch oriented process, e.g. train a model from a feature set built from historical data, generate recommendations in batch, serve these recommendations upon the next visit - wash, rinse, and repeat."),(0,i.kt)("p",null,"Lambda has existed for several years now as a data-processing architecture pattern designed to incorporate both batch and stream-processing capabilities. Moreover, messaging platforms have existed for decades, from point-to-point messaging systems, to message-oriented-middleware systems, to distributed pub-sub messaging systems such as Apache Kafka."),(0,i.kt)("p",null,"Additionally, open source streaming data processing frameworks and tools have proliferated in recent years with projects such as Storm, Samza, Flink and Spark Streaming becoming established solutions."),(0,i.kt)("p",null,"Kafka in particular, with its focus on durability, resiliency, availability and consistency, has graduated into fully fledged data platform ",(0,i.kt)("strong",{parentName:"p"},"not simply a transient messaging system"),". In many cases Kafka is serving as a back end for operational processes, such as applications implementing the CQRS (Command Query Responsibility Segregation) design pattern.  "),(0,i.kt)("p",null,"In other words, it is not the technology that holds us back, it's our lack of imagination."),(0,i.kt)("p",null,"Enter ",(0,i.kt)("a",{parentName:"p",href:"http://milinda.pathirage.org/kappa-architecture.com/"},"Kappa Architecture")," where we no longer have to attempt to integrate streaming data with batch processes\u2026",(0,i.kt)("strong",{parentName:"p"},"everything is a stream"),". The ultimate embodiment of Kappa Architecture is the ",(0,i.kt)("strong",{parentName:"p"},(0,i.kt)("em",{parentName:"strong"},"Streaming Data Warehouse")),"."),(0,i.kt)("p",null,"In the Streaming Data Warehouse, tables are represented by topics. Topics represent either:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"unbounded event or change streams; or"),(0,i.kt)("li",{parentName:"ul"},"stateful representations of data (such as master, reference or summary data sets).")),(0,i.kt)("p",null,"This approach makes possible the enrichment and/or summarisation of transaction or event data with master or reference data. Furthermore many of the patterns used in data warehousing and master data management are inherent in Kafka as you can represent the current state of an object as well as the complete change history of that object (in other words change data capture and associated slowly changing dimensions from one inbound stream)."),(0,i.kt)("p",null,"Data is acquired from source systems either in real time or as a scheduled extract process, ",(0,i.kt)("strong",{parentName:"p"},"in either case the data is presented to Kafka as a stream"),"."),(0,i.kt)("p",null,"The Kafka Avro Schema Registry provides a systematic contract with source systems which also serves as a data dictionary for consumers supporting schema evolution with backward and forward compatibility. Data is retained on the Kafka platform for a designated period of time (days or weeks) where it is available for applications and processes to consume - these processes can include data summarisation or sliding window operations for reporting or notification, or data integration or datamart building processes which sink data to other systems - these could include relational or non-relational data stores."),(0,i.kt)("p",null,"Real time applications can be built using the KStreams API and emerging tools such as KSQL can be used to provide a well-known interface for sampling streaming data or performing windowed processing operations on streams. Structured Streaming in Spark or Spark Streaming in its original RDD/DStream implementation can be used to prepare and enrich data for machine learning operations using Spark ML or Spark MLlib.  "),(0,i.kt)("p",null,"In addition, data sinks can operate concurrently to sink datasets to S3 or Google Cloud Storage or both (multi cloud - like real time analytics - is something which is talked about more than it\u2019s implemented\u2026)."),(0,i.kt)("p",null,"In the Streaming Data Warehouse architecture Kafka is much more than a messaging platform it is a distributed data platform, which could easily replace major components of a legacy (or even a modern) data architecture.  "),(0,i.kt)("p",null,"It just takes a little imagination\u2026"))}m.isMDXComponent=!0},50471:function(e,a,t){a.Z=t.p+"assets/images/sdw-be6a1908ddfd66e86e152b05da8c227b.png"}}]);