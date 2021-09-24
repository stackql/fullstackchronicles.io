"use strict";(self.webpackChunkcloudy_with_a_chance_of_big_data=self.webpackChunkcloudy_with_a_chance_of_big_data||[]).push([[1693],{3905:function(e,t,a){a.d(t,{Zo:function(){return u},kt:function(){return g}});var n=a(67294);function l(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function r(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){l(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,n,l=function(e,t){if(null==e)return{};var a,n,l={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(l[a]=e[a]);return l}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(l[a]=e[a])}return l}var s=n.createContext({}),d=function(e){var t=n.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):r(r({},t),e)),a},u=function(e){var t=d(e.components);return n.createElement(s.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},p=n.forwardRef((function(e,t){var a=e.components,l=e.mdxType,i=e.originalType,s=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),p=d(a),g=l,m=p["".concat(s,".").concat(g)]||p[g]||c[g]||i;return a?n.createElement(m,r(r({ref:t},u),{},{components:a})):n.createElement(m,r({ref:t},u))}));function g(e,t){var a=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var i=a.length,r=new Array(i);r[0]=p;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o.mdxType="string"==typeof e?e:l,r[1]=o;for(var d=2;d<i;d++)r[d]=a[d];return n.createElement.apply(null,r)}return n.createElement.apply(null,a)}p.displayName="MDXCreateElement"},94073:function(e,t,a){a.r(t),a.d(t,{frontMatter:function(){return o},contentTitle:function(){return s},metadata:function(){return d},assets:function(){return u},toc:function(){return c},default:function(){return g}});var n=a(87462),l=a(63366),i=(a(67294),a(3905)),r=["components"],o={slug:"cloud-bigtable-primer-part-i",title:"Cloud Bigtable Primer - Part I",authors:["jeffreyaven"],draft:!1,hide_table_of_contents:!0,image:"images/cbt-featured-image.png",tags:["bigtable","cloud-bigtable","gcp","google-cloud-platform","googlecloudplatform","nosql"],keywords:["bigtable","cloud-bigtable","gcp","google-cloud-platform","googlecloudplatform","nosql"]},s=void 0,d={permalink:"/cloudywithachanceofbigdata.github.io/cloud-bigtable-primer-part-i",editUrl:"https://github.com/cloudywithachanceofbigdata/cloudywithachanceofbigdata.github.io/tree/main/src/blog/blog/2020-08-04-cloud-bigtable-primer-part-i/index.md",source:"@site/blog/2020-08-04-cloud-bigtable-primer-part-i/index.md",title:"Cloud Bigtable Primer - Part I",description:"Bigtable is one of the foundational services in the Google Cloud Platform and to this day one of the greatest contributions to the big data ecosystem at large. It is also one of the least known services available, with all the headlines and attention going to more widely used services such as BigQuery.",date:"2020-08-04T00:00:00.000Z",formattedDate:"August 4, 2020",tags:[{label:"bigtable",permalink:"/cloudywithachanceofbigdata.github.io/tags/bigtable"},{label:"cloud-bigtable",permalink:"/cloudywithachanceofbigdata.github.io/tags/cloud-bigtable"},{label:"gcp",permalink:"/cloudywithachanceofbigdata.github.io/tags/gcp"},{label:"google-cloud-platform",permalink:"/cloudywithachanceofbigdata.github.io/tags/google-cloud-platform"},{label:"googlecloudplatform",permalink:"/cloudywithachanceofbigdata.github.io/tags/googlecloudplatform"},{label:"nosql",permalink:"/cloudywithachanceofbigdata.github.io/tags/nosql"}],readingTime:6.585,truncated:!1,authors:[{name:"Jeffrey Aven",title:"Technologist and Cloud Consultant",url:"https://www.linkedin.com/in/jeffreyaven/",imageURL:"https://s.gravatar.com/avatar/f96573d092470c74be233e1dded5376f?s=80",key:"jeffreyaven"}],prevItem:{title:"GCP Templates for C4 Diagrams using PlantUML",permalink:"/cloudywithachanceofbigdata.github.io/gcp-templates-for-c4-diagrams-using-plantuml"},nextItem:{title:"Automated GCS Object Scanning Using DLP with Notifications Using Slack",permalink:"/cloudywithachanceofbigdata.github.io/automated-gcs-object-scanning-using-dlp-with-notifications-using-slack"}},u={authorsImageUrls:[void 0]},c=[{value:"Background",id:"background",children:[]},{value:"What is Bigtable?",id:"what-is-bigtable",children:[{value:"a map",id:"a-map",children:[]},{value:"sorted",id:"sorted",children:[]},{value:"sparse",id:"sparse",children:[]},{value:"multi-dimensional",id:"multi-dimensional",children:[]}]},{value:"When (and when not) to use Bigtable",id:"when-and-when-not-to-use-bigtable",children:[{value:"Don\u2019t use Bigtable if\u2026",id:"dont-use-bigtable-if",children:[]},{value:"Bigtable vs Relational Database Systems",id:"bigtable-vs-relational-database-systems",children:[]}]},{value:"Bigtable Data Model",id:"bigtable-data-model",children:[{value:"Cell versioning",id:"cell-versioning",children:[]}]},{value:"Bigtable Instances, Clusters, Nodes and Tables",id:"bigtable-instances-clusters-nodes-and-tables",children:[{value:"Physical Storage &amp; Column Families",id:"physical-storage--column-families",children:[]},{value:"Bigtable Availability and Replication",id:"bigtable-availability-and-replication",children:[]},{value:"Backup and Export Options for Bigtable",id:"backup-and-export-options-for-bigtable",children:[]}]},{value:"Accessing Bigtable",id:"accessing-bigtable",children:[]}],p={toc:c};function g(e){var t=e.components,o=(0,l.Z)(e,r);return(0,i.kt)("wrapper",(0,n.Z)({},p,o,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"Bigtable is one of the foundational services in the Google Cloud Platform and to this day one of the greatest contributions to the big data ecosystem at large. It is also one of the least known services available, with all the headlines and attention going to more widely used services such as BigQuery."),(0,i.kt)("h2",{id:"background"},"Background"),(0,i.kt)("p",null,"In 2006 (pre Google Cloud Platform), Google released a white paper called ",(0,i.kt)("em",{parentName:"p"},(0,i.kt)("strong",{parentName:"em"},"\u201cBigtable: A Distributed Storage System for Structured Data\u201d")),", this paper set out the reference architecture for what was to become Cloud Bigtable. This followed several other whitepapers including the GoogleFS and MapReduce whitepapers released in 2003 and 2004 which provided abstract reference architectures for the Google File System (now known as ",(0,i.kt)("strong",{parentName:"p"},(0,i.kt)("em",{parentName:"strong"},"Colossus")),") and the MapReduce algorithm. These whitepapers inspired a generation of open source distributed processing systems including Hadoop. Google has long had a pattern of publicising a generalized overview of their approach to solving different storage and processing challenges at scale through white papers."),(0,i.kt)("p",null,(0,i.kt)("a",{target:"_blank",href:a(60031).Z},(0,i.kt)("img",{alt:"Bigtable Whitepaper 2006",src:a(58958).Z}))),(0,i.kt)("p",null,"The Bigtable white paper inspired a wave of open source distributed key/value oriented NoSQL data stores including Apache HBase and Apache Cassandra."),(0,i.kt)("h2",{id:"what-is-bigtable"},"What is Bigtable?"),(0,i.kt)("p",null,"Bigtable is a distributed, petabyte scale NoSQL database. More specifically, Bigtable is\u2026"),(0,i.kt)("h3",{id:"a-map"},"a map"),(0,i.kt)("p",null,"At its core Bigtable is a distributed map or an associative array indexed by a row key, with values in columns which are created only when they are referenced. Each value is an uninterpreted byte array."),(0,i.kt)("h3",{id:"sorted"},"sorted"),(0,i.kt)("p",null,"Row keys are stored in lexographic order akin to a clustered index in a relational database."),(0,i.kt)("h3",{id:"sparse"},"sparse"),(0,i.kt)("p",null,"A given row can have any number of columns, not all columns must have values and NULLs are not stored. There may also be gaps between keys."),(0,i.kt)("h3",{id:"multi-dimensional"},"multi-dimensional"),(0,i.kt)("p",null,"All values are versioned with a timestamp (or configurable integer). Data is not updated in place, it is instead superseded with another version."),(0,i.kt)("h2",{id:"when-and-when-not-to-use-bigtable"},"When (and when not) to use Bigtable"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"You need to do many thousands of operations per second on TB+ scale data"),(0,i.kt)("li",{parentName:"ul"},"Your access patterns are well known and simple"),(0,i.kt)("li",{parentName:"ul"},"You need to support random write or random read operations (or sequential reads) - each using a row key as the primary identifier")),(0,i.kt)("h3",{id:"dont-use-bigtable-if"},"Don\u2019t use Bigtable if\u2026"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"You need explicit JOIN capability, that is joining one or more tables"),(0,i.kt)("li",{parentName:"ul"},"You need to do ad-hoc analytics"),(0,i.kt)("li",{parentName:"ul"},"Your access patterns are unknown or not well defined")),(0,i.kt)("h3",{id:"bigtable-vs-relational-database-systems"},"Bigtable vs Relational Database Systems"),(0,i.kt)("p",null,"The following table compares and contrasts Bigtable against relational databases (both transaction oriented and analytic oriented databases):"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"\xa0"),(0,i.kt)("th",{parentName:"tr",align:null},"Bigtable"),(0,i.kt)("th",{parentName:"tr",align:null},"RDBMS (OLTP)"),(0,i.kt)("th",{parentName:"tr",align:null},"RDBMS (DSS/MPP)"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"Data Layout"),(0,i.kt)("td",{parentName:"tr",align:null},"Column Family Oriented"),(0,i.kt)("td",{parentName:"tr",align:null},"Row Oriented"),(0,i.kt)("td",{parentName:"tr",align:null},"Column Oriented")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"Transaction Support"),(0,i.kt)("td",{parentName:"tr",align:null},"Single Row Only"),(0,i.kt)("td",{parentName:"tr",align:null},"Yes"),(0,i.kt)("td",{parentName:"tr",align:null},"Depends (but usually no)")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"Query DSL"),(0,i.kt)("td",{parentName:"tr",align:null},"get/put/scan/delete"),(0,i.kt)("td",{parentName:"tr",align:null},"SQL"),(0,i.kt)("td",{parentName:"tr",align:null},"SQL")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"Indexes"),(0,i.kt)("td",{parentName:"tr",align:null},"Row Key Only"),(0,i.kt)("td",{parentName:"tr",align:null},"Yes"),(0,i.kt)("td",{parentName:"tr",align:null},"Yes (typically PI based)")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"Max Data Size"),(0,i.kt)("td",{parentName:"tr",align:null},"PB+"),(0,i.kt)("td",{parentName:"tr",align:null},"'00s GB  to TB"),(0,i.kt)("td",{parentName:"tr",align:null},"TB+")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"Read/Write Throughput"),(0,i.kt)("td",{parentName:"tr",align:null},"\"'000"),(0,i.kt)("td",{parentName:"tr",align:null},'000s queries/s"'),(0,i.kt)("td",{parentName:"tr",align:null},"'000s queries/s")))),(0,i.kt)("h2",{id:"bigtable-data-model"},"Bigtable Data Model"),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},(0,i.kt)("em",{parentName:"strong"},"Tables"))," in Bigtable are comprised of rows and columns (sounds familiar so far..). Every row is uniquely identified by a ",(0,i.kt)("strong",{parentName:"p"},(0,i.kt)("em",{parentName:"strong"},"rowkey"))," (like a primary key..again sounds familiar so far)."),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},(0,i.kt)("em",{parentName:"strong"},"Columns"))," belong to ",(0,i.kt)("strong",{parentName:"p"},(0,i.kt)("em",{parentName:"strong"},"Column Families"))," and only exist when inserted, NULLs are not stored - this is where it starts to differ from a traditional RDBMS. The following image demonstrates the data model for a fictitious table in Bigtable."),(0,i.kt)("p",null,(0,i.kt)("a",{target:"_blank",href:a(79031).Z},(0,i.kt)("img",{alt:"Bigtable Data Model",src:a(13087).Z}))),(0,i.kt)("p",null,"In the previous example, we created two Column Families (",(0,i.kt)("strong",{parentName:"p"},(0,i.kt)("em",{parentName:"strong"},"cf1"))," and ",(0,i.kt)("strong",{parentName:"p"},(0,i.kt)("em",{parentName:"strong"},"cf2")),"). These are created during table definition or update operations (akin to DDL operations in the relational world). In this case, we have chosen to store primary attributes, like name, etc in cf1 and features (or derived attributes) in cf2 like indicators."),(0,i.kt)("h3",{id:"cell-versioning"},"Cell versioning"),(0,i.kt)("p",null,"Each cell has a timestamp/version associated with it, multiple versions of a row can exist. Versions are naturally stored in descending order."),(0,i.kt)("p",null,"Properties such as the max age for a cell or the maximum number of versions to be stored for any given cell are set on the Column Family. Versions are compacted through a process called ",(0,i.kt)("strong",{parentName:"p"},(0,i.kt)("em",{parentName:"strong"},"Garbage Collection"))," - not to be confused with Java Garbage Collection (albeit same idea)."),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"Row Key"),(0,i.kt)("th",{parentName:"tr",align:null},"Column"),(0,i.kt)("th",{parentName:"tr",align:null},"Value"),(0,i.kt)("th",{parentName:"tr",align:null},"Timestamp"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"123"),(0,i.kt)("td",{parentName:"tr",align:null},"cf1:status"),(0,i.kt)("td",{parentName:"tr",align:null},"ACTIVE"),(0,i.kt)("td",{parentName:"tr",align:null},"2020-06-30T08.58.27.560")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"123"),(0,i.kt)("td",{parentName:"tr",align:null},"cf1:status"),(0,i.kt)("td",{parentName:"tr",align:null},"PENDING"),(0,i.kt)("td",{parentName:"tr",align:null},"2020-06-28T06.20.18.330")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"123"),(0,i.kt)("td",{parentName:"tr",align:null},"cf1:status"),(0,i.kt)("td",{parentName:"tr",align:null},"INACTIVE"),(0,i.kt)("td",{parentName:"tr",align:null},"2020-06-27T07.59.20.460")))),(0,i.kt)("h2",{id:"bigtable-instances-clusters-nodes-and-tables"},"Bigtable Instances, Clusters, Nodes and Tables"),(0,i.kt)("p",null,'Bigtable is a "no-ops" service, meaning you do not need to configure machine types or details about the underlying infrastructure, save a few sizing or performance options - such as the number of nodes in a cluster or whether to use solid state hard drives (SSD) or the magnetic alternative (HDD). The following diagram shows the relationships and cardinality for Cloud Bigtable.'),(0,i.kt)("p",null,(0,i.kt)("a",{target:"_blank",href:a(33954).Z},(0,i.kt)("img",{alt:"Bigtable Instances, Clusters and Nodes",src:a(58069).Z}))),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},(0,i.kt)("em",{parentName:"strong"},"Clusters"))," and ",(0,i.kt)("strong",{parentName:"p"},(0,i.kt)("em",{parentName:"strong"},"nodes"))," are the physical compute layer for Bigtable, these are zonal assets, zonal and regional availability can be achieved through replication which we will discuss later in this article."),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},(0,i.kt)("em",{parentName:"strong"},"Instances"))," are a virtual abstraction for clusters, Tables belong to instances (not clusters). This is due to Bigtables underlying architecture which is based upon a separation of storage and compute as shown below."),(0,i.kt)("p",null,(0,i.kt)("a",{target:"_blank",href:a(90965).Z},(0,i.kt)("img",{alt:"Bigtable Separation of Storage and Compute",src:a(4327).Z}))),(0,i.kt)("p",null,"Bigtables separation of storage and compute allow it to scale horizontally, as nodes are stateless they can be increased to increase query performance. The underlying storage system in inherently scalable."),(0,i.kt)("h3",{id:"physical-storage--column-families"},"Physical Storage & Column Families"),(0,i.kt)("p",null,"Data (Columns) for Bigtable is stored in ",(0,i.kt)("strong",{parentName:"p"},(0,i.kt)("em",{parentName:"strong"},"Tablets")),' (as shown in the previous diagram), which store "regions" of row keys for a particular Column Family. Columns consist of a column family prefix and qualifier, for instance:'),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"cf1:col1\n")),(0,i.kt)("p",null,"A table can have one or more Column Families. Column families must be declared at schema definition time (could be a create or alter operation). A cell is an intersection of a row key and a version of a column within a column family."),(0,i.kt)("p",null,"Storage settings (such as the compaction/garbage collection properties mentioned before) can be specified for each Column Family - which can differ from other column families in the same table."),(0,i.kt)("h3",{id:"bigtable-availability-and-replication"},"Bigtable Availability and Replication"),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},(0,i.kt)("em",{parentName:"strong"},"Replication"))," is used to increase availability and durability for Cloud Bigtable \u2013 this can also be used to segregate read and write operations for the same table."),(0,i.kt)("p",null,"Data and changes to tables are replicated across multiple regions or multiple zones within the same region, this replication can be blocking (single row transactions) or non blocking (eventually consistent). However all clusters within a Bigtable instance are considered primary (writable)."),(0,i.kt)("p",null,"Requests are routed using ",(0,i.kt)("strong",{parentName:"p"},(0,i.kt)("em",{parentName:"strong"},"Application Profiles")),", a ",(0,i.kt)("strong",{parentName:"p"},(0,i.kt)("em",{parentName:"strong"},"single-cluster routing"))," policy can be used for manual failover, whereas a ",(0,i.kt)("strong",{parentName:"p"},(0,i.kt)("em",{parentName:"strong"},"multi-cluster routing"))," is used for automatic failover."),(0,i.kt)("h3",{id:"backup-and-export-options-for-bigtable"},"Backup and Export Options for Bigtable"),(0,i.kt)("p",null,"Managed backups can be taken at a table level, new tables can be created from backups. The backups cannot be exported, however table level export and import operations are available via pre-baked Dataflow templates for data stored in GCS in the following formats:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"SequenceFiles"),(0,i.kt)("li",{parentName:"ul"},"Avro Files"),(0,i.kt)("li",{parentName:"ul"},"Parquet Files"),(0,i.kt)("li",{parentName:"ul"},"CSV Files")),(0,i.kt)("h2",{id:"accessing-bigtable"},"Accessing Bigtable"),(0,i.kt)("p",null,"Bigtable data and admin functions are available via:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"cbt")," (optional component of the Google SDK)"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"hbase shell")," (REPL shell)"),(0,i.kt)("li",{parentName:"ul"},"Happybase API (Python API for Hbase)"),(0,i.kt)("li",{parentName:"ul"},"SDK libraries for:",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"Golang"),(0,i.kt)("li",{parentName:"ul"},"Python"),(0,i.kt)("li",{parentName:"ul"},"Java"),(0,i.kt)("li",{parentName:"ul"},"Node.js"),(0,i.kt)("li",{parentName:"ul"},"Ruby"),(0,i.kt)("li",{parentName:"ul"},"C#, C++, PHP, and more")))),(0,i.kt)("p",null,"As Bigtable is not a cheap service, there is a local emulator available which is great for application development. This is part of the Cloud SDK, and can be started using the following command:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"gcloud beta emulators bigtable start\n")),(0,i.kt)("p",null,"In the next article in this series we will demonstrate admin and data functions as well as the local emulator."),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"Next Up : Part II - Row Key Selection and Schema Design in Bigtable")))}g.isMDXComponent=!0},60031:function(e,t,a){t.Z=a.p+"assets/files/bigtable-osdi06-16d141802d2310614e01534fb1c82a11.pdf"},79031:function(e,t,a){t.Z=a.p+"assets/files/bigtable-data-model-0e76eb10501530b624d8be2abe3a46df.png"},33954:function(e,t,a){t.Z=a.p+"assets/files/bigtable-instances-and-nodes-b2d9e98ce7a8bf66600d284bafb5d3a9.png"},90965:function(e,t,a){t.Z=a.p+"assets/files/bigtable-storage-and-compute-b0c9a76792b16e425ee5d623d4339368.png"},13087:function(e,t,a){t.Z=a.p+"assets/images/bigtable-data-model-0e76eb10501530b624d8be2abe3a46df.png"},58069:function(e,t,a){t.Z=a.p+"assets/images/bigtable-instances-and-nodes-b2d9e98ce7a8bf66600d284bafb5d3a9.png"},4327:function(e,t,a){t.Z=a.p+"assets/images/bigtable-storage-and-compute-b0c9a76792b16e425ee5d623d4339368.png"},58958:function(e,t,a){t.Z=a.p+"assets/images/bigtable-whitepaper-09803ad0c30b5dc4fa560e006ce33021.png"}}]);