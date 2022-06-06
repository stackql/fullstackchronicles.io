"use strict";(self.webpackChunkfull_stack_chronicles=self.webpackChunkfull_stack_chronicles||[]).push([[43053],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return g}});var o=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},a=Object.keys(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var u=o.createContext({}),s=function(e){var t=o.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=s(e.components);return o.createElement(u.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},p=o.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,u=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),p=s(n),g=r,f=p["".concat(u,".").concat(g)]||p[g]||d[g]||a;return n?o.createElement(f,i(i({ref:t},c),{},{components:n})):o.createElement(f,i({ref:t},c))}));function g(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,i=new Array(a);i[0]=p;var l={};for(var u in t)hasOwnProperty.call(t,u)&&(l[u]=t[u]);l.originalType=e,l.mdxType="string"==typeof e?e:r,i[1]=l;for(var s=2;s<a;s++)i[s]=n[s];return o.createElement.apply(null,i)}return o.createElement.apply(null,n)}p.displayName="MDXCreateElement"},57343:function(e,t,n){n.r(t),n.d(t,{assets:function(){return d},contentTitle:function(){return s},default:function(){return f},frontMatter:function(){return u},metadata:function(){return c},toc:function(){return p}});var o=n(83117),r=n(80102),a=(n(67294),n(3905)),i=n(59943),l=["components"],u={slug:"query-cloud-sql-through-big-query",title:"Query Cloud SQL through Big Query",authors:["jeffreyaven"],draft:!1,hide_table_of_contents:!0,image:"images/cloud-sql-federated-queries.png",tags:["big-query","bigquery","cloudsql","gcp","google-cloud-platform","googlecloudplatform"],keywords:["big-query","bigquery","cloudsql","gcp","google-cloud-platform","googlecloudplatform"]},s=void 0,c={permalink:"/query-cloud-sql-through-big-query",editUrl:"https://github.com/stackql/fullstackchronicles.io/tree/main/src/blog/blog/2020-02-08-query-cloud-sql-through-big-query/index.md",source:"@site/blog/2020-02-08-query-cloud-sql-through-big-query/index.md",title:"Query Cloud SQL through Big Query",description:"cloudsql federated queries",date:"2020-02-08T00:00:00.000Z",formattedDate:"February 8, 2020",tags:[{label:"big-query",permalink:"/tags/big-query"},{label:"bigquery",permalink:"/tags/bigquery"},{label:"cloudsql",permalink:"/tags/cloudsql"},{label:"gcp",permalink:"/tags/gcp"},{label:"google-cloud-platform",permalink:"/tags/google-cloud-platform"},{label:"googlecloudplatform",permalink:"/tags/googlecloudplatform"}],readingTime:3.795,truncated:!1,authors:[{name:"Jeffrey Aven",title:"Technologist and Cloud Consultant",url:"https://www.linkedin.com/in/jeffreyaven/",imageURL:"https://s.gravatar.com/avatar/f96573d092470c74be233e1dded5376f?s=80",key:"jeffreyaven"}],frontMatter:{slug:"query-cloud-sql-through-big-query",title:"Query Cloud SQL through Big Query",authors:["jeffreyaven"],draft:!1,hide_table_of_contents:!0,image:"images/cloud-sql-federated-queries.png",tags:["big-query","bigquery","cloudsql","gcp","google-cloud-platform","googlecloudplatform"],keywords:["big-query","bigquery","cloudsql","gcp","google-cloud-platform","googlecloudplatform"]},prevItem:{title:"Spark in the Google Cloud Platform Part 1",permalink:"/spark-in-the-google-cloud-platform-part-1"},nextItem:{title:"Google Cloud SQL \u2013 Availability for PostgreSQL \u2013 Part II (Read Replicas)",permalink:"/google-cloud-sql-availability-for-postgresql-read-replicas"}},d={authorsImageUrls:[void 0]},p=[{value:"Connecting to Cloud SQL",id:"connecting-to-cloud-sql",level:2},{value:"Big Query Federated Queries for Cloud SQL",id:"big-query-federated-queries-for-cloud-sql",level:2},{value:"Setting it up",id:"setting-it-up",level:2},{value:"Step 1. Enable a Public IP on the Cloud SQL instance",id:"step-1-enable-a-public-ip-on-the-cloud-sql-instance",level:3},{value:"Step 2. Create a Big Query dataset which will be used to execute the queries to Cloud SQL",id:"step-2-create-a-big-query-dataset-which-will-be-used-to-execute-the-queries-to-cloud-sql",level:3},{value:"Step 3. Create a connection to Cloud SQL",id:"step-3-create-a-connection-to-cloud-sql",level:3},{value:"Step 4. Query away!",id:"step-4-query-away",level:3}],g={toc:p};function f(e){var t=e.components,u=(0,r.Z)(e,l);return(0,a.kt)("wrapper",(0,o.Z)({},g,u,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"cloudsql federated queries",src:n(31954).Z,width:"150",height:"157"})),(0,a.kt)("p",null,"This article demonstrates Cloud SQL federated queries for Big Query, a neat and simple to use feature."),(0,a.kt)("h2",{id:"connecting-to-cloud-sql"},"Connecting to Cloud SQL"),(0,a.kt)("p",null,"One of the challenges presented when using Cloud SQL on a private network (VPC) is providing access to users. There are several ways to accomplish this which include:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"open the database port on the VPC Firewall (5432 for example for Postgres) and let users access the database using a command line or locally installed GUI tool ",(0,a.kt)("em",{parentName:"li"},"(may not be allowed in your environment)")),(0,a.kt)("li",{parentName:"ul"},"provide a web based interface deployed on your VPC such as PGAdmin deployed on a GCE instance or GKE pod ",(0,a.kt)("em",{parentName:"li"},"(adds security and management overhead)")),(0,a.kt)("li",{parentName:"ul"},"use the Cloud SQL proxy ",(0,a.kt)("em",{parentName:"li"},"(requires additional software to be installed and configured)"))),(0,a.kt)("p",null,"In additional, all of the above solutions require direct IP connectivity to the instance which may not always be available. Furthermore each of these operations requires the user to present some form of authentication \u2013 in many cases the database user and password which then must be managed at an individual level."),(0,a.kt)("p",null,"Enter Cloud SQL federated queries for Big Query\u2026"),(0,a.kt)("h2",{id:"big-query-federated-queries-for-cloud-sql"},"Big Query Federated Queries for Cloud SQL"),(0,a.kt)("p",null,"Big Query allows you to query tables and views in Cloud SQL (currently MySQL and Postgres) using the Federated Queries feature. The queries could be authorized views in Big Query datasets for example."),(0,a.kt)("p",null,"This has the following advantages:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Allows users to authenticate and use the GCP console to query Cloud SQL"),(0,a.kt)("li",{parentName:"ul"},"Does not require direct IP connectivity to the user or additional routes or firewall rules"),(0,a.kt)("li",{parentName:"ul"},"Leverages Cloud IAM as the authorization mechanism \u2013 rather that unmanaged db user accounts and object level permissions"),(0,a.kt)("li",{parentName:"ul"},"External queries can be executed against a read replica of the Cloud SQL instance to offload query IO from the master instance")),(0,a.kt)("h2",{id:"setting-it-up"},"Setting it up"),(0,a.kt)("p",null,"Setting up big query federated queries for Cloud SQL is exceptionally straightforward, a summary of the steps are provided below:"),(0,a.kt)("h3",{id:"step-1-enable-a-public-ip-on-the-cloud-sql-instance"},"Step 1. Enable a Public IP on the Cloud SQL instance"),(0,a.kt)("p",null,"This sounds bad, but it isn\u2019t really that bad. You need to enable a public interface for Big Query to be able to establish a connection to Cloud SQL, however this is not accessed through the actual public internet \u2013 rather it is accessed through the Google network using the back end of the front end if you will."),(0,a.kt)("p",null,"Furthermore, you configure an empty list of authorized networks which effectively shields the instance from the public network, this can be configured in Terraform as shown here:"),(0,a.kt)(i.Z,{id:"81c57a80a7e588b98ea7d294dbaee242",mdxType:"Gist"}),(0,a.kt)("p",null,"This configuration change can be made to a running instance as well as during the initial provisioning of the instance."),(0,a.kt)("p",null,"As shown below you will get a warning dialog in the console saying that you have no authorized networks - this is by design."),(0,a.kt)("p",null,(0,a.kt)("a",{target:"_blank",href:n(29362).Z},(0,a.kt)("img",{alt:"Cloud SQL Public IP Enabled with No Authorized Networks",src:n(31478).Z,width:"1139",height:"775"}))),(0,a.kt)("h3",{id:"step-2-create-a-big-query-dataset-which-will-be-used-to-execute-the-queries-to-cloud-sql"},"Step 2. Create a Big Query dataset which will be used to execute the queries to Cloud SQL"),(0,a.kt)("p",null,"Connections to Cloud SQL are defined in a Big Query dataset, this can also be use to control access to Cloud SQL using authorized views controlled by IAM roles."),(0,a.kt)(i.Z,{id:"8a4beaab134a1c72613347b5822d1724",mdxType:"Gist"}),(0,a.kt)("h3",{id:"step-3-create-a-connection-to-cloud-sql"},"Step 3. Create a connection to Cloud SQL"),(0,a.kt)("p",null,"To create a connection to Cloud SQL from Big Query you must first enable the BigQuery Connection API, this is done at a project level."),(0,a.kt)("p",null,"As this is a fairly recent feature there isn't great coverage with either the ",(0,a.kt)("strong",{parentName:"p"},(0,a.kt)("inlineCode",{parentName:"strong"},"bq"))," tool or any of the Big Query client libraries to do this so we will need to use the console for now..."),(0,a.kt)("p",null,"Under the ",(0,a.kt)("em",{parentName:"p"},(0,a.kt)("strong",{parentName:"em"},"Resources"))," -> ",(0,a.kt)("strong",{parentName:"p"},(0,a.kt)("em",{parentName:"strong"},"Add Data"))," link in the left hand panel of the Big Query console UI, select ",(0,a.kt)("strong",{parentName:"p"},(0,a.kt)("em",{parentName:"strong"},"Create Connection")),". You will see a side info panel with a form to enter connection details for your Cloud SQL instance."),(0,a.kt)("p",null,"In this example I will setup a connection to a Cloud SQL read replica instance I have created:"),(0,a.kt)("p",null,(0,a.kt)("a",{target:"_blank",href:n(35774).Z},(0,a.kt)("img",{src:n(25963).Z,width:"959",height:"775"}))),(0,a.kt)("p",null,"Creating a Big Query Connection to Cloud SQL"),(0,a.kt)("p",null,"More information on the Big Query Connections API can be found at: ",(0,a.kt)("a",{parentName:"p",href:"https://cloud.google.com/bigquery/docs/reference/bigqueryconnection/rest"},"https://cloud.google.com/bigquery/docs/reference/bigqueryconnection/rest")),(0,a.kt)("p",null,"The following permissions are associated with connections in Big Query:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"bigquery.connections.create  \nbigquery.connections.get  \nbigquery.connections.list  \nbigquery.connections.use  \nbigquery.connections.update  \nbigquery.connections.delete\n")),(0,a.kt)("p",null,"These permissions are conveniently combined into the following predefined roles:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"roles/bigquery.connectionAdmin    (BigQuery Connection Admin)         \nroles/bigquery.connectionUser     (BigQuery Connection User)          \n")),(0,a.kt)("h3",{id:"step-4-query-away"},"Step 4. Query away!"),(0,a.kt)("p",null,"Now the connection to Cloud SQL can be accessed using the ",(0,a.kt)("strong",{parentName:"p"},(0,a.kt)("inlineCode",{parentName:"strong"},"EXTERNAL_QUERY"))," function in Big Query, as shown here:"),(0,a.kt)("p",null,(0,a.kt)("a",{target:"_blank",href:n(2615).Z},(0,a.kt)("img",{alt:"Querying Cloud SQL from Big Query",src:n(78808).Z,width:"1373",height:"730"}))))}f.isMDXComponent=!0},35774:function(e,t,n){t.Z=n.p+"assets/files/big-query-add-connection-67a0236996204c84c7608a8e6b8f4875.png"},2615:function(e,t,n){t.Z=n.p+"assets/files/cloud-sql-federated-queries-screenshot-34e49ac369753d8551095e92b7fc6264.png"},29362:function(e,t,n){t.Z=n.p+"assets/files/cloud-sql-publicip-screenshot-53f21feadbfaf3be93f69de3ce771c2f.png"},59943:function(e,t,n){var o=n(67294);n(45697);function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function a(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}var i=function(e){function t(){return r(this,t),a(this,e.apply(this,arguments))}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,e),t.prototype.componentDidMount=function(){this._updateIframeContent()},t.prototype.componentDidUpdate=function(e,t){this._updateIframeContent()},t.prototype._defineUrl=function(){var e=this.props,t=e.id,n=e.file;return"https://gist.github.com/"+t+".js"+(n?"?file="+n:"")},t.prototype._updateIframeContent=function(){var e=this.props,t=e.id,n=e.file,o=this.iframeNode,r=o.document;o.contentDocument?r=o.contentDocument:o.contentWindow&&(r=o.contentWindow.document);var a='<html><head><base target="_parent"><style>*{font-size:12px;}</style></head><body '+("onload=\"parent.document.getElementById('"+(n?"gist-"+t+"-"+n:"gist-"+t)+"').style.height=document.body.scrollHeight + 'px'\"")+">"+('<script type="text/javascript" src="'+this._defineUrl()+'"><\/script>')+"</body></html>";r.open(),r.writeln(a),r.close()},t.prototype.render=function(){var e=this,t=this.props,n=t.id,r=t.file;return o.createElement("iframe",{ref:function(t){e.iframeNode=t},width:"100%",frameBorder:0,id:r?"gist-"+n+"-"+r:"gist-"+n})},t}(o.PureComponent);t.Z=i},25963:function(e,t,n){t.Z=n.p+"assets/images/big-query-add-connection-67a0236996204c84c7608a8e6b8f4875.png"},78808:function(e,t,n){t.Z=n.p+"assets/images/cloud-sql-federated-queries-screenshot-34e49ac369753d8551095e92b7fc6264.png"},31954:function(e,t,n){t.Z=n.p+"assets/images/cloud-sql-federated-queries-8af6a8b8a2536a9c78de7d33b3a5c626.png"},31478:function(e,t,n){t.Z=n.p+"assets/images/cloud-sql-publicip-screenshot-53f21feadbfaf3be93f69de3ce771c2f.png"}}]);