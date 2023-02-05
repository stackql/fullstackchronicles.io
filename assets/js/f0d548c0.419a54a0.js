"use strict";(self.webpackChunkfull_stack_chronicles=self.webpackChunkfull_stack_chronicles||[]).push([[33179],{61154:(e,a,t)=>{t.r(a),t.d(a,{assets:()=>l,contentTitle:()=>o,default:()=>u,frontMatter:()=>s,metadata:()=>i,toc:()=>p});var n=t(83117),r=(t(67294),t(3905));const s={slug:"stream-processing-with-spark-structured-streaming-kafka-and-snowflake-using-python",title:"Stream Processing with Spark Structured Streaming, Kafka and Snowflake using Python",authors:["jeffreyaven"],draft:!1,image:"/img/blog/kafka-spark-snowflake.png",tags:["snowflake","kafka","spark","sql","streaming"],keywords:["snowflake","kafka","spark","sql","streaming"],description:"Simple demonstration of stream processing with Spark Structured Streaming, Kafka and Snowflake using Python"},o=void 0,i={permalink:"/stream-processing-with-spark-structured-streaming-kafka-and-snowflake-using-python",editUrl:"https://github.com/stackql/fullstackchronicles.io/edit/main/src/blog/2022-04-28-stream-processing-with-spark-structured-streaming-kafka-and-snowflake-using-python/index.md",source:"@site/blog/2022-04-28-stream-processing-with-spark-structured-streaming-kafka-and-snowflake-using-python/index.md",title:"Stream Processing with Spark Structured Streaming, Kafka and Snowflake using Python",description:"Simple demonstration of stream processing with Spark Structured Streaming, Kafka and Snowflake using Python",date:"2022-04-28T00:00:00.000Z",formattedDate:"April 28, 2022",tags:[{label:"snowflake",permalink:"/tags/snowflake"},{label:"kafka",permalink:"/tags/kafka"},{label:"spark",permalink:"/tags/spark"},{label:"sql",permalink:"/tags/sql"},{label:"streaming",permalink:"/tags/streaming"}],readingTime:3.65,hasTruncateMarker:!1,authors:[{name:"Jeffrey Aven",title:"Technologist and Cloud Consultant",url:"https://www.linkedin.com/in/jeffreyaven/",imageURL:"https://s.gravatar.com/avatar/f96573d092470c74be233e1dded5376f?s=80",key:"jeffreyaven"}],frontMatter:{slug:"stream-processing-with-spark-structured-streaming-kafka-and-snowflake-using-python",title:"Stream Processing with Spark Structured Streaming, Kafka and Snowflake using Python",authors:["jeffreyaven"],draft:!1,image:"/img/blog/kafka-spark-snowflake.png",tags:["snowflake","kafka","spark","sql","streaming"],keywords:["snowflake","kafka","spark","sql","streaming"],description:"Simple demonstration of stream processing with Spark Structured Streaming, Kafka and Snowflake using Python"},prevItem:{title:"Split a large Open API or Swagger Specification into smaller documents",permalink:"/split-a-large-swagger-openapi-specification-into-smaller-documents"},nextItem:{title:"Simple CLI Application to Login to Okta using PKCE",permalink:"/simple-cli-pkce-auth-using-okta"}},l={authorsImageUrls:[void 0]},p=[{value:"Design",id:"design",level:2},{value:"Snowflake Setup",id:"snowflake-setup",level:2},{value:"The Code",id:"the-code",level:2},{value:"The Results",id:"the-results",level:2}],k={toc:p};function u(e){let{components:a,...s}=e;return(0,r.kt)("wrapper",(0,n.Z)({},k,s,{components:a,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"Structured Streaming in Spark provides a powerful framework for stream processing an analysis, such as streaming transformations, stateful streaming or sliding window operations.  "),(0,r.kt)("p",null,"Kafka is a common streaming source and sink for Spark Streaming and Structured Streaming operations.  However, there may be situations where a data warehouse (such as Snowflake) is a more appropriate target for streaming operations, especially where there is a reporting or long-term storage requirement on the data derived from the streaming source.  "),(0,r.kt)("p",null,"This article will demonstrate just how easy this is to implement using Python.  "),(0,r.kt)("h2",{id:"design"},"Design"),(0,r.kt)("p",null,"The following diagram illustrates the ingestion design for this example:  "),(0,r.kt)("p",null,(0,r.kt)("a",{target:"_blank",href:t(91286).Z},(0,r.kt)("img",{alt:"Spark Structured Streaming using Kafka and Snowflake",src:t(39930).Z,width:"948",height:"390"}))),(0,r.kt)("h2",{id:"snowflake-setup"},"Snowflake Setup"),(0,r.kt)("p",null,"Some prerequisites for Snowflake:  "),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"You will need to create a user (or use an existing user), in either case the user will need to be identified by a private key.  You will need to generate a key pair as follows:  ")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"openssl genrsa 2048 | openssl pkcs8 -topk8 -inform PEM -out rsa_key.p8 -nocrypt\nopenssl rsa -in rsa_key.p8 -pubout -out rsa_key.pub\n")),(0,r.kt)("p",null,"copy the contents of the ",(0,r.kt)("inlineCode",{parentName:"p"},"rsa_key.pub")," file, remove the ",(0,r.kt)("inlineCode",{parentName:"p"},"-----BEGIN PUBLIC KEY-----")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"-----END PUBLIC KEY-----")," strings, then remove the line breaks to form one string, use this string as the ",(0,r.kt)("inlineCode",{parentName:"p"},"RSA_PUBLIC_KEY")," in a ",(0,r.kt)("inlineCode",{parentName:"p"},"CREATE USER")," or ",(0,r.kt)("inlineCode",{parentName:"p"},"ALTER USER")," statement in Snowflake, like:  "),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sql"},"ALTER USER youruser SET RSA_PUBLIC_KEY='MIIBI...';\n")),(0,r.kt)("ol",{start:2},(0,r.kt)("li",{parentName:"ol"},"Now setup the target database, schema and table you will use to write out your stream data (the schema for the table must match the schema for the Data Stream you will use the ",(0,r.kt)("inlineCode",{parentName:"li"},"DataStreamWriter")," to emit records to Snowflake  ")),(0,r.kt)("p",null,"The user you will be using (that you setup the key pair authentication for) will need to be assigned a default role to which the appropriate write permissions are granted to the target objects in Snowflake.  You will also need to designate a virtual warehouse (which your user must have ",(0,r.kt)("inlineCode",{parentName:"p"},"USAGE")," permissions to.  "),(0,r.kt)("h2",{id:"the-code"},"The Code"),(0,r.kt)("p",null,"Now that we have the objects and user setup in Snowflake, we can construct our Spark application.  "),(0,r.kt)("p",null,"First, you will need to start your Spark session (either using ",(0,r.kt)("inlineCode",{parentName:"p"},"pyspark")," or ",(0,r.kt)("inlineCode",{parentName:"p"},"spark-submit"),") including the packages that Spark will need to connect to Kafka and to Snowflake.  "),(0,r.kt)("p",null,"The Snowflake packages include a JDBC driver and the Snowflake Connector for Spark, see ",(0,r.kt)("a",{parentName:"p",href:"https://docs.snowflake.com/en/user-guide/spark-connector.html"},"Snowflake Connector for Spark"),".  "),(0,r.kt)("p",null,"An example is shown here (package versions may vary depending upon the version of Spark you are using):  "),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"pyspark \\\n--packages \\\nnet.snowflake:snowflake-jdbc:3.13.14,\\\nnet.snowflake:spark-snowflake_2.12:2.10.0-spark_3.1,\\\norg.apache.spark:spark-sql-kafka-0-10_2.12:3.2.1\n")),(0,r.kt)("p",null,"Now that we have a spark session with the necessary packages, lets go...  "),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},'# import any required functions, set the checkpoint directory, and log level (optional)\nfrom pyspark.sql.functions import split\nspark.sparkContext.setLogLevel("ERROR")\nspark.conf.set("spark.sql.streaming.checkpointLocation", "file:///tmp")\n')),(0,r.kt)("p",null,"setup connection options for Snowflake by creating an ",(0,r.kt)("inlineCode",{parentName:"p"},"sfOptions")," dictionary  "),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},'sfOptions = {\n      "sfURL" : sfUrl,\n      "sfUser" : "avensolutions",\n      "pem_private_key": private_key,\n      "sfDatabase" : "SPARK_SNOWFLAKE_DEMO",\n      "sfSchema" : "PUBLIC",\n      "sfWarehouse" : "COMPUTE_WH",\n      "streaming_stage" : "mystage"\n}\n')),(0,r.kt)("p",null,"set a variable for the Snowflake Spark connector  "),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},'SNOWFLAKE_SOURCE_NAME = "net.snowflake.spark.snowflake"\n')),(0,r.kt)("p",null,"read messages from Kafka:    "),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},'lines = spark \\\n  .readStream \\\n  .format("kafka") \\\n  .option("kafka.bootstrap.servers", "kafkabroker:9092") \\\n  .option("subscribe", "weblogs") \\\n  .load()\n')),(0,r.kt)("p",null,"perform necessary transformations (the fields and data types in the resultant data structure must match the target table you created in Snowflake:  "),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},'log_recs = lines.select(\n    split(lines.value.cast("string"), " ").alias("data")\n    )\n    \nlog_data = log_recs.selectExpr(\n  "CAST(data[0] as string) as date",\n  "CAST(data[1] as string) as time",\n  "CAST(data[2] as string) as c_ip",  \n  "CAST(data[3] as string) as cs_username",\n  "CAST(data[4] as string) as s_sitename",  \n  "CAST(data[5] as string) as s_computername",\n  "CAST(data[6] as string) as s_ip",    \n  "CAST(data[7] as int) as s_port",  \n  "CAST(data[8] as string) as cs_method",    \n  "CAST(data[9] as string) as cs_uri_stem",  \n  "CAST(data[10] as string) as cs_uri_query",  \n  "CAST(data[11] as int) as sc_status",\n  "CAST(data[12] as int) as time_taken",    \n  "CAST(data[13] as string) as cs_version",    \n  "CAST(data[14] as string) as cs_host",\n  "CAST(data[15] as string) as User_Agent",\n  "CAST(data[16] as string) as Referer",    \n)\n')),(0,r.kt)("p",null,"write to Snowflake!  "),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},'query = log_data\\\n    .writeStream\\\n    .format(SNOWFLAKE_SOURCE_NAME) \\\n    .options(**sfOptions) \\\n    .option("dbtable", "WEB_LOGS") \\\n    .trigger(processingTime=\'30 seconds\') \\\n    .start()\n    \nquery.awaitTermination()\n')),(0,r.kt)("admonition",{type:"info"},(0,r.kt)("p",{parentName:"admonition"},"Note that I have included the ",(0,r.kt)("inlineCode",{parentName:"p"},"processingTime")," trigger of ",(0,r.kt)("inlineCode",{parentName:"p"},"30 seconds")," (this is akin to the ",(0,r.kt)("inlineCode",{parentName:"p"},"batchInterval")," in the DStream API), you should tune this to get a balance between batch sizes to ingest into Snowflake (which will benefit from larger batches) and latency.")),(0,r.kt)("h2",{id:"the-results"},"The Results"),(0,r.kt)("p",null,(0,r.kt)("a",{target:"_blank",href:t(40049).Z},(0,r.kt)("img",{alt:"Spark Structured Streaming into Snowflake",src:t(36838).Z,width:"1920",height:"1040"}))),(0,r.kt)("p",null,"Enjoy!  "),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"if you have enjoyed this post, please consider ",(0,r.kt)("a",{parentName:"p",href:"https://www.buymeacoffee.com/jeffreyaven"},(0,r.kt)("strong",{parentName:"a"},"buying me a coffee \u2615"))," to help me keep writing!")))}u.isMDXComponent=!0},3905:(e,a,t)=>{t.d(a,{Zo:()=>k,kt:()=>m});var n=t(67294);function r(e,a,t){return a in e?Object.defineProperty(e,a,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[a]=t,e}function s(e,a){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);a&&(n=n.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),t.push.apply(t,n)}return t}function o(e){for(var a=1;a<arguments.length;a++){var t=null!=arguments[a]?arguments[a]:{};a%2?s(Object(t),!0).forEach((function(a){r(e,a,t[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):s(Object(t)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(t,a))}))}return e}function i(e,a){if(null==e)return{};var t,n,r=function(e,a){if(null==e)return{};var t,n,r={},s=Object.keys(e);for(n=0;n<s.length;n++)t=s[n],a.indexOf(t)>=0||(r[t]=e[t]);return r}(e,a);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(n=0;n<s.length;n++)t=s[n],a.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var l=n.createContext({}),p=function(e){var a=n.useContext(l),t=a;return e&&(t="function"==typeof e?e(a):o(o({},a),e)),t},k=function(e){var a=p(e.components);return n.createElement(l.Provider,{value:a},e.children)},u={inlineCode:"code",wrapper:function(e){var a=e.children;return n.createElement(n.Fragment,{},a)}},c=n.forwardRef((function(e,a){var t=e.components,r=e.mdxType,s=e.originalType,l=e.parentName,k=i(e,["components","mdxType","originalType","parentName"]),c=p(t),m=r,d=c["".concat(l,".").concat(m)]||c[m]||u[m]||s;return t?n.createElement(d,o(o({ref:a},k),{},{components:t})):n.createElement(d,o({ref:a},k))}));function m(e,a){var t=arguments,r=a&&a.mdxType;if("string"==typeof e||r){var s=t.length,o=new Array(s);o[0]=c;var i={};for(var l in a)hasOwnProperty.call(a,l)&&(i[l]=a[l]);i.originalType=e,i.mdxType="string"==typeof e?e:r,o[1]=i;for(var p=2;p<s;p++)o[p]=t[p];return n.createElement.apply(null,o)}return n.createElement.apply(null,t)}c.displayName="MDXCreateElement"},40049:(e,a,t)=>{t.d(a,{Z:()=>n});const n=t.p+"assets/files/snowflake-screenshot-97a035bab5f113d5139441dde516099d.png"},91286:(e,a,t)=>{t.d(a,{Z:()=>n});const n=t.p+"assets/files/spark-streaming-kafka-snowflake-5b6babb75a8da1443183fabc68c704a1.png"},36838:(e,a,t)=>{t.d(a,{Z:()=>n});const n=t.p+"assets/images/snowflake-screenshot-97a035bab5f113d5139441dde516099d.png"},39930:(e,a,t)=>{t.d(a,{Z:()=>n});const n=t.p+"assets/images/spark-streaming-kafka-snowflake-5b6babb75a8da1443183fabc68c704a1.png"}}]);