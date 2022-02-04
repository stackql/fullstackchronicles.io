"use strict";(self.webpackChunkcloudy_with_a_chance_of_big_data=self.webpackChunkcloudy_with_a_chance_of_big_data||[]).push([[5108],{3905:function(e,t,a){a.d(t,{Zo:function(){return d},kt:function(){return u}});var n=a(67294);function i(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){i(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,n,i=function(e,t){if(null==e)return{};var a,n,i={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(i[a]=e[a]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(i[a]=e[a])}return i}var l=n.createContext({}),c=function(e){var t=n.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},d=function(e){var t=c(e.components);return n.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},h=n.forwardRef((function(e,t){var a=e.components,i=e.mdxType,r=e.originalType,l=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),h=c(a),u=i,m=h["".concat(l,".").concat(u)]||h[u]||p[u]||r;return a?n.createElement(m,o(o({ref:t},d),{},{components:a})):n.createElement(m,o({ref:t},d))}));function u(e,t){var a=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=a.length,o=new Array(r);o[0]=h;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:i,o[1]=s;for(var c=2;c<r;c++)o[c]=a[c];return n.createElement.apply(null,o)}return n.createElement.apply(null,a)}h.displayName="MDXCreateElement"},84883:function(e,t,a){a.r(t),a.d(t,{frontMatter:function(){return l},contentTitle:function(){return c},metadata:function(){return d},assets:function(){return p},toc:function(){return h},default:function(){return m}});var n=a(83117),i=a(80102),r=(a(67294),a(3905)),o=a(59943),s=["components"],l={slug:"change-data-capture-at-scale-using-spark",title:"Change Data Capture at Scale using Spark",authors:["jeffreyaven"],draft:!1,hide_table_of_contents:!0,image:"images/CDC-using-Spark.png",tags:["big-data","cdc","pyspark","python","spark"],keywords:["big-data","cdc","pyspark","python","spark"]},c=void 0,d={permalink:"/change-data-capture-at-scale-using-spark",editUrl:"https://github.com/cloudywithachanceofbigdata/cloudywithachanceofbigdata.github.io/tree/main/src/blog/blog/2019-06-28-change-data-capture-at-scale-using-spark/index.md",source:"@site/blog/2019-06-28-change-data-capture-at-scale-using-spark/index.md",title:"Change Data Capture at Scale using Spark",description:"Change Data Capture (CDC) is one of the most challenging processing patterns to implement at scale. I personally have had several cracks at this using various different frameworks and approaches, the most recent of which was implemented using Spark \u2013 and I think I have finally found the best approach. Even though the code examples referenced use Spark, the pattern is language agnostic \u2013 the focus is on the approach not the specific implementation (as this could be applied to any framework or runtime).",date:"2019-06-28T00:00:00.000Z",formattedDate:"June 28, 2019",tags:[{label:"big-data",permalink:"/tags/big-data"},{label:"cdc",permalink:"/tags/cdc"},{label:"pyspark",permalink:"/tags/pyspark"},{label:"python",permalink:"/tags/python"},{label:"spark",permalink:"/tags/spark"}],readingTime:8.225,truncated:!1,authors:[{name:"Jeffrey Aven",title:"Technologist and Cloud Consultant",url:"https://www.linkedin.com/in/jeffreyaven/",imageURL:"https://s.gravatar.com/avatar/f96573d092470c74be233e1dded5376f?s=80",key:"jeffreyaven"}],frontMatter:{slug:"change-data-capture-at-scale-using-spark",title:"Change Data Capture at Scale using Spark",authors:["jeffreyaven"],draft:!1,hide_table_of_contents:!0,image:"images/CDC-using-Spark.png",tags:["big-data","cdc","pyspark","python","spark"],keywords:["big-data","cdc","pyspark","python","spark"]},prevItem:{title:"Managing Secrets in CICD Pipelines",permalink:"/managing-secrets-in-cicd-pipelines"},nextItem:{title:"Synthetic CDC Data Generator",permalink:"/synthetic-cdc-data-generator"}},p={authorsImageUrls:[void 0]},h=[{value:"Overview",id:"overview",children:[],level:2},{value:"The Example",id:"the-example",children:[],level:2},{value:"The Results",id:"the-results",children:[{value:"Day 1:",id:"day-1",children:[],level:3},{value:"Day 2:",id:"day-2",children:[],level:3}],level:2},{value:"Pattern Details",id:"pattern-details",children:[{value:"Current and Historical Datasets",id:"current-and-historical-datasets",children:[],level:3},{value:"Type 2 SCDs (sort of)",id:"type-2-scds-sort-of",children:[],level:3},{value:"The Configuration",id:"the-configuration",children:[],level:3},{value:"The Algorithm",id:"the-algorithm",children:[{value:"Stage 1 \u2013 Type Cast and Hash Incoming Data",id:"stage-1--type-cast-and-hash-incoming-data",children:[],level:4},{value:"Stage 2 \u2013 Determine INSERTs",id:"stage-2--determine-inserts",children:[],level:4},{value:"Stage 3 - Determine DELETEs or Missing Records",id:"stage-3---determine-deletes-or-missing-records",children:[],level:4},{value:"Stage 4 - Determine UPDATEs or Unchanged Records",id:"stage-4---determine-updates-or-unchanged-records",children:[],level:4}],level:3},{value:"Key Callouts",id:"key-callouts",children:[{value:"Metastore Integration",id:"metastore-integration",children:[],level:4},{value:"Further optimisations",id:"further-optimisations",children:[],level:4}],level:3}],level:2}],u={toc:h};function m(e){var t=e.components,l=(0,i.Z)(e,s);return(0,r.kt)("wrapper",(0,n.Z)({},u,l,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"Change Data Capture (CDC) is one of the most challenging processing patterns to implement at scale. I personally have had several cracks at this using various different frameworks and approaches, the most recent of which was implemented using Spark \u2013 and I think I have finally found the best approach. Even though the code examples referenced use Spark, the pattern is language agnostic \u2013 the focus is on the approach not the specific implementation (as this could be applied to any framework or runtime)."),(0,r.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"Spark Training Courses")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},(0,r.kt)("a",{parentName:"p",href:"https://academy.alphazetta.ai/data-transformation-and-analysis-using-apache-spark/"},"Data Transformation and Analysis Using Apache Spark"),(0,r.kt)("br",{parentName:"p"}),"\n",(0,r.kt)("a",{parentName:"p",href:"https://academy.alphazetta.ai/stream-and-event-processing-using-apache-spark/"},"Stream and Event Processing using Apache Spark"),(0,r.kt)("br",{parentName:"p"}),"\n",(0,r.kt)("a",{parentName:"p",href:"https://academy.alphazetta.ai/advanced-analytics-using-apache-spark/"},"Advanced Analytics Using Apache Spark")))),(0,r.kt)("p",null,"The first challenge you are faced with, is to compare a very large dataset (representing the current state of an object) with another potentially very large dataset (representing new or incoming data). Ideally, you would like the process to be configuration driven and accommodate such things as composite primary keys, or operational columns which you would like to restrict from change detection. You may also want to implement a pattern to segregate sensitive attributes from non-sensitive attributes."),(0,r.kt)("h2",{id:"overview"},"Overview"),(0,r.kt)("p",null,"This pattern (and all my other recent attempts) is fundamentally based upon calculating a deterministic hash of the key and non-key attribute(s), and then using this hash as the basis for comparison. The difference between this pattern and my other attempts is in the distillation and reconstitution of data during the process, as well as breaking the pattern into discrete stages (designed to minimize the impact to other applications). This pattern can be used to process delta or full datasets."),(0,r.kt)("p",null,"A high-level flowchart representing the basic pattern is shown here:"),(0,r.kt)("p",null,(0,r.kt)("a",{target:"_blank",href:a(14980).Z},(0,r.kt)("img",{alt:"CDC Flowchart",src:a(8721).Z,width:"382",height:"1118"}))),(0,r.kt)("h2",{id:"the-example"},"The Example"),(0,r.kt)("p",null,"The example provided uses the ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/avensolutions/synthetic-cdc-data-generator"},"Synthetic CDC Data Generator application"),", configuring an incoming set with 5 uuid columns acting as a composite key, and 10 random number columns acting as non key values. The initial days payload consists of 10,000 records, the subsequent days payload consists of another 10,000 records. From the initial dataset, a ",(0,r.kt)("inlineCode",{parentName:"p"},"DELETE")," operation was performed at the source system for 20% of records, an ",(0,r.kt)("inlineCode",{parentName:"p"},"UPDATE")," was performed on 40% of the records and the remaining 40% of records were unchanged. In this case the 20% of records that were deleted at the source, were replaced by new ",(0,r.kt)("inlineCode",{parentName:"p"},"INSERT")," operations creating new keys."),(0,r.kt)("p",null,"After creating the synthesized day 1 and day 2 datasets, the files are processed as follows:"),(0,r.kt)("p",null,"$ spark-submit cdc.py config.yaml data/day1 2019-06-18",(0,r.kt)("br",{parentName:"p"}),"\n","$ spark-submit cdc.py config.yaml data/day2 2019-06-19"),(0,r.kt)("p",null,"Where ",(0,r.kt)("inlineCode",{parentName:"p"},"config.yaml")," is the configuration for the dataset, data/day1 and data/day2 represent the different data files, and 2019-06-18 and 2019-06-19 represent a business effective date."),(0,r.kt)("h2",{id:"the-results"},"The Results"),(0,r.kt)("p",null,"You should see the following output from running the preceding commands for day 1 and day 2 respectively:"),(0,r.kt)("h3",{id:"day-1"},"Day 1:"),(0,r.kt)(o.Z,{id:"b75edc7825b46c12b328d78d47b4b902",mdxType:"Gist"}),(0,r.kt)("h3",{id:"day-2"},"Day 2:"),(0,r.kt)(o.Z,{id:"ca92e132105fb5bb381bf9dfca562bf4",mdxType:"Gist"}),(0,r.kt)("p",null,"A summary analysis of the resultant dataset should show:"),(0,r.kt)(o.Z,{id:"ded1f98dc4fce13c9bb3d12a51a46b94",mdxType:"Gist"}),(0,r.kt)("h2",{id:"pattern-details"},"Pattern Details"),(0,r.kt)("p",null,"Details about the pattern and its implementation follow."),(0,r.kt)("h3",{id:"current-and-historical-datasets"},"Current and Historical Datasets"),(0,r.kt)("p",null,"The output of each operation will yield a current dataset (that is the current stateful representation of a give object) and a historical dataset partition (capturing the net changes from the previous state in an appended partition)."),(0,r.kt)("p",null,"This is useful, because often consumers will primarily query the latest state of an object. The change sets (or historical dataset partitions) can be used for more advanced analysis by sophisticated users."),(0,r.kt)("h3",{id:"type-2-scds-sort-of"},"Type 2 SCDs (sort of)"),(0,r.kt)("p",null,"Two operational columns are added to each current and historical object:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"OPERATION")," : Represents the last known operation to the record, valid values include :",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"I")," (",(0,r.kt)("inlineCode",{parentName:"li"},"INSERT"),")"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"U")," (",(0,r.kt)("inlineCode",{parentName:"li"},"UPDATE"),")"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"D")," (",(0,r.kt)("inlineCode",{parentName:"li"},"DELETE")," \u2013 hard ",(0,r.kt)("inlineCode",{parentName:"li"},"DELETE"),"s, applies to full datasets only)"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"X")," (Not supplied, applies to delta processing only)"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"N")," (No change)"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"EFF_START_DATE"))),(0,r.kt)("p",null,"Since data structures on most big data or cloud storage platforms are immutable, we only store the effective start date for each record, this is changed as needed with each coarse-grained operation on the current object. The effective end date is inferred by the presence of a new effective start date (or change in the ",(0,r.kt)("inlineCode",{parentName:"p"},"EFF_START_DATE")," value for a given record)."),(0,r.kt)("h3",{id:"the-configuration"},"The Configuration"),(0,r.kt)("p",null,"I am using a YAML document to store the configuration for the pattern. Important attributes to include in your configuration are a list of keys and non keys and their datatype (this implementation does type casting as well). Other important attributes include the table names and file paths for the current and historical data structures."),(0,r.kt)("p",null,"The configuration is read at the beginning of a routine as an input along with the path of an incoming data file (a CSV file in this case) and a business effective date (which will be used as the ",(0,r.kt)("inlineCode",{parentName:"p"},"EFF_START_DATE")," for new or updated records)."),(0,r.kt)("p",null,"Processing is performed using the specified key and non key attributes and the output datasets (current and historical) are written to columnar storage files (parquet in this case). This is designed to make subsequent access and processing more efficient."),(0,r.kt)("h3",{id:"the-algorithm"},"The Algorithm"),(0,r.kt)("p",null,"I have broken the process into stages as follows:"),(0,r.kt)("h4",{id:"stage-1--type-cast-and-hash-incoming-data"},"Stage 1 \u2013 Type Cast and Hash Incoming Data"),(0,r.kt)("p",null,"The first step is to create deterministic hashes of the configured key and non key values for incoming data. The hashes are calculated based upon a list of elements representing the key and non key values using the MD5 algorithm. The hashes for each record are then stored with the respective record. Furthermore, the fields are casted their target datatype as specified in the configuration. Both of these operations can be performed in a single pass of each row using a ",(0,r.kt)("inlineCode",{parentName:"p"},"map()")," operation."),(0,r.kt)("p",null,"Importantly we only calculate hashes once upon arrival of new data, as the hashes are persisted for the life of the data \u2013 and the data structures are immutable \u2013 the hashes should never change or be invalidated."),(0,r.kt)("h4",{id:"stage-2--determine-inserts"},"Stage 2 \u2013 Determine INSERTs"),(0,r.kt)("p",null,"We now compare Incoming Hashes with previously calculated hash values for the (previous day\u2019s) current object. If no current object exists for the dataset, then it can be assumed this is a first run. In this case every record is considered as an ",(0,r.kt)("inlineCode",{parentName:"p"},"INSERT")," with an ",(0,r.kt)("inlineCode",{parentName:"p"},"EFF_START_DATE")," of the business effective date supplied."),(0,r.kt)("p",null,"If there is a current object, then the key and non key hash values (only the hash values) are read from the current object. These are then compared to the respective hashes of the incoming data (which should still be in memory)."),(0,r.kt)("p",null,"Given the full outer join:"),(0,r.kt)("p",null,"incoming","_","data(keyhash, nonkeyhash)\nFULL OUTER JOIN",(0,r.kt)("br",{parentName:"p"}),"\n","current","_","data(keyhash, nonkeyhash)\nON keyhash"),(0,r.kt)("p",null,"Keys which exist in the left entity which do not exist in the right entity must be the results of an INSERT operation."),(0,r.kt)("p",null,"Tag these records with an operation of ",(0,r.kt)("inlineCode",{parentName:"p"},"I")," with an ",(0,r.kt)("inlineCode",{parentName:"p"},"EFF_START_DATE")," of the business effective date, then rejoin only these records with their full attribute payload from the incoming dataset. Finally, write out these records to the current and historical partition in ",(0,r.kt)("inlineCode",{parentName:"p"},"overwrite")," mode."),(0,r.kt)("h4",{id:"stage-3---determine-deletes-or-missing-records"},"Stage 3 - Determine DELETEs or Missing Records"),(0,r.kt)("p",null,"Referring the previous full outer join operation, keys which exist in the right entity (current object) which do not appear in the left entity (incoming data) will be the result of a (hard) ",(0,r.kt)("inlineCode",{parentName:"p"},"DELETE")," operation if you are processing full snapshots, otherwise if you are processing deltas these would be missing records (possibly because there were no changes at the source)."),(0,r.kt)("p",null,"Tag these records as ",(0,r.kt)("inlineCode",{parentName:"p"},"D")," or ",(0,r.kt)("inlineCode",{parentName:"p"},"X")," respectively with an ",(0,r.kt)("inlineCode",{parentName:"p"},"EFF_START_DATE")," of the business effective date, rejoin these records with their full attribute payload from the current dataset, then write out these records to the current and historical partition in ",(0,r.kt)("inlineCode",{parentName:"p"},"append")," mode."),(0,r.kt)("h4",{id:"stage-4---determine-updates-or-unchanged-records"},"Stage 4 - Determine UPDATEs or Unchanged Records"),(0,r.kt)("p",null,"Again, referring to the previous full outer join, keys which exist in both the incoming and current datasets must be either the result of an ",(0,r.kt)("inlineCode",{parentName:"p"},"UPDATE")," or they could be unchanged. To determine which case they fall under, compare the non key hashes. If the non key hashes differ, it must have been a result of an ",(0,r.kt)("inlineCode",{parentName:"p"},"UPDATE")," operation at the source, otherwise the record would be unchanged."),(0,r.kt)("p",null,"Tag these records as ",(0,r.kt)("inlineCode",{parentName:"p"},"U")," or ",(0,r.kt)("inlineCode",{parentName:"p"},"N")," respectively with an ",(0,r.kt)("inlineCode",{parentName:"p"},"EFF_START_DATE")," of the business effective date (in the case of an update - otherwise maintain the current ",(0,r.kt)("inlineCode",{parentName:"p"},"EFF_START_DATE"),"), rejoin these records with their full attribute payload from the incoming dataset, then write out these records to the current and historical partition in ",(0,r.kt)("inlineCode",{parentName:"p"},"append")," mode."),(0,r.kt)("h3",{id:"key-callouts"},"Key Callouts"),(0,r.kt)("p",null,"A summary of the key callouts from this pattern are:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Use the RDD API for iterative record operations (such as type casting and hashing)"),(0,r.kt)("li",{parentName:"ul"},"Persist hashes with the records"),(0,r.kt)("li",{parentName:"ul"},"Use Dataframes for ",(0,r.kt)("inlineCode",{parentName:"li"},"JOIN")," operations"),(0,r.kt)("li",{parentName:"ul"},"Only perform ",(0,r.kt)("inlineCode",{parentName:"li"},"JOIN"),"s with the ",(0,r.kt)("inlineCode",{parentName:"li"},"keyhash")," and ",(0,r.kt)("inlineCode",{parentName:"li"},"nonkeyhash")," columns \u2013 this minimizes the amount of data shuffled across the network"),(0,r.kt)("li",{parentName:"ul"},"Write output data in columnar (Parquet) format"),(0,r.kt)("li",{parentName:"ul"},"Break the routine into stages, covering each operation, culminating with a ",(0,r.kt)("inlineCode",{parentName:"li"},"saveAsParquet()")," action \u2013 this may seem expensive but for large datsets it is more efficient to break down DAGs for each operation"),(0,r.kt)("li",{parentName:"ul"},"Use caching for objects which will be reused between actions")),(0,r.kt)("h4",{id:"metastore-integration"},"Metastore Integration"),(0,r.kt)("p",null,"Although I did not include this in my example, you could easily integrate this pattern with a metastore (such as a Hive metastore or AWS Glue Catalog), by using table objects and ",(0,r.kt)("inlineCode",{parentName:"p"},"ALTER TABLE")," statements to add historical partitions."),(0,r.kt)("h4",{id:"further-optimisations"},"Further optimisations"),(0,r.kt)("p",null,"If the incoming data is known to be relatively small (in the case of delta processing for instance), you could consider a broadcast join where the smaller incoming data is distributed to all of the different Executors hosting partitions from the current dataset."),(0,r.kt)("p",null,"Also you could add a key to the column config to configure a column to be nullable or not."),(0,r.kt)("p",null,"Happy CDCing!"),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"Full source code for this article can be found at: ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/avensolutions/cdc-at-scale-using-spark"},"https://github.com/avensolutions/cdc-at-scale-using-spark"))))}m.isMDXComponent=!0},14980:function(e,t,a){t.Z=a.p+"assets/files/CDC-59f029c756f942661da9a4744801d227.png"},59943:function(e,t,a){var n=a(67294);a(45697);function i(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function r(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}var o=function(e){function t(){return i(this,t),r(this,e.apply(this,arguments))}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,e),t.prototype.componentDidMount=function(){this._updateIframeContent()},t.prototype.componentDidUpdate=function(e,t){this._updateIframeContent()},t.prototype._defineUrl=function(){var e=this.props,t=e.id,a=e.file;return"https://gist.github.com/"+t+".js"+(a?"?file="+a:"")},t.prototype._updateIframeContent=function(){var e=this.props,t=e.id,a=e.file,n=this.iframeNode,i=n.document;n.contentDocument?i=n.contentDocument:n.contentWindow&&(i=n.contentWindow.document);var r='<html><head><base target="_parent"><style>*{font-size:12px;}</style></head><body '+("onload=\"parent.document.getElementById('"+(a?"gist-"+t+"-"+a:"gist-"+t)+"').style.height=document.body.scrollHeight + 'px'\"")+">"+('<script type="text/javascript" src="'+this._defineUrl()+'"><\/script>')+"</body></html>";i.open(),i.writeln(r),i.close()},t.prototype.render=function(){var e=this,t=this.props,a=t.id,i=t.file;return n.createElement("iframe",{ref:function(t){e.iframeNode=t},width:"100%",frameBorder:0,id:i?"gist-"+a+"-"+i:"gist-"+a})},t}(n.PureComponent);t.Z=o},8721:function(e,t,a){t.Z=a.p+"assets/images/CDC-59f029c756f942661da9a4744801d227.png"}}]);