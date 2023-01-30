"use strict";(self.webpackChunkfull_stack_chronicles=self.webpackChunkfull_stack_chronicles||[]).push([[1841],{3905:(e,t,a)=>{a.d(t,{Zo:()=>d,kt:()=>f});var n=a(67294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},l=Object.keys(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var s=n.createContext({}),p=function(e){var t=n.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},d=function(e){var t=p(e.components);return n.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,l=e.originalType,s=e.parentName,d=o(e,["components","mdxType","originalType","parentName"]),m=p(a),f=r,c=m["".concat(s,".").concat(f)]||m[f]||u[f]||l;return a?n.createElement(c,i(i({ref:t},d),{},{components:a})):n.createElement(c,i({ref:t},d))}));function f(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=a.length,i=new Array(l);i[0]=m;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o.mdxType="string"==typeof e?e:r,i[1]=o;for(var p=2;p<l;p++)i[p]=a[p];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}m.displayName="MDXCreateElement"},41493:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>u,frontMatter:()=>l,metadata:()=>o,toc:()=>p});var n=a(83117),r=(a(67294),a(3905));const l={slug:"loading-parquet-files-into-snowflake",title:"Loading Parquet Files into Snowflake",authors:["jeffreyaven"],draft:!1,image:"/img/blog/parquet-to-snowflake.png",tags:["snowflake","parquet","python","spark","pyspark","bigquery"],keywords:["snowflake","parquet","python","spark","pyspark","bigquery"],description:"This article demonstrates how to automate and streamline the ingestion of Parquet formatted files into Snowflake."},i=void 0,o={permalink:"/loading-parquet-files-into-snowflake",editUrl:"https://github.com/stackql/fullstackchronicles.io/edit/main/blog/2022-07-30-loading-parquet-files-into-snowflake/index.md",source:"@site/blog/2022-07-30-loading-parquet-files-into-snowflake/index.md",title:"Loading Parquet Files into Snowflake",description:"This article demonstrates how to automate and streamline the ingestion of Parquet formatted files into Snowflake.",date:"2022-07-30T00:00:00.000Z",formattedDate:"July 30, 2022",tags:[{label:"snowflake",permalink:"/tags/snowflake"},{label:"parquet",permalink:"/tags/parquet"},{label:"python",permalink:"/tags/python"},{label:"spark",permalink:"/tags/spark"},{label:"pyspark",permalink:"/tags/pyspark"},{label:"bigquery",permalink:"/tags/bigquery"}],readingTime:6.21,hasTruncateMarker:!1,authors:[{name:"Jeffrey Aven",title:"Technologist and Cloud Consultant",url:"https://www.linkedin.com/in/jeffreyaven/",imageURL:"https://s.gravatar.com/avatar/f96573d092470c74be233e1dded5376f?s=80",key:"jeffreyaven"}],frontMatter:{slug:"loading-parquet-files-into-snowflake",title:"Loading Parquet Files into Snowflake",authors:["jeffreyaven"],draft:!1,image:"/img/blog/parquet-to-snowflake.png",tags:["snowflake","parquet","python","spark","pyspark","bigquery"],keywords:["snowflake","parquet","python","spark","pyspark","bigquery"],description:"This article demonstrates how to automate and streamline the ingestion of Parquet formatted files into Snowflake."},prevItem:{title:"DBT in 5 Minutes",permalink:"/dbt-in-five-minutes"},nextItem:{title:"Analyze Developer Activity with StackQL, Jupyter and BigQuery",permalink:"/analyze-developer-activity-with-stackql-jupyter-bigquery"}},s={authorsImageUrls:[void 0]},p=[{value:"Background",id:"background",level:2},{value:"Streamlined Ingestion for Parquet Files into Snowflake",id:"streamlined-ingestion-for-parquet-files-into-snowflake",level:2},{value:"Generate Table DDL",id:"generate-table-ddl",level:3},{value:"Generate Named Stage DDL",id:"generate-named-stage-ddl",level:3},{value:"Generate <code>COPY</code> commands",id:"generate-copy-commands",level:3},{value:"Load your data",id:"load-your-data",level:3}],d={toc:p};function u(e){let{components:t,...a}=e;return(0,r.kt)("wrapper",(0,n.Z)({},d,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"Loading Parquet format files into BigQuery is straightforward, you just need to specify the file location (local, Google Cloud Storage, Drive, Amazon S3 or Azure Blob storage) and thats pretty much it, BigQuery works the rest out from there.  "),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"bq load \\\n--location=australia-southeast2 \\\n--project_id=parquet-demo \\\n--source_format=PARQUET \\\nparquet_test.dim_calendar \\\n.\\Calendar.gzip\n")),(0,r.kt)("p",null,"In Snowflake, however, it is not as simple, I'll share my approach to automating this here.  "),(0,r.kt)("admonition",{type:"info"},(0,r.kt)("p",{parentName:"admonition"},"Parquet is a self-describing, column-oriented storage format commonly used in distributed systems for input and output.  Data in Parquet files is serialised for optimised consumption from Parquet client libraries and packages such as ",(0,r.kt)("inlineCode",{parentName:"p"},"pandas"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"pyarrow"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"fastparquet"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"dask"),", and ",(0,r.kt)("inlineCode",{parentName:"p"},"pyspark"),".")),(0,r.kt)("h2",{id:"background"},"Background"),(0,r.kt)("p",null,"Data in a Parquet file is stored in a single column for a self-contained dataset.  If you were to ingest this into Snowflake without knowing the schema you could do something like this...   "),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sql"},"CREATE OR REPLACE TABLE PARQUET_TEST.PUBLIC.DIM_CALENDAR (\n  Data variant\n);\n\nCOPY INTO PARQUET_TEST.PUBLIC.DIM_CALENDAR \n(\n  Data\n) FROM (\nSELECT\n*\nFROM\n@PARQUET_TEST.PUBLIC.DIM_CALENDAR_STAGE)\n  file_format = (TYPE = parquet);\n")),(0,r.kt)("p",null,"You would end up with something like...   "),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"th"},"Row")),(0,r.kt)("th",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"th"},"Data")))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"1")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},'{"CalMonthOfYearNo": 6, "CalYear": 2020, ... }'))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"2")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},'{"CalMonthOfYearNo": 6, "CalYear": 2020, ... }'))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"...")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"..."))))),(0,r.kt)("p",null,"You could then have a second stage of processing to convert this into a normal relational structure.  "),(0,r.kt)("p",null,"Or you could do this in one step, with a little prep work ahead of time.  In my scenario I was given several parquet files from a client for a one-off load into Snowflake, several files for a fact table and multiple single files representing different dimension tables.  "),(0,r.kt)("h2",{id:"streamlined-ingestion-for-parquet-files-into-snowflake"},"Streamlined Ingestion for Parquet Files into Snowflake"),(0,r.kt)("p",null,"To collapse the formatting and uploading of Parquet files into a materialized table into one step, we need to do a couple of things:  "),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Create the target table with the correct schema (column names and data types); and"),(0,r.kt)("li",{parentName:"ol"},"perform a projection in our ",(0,r.kt)("inlineCode",{parentName:"li"},"COPY")," command from the single column containing all of the data (represented by ",(0,r.kt)("inlineCode",{parentName:"li"},"$1")," in Snowflake) into columns defined in step 1")),(0,r.kt)("p",null,"Since this is technically a transformation and only named stages are supported for ",(0,r.kt)("inlineCode",{parentName:"p"},"COPY")," transformations, we need to create a stage for the copy.  In my case there is a pre-existing Storage Integration in place that can be used by the stage.  "),(0,r.kt)("h3",{id:"generate-table-ddl"},"Generate Table DDL"),(0,r.kt)("p",null,"To automate the generation of the DDL to create the table and stage and the ",(0,r.kt)("inlineCode",{parentName:"p"},"COPY")," command, I used Python and Spark (which has first class support for Parquet files).  Parquet datatypes are largely the same as Snowflake, but if we needed to, we could create a map and modify the target types during the DDL generation.  "),(0,r.kt)("p",null,"First copy specimen Parquet formatted files to a local directory, the script we are creating can then iterate through the parquet files and generate all of the commands we will need saved to a ",(0,r.kt)("inlineCode",{parentName:"p"},".sql")," file.  "),(0,r.kt)("p",null,"With some setup information provided (not shown for brevity), we will first go through each file in the directory, capture metadata along with the schema (column name and data type) as shown here:  "),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},"for file in files:\n    tableMap = {}\n    table = file.stem\n    spark = launch_spark_session()\n    parquetFile = spark.read.parquet(\"%s/%s\" %(BASE_DIR, file))\n    data_types = parquetFile.dtypes\n    stop_spark_session(spark)\n    tableMap['name'] = table\n    tableMap['file'] = file\n    tableMap['data_types'] = data_types\n    allTables.append(tableMap)\n")),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"allTables")," list looks something like this...  "),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},"[{'name': 'Calendar', 'file': PosixPath('data/dim/Calendar.gzip'), 'data_types': [('Time_ID', 'bigint'), ('CalYear', 'bigint'), ('CalMonthOfYearNo', 'bigint'), ('FinYear', 'bigint'), ('FinWeekOfYearNo', 'bigint')]}, ... ]\n")),(0,r.kt)("p",null,"Next we generate the ",(0,r.kt)("inlineCode",{parentName:"p"},"CREATE TABLE")," statement using the ",(0,r.kt)("inlineCode",{parentName:"p"},"allTables")," list:  "),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},'# create output file for all sql\nwith open(\'all_tables.sql\', \'w\') as f:\n    for table in allTables:\n        print("processing %s..." % table[\'name\'])\n        f.write("/*** Create %s Table***/" % table[\'name\'].upper())\n        sql = """\nCREATE OR REPLACE TABLE %s.%s.%s (\n""" % (database, schema, table[\'name\'].upper())\n        for column in table[\'data_types\']:\n            sql += "  %s %s,\\n" % (column[0], column[1])\n        sql = sql[:-2] + "\\n);"\n        f.write(sql)\n        f.write("\\n\\n")\n')),(0,r.kt)("h3",{id:"generate-named-stage-ddl"},"Generate Named Stage DDL"),(0,r.kt)("p",null,"Then we generate the stage in S3 from which the files will be loaded:  "),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},"        f.write(\"/*** Create %s Stage***/\" % table['name'].upper())\n        sql = \"\"\"\nCREATE OR REPLACE STAGE %s.%s.%s_STAGE \n  url='%s/%s'\n  storage_integration = %s\n  encryption=(type='AWS_SSE_KMS' kms_key_id = '%s');\n\"\"\" % (database, schema, table['name'].upper(), s3_prefix, table['file'], storage_int, kms_key_id)\n        f.write(sql)\n        f.write(\"\\n\\n\")\n")),(0,r.kt)("h3",{id:"generate-copy-commands"},"Generate ",(0,r.kt)("inlineCode",{parentName:"h3"},"COPY")," commands"),(0,r.kt)("p",null,"Then we generate the ",(0,r.kt)("inlineCode",{parentName:"p"},"COPY")," commands...  "),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},'        f.write("/*** Copying Data into %s ***/" % table[\'name\'].upper())\n        sql = """\nCOPY INTO %s.%s.%s \n(\\n""" % (database, schema, table[\'name\'].upper())\n        for column in table[\'data_types\']:\n            sql += "  %s,\\n" % column[0]\n        sql = sql[:-2] + "\\n)"\n        sql += " FROM (\\nSELECT\\n"\n        for column in table[\'data_types\']:\n            sql += "  $1:%s::%s,\\n" % (column[0], column[1])\n        sql = sql[:-2] + "\\nFROM\\n"\n        sql += "@%s.%s.%s_STAGE)\\n" % (database, schema, table[\'name\'].upper()) \n        sql += "  file_format = (TYPE = parquet);"\n        f.write(sql)\n        f.write("\\n\\n")\n')),(0,r.kt)("p",null,"Since this is a one off load, we will go ahead and drop the stage we created as it is no longer needed (this step is optional).."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},'        f.write("/*** Dropping stage for %s ***/" % table[\'name\'].upper())\n        sql = """\nDROP STAGE %s.%s.%s_STAGE; \n""" % (database, schema, table[\'name\'].upper())\n        f.write(sql)\n        f.write("\\n\\n")\n')),(0,r.kt)("p",null,"The resultant file created looks like this.."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sql"},"/*** Create CALENDAR Table***/\nCREATE OR REPLACE TABLE PARQUET_TEST.PUBLIC.DIM_CALENDAR (\n  Time_ID bigint,\n  CalYear bigint,\n  CalMonthOfYearNo bigint,\n  FinYear bigint,\n  FinWeekOfYearNo bigint\n);\n\n/*** Create DIM_CALENDAR Stage***/\nCREATE OR REPLACE STAGE PARQUET_TEST.PUBLIC.DIM_CALENDAR_STAGE \n  url='s3://my-bucket/data/dim/Calendar.gzip'\n  storage_integration = my_storage_int\n  encryption=(type='AWS_SSE_KMS' kms_key_id = '4f715ec9-ee8e-44ab-b35d-8daf36c05f19');\n\n/*** Copying Data into DIM_CALENDAR ***/\nCOPY INTO PARQUET_TEST.PUBLIC.DIM_CALENDAR \n(\n  Time_ID,\n  CalYear,\n  CalMonthOfYearNo,\n  FinYear,\n  FinWeekOfYearNo\n) FROM (\nSELECT\n  $1:Time_ID::bigint,\n  $1:CalYear::bigint,\n  $1:CalMonthOfYearNo::bigint,\n  $1:FinYear::bigint,\n  $1:FinWeekOfYearNo::bigint\nFROM\n@PARQUET_TEST.PUBLIC.DIM_CALENDAR_STAGE)\n  file_format = (TYPE = parquet);\n\n/*** Dropping stage for DIM_CALENDAR ***/\nDROP STAGE PARQUET_TEST.PUBLIC.DIM_CALENDAR_STAGE; \n")),(0,r.kt)("h3",{id:"load-your-data"},"Load your data"),(0,r.kt)("p",null,"You can then run this along with all of the other dimension and fact table DDL and COPY commands generated to perform the one-off load from parquet files. You can find the complete code below, enjoy!  "),(0,r.kt)("details",null,(0,r.kt)("summary",null,"Complete Code"),(0,r.kt)("pre",null,"from pathlib import Path",(0,r.kt)("br",null),"from pyspark.sql import SparkSession"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},'def launch_spark_session():\n    return SparkSession \\\n        .builder \\\n        .appName("Parquet DDL Generation") \\\n        .getOrCreate()\n\ndef stop_spark_session(spark):\n    spark.stop()\n\nallTables = []\ndatabase = "PARQUET_TEST" \nschema = "PUBLIC"\ns3_prefix = \'s3://my-bucket\'\nstorage_int = \'my_storage_int\'\nkms_key_id = \'4f715ec9-ee8e-44ab-b35d-8daf36c05f19\'\n\nBASE_DIR = Path(__file__).resolve().parent\ndirectory = \'data/dim\'\nfiles = Path(directory).glob(\'*.gzip\')\nfor file in files:\n    tableMap = {}\n    table = file.stem\n    spark = launch_spark_session()\n    parquetFile = spark.read.parquet("%s/%s" %(BASE_DIR, file))\n    data_types = parquetFile.dtypes\n    stop_spark_session(spark)\n    tableMap[\'name\'] = table\n    tableMap[\'file\'] = file\n    tableMap[\'data_types\'] = data_types\n    allTables.append(tableMap)\n\n# create output file for all sql\nwith open(\'all_tables.sql\', \'w\') as f:\n    for table in allTables:\n        print("processing %s..." % table[\'name\'])\n        f.write("/*** Create %s Table***/" % table[\'name\'].upper())\n        sql = """\nCREATE OR REPLACE TABLE %s.%s.%s (\n""" % (database, schema, table[\'name\'].upper())\n        for column in table[\'data_types\']:\n            sql += "  %s %s,\\n" % (column[0], column[1])\n        sql = sql[:-2] + "\\n);"\n        f.write(sql)\n        f.write("\\n\\n")\n        \n        f.write("/*** Create %s Stage***/" % table[\'name\'].upper())\n        sql = """\nCREATE OR REPLACE STAGE %s.%s.%s_STAGE \n  url=\'%s/%s\'\n  storage_integration = %s\n  encryption=(type=\'AWS_SSE_KMS\' kms_key_id = \'%s\');\n""" % (database, schema, table[\'name\'].upper(), s3_prefix, table[\'file\'], storage_int, kms_key_id)\n        f.write(sql)\n        f.write("\\n\\n")\n\n        f.write("/*** Copying Data into %s ***/" % table[\'name\'].upper())\n        sql = """\nCOPY INTO %s.%s.%s \n(\\n""" % (database, schema, table[\'name\'].upper())\n        for column in table[\'data_types\']:\n            sql += "  %s,\\n" % column[0]\n        sql = sql[:-2] + "\\n)"\n        sql += " FROM (\\nSELECT\\n"\n        for column in table[\'data_types\']:\n            sql += "  $1:%s::%s,\\n" % (column[0], column[1])\n        sql = sql[:-2] + "\\nFROM\\n"\n        sql += "@%s.%s.%s_STAGE)\\n" % (database, schema, table[\'name\'].upper()) \n        sql += "  file_format = (TYPE = parquet);"\n        f.write(sql)\n        f.write("\\n\\n")\n\n        f.write("/*** Dropping stage for %s ***/" % table[\'name\'].upper())\n        sql = """\nDROP STAGE %s.%s.%s_STAGE; \n""" % (database, schema, table[\'name\'].upper())\n        f.write(sql)\n        f.write("\\n\\n")\n'))))}u.isMDXComponent=!0}}]);