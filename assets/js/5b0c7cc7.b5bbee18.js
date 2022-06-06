"use strict";(self.webpackChunkfull_stack_chronicles=self.webpackChunkfull_stack_chronicles||[]).push([[81266],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return d}});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var u=r.createContext({}),s=function(e){var t=r.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},c=function(e){var t=s(e.components);return r.createElement(u.Provider,{value:t},e.children)},g={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},p=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,u=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),p=s(n),d=o,m=p["".concat(u,".").concat(d)]||p[d]||g[d]||a;return n?r.createElement(m,l(l({ref:t},c),{},{components:n})):r.createElement(m,l({ref:t},c))}));function d(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,l=new Array(a);l[0]=p;var i={};for(var u in t)hasOwnProperty.call(t,u)&&(i[u]=t[u]);i.originalType=e,i.mdxType="string"==typeof e?e:o,l[1]=i;for(var s=2;s<a;s++)l[s]=n[s];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}p.displayName="MDXCreateElement"},61306:function(e,t,n){n.r(t),n.d(t,{assets:function(){return c},contentTitle:function(){return u},default:function(){return d},frontMatter:function(){return i},metadata:function(){return s},toc:function(){return g}});var r=n(83117),o=n(80102),a=(n(67294),n(3905)),l=["components"],i={slug:"use-bigquery-to-trigger-cloud-run",title:"Use BigQuery to trigger Cloud Run",authors:["tomklimovski"],draft:!1,hide_table_of_contents:!0,image:"/img/fullstackchronicles-cover-image.png",tags:["big-query","bigquery","gcp","google-cloud-platform","googlecloudplatform"],keywords:["big-query","bigquery","gcp","google-cloud-platform","googlecloudplatform"]},u=void 0,s={permalink:"/use-bigquery-to-trigger-cloud-run",editUrl:"https://github.com/stackql/fullstackchronicles.io/tree/main/src/blog/blog/2021-06-19-use-bigquery-to-trigger-cloud-run/index.md",source:"@site/blog/2021-06-19-use-bigquery-to-trigger-cloud-run/index.md",title:"Use BigQuery to trigger Cloud Run",description:"So you're using BigQuery (BQ). It's all set up and humming perfectly. Maybe now, you want to run an ELT job whenever a new table partition is created, or maybe you want to retrain your ML model whenever new rows are inserted into the BQ table.",date:"2021-06-19T00:00:00.000Z",formattedDate:"June 19, 2021",tags:[{label:"big-query",permalink:"/tags/big-query"},{label:"bigquery",permalink:"/tags/bigquery"},{label:"gcp",permalink:"/tags/gcp"},{label:"google-cloud-platform",permalink:"/tags/google-cloud-platform"},{label:"googlecloudplatform",permalink:"/tags/googlecloudplatform"}],readingTime:3.795,truncated:!1,authors:[{name:"Tom Klimovski",title:"Senior Cloud Engineer",url:"https://github.com/tomklimovskigamma",imageURL:"http://2.gravatar.com/avatar/58faa98ad68138dd1997f828f00a882e?s=80",key:"tomklimovski"}],frontMatter:{slug:"use-bigquery-to-trigger-cloud-run",title:"Use BigQuery to trigger Cloud Run",authors:["tomklimovski"],draft:!1,hide_table_of_contents:!0,image:"/img/fullstackchronicles-cover-image.png",tags:["big-query","bigquery","gcp","google-cloud-platform","googlecloudplatform"],keywords:["big-query","bigquery","gcp","google-cloud-platform","googlecloudplatform"]},prevItem:{title:"Using Jsonnet to Configure Multiple Environments",permalink:"/using-jsonnet-to-configure-multiple-environments"},nextItem:{title:"Azure Static Web App Review",permalink:"/azure-static-web-app-review"}},c={authorsImageUrls:[void 0]},g=[{value:"Let&#39;s go!",id:"lets-go",level:2},{value:"Time for some code",id:"time-for-some-code",level:2},{value:"Now we Cloud Run",id:"now-we-cloud-run",level:2},{value:"I always forget about the permissions",id:"i-always-forget-about-the-permissions",level:2},{value:"Finally, the event trigger",id:"finally-the-event-trigger",level:3}],p={toc:g};function d(e){var t=e.components,i=(0,o.Z)(e,l);return(0,a.kt)("wrapper",(0,r.Z)({},p,i,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"So you're using BigQuery (BQ). It's all set up and humming perfectly. Maybe now, you want to run an ELT job whenever a new table partition is created, or maybe you want to retrain your ML model whenever new rows are inserted into the BQ table."),(0,a.kt)("p",null,"In my previous article on ",(0,a.kt)("a",{parentName:"p",href:"https://cloudywithachanceofbigdata.com/eventarc-the-state-of-eventing-in-google-cloud/"},"EventArc"),", we went through how Logging can help us create eventing-type functionality in your application. Let's take it a step further and walk through how we can couple BigQuery and Cloud Run."),(0,a.kt)("p",null,"In this article you will learn how to"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Tie together BigQuery and Cloud Run"),(0,a.kt)("li",{parentName:"ul"},"Use BigQuery's audit log to trigger Cloud Run"),(0,a.kt)("li",{parentName:"ul"},"With those triggers, run your required code")),(0,a.kt)("h2",{id:"lets-go"},"Let's go!"),(0,a.kt)("p",null,"Let's create a temporary dataset within BigQuery named ",(0,a.kt)("inlineCode",{parentName:"p"},"tmp_bq_to_cr"),"."),(0,a.kt)("p",null,"In that same dataset, let's create a table in which we will insert some rows to test our BQ audit log. Let's grab some rows from a BQ public dataset to create this table:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sql"},"CREATE OR REPLACE TABLE tmp_bq_to_cr.cloud_run_trigger AS\nSELECT\n date, country_name, new_persons_vaccinated, population\n from `bigquery-public-data.covid19_open_data.covid19_open_data`\n where country_name='Australia'\n AND\n date > '2021-05-31'\nLIMIT 100\n")),(0,a.kt)("p",null,"Following this, let's run an insert query that will help us build our mock database trigger:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sql"},"INSERT INTO tmp_bq_to_cr.cloud_run_trigger\nVALUES('2021-06-18', 'Australia', 3, 1000)\n")),(0,a.kt)("p",null,"Now, in another browser tab let's navigate to ",(0,a.kt)("a",{parentName:"p",href:"https://console.cloud.google.com/logs/query;query=bigquery.v2?_ga=2.187390252.-505923201.1592376029"},"BQ Audit Events")," and look for our ",(0,a.kt)("inlineCode",{parentName:"p"},"INSERT INTO")," event:"),(0,a.kt)("p",null,(0,a.kt)("a",{target:"_blank",href:n(1923).Z},(0,a.kt)("img",{alt:"BQ-insert-event",src:n(57025).Z,width:"767",height:"641"}))),(0,a.kt)("p",null,"There will be several audit logs for any given BQ action. Only after a query is parsed does BQ know which table we want to interact with, so the initial log will, for e.g., not have the table name."),(0,a.kt)("p",null,"We don't want any old audit log, so we need to ensure we look for a unique set of attributes that clearly identify our action, such as in the diagram above."),(0,a.kt)("p",null,"In the case of inserting rows, the attributes are a combination of"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"The method is ",(0,a.kt)("inlineCode",{parentName:"li"},"google.cloud.bigquery.v2.JobService.InsertJob")),(0,a.kt)("li",{parentName:"ul"},"The name of the table being inserted to is the ",(0,a.kt)("inlineCode",{parentName:"li"},"protoPayload.resourceName")),(0,a.kt)("li",{parentName:"ul"},"The dataset id is available as ",(0,a.kt)("inlineCode",{parentName:"li"},"resource.labels.dataset_id")),(0,a.kt)("li",{parentName:"ul"},"The number of inserted rows is ",(0,a.kt)("inlineCode",{parentName:"li"},"protoPayload.metadata.tableDataChanged.insertedRowsCount"))),(0,a.kt)("h2",{id:"time-for-some-code"},"Time for some code"),(0,a.kt)("p",null,"Now that we've identified the payload that we're looking for, we can write the action for Cloud Run. We've picked Python and Flask to help us in this instance. (",(0,a.kt)("a",{parentName:"p",href:"https://github.com/GoogleCloudPlatform/bigquery-oreilly-book/blob/master/blogs/cloud_run/main.py"},"full code is on GitHub"),")."),(0,a.kt)("p",null,"First, let's filter out the noise and find the event we want to process"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python"},"@app.route('/', methods=['POST'])\ndef index():\n    # Gets the Payload data from the Audit Log\n    content = request.json\n    try:\n        ds = content['resource']['labels']['dataset_id']\n        proj = content['resource']['labels']['project_id']\n        tbl = content['protoPayload']['resourceName']\n        rows = int(content['protoPayload']['metadata']\n                   ['tableDataChange']['insertedRowsCount'])\n        if ds == 'cloud_run_tmp' and \\\n           tbl.endswith('tables/cloud_run_trigger') and rows > 0:\n            query = create_agg()\n            return \"table created\", 200\n    except:\n        # if these fields are not in the JSON, ignore\n        pass\n    return \"ok\", 200\n")),(0,a.kt)("p",null,"Now that we've found the event we want, let's execute the action we need. In this example, we'll aggregate and write out to a new table ",(0,a.kt)("inlineCode",{parentName:"p"},"created_by_trigger"),":"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python"},'def create_agg():\n    client = bigquery.Client()\n    query = """\n    CREATE OR REPLACE TABLE tmp_bq_to_cr.created_by_trigger AS\n    SELECT\n      count_name, SUM(new_persons_vaccinated) AS n\n    FROM tmp_bq_to_cr.cloud_run_trigger\n    """\n    client.query(query)\n    return query\n')),(0,a.kt)("p",null,"The Dockerfile for the container is simply a basic Python container into which we install Flask and the BigQuery client library:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-docker"},"FROM python:3.9-slim\nRUN pip install Flask==1.1.2 gunicorn==20.0.4 google-cloud-bigquery\nENV APP_HOME /app\nWORKDIR $APP_HOME\nCOPY *.py ./\nCMD exec gunicorn --bind :$PORT main:app\n")),(0,a.kt)("h2",{id:"now-we-cloud-run"},"Now we Cloud Run"),(0,a.kt)("p",null,"Build the container and deploy it using a couple of gcloud commands:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},'SERVICE=bq-cloud-run\nPROJECT=$(gcloud config get-value project)\nCONTAINER="gcr.io/${PROJECT}/${SERVICE}"\ngcloud builds submit --tag ${CONTAINER}\ngcloud run deploy ${SERVICE} --image $CONTAINER --platform managed\n')),(0,a.kt)("h2",{id:"i-always-forget-about-the-permissions"},"I always forget about the permissions"),(0,a.kt)("p",null,"In order for the trigger to work, the Cloud Run service account will need the following permissions:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"gcloud projects add-iam-policy-binding $PROJECT \\\n    --member=\"serviceAccount:service-${PROJECT_NO}@gcp-sa-pubsub.iam.gserviceaccount.com\"\\\n    --role='roles/iam.serviceAccountTokenCreator'\n\ngcloud projects add-iam-policy-binding $PROJECT \\\n    --member=serviceAccount:${SVC_ACCOUNT} \\\n    --role='roles/eventarc.admin'\n")),(0,a.kt)("h3",{id:"finally-the-event-trigger"},"Finally, the event trigger"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"gcloud eventarc triggers create ${SERVICE}-trigger \\\n  --location ${REGION} --service-account ${SVC_ACCOUNT} \\\n  --destination-run-service ${SERVICE}  \\\n  --event-filters type=google.cloud.audit.log.v1.written \\\n  --event-filters methodName=google.cloud.bigquery.v2.JobService.InsertJob \\\n  --event-filters serviceName=bigquery.googleapis.com\n")),(0,a.kt)("p",null,"Important to note here is that we're triggering on ",(0,a.kt)("em",{parentName:"p"},"any")," Insert log created by BQ That's why in this action we had to filter these events based on the payload."),(0,a.kt)("h1",{id:"take-it-for-a-spin"},"Take it for a spin"),(0,a.kt)("p",null,"Now, try out the BigQuery -> Cloud Run trigger and action. Go to the BigQuery console and insert a row or two:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sql"},"INSERT INTO tmp_bq_to_cr.cloud_run_trigger\nVALUES('2021-06-18', 'Australia', 5, 25000)\n")),(0,a.kt)("p",null,"Watch as a new table called ",(0,a.kt)("inlineCode",{parentName:"p"},"created_by_trigger")," gets created! You have successfully triggered a Cloud Run action on a database event in BigQuery."),(0,a.kt)("p",null,"Enjoy!"))}d.isMDXComponent=!0},1923:function(e,t,n){t.Z=n.p+"assets/files/bq-insert-event-69f31456522fd0a5d613b44c3a7171a9.png"},57025:function(e,t,n){t.Z=n.p+"assets/images/bq-insert-event-69f31456522fd0a5d613b44c3a7171a9.png"}}]);