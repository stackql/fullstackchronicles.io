"use strict";(self.webpackChunkfull_stack_chronicles=self.webpackChunkfull_stack_chronicles||[]).push([[43053],{3905:(e,t,o)=>{o.d(t,{Zo:()=>c,kt:()=>g});var n=o(67294);function r(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}function a(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,n)}return o}function i(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?a(Object(o),!0).forEach((function(t){r(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):a(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}function l(e,t){if(null==e)return{};var o,n,r=function(e,t){if(null==e)return{};var o,n,r={},a=Object.keys(e);for(n=0;n<a.length;n++)o=a[n],t.indexOf(o)>=0||(r[o]=e[o]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)o=a[n],t.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(r[o]=e[o])}return r}var s=n.createContext({}),u=function(e){var t=n.useContext(s),o=t;return e&&(o="function"==typeof e?e(t):i(i({},t),e)),o},c=function(e){var t=u(e.components);return n.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},p=n.forwardRef((function(e,t){var o=e.components,r=e.mdxType,a=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),p=u(o),g=r,h=p["".concat(s,".").concat(g)]||p[g]||d[g]||a;return o?n.createElement(h,i(i({ref:t},c),{},{components:o})):n.createElement(h,i({ref:t},c))}));function g(e,t){var o=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=o.length,i=new Array(a);i[0]=p;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:r,i[1]=l;for(var u=2;u<a;u++)i[u]=o[u];return n.createElement.apply(null,i)}return n.createElement.apply(null,o)}p.displayName="MDXCreateElement"},57343:(e,t,o)=>{o.r(t),o.d(t,{assets:()=>u,contentTitle:()=>l,default:()=>p,frontMatter:()=>i,metadata:()=>s,toc:()=>c});var n=o(83117),r=(o(67294),o(3905)),a=o(59943);const i={slug:"query-cloud-sql-through-big-query",title:"Query Cloud SQL through Big Query",authors:["jeffreyaven"],draft:!1,hide_table_of_contents:!0,image:"images/cloud-sql-federated-queries.png",tags:["big-query","bigquery","cloudsql","gcp","google-cloud-platform","googlecloudplatform"],keywords:["big-query","bigquery","cloudsql","gcp","google-cloud-platform","googlecloudplatform"]},l=void 0,s={permalink:"/query-cloud-sql-through-big-query",editUrl:"https://github.com/stackql/fullstackchronicles.io/tree/main/src/blog/blog/2020-02-08-query-cloud-sql-through-big-query/index.md",source:"@site/blog/2020-02-08-query-cloud-sql-through-big-query/index.md",title:"Query Cloud SQL through Big Query",description:"cloudsql federated queries",date:"2020-02-08T00:00:00.000Z",formattedDate:"February 8, 2020",tags:[{label:"big-query",permalink:"/tags/big-query"},{label:"bigquery",permalink:"/tags/bigquery"},{label:"cloudsql",permalink:"/tags/cloudsql"},{label:"gcp",permalink:"/tags/gcp"},{label:"google-cloud-platform",permalink:"/tags/google-cloud-platform"},{label:"googlecloudplatform",permalink:"/tags/googlecloudplatform"}],readingTime:3.795,hasTruncateMarker:!1,authors:[{name:"Jeffrey Aven",title:"Technologist and Cloud Consultant",url:"https://www.linkedin.com/in/jeffreyaven/",imageURL:"https://s.gravatar.com/avatar/f96573d092470c74be233e1dded5376f?s=80",key:"jeffreyaven"}],frontMatter:{slug:"query-cloud-sql-through-big-query",title:"Query Cloud SQL through Big Query",authors:["jeffreyaven"],draft:!1,hide_table_of_contents:!0,image:"images/cloud-sql-federated-queries.png",tags:["big-query","bigquery","cloudsql","gcp","google-cloud-platform","googlecloudplatform"],keywords:["big-query","bigquery","cloudsql","gcp","google-cloud-platform","googlecloudplatform"]},prevItem:{title:"Spark in the Google Cloud Platform Part 1",permalink:"/spark-in-the-google-cloud-platform-part-1"},nextItem:{title:"Google Cloud SQL \u2013 Availability for PostgreSQL \u2013 Part II (Read Replicas)",permalink:"/google-cloud-sql-availability-for-postgresql-read-replicas"}},u={authorsImageUrls:[void 0]},c=[{value:"Connecting to Cloud SQL",id:"connecting-to-cloud-sql",level:2},{value:"Big Query Federated Queries for Cloud SQL",id:"big-query-federated-queries-for-cloud-sql",level:2},{value:"Setting it up",id:"setting-it-up",level:2},{value:"Step 1. Enable a Public IP on the Cloud SQL instance",id:"step-1-enable-a-public-ip-on-the-cloud-sql-instance",level:3},{value:"Step 2. Create a Big Query dataset which will be used to execute the queries to Cloud SQL",id:"step-2-create-a-big-query-dataset-which-will-be-used-to-execute-the-queries-to-cloud-sql",level:3},{value:"Step 3. Create a connection to Cloud SQL",id:"step-3-create-a-connection-to-cloud-sql",level:3},{value:"Step 4. Query away!",id:"step-4-query-away",level:3}],d={toc:c};function p(e){let{components:t,...i}=e;return(0,r.kt)("wrapper",(0,n.Z)({},d,i,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"cloudsql federated queries",src:o(31954).Z,width:"150",height:"157"})),(0,r.kt)("p",null,"This article demonstrates Cloud SQL federated queries for Big Query, a neat and simple to use feature."),(0,r.kt)("h2",{id:"connecting-to-cloud-sql"},"Connecting to Cloud SQL"),(0,r.kt)("p",null,"One of the challenges presented when using Cloud SQL on a private network (VPC) is providing access to users. There are several ways to accomplish this which include:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"open the database port on the VPC Firewall (5432 for example for Postgres) and let users access the database using a command line or locally installed GUI tool ",(0,r.kt)("em",{parentName:"li"},"(may not be allowed in your environment)")),(0,r.kt)("li",{parentName:"ul"},"provide a web based interface deployed on your VPC such as PGAdmin deployed on a GCE instance or GKE pod ",(0,r.kt)("em",{parentName:"li"},"(adds security and management overhead)")),(0,r.kt)("li",{parentName:"ul"},"use the Cloud SQL proxy ",(0,r.kt)("em",{parentName:"li"},"(requires additional software to be installed and configured)"))),(0,r.kt)("p",null,"In additional, all of the above solutions require direct IP connectivity to the instance which may not always be available. Furthermore each of these operations requires the user to present some form of authentication \u2013 in many cases the database user and password which then must be managed at an individual level."),(0,r.kt)("p",null,"Enter Cloud SQL federated queries for Big Query\u2026"),(0,r.kt)("h2",{id:"big-query-federated-queries-for-cloud-sql"},"Big Query Federated Queries for Cloud SQL"),(0,r.kt)("p",null,"Big Query allows you to query tables and views in Cloud SQL (currently MySQL and Postgres) using the Federated Queries feature. The queries could be authorized views in Big Query datasets for example."),(0,r.kt)("p",null,"This has the following advantages:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Allows users to authenticate and use the GCP console to query Cloud SQL"),(0,r.kt)("li",{parentName:"ul"},"Does not require direct IP connectivity to the user or additional routes or firewall rules"),(0,r.kt)("li",{parentName:"ul"},"Leverages Cloud IAM as the authorization mechanism \u2013 rather that unmanaged db user accounts and object level permissions"),(0,r.kt)("li",{parentName:"ul"},"External queries can be executed against a read replica of the Cloud SQL instance to offload query IO from the master instance")),(0,r.kt)("h2",{id:"setting-it-up"},"Setting it up"),(0,r.kt)("p",null,"Setting up big query federated queries for Cloud SQL is exceptionally straightforward, a summary of the steps are provided below:"),(0,r.kt)("h3",{id:"step-1-enable-a-public-ip-on-the-cloud-sql-instance"},"Step 1. Enable a Public IP on the Cloud SQL instance"),(0,r.kt)("p",null,"This sounds bad, but it isn\u2019t really that bad. You need to enable a public interface for Big Query to be able to establish a connection to Cloud SQL, however this is not accessed through the actual public internet \u2013 rather it is accessed through the Google network using the back end of the front end if you will."),(0,r.kt)("p",null,"Furthermore, you configure an empty list of authorized networks which effectively shields the instance from the public network, this can be configured in Terraform as shown here:"),(0,r.kt)(a.Z,{id:"81c57a80a7e588b98ea7d294dbaee242",mdxType:"Gist"}),(0,r.kt)("p",null,"This configuration change can be made to a running instance as well as during the initial provisioning of the instance."),(0,r.kt)("p",null,"As shown below you will get a warning dialog in the console saying that you have no authorized networks - this is by design."),(0,r.kt)("p",null,(0,r.kt)("a",{target:"_blank",href:o(29362).Z},(0,r.kt)("img",{alt:"Cloud SQL Public IP Enabled with No Authorized Networks",src:o(31478).Z,width:"1139",height:"775"}))),(0,r.kt)("h3",{id:"step-2-create-a-big-query-dataset-which-will-be-used-to-execute-the-queries-to-cloud-sql"},"Step 2. Create a Big Query dataset which will be used to execute the queries to Cloud SQL"),(0,r.kt)("p",null,"Connections to Cloud SQL are defined in a Big Query dataset, this can also be use to control access to Cloud SQL using authorized views controlled by IAM roles."),(0,r.kt)(a.Z,{id:"8a4beaab134a1c72613347b5822d1724",mdxType:"Gist"}),(0,r.kt)("h3",{id:"step-3-create-a-connection-to-cloud-sql"},"Step 3. Create a connection to Cloud SQL"),(0,r.kt)("p",null,"To create a connection to Cloud SQL from Big Query you must first enable the BigQuery Connection API, this is done at a project level."),(0,r.kt)("p",null,"As this is a fairly recent feature there isn't great coverage with either the ",(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("inlineCode",{parentName:"strong"},"bq"))," tool or any of the Big Query client libraries to do this so we will need to use the console for now..."),(0,r.kt)("p",null,"Under the ",(0,r.kt)("em",{parentName:"p"},(0,r.kt)("strong",{parentName:"em"},"Resources"))," -> ",(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("em",{parentName:"strong"},"Add Data"))," link in the left hand panel of the Big Query console UI, select ",(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("em",{parentName:"strong"},"Create Connection")),". You will see a side info panel with a form to enter connection details for your Cloud SQL instance."),(0,r.kt)("p",null,"In this example I will setup a connection to a Cloud SQL read replica instance I have created:"),(0,r.kt)("p",null,(0,r.kt)("a",{target:"_blank",href:o(35774).Z},(0,r.kt)("img",{src:o(25963).Z,width:"959",height:"775"}))),(0,r.kt)("p",null,"Creating a Big Query Connection to Cloud SQL"),(0,r.kt)("p",null,"More information on the Big Query Connections API can be found at: ",(0,r.kt)("a",{parentName:"p",href:"https://cloud.google.com/bigquery/docs/reference/bigqueryconnection/rest"},"https://cloud.google.com/bigquery/docs/reference/bigqueryconnection/rest")),(0,r.kt)("p",null,"The following permissions are associated with connections in Big Query:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"bigquery.connections.create  \nbigquery.connections.get  \nbigquery.connections.list  \nbigquery.connections.use  \nbigquery.connections.update  \nbigquery.connections.delete\n")),(0,r.kt)("p",null,"These permissions are conveniently combined into the following predefined roles:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"roles/bigquery.connectionAdmin    (BigQuery Connection Admin)         \nroles/bigquery.connectionUser     (BigQuery Connection User)          \n")),(0,r.kt)("h3",{id:"step-4-query-away"},"Step 4. Query away!"),(0,r.kt)("p",null,"Now the connection to Cloud SQL can be accessed using the ",(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("inlineCode",{parentName:"strong"},"EXTERNAL_QUERY"))," function in Big Query, as shown here:"),(0,r.kt)("p",null,(0,r.kt)("a",{target:"_blank",href:o(2615).Z},(0,r.kt)("img",{alt:"Querying Cloud SQL from Big Query",src:o(78808).Z,width:"1373",height:"730"}))))}p.isMDXComponent=!0},35774:(e,t,o)=>{o.d(t,{Z:()=>n});const n=o.p+"assets/files/big-query-add-connection-67a0236996204c84c7608a8e6b8f4875.png"},2615:(e,t,o)=>{o.d(t,{Z:()=>n});const n=o.p+"assets/files/cloud-sql-federated-queries-screenshot-34e49ac369753d8551095e92b7fc6264.png"},29362:(e,t,o)=>{o.d(t,{Z:()=>n});const n=o.p+"assets/files/cloud-sql-publicip-screenshot-53f21feadbfaf3be93f69de3ce771c2f.png"},59943:(e,t,o)=>{o.d(t,{Z:()=>i});var n=o(67294);o(45697);function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function a(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}const i=function(e){function t(){return r(this,t),a(this,e.apply(this,arguments))}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,e),t.prototype.componentDidMount=function(){this._updateIframeContent()},t.prototype.componentDidUpdate=function(e,t){this._updateIframeContent()},t.prototype._defineUrl=function(){var e=this.props,t=e.id,o=e.file;return"https://gist.github.com/"+t+".js"+(o?"?file="+o:"")},t.prototype._updateIframeContent=function(){var e=this.props,t=e.id,o=e.file,n=this.iframeNode,r=n.document;n.contentDocument?r=n.contentDocument:n.contentWindow&&(r=n.contentWindow.document);var a='<html><head><base target="_parent"><style>*{font-size:12px;}</style></head><body '+("onload=\"parent.document.getElementById('"+(o?"gist-"+t+"-"+o:"gist-"+t)+"').style.height=document.body.scrollHeight + 'px'\"")+">"+('<script type="text/javascript" src="'+this._defineUrl()+'"><\/script>')+"</body></html>";r.open(),r.writeln(a),r.close()},t.prototype.render=function(){var e=this,t=this.props,o=t.id,r=t.file;return n.createElement("iframe",{ref:function(t){e.iframeNode=t},width:"100%",frameBorder:0,id:r?"gist-"+o+"-"+r:"gist-"+o})},t}(n.PureComponent)},25963:(e,t,o)=>{o.d(t,{Z:()=>n});const n=o.p+"assets/images/big-query-add-connection-67a0236996204c84c7608a8e6b8f4875.png"},78808:(e,t,o)=>{o.d(t,{Z:()=>n});const n=o.p+"assets/images/cloud-sql-federated-queries-screenshot-34e49ac369753d8551095e92b7fc6264.png"},31954:(e,t,o)=>{o.d(t,{Z:()=>n});const n=o.p+"assets/images/cloud-sql-federated-queries-8af6a8b8a2536a9c78de7d33b3a5c626.png"},31478:(e,t,o)=>{o.d(t,{Z:()=>n});const n=o.p+"assets/images/cloud-sql-publicip-screenshot-53f21feadbfaf3be93f69de3ce771c2f.png"}}]);