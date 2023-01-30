"use strict";(self.webpackChunkfull_stack_chronicles=self.webpackChunkfull_stack_chronicles||[]).push([[76162],{3905:(e,t,a)=>{a.d(t,{Zo:()=>c,kt:()=>d});var r=a(67294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function s(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?s(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):s(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},s=Object.keys(e);for(r=0;r<s.length;r++)a=s[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(r=0;r<s.length;r++)a=s[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var l=r.createContext({}),p=function(e){var t=r.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},c=function(e){var t=p(e.components);return r.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,s=e.originalType,l=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),m=p(a),d=n,f=m["".concat(l,".").concat(d)]||m[d]||u[d]||s;return a?r.createElement(f,o(o({ref:t},c),{},{components:a})):r.createElement(f,o({ref:t},c))}));function d(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var s=a.length,o=new Array(s);o[0]=m;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:n,o[1]=i;for(var p=2;p<s;p++)o[p]=a[p];return r.createElement.apply(null,o)}return r.createElement.apply(null,a)}m.displayName="MDXCreateElement"},85927:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>p,contentTitle:()=>i,default:()=>m,frontMatter:()=>o,metadata:()=>l,toc:()=>c});var r=a(83117),n=(a(67294),a(3905)),s=a(59943);const o={slug:"multi-stage-etl-framework-using-spark-sql",title:"Multi Stage ETL Framework using Spark SQL",authors:["jeffreyaven"],draft:!1,hide_table_of_contents:!0,description:"A simple configuration driven Spark SQL ETL framework",image:"images/spark-sql-etl-framework.png",tags:["etl","spark","sql"],keywords:["etl","spark","sql"]},i=void 0,l={permalink:"/multi-stage-etl-framework-using-spark-sql",editUrl:"https://github.com/stackql/fullstackchronicles.io/edit/main/blog/2019-01-09-multi-stage-etl-framework-using-spark-sql/index.md",source:"@site/blog/2019-01-09-multi-stage-etl-framework-using-spark-sql/index.md",title:"Multi Stage ETL Framework using Spark SQL",description:"A simple configuration driven Spark SQL ETL framework",date:"2019-01-09T00:00:00.000Z",formattedDate:"January 9, 2019",tags:[{label:"etl",permalink:"/tags/etl"},{label:"spark",permalink:"/tags/spark"},{label:"sql",permalink:"/tags/sql"}],readingTime:2.23,hasTruncateMarker:!1,authors:[{name:"Jeffrey Aven",title:"Technologist and Cloud Consultant",url:"https://www.linkedin.com/in/jeffreyaven/",imageURL:"https://s.gravatar.com/avatar/f96573d092470c74be233e1dded5376f?s=80",key:"jeffreyaven"}],frontMatter:{slug:"multi-stage-etl-framework-using-spark-sql",title:"Multi Stage ETL Framework using Spark SQL",authors:["jeffreyaven"],draft:!1,hide_table_of_contents:!0,description:"A simple configuration driven Spark SQL ETL framework",image:"images/spark-sql-etl-framework.png",tags:["etl","spark","sql"],keywords:["etl","spark","sql"]},prevItem:{title:"Infrastructure Automation using AWS Lambda",permalink:"/infrastructure-automation-using-aws-lambda"}},p={authorsImageUrls:[void 0]},c=[{value:"Sources",id:"sources",level:3},{value:"Transforms",id:"transforms",level:3},{value:"Targets",id:"targets",level:3},{value:"Process SQL Statements",id:"process-sql-statements",level:3}],u={toc:c};function m(e){let{components:t,...o}=e;return(0,n.kt)("wrapper",(0,r.Z)({},u,o,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"Spark SQL ETL Framework",src:a(16453).Z,width:"451",height:"223"})),(0,n.kt)("p",null,"Most traditional data warehouse or datamart ETL routines consist of multi stage SQL transformations, often a series of CTAS (",(0,n.kt)("inlineCode",{parentName:"p"},"CREATE TABLE AS SELECT"),") statements usually creating transient or temporary tables \u2013 such as volatile tables in Teradata or Common Table Expressions (CTE\u2019s)."),(0,n.kt)("admonition",{title:"Spark Training Courses",type:"note"},(0,n.kt)("p",{parentName:"admonition"},(0,n.kt)("a",{parentName:"p",href:"https://academy.alphazetta.ai/data-transformation-and-analysis-using-apache-spark/"},"Data Transformation and Analysis Using Apache Spark"),(0,n.kt)("br",{parentName:"p"}),"\n",(0,n.kt)("a",{parentName:"p",href:"https://academy.alphazetta.ai/stream-and-event-processing-using-apache-spark/"},"Stream and Event Processing using Apache Spark"),(0,n.kt)("br",{parentName:"p"}),"\n",(0,n.kt)("a",{parentName:"p",href:"https://academy.alphazetta.ai/advanced-analytics-using-apache-spark/"},"Advanced Analytics Using Apache Spark"))),(0,n.kt)("p",null,"The initial challenge when moving from a SQL/MPP based ETL framework platformed on Oracle, Teradata, SQL Server, etc to a Spark based ETL framework is what to do with this\u2026"),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"Multi Stage SQL Based ETL",src:a(33666).Z,width:"736",height:"805"})),(0,n.kt)("p",null,"One approach is to use the lightweight, configuration driven, multi stage Spark SQL based ETL framework described in this post."),(0,n.kt)("p",null,"This framework is driven from a YAML configuration document. YAML was preferred over JSON as a document format as it allows for multi-line statements (SQL statements), as well as comments - which are very useful as SQL can sometimes be undecipherable even for the person that wrote it."),(0,n.kt)("p",null,"The YAML config document has three main sections: ",(0,n.kt)("strong",{parentName:"p"},(0,n.kt)("inlineCode",{parentName:"strong"},"sources")),", ",(0,n.kt)("strong",{parentName:"p"},(0,n.kt)("inlineCode",{parentName:"strong"},"transforms"))," and ",(0,n.kt)("strong",{parentName:"p"},(0,n.kt)("inlineCode",{parentName:"strong"},"targets")),"."),(0,n.kt)("h3",{id:"sources"},"Sources"),(0,n.kt)("p",null,"The ",(0,n.kt)("strong",{parentName:"p"},(0,n.kt)("inlineCode",{parentName:"strong"},"sources"))," section is used to configure the input data source(s) including optional column and row filters. In this case the data sources are tables available in the Spark catalog (for instance the AWS Glue Catalog or a Hive Metastore), this could easily be extended to read from other datasources using the Spark DataFrameReader API."),(0,n.kt)(s.Z,{id:"eaf03229466718ee125e0a6d23370f1b",mdxType:"Gist"}),(0,n.kt)("h3",{id:"transforms"},"Transforms"),(0,n.kt)("p",null,"The ",(0,n.kt)("strong",{parentName:"p"},(0,n.kt)("inlineCode",{parentName:"strong"},"transforms"))," section contains the multiple SQL statements to be run in sequence where each statement creates a temporary view using objects created by preceding statements."),(0,n.kt)(s.Z,{id:"89ad7ac6b036e5f22b2d3dec43b1fe44",mdxType:"Gist"}),(0,n.kt)("h3",{id:"targets"},"Targets"),(0,n.kt)("p",null,"Finally the ",(0,n.kt)("strong",{parentName:"p"},(0,n.kt)("inlineCode",{parentName:"strong"},"targets"))," section writes out the final object or objects to a specified destination (S3, HDFS, etc)."),(0,n.kt)(s.Z,{id:"5af780dd6b6e5ddd79a4cac8a59e6a69",mdxType:"Gist"}),(0,n.kt)("h3",{id:"process-sql-statements"},"Process SQL Statements"),(0,n.kt)("p",null,"The ",(0,n.kt)("strong",{parentName:"p"},(0,n.kt)("inlineCode",{parentName:"strong"},"process_sql_statements.py"))," script that is used to execute the framework is very simple (30 lines of code not including comments, etc). It loads the sources into Spark Dataframes and then creates temporary views to reference these datasets in the ",(0,n.kt)("strong",{parentName:"p"},(0,n.kt)("inlineCode",{parentName:"strong"},"transforms"))," section, then sequentially executes the SQL statements in the list of transforms. Lastly the script writes out the final view or views to the desired destination \u2013 in this case parquet files stored in S3 were used as the target."),(0,n.kt)("p",null,"You could implement an object naming convention such as prefixing object names with ",(0,n.kt)("inlineCode",{parentName:"p"},"sv_"),", ",(0,n.kt)("inlineCode",{parentName:"p"},"iv_"),", ",(0,n.kt)("inlineCode",{parentName:"p"},"fv_")," (for source view, intermediate view and final view respectively) if this helps you differentiate between the different objects."),(0,n.kt)("p",null,"To use this framework you would simply use ",(0,n.kt)("strong",{parentName:"p"},(0,n.kt)("inlineCode",{parentName:"strong"},"spark-submit"))," as follows:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"},"spark-submit process_sql_statements.py config.yml\n")),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},(0,n.kt)("em",{parentName:"p"},"Full source code can be found at: ",(0,n.kt)("a",{parentName:"em",href:"https://github.com/avensolutions/spark-sql-etl-framework"},(0,n.kt)("strong",{parentName:"a"},"https://github.com/avensolutions/spark-sql-etl-framework"))))))}m.isMDXComponent=!0},59943:(e,t,a)=>{a.d(t,{Z:()=>o});var r=a(67294);a(45697);function n(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function s(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}const o=function(e){function t(){return n(this,t),s(this,e.apply(this,arguments))}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,e),t.prototype.componentDidMount=function(){this._updateIframeContent()},t.prototype.componentDidUpdate=function(e,t){this._updateIframeContent()},t.prototype._defineUrl=function(){var e=this.props,t=e.id,a=e.file;return"https://gist.github.com/"+t+".js"+(a?"?file="+a:"")},t.prototype._updateIframeContent=function(){var e=this.props,t=e.id,a=e.file,r=this.iframeNode,n=r.document;r.contentDocument?n=r.contentDocument:r.contentWindow&&(n=r.contentWindow.document);var s='<html><head><base target="_parent"><style>*{font-size:12px;}</style></head><body '+("onload=\"parent.document.getElementById('"+(a?"gist-"+t+"-"+a:"gist-"+t)+"').style.height=document.body.scrollHeight + 'px'\"")+">"+('<script type="text/javascript" src="'+this._defineUrl()+'"><\/script>')+"</body></html>";n.open(),n.writeln(s),n.close()},t.prototype.render=function(){var e=this,t=this.props,a=t.id,n=t.file;return r.createElement("iframe",{ref:function(t){e.iframeNode=t},width:"100%",frameBorder:0,id:n?"gist-"+a+"-"+n:"gist-"+a})},t}(r.PureComponent)},33666:(e,t,a)=>{a.d(t,{Z:()=>r});const r=a.p+"assets/images/multi-stage-sql-1b6298de71ac35e0ecde3af82a831be6.png"},16453:(e,t,a)=>{a.d(t,{Z:()=>r});const r=a.p+"assets/images/spark-sql-etl-framework-7491c174dee5cda2a37f00480d593b80.png"}}]);