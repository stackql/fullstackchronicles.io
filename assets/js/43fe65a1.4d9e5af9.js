"use strict";(self.webpackChunkcloudy_with_a_chance_of_big_data=self.webpackChunkcloudy_with_a_chance_of_big_data||[]).push([[4978],{3905:function(e,t,a){a.d(t,{Zo:function(){return u},kt:function(){return h}});var i=a(67294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,i)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function r(e,t){if(null==e)return{};var a,i,n=function(e,t){if(null==e)return{};var a,i,n={},o=Object.keys(e);for(i=0;i<o.length;i++)a=o[i],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(i=0;i<o.length;i++)a=o[i],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var s=i.createContext({}),c=function(e){var t=i.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},u=function(e){var t=c(e.components);return i.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},p=i.forwardRef((function(e,t){var a=e.components,n=e.mdxType,o=e.originalType,s=e.parentName,u=r(e,["components","mdxType","originalType","parentName"]),p=c(a),h=n,g=p["".concat(s,".").concat(h)]||p[h]||d[h]||o;return a?i.createElement(g,l(l({ref:t},u),{},{components:a})):i.createElement(g,l({ref:t},u))}));function h(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=a.length,l=new Array(o);l[0]=p;var r={};for(var s in t)hasOwnProperty.call(t,s)&&(r[s]=t[s]);r.originalType=e,r.mdxType="string"==typeof e?e:n,l[1]=r;for(var c=2;c<o;c++)l[c]=a[c];return i.createElement.apply(null,l)}return i.createElement.apply(null,a)}p.displayName="MDXCreateElement"},92830:function(e,t,a){a.r(t),a.d(t,{frontMatter:function(){return r},contentTitle:function(){return s},metadata:function(){return c},assets:function(){return u},toc:function(){return d},default:function(){return h}});var i=a(83117),n=a(80102),o=(a(67294),a(3905)),l=["components"],r={slug:"google-cloud-sql-ha-backup-and-recovery-replication-failover-and-security-for-postgresql",title:"Google Cloud SQL \u2013 Availability, Replication, Failover for PostgreSQL \u2013 Part I",authors:["jeffreyaven"],draft:!1,hide_table_of_contents:!0,image:"images/cloudsql-featured-image.png",tags:["cloudsql","gcp","google-cloud-platform","googlecloudplatform","ha","highavailability","postgresql"],keywords:["cloudsql","gcp","google-cloud-platform","googlecloudplatform","ha","highavailability","postgresql"]},s=void 0,c={permalink:"/google-cloud-sql-ha-backup-and-recovery-replication-failover-and-security-for-postgresql",editUrl:"https://github.com/cloudywithachanceofbigdata/cloudywithachanceofbigdata.github.io/tree/main/src/blog/blog/2020-01-17-google-cloud-sql-ha-backup-and-recovery-replication-failover-and-security-for-postgresql/index.md",source:"@site/blog/2020-01-17-google-cloud-sql-ha-backup-and-recovery-replication-failover-and-security-for-postgresql/index.md",title:"Google Cloud SQL \u2013 Availability, Replication, Failover for PostgreSQL \u2013 Part I",description:"In this multi part blog we will explore the features available in Google Cloud SQL for High Availability, Backup and Recovery, Replication and Failover and Security (at rest and in transit) for the PostgreSQL DBMS engine. Some of these features are relatively hot of the press and in Beta \u2013 which still makes them available for general use.",date:"2020-01-17T00:00:00.000Z",formattedDate:"January 17, 2020",tags:[{label:"cloudsql",permalink:"/tags/cloudsql"},{label:"gcp",permalink:"/tags/gcp"},{label:"google-cloud-platform",permalink:"/tags/google-cloud-platform"},{label:"googlecloudplatform",permalink:"/tags/googlecloudplatform"},{label:"ha",permalink:"/tags/ha"},{label:"highavailability",permalink:"/tags/highavailability"},{label:"postgresql",permalink:"/tags/postgresql"}],readingTime:4.395,truncated:!1,authors:[{name:"Jeffrey Aven",title:"Technologist and Cloud Consultant",url:"https://www.linkedin.com/in/jeffreyaven/",imageURL:"https://s.gravatar.com/avatar/f96573d092470c74be233e1dded5376f?s=80",key:"jeffreyaven"}],frontMatter:{slug:"google-cloud-sql-ha-backup-and-recovery-replication-failover-and-security-for-postgresql",title:"Google Cloud SQL \u2013 Availability, Replication, Failover for PostgreSQL \u2013 Part I",authors:["jeffreyaven"],draft:!1,hide_table_of_contents:!0,image:"images/cloudsql-featured-image.png",tags:["cloudsql","gcp","google-cloud-platform","googlecloudplatform","ha","highavailability","postgresql"],keywords:["cloudsql","gcp","google-cloud-platform","googlecloudplatform","ha","highavailability","postgresql"]},prevItem:{title:"Introducing Service Mesh Part II",permalink:"/introducing-service-mesh-part-ii"},nextItem:{title:"Sick of hearing about Service Mesh? Here\u2019s what you need to know...",permalink:"/sick-of-hearing-about-service-mesh-heres-what-you-need-to-know"}},u={authorsImageUrls:[void 0]},d=[{value:"Regional Availability",id:"regional-availability",children:[],level:2},{value:"Implementing High Availability for Cloud SQL",id:"implementing-high-availability-for-cloud-sql",children:[],level:2},{value:"Failover",id:"failover",children:[],level:2}],p={toc:d};function h(e){var t=e.components,r=(0,n.Z)(e,l);return(0,o.kt)("wrapper",(0,i.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"In this multi part blog we will explore the features available in Google Cloud SQL for High Availability, Backup and Recovery, Replication and Failover and Security (at rest and in transit) for the PostgreSQL DBMS engine. Some of these features are relatively hot of the press and in Beta \u2013 which still makes them available for general use."),(0,o.kt)("p",null,"We will start by looking at the High Availability (HA) options available to you when using the PostgreSQL engine in Google Cloud SQL."),(0,o.kt)("p",null,"Most of you would be familiar with the concepts of High Availability, Redundancy, Fault Tolerance, etc but let\u2019s start with a definition of HA anyway:"),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"High availability (HA) is a characteristic of a system, which aims to ensure an agreed level of operational performance, usually uptime, for a higher than normal period."),(0,o.kt)("p",{parentName:"blockquote"},"Wikipedia")),(0,o.kt)("p",null,"Higher than a normal period is quite subjective, typically this is quantified by a percentage represented by a number of \u201c9s\u201d, that is 99.99% (which would be quoted as \u201cfour nines\u201d), this would allot you 52.60 minutes of downtime over a one-year period."),(0,o.kt)("p",null,"Essentially the number of 9\u2019s required will drive your bias towards the options available to you for Cloud SQL HA."),(0,o.kt)("p",null,"We will start with Cloud SQL HA in its simplest form, Regional Availability."),(0,o.kt)("h2",{id:"regional-availability"},"Regional Availability"),(0,o.kt)("p",null,"Knowing what we know about the Google Cloud Platform, regional availability means that our application or service (in this case Cloud SQL) should be resilient to a failure of any one zone in our region. In fact, as all GCP regions have at least 3 zones \u2013 two zones could fail, and our application would still be available."),(0,o.kt)("p",null,"Regional availability for Cloud SQL (which Google refers to as High Availability), creates a standby instance in addition to the primary instance and uses a regional Persistent Disk resource to store the database instance data, transaction log and other state files, which is synchronously replicated to a Persistent Disk resource local to the zones that the primary and standby instances are located in."),(0,o.kt)("p",null,"A shared IP address (like a Virtual IP) is used to serve traffic to the healthy (normally primary) Cloud SQL instance."),(0,o.kt)("p",null,"An overview of Cloud SQL HA is shown here:"),(0,o.kt)("p",null,(0,o.kt)("a",{target:"_blank",href:a(66705).Z},(0,o.kt)("img",{alt:"Cloud SQL High Availability",src:a(66471).Z,width:"716",height:"541"}))),(0,o.kt)("h2",{id:"implementing-high-availability-for-cloud-sql"},"Implementing High Availability for Cloud SQL"),(0,o.kt)("p",null,"Implementing Regional Availability for Cloud SQL is dead simple, it is one argument:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},'availability_type = "REGIONAL"\n')),(0,o.kt)("p",null,"Using the ",(0,o.kt)("inlineCode",{parentName:"p"},"gcloud")," command line utility, this would be:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"gcloud sql instances create postgresql-instance-1234 \\\n  --availability-type=REGIONAL \\\n  --database-version= POSTGRES_9_6\n")),(0,o.kt)("p",null,"Using Terraform (with a complete set of options) it would look like:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},'resource "google_sql_database_instance" "postgres_ha" {\n  provider = google-beta\n  region = var.region\n  project = var.project\n  name = "postgresql-instance-${random_id.instance_suffix.hex}"\n  database_version = "POSTGRES_9_6"\n  settings {\n   tier = var.tier\n   disk_size = var.disk_size\n   activation_policy = "ALWAYS"\n   disk_autoresize = true\n   disk_type = "PD_SSD"\n   **availability_type = "REGIONAL"**\n   backup_configuration {\n     enabled = true\n     start_time = "00:00"\n   }\n   ip_configuration  {\n     ipv4_enabled = false\n     private_network = google_compute_network.private_network.self_link\n   }\n   maintenance_window  {\n     day = 7\n     hour = 0\n     update_track = "stable"\n   }\n  }\n } \n')),(0,o.kt)("p",null,"Once deployed you will notice a few different items in the console, first from the instance overview page you can see that the High Availability option is ",(0,o.kt)("inlineCode",{parentName:"p"},"ENABLED")," for your instance."),(0,o.kt)("p",null,(0,o.kt)("a",{target:"_blank",href:a(20205).Z},(0,o.kt)("img",{src:a(98775).Z,width:"1310",height:"446"}))),(0,o.kt)("p",null,"Second, you will see a Failover button enabled on the detailed management view for this instance."),(0,o.kt)("p",null,(0,o.kt)("a",{target:"_blank",href:a(10159).Z},(0,o.kt)("img",{src:a(91404).Z,width:"1310",height:"612"}))),(0,o.kt)("h2",{id:"failover"},"Failover"),(0,o.kt)("p",null,"Failovers and failbacks can be initiated manually or automatically (should the primary be unresponsive). A manual failover can be invoked by executing the command:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"gcloud sql instances failover postgresql-instance-1234\n")),(0,o.kt)("p",null,"There is an ",(0,o.kt)("inlineCode",{parentName:"p"},"--async")," option which will return immediately, invoking the failover operation asynchronously."),(0,o.kt)("p",null,"Failover can also be invoked from the Cloud Console using the Failover button shown previously. As an example I have created a connection to a regionally available Cloud SQL instance and started a command which runs a loop and prints out a counter:"),(0,o.kt)("p",null,(0,o.kt)("a",{target:"_blank",href:a(27951).Z},(0,o.kt)("img",{src:a(836).Z,width:"1920",height:"1040"}))),(0,o.kt)("p",null,"Now using the ",(0,o.kt)("inlineCode",{parentName:"p"},"gcloud")," command shown earlier, I have invoked a manual failover of the Cloud SQL instance."),(0,o.kt)("p",null,"Once the failover is initiated, the client connection is dropped (as the server is momentarily unavailable):"),(0,o.kt)("p",null,(0,o.kt)("a",{target:"_blank",href:a(33175).Z},(0,o.kt)("img",{src:a(95995).Z,width:"1920",height:"1040"}))),(0,o.kt)("p",null,"The connection can be immediately re-established afterwards, the state of the running query is lost - ",(0,o.kt)("strong",{parentName:"p"},(0,o.kt)("em",{parentName:"strong"},"importantly no data is lost"))," however. If your application clients had retry logic in their code and they weren't executing a long running query, chances are no one would notice! Once reconnecting normal database activities can be resumed:"),(0,o.kt)("p",null,(0,o.kt)("a",{target:"_blank",href:a(95369).Z},(0,o.kt)("img",{src:a(88034).Z,width:"1920",height:"1040"}))),(0,o.kt)("p",null,"A quick check of the instance logs will show that the failover event has occured:"),(0,o.kt)("p",null,(0,o.kt)("a",{target:"_blank",href:a(10710).Z},(0,o.kt)("img",{src:a(79043).Z,width:"1310",height:"568"}))),(0,o.kt)("p",null,"Now when you return to the instance page in the console you will see a Failback button, which indicates that your instance is being served by the standby:"),(0,o.kt)("p",null,(0,o.kt)("a",{target:"_blank",href:a(27706).Z},(0,o.kt)("img",{src:a(17443).Z,width:"1239",height:"641"}))),(0,o.kt)("p",null,"Note that there may be a slight delay in the availability of this option as the replica is still being synched."),(0,o.kt)("p",null,"It is worth noting that nothing comes for free! When you run in REGIONAL or High Availability mode - you are effectively paying double the costs as compared to running in ZONAL mode. However availability and cost have always been trade-offs against one another - you get what you pay for..."),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"More information can be found at: ",(0,o.kt)("a",{parentName:"p",href:"https://cloud.google.com/sql/docs/postgres/high-availability"},"https://cloud.google.com/sql/docs/postgres/high-availability"))),(0,o.kt)("p",null,"Next up we will look at read replicas (and their ability to be promoted) as another high availability alternative in Cloud SQL."))}h.isMDXComponent=!0},20205:function(e,t,a){t.Z=a.p+"assets/files/cloud-sql-ha-1-12d875328c3d6743bab7c41038d7e382.png"},10159:function(e,t,a){t.Z=a.p+"assets/files/cloud-sql-ha-2-39a03f8c41a267780563cbb20bafd2d4.png"},27951:function(e,t,a){t.Z=a.p+"assets/files/cloud-sql-ha-3-6710a724106c4048213b24a2082b64cb.png"},33175:function(e,t,a){t.Z=a.p+"assets/files/cloud-sql-ha-4-bb4bcf4f70179371b1b26d96a92a4dff.png"},95369:function(e,t,a){t.Z=a.p+"assets/files/cloud-sql-ha-5-6f8c7134a54b7a38444f5ddbdbcf960e.png"},10710:function(e,t,a){t.Z=a.p+"assets/files/cloud-sql-ha-6-a4ab88ef121dbc8842347478cf0811d0.png"},27706:function(e,t,a){t.Z=a.p+"assets/files/cloud-sql-ha-7-25ae1613611767eea9c101c3a24f0632.png"},66705:function(e,t,a){t.Z=a.p+"assets/files/cloud-sql-ha-9f997d42db7d02fc6391cb507e81bc6c.png"},98775:function(e,t,a){t.Z=a.p+"assets/images/cloud-sql-ha-1-12d875328c3d6743bab7c41038d7e382.png"},91404:function(e,t,a){t.Z=a.p+"assets/images/cloud-sql-ha-2-39a03f8c41a267780563cbb20bafd2d4.png"},836:function(e,t,a){t.Z=a.p+"assets/images/cloud-sql-ha-3-6710a724106c4048213b24a2082b64cb.png"},95995:function(e,t,a){t.Z=a.p+"assets/images/cloud-sql-ha-4-bb4bcf4f70179371b1b26d96a92a4dff.png"},88034:function(e,t,a){t.Z=a.p+"assets/images/cloud-sql-ha-5-6f8c7134a54b7a38444f5ddbdbcf960e.png"},79043:function(e,t,a){t.Z=a.p+"assets/images/cloud-sql-ha-6-a4ab88ef121dbc8842347478cf0811d0.png"},17443:function(e,t,a){t.Z=a.p+"assets/images/cloud-sql-ha-7-25ae1613611767eea9c101c3a24f0632.png"},66471:function(e,t,a){t.Z=a.p+"assets/images/cloud-sql-ha-9f997d42db7d02fc6391cb507e81bc6c.png"}}]);