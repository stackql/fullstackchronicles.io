"use strict";(self.webpackChunkfull_stack_chronicles=self.webpackChunkfull_stack_chronicles||[]).push([[20310],{20328:(e,a,t)=>{t.r(a),t.d(a,{assets:()=>l,contentTitle:()=>s,default:()=>u,frontMatter:()=>n,metadata:()=>i,toc:()=>p});var r=t(83117),o=(t(67294),t(3905));const n={slug:"spark-in-the-google-cloud-platform-part-1",title:"Spark in the Google Cloud Platform Part 1",authors:["jeffreyaven"],draft:!1,hide_table_of_contents:!0,image:"images/spark-gcp-featured-image.png",tags:["apache-spark","gcp","google-cloud-platform","googlecloudplatform","spark"],keywords:["apache-spark","gcp","google-cloud-platform","googlecloudplatform","spark"]},s=void 0,i={permalink:"/spark-in-the-google-cloud-platform-part-1",editUrl:"https://github.com/stackql/fullstackchronicles.io/edit/main/src/blog/2020-02-14-spark-in-the-google-cloud-platform-part-1/index.md",source:"@site/blog/2020-02-14-spark-in-the-google-cloud-platform-part-1/index.md",title:"Spark in the Google Cloud Platform Part 1",description:"Apache Spark in GCP",date:"2020-02-14T00:00:00.000Z",formattedDate:"February 14, 2020",tags:[{label:"apache-spark",permalink:"/tags/apache-spark"},{label:"gcp",permalink:"/tags/gcp"},{label:"google-cloud-platform",permalink:"/tags/google-cloud-platform"},{label:"googlecloudplatform",permalink:"/tags/googlecloudplatform"},{label:"spark",permalink:"/tags/spark"}],readingTime:5.155,hasTruncateMarker:!1,authors:[{name:"Jeffrey Aven",title:"Technologist and Cloud Consultant",url:"https://www.linkedin.com/in/jeffreyaven/",imageURL:"https://s.gravatar.com/avatar/f96573d092470c74be233e1dded5376f?s=80",key:"jeffreyaven"}],frontMatter:{slug:"spark-in-the-google-cloud-platform-part-1",title:"Spark in the Google Cloud Platform Part 1",authors:["jeffreyaven"],draft:!1,hide_table_of_contents:!0,image:"images/spark-gcp-featured-image.png",tags:["apache-spark","gcp","google-cloud-platform","googlecloudplatform","spark"],keywords:["apache-spark","gcp","google-cloud-platform","googlecloudplatform","spark"]},prevItem:{title:"Spark in the Google Cloud Platform Part 2",permalink:"/spark-in-the-google-cloud-platform-part-2"},nextItem:{title:"Query Cloud SQL through Big Query",permalink:"/query-cloud-sql-through-big-query"}},l={authorsImageUrls:[void 0]},p=[{value:"Quick Primer on Spark",id:"quick-primer-on-spark",level:2},{value:"Spark on DataProc",id:"spark-on-dataproc",level:2},{value:"Deployment",id:"deployment",level:3},{value:"Integration",id:"integration",level:3},{value:"IAM and IAP (TCP Forwarding)",id:"iam-and-iap-tcp-forwarding",level:4},{value:"DataProc Jobs and Workflows",id:"dataproc-jobs-and-workflows",level:4},{value:"Optional Components and the Component Gateway",id:"optional-components-and-the-component-gateway",level:4},{value:"Jupyter",id:"jupyter",level:4}],c={toc:p};function u(e){let{components:a,...n}=e;return(0,o.kt)("wrapper",(0,r.Z)({},c,n,{components:a,mdxType:"MDXLayout"}),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Apache Spark in GCP",src:t(94353).Z,width:"213",height:"155"})),(0,o.kt)("p",null,"I have been an avid Spark enthusiast since 2014 (the early days..). Spark has featured heavily in every project I have been involved with from data warehousing, ETL, feature extraction, advanced analytics to event processing and IoT applications. I like to think of it as a Swiss army knife for distributed processing."),(0,o.kt)("admonition",{title:"Spark Training Courses",type:"note"},(0,o.kt)("p",{parentName:"admonition"},(0,o.kt)("a",{parentName:"p",href:"https://academy.alphazetta.ai/data-transformation-and-analysis-using-apache-spark/"},"Data Transformation and Analysis Using Apache Spark"),(0,o.kt)("br",{parentName:"p"}),"\n",(0,o.kt)("a",{parentName:"p",href:"https://academy.alphazetta.ai/stream-and-event-processing-using-apache-spark/"},"Stream and Event Processing using Apache Spark"),(0,o.kt)("br",{parentName:"p"}),"\n",(0,o.kt)("a",{parentName:"p",href:"https://academy.alphazetta.ai/advanced-analytics-using-apache-spark/"},"Advanced Analytics Using Apache Spark"))),(0,o.kt)("p",null,"Curiously enough, the first project I had been involved with for some years that did not feature the Apache Spark project was a green field GCP project which got me thinking\u2026 where does Spark fit into the GCP landscape?"),(0,o.kt)("p",null,"Unlike the other major providers who use Spark as the backbone of their managed distributed ETL services with examples such as AWS Glue or the Spark integration runtime option in Azure Data Factory, Google\u2019s managed ETL solution is Cloud DataFlow. Cloud DataFlow which is a managed Apache Beam service does not use a Spark runtime (there is a Spark Runner however this is not an option when using CDF). So where does this leave Spark?"),(0,o.kt)("p",null,"My summation is that although Spark is not a first-class citizen in GCP (as far as managed ETL), it is not a second-class citizen either. This article will discuss the various ways Spark clusters and applications can be deployed within the GCP ecosystem."),(0,o.kt)("h2",{id:"quick-primer-on-spark"},"Quick Primer on Spark"),(0,o.kt)("p",null,"Every Spark application contains several components regardless of deployment mode, the components in the Spark runtime architecture are:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"the Driver"),(0,o.kt)("li",{parentName:"ul"},"the Master"),(0,o.kt)("li",{parentName:"ul"},"the Cluster Manager"),(0,o.kt)("li",{parentName:"ul"},"the Executor(s), which run on worker nodes or Workers")),(0,o.kt)("p",null,"Each component has a specific role in executing a Spark program and all of the Spark components run in Java virtual machines (JVMs)."),(0,o.kt)("p",null,(0,o.kt)("a",{target:"_blank",href:t(46217).Z},(0,o.kt)("img",{alt:"Spark Runtime Architecture",src:t(5610).Z,width:"752",height:"420"}))),(0,o.kt)("p",null,"Cluster Managers schedule and manage distributed resources (compute and memory) across the nodes of the cluster. Cluster Managers available for Spark include:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Standalone"),(0,o.kt)("li",{parentName:"ul"},"YARN (Hadoop)"),(0,o.kt)("li",{parentName:"ul"},"Mesos"),(0,o.kt)("li",{parentName:"ul"},"Kubernetes")),(0,o.kt)("h2",{id:"spark-on-dataproc"},"Spark on DataProc"),(0,o.kt)("p",null,"This is perhaps the simplest and most integrated approach to using Spark in the GCP ecosystem."),(0,o.kt)("p",null,"DataProc is GCP\u2019s managed Hadoop Service (akin to AWS EMR or HDInsight on Azure). DataProc uses Hadoop/YARN as the Cluster Manager. DataProc clusters can be deployed on a private network (VPC using RFC1918 address space), supports encryption at Rest using Google Managed or Customer Managed Keys in KMS, supports autoscaling and the use of Preemptible Workers, and can be deployed in a HA config."),(0,o.kt)("p",null,"Furthermore, DataProc clusters can enforce strong authentication using Kerberos which can be integrated into other directory services such as Active Directory through the use of cross realm trusts."),(0,o.kt)("h3",{id:"deployment"},"Deployment"),(0,o.kt)("p",null,"DataProc clusters can be deployed using the ",(0,o.kt)("inlineCode",{parentName:"p"},"gcloud dataproc clusters create")," command or using IaC solutions such as Terraform. For this article I have included an example in the source code using the ",(0,o.kt)("inlineCode",{parentName:"p"},"gcloud")," command to deploy a DataProc cluster on a private network which was created using Terraform."),(0,o.kt)("h3",{id:"integration"},"Integration"),(0,o.kt)("p",null,"The beauty of DataProc is its native integration into IAM and the GCP service plane. Having been a long-time user of AWS EMR, I have found that the usability and integration are in many ways superior in GCP DataProc. Let\u2019s look at some examples..."),(0,o.kt)("h4",{id:"iam-and-iap-tcp-forwarding"},"IAM and IAP (TCP Forwarding)"),(0,o.kt)("p",null,"DataProc is integrated into Cloud IAM using various coarse grained permissions use as ",(0,o.kt)("inlineCode",{parentName:"p"},"dataproc.clusters.use")," and simplified IAM Roles such as ",(0,o.kt)("inlineCode",{parentName:"p"},"dataproc.editor")," or ",(0,o.kt)("inlineCode",{parentName:"p"},"dataproc.admin"),". Members with bindings to the these roles can perform tasks such as submitting jobs and creating workflow templates (which we will discuss shortly), as well as accessing instances such as the master node instance or instances in the cluster using IAP (TCP Forwarding) without requiring a public IP address or a bastion host."),(0,o.kt)("h4",{id:"dataproc-jobs-and-workflows"},"DataProc Jobs and Workflows"),(0,o.kt)("p",null,"Spark jobs can be submitted using the console or via ",(0,o.kt)("inlineCode",{parentName:"p"},"gcloud dataproc jobs submit")," as shown here:"),(0,o.kt)("p",null,(0,o.kt)("a",{target:"_blank",href:t(83689).Z},(0,o.kt)("img",{alt:"Submitting a Spark Job using gcloud dataproc jobs submit",src:t(19037).Z,width:"1097",height:"499"}))),(0,o.kt)("p",null,"Cluster logs are natively available in StackDriver and standard out from the Spark Driver is visible from the console as well as via ",(0,o.kt)("inlineCode",{parentName:"p"},"gcloud")," commands."),(0,o.kt)("p",null,"Complex Workflows can be created by adding Jobs as Steps in Workflow Templates using the following command:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"gcloud dataproc workflow-templates add-job spark\n")),(0,o.kt)("h4",{id:"optional-components-and-the-component-gateway"},"Optional Components and the Component Gateway"),(0,o.kt)("p",null,"DataProc provides you with a Hadoop cluster including YARN and HDFS, a Spark runtine \u2013 which includes Spark SQL and SparkR. DataProc also supports several optional components including Anaconda, Jupyter, Zeppelin, Druid, Presto, and more."),(0,o.kt)("p",null,"Web interfaces to some of these components as well as the management interfaces such as the Resource Manager UI or the Spark History Server UI can be accessed through the Component Gateway."),(0,o.kt)("p",null,"This is a Cloud IAM integrated gateway (much like IAP) which can allow access through an authenticated and authorized console session to web UIs in the cluster \u2013 without the need for SSH tunnels, additional firewall rules, bastion hosts, or public IPs. Very cool."),(0,o.kt)("p",null,"Links to the component UIs as well as built in UIs like the YARN Resource Manager UI are available directly from through the console."),(0,o.kt)("h4",{id:"jupyter"},"Jupyter"),(0,o.kt)("p",null,"Jupyter is a popular notebook application in the data science and analytics communities used for reproducible research. DataProc\u2019s Jupyter component provides a ready-made Spark application vector using PySpark. If you have also installed the Anaconda component you will have access to the full complement of scientific and mathematic Python packages such as Pandas and NumPy which can be used in Jupyter notebooks as well. Using the Component Gateway, Jupyer notebooks can be accessed directly from the Google console as shown here:"),(0,o.kt)("p",null,(0,o.kt)("a",{target:"_blank",href:t(13525).Z},(0,o.kt)("img",{alt:"Jupyter Notebooks using DataProc",src:t(71725).Z,width:"1359",height:"924"}))),(0,o.kt)("p",null,"From this example you can see that I accessed source data from a GCS bucket and used HDFS as local scratch space."),(0,o.kt)("p",null,"Furthermore, notebooks are automagically saved in your integrated Cloud Storage DataProc staging bucket and can be shared amongst analysts or accessed at a later time. These notebooks also persist beyond the lifespan of the cluster."),(0,o.kt)("p",null,"Next up we will look at deploying a Spark Standalone cluster on a GKE cluster, see you then!"),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"if you have enjoyed this post, please consider ",(0,o.kt)("a",{parentName:"p",href:"https://www.buymeacoffee.com/jeffreyaven"},(0,o.kt)("strong",{parentName:"a"},"buying me a coffee \u2615"))," to help me keep writing!")))}u.isMDXComponent=!0},3905:(e,a,t)=>{t.d(a,{Zo:()=>c,kt:()=>h});var r=t(67294);function o(e,a,t){return a in e?Object.defineProperty(e,a,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[a]=t,e}function n(e,a){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);a&&(r=r.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),t.push.apply(t,r)}return t}function s(e){for(var a=1;a<arguments.length;a++){var t=null!=arguments[a]?arguments[a]:{};a%2?n(Object(t),!0).forEach((function(a){o(e,a,t[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):n(Object(t)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(t,a))}))}return e}function i(e,a){if(null==e)return{};var t,r,o=function(e,a){if(null==e)return{};var t,r,o={},n=Object.keys(e);for(r=0;r<n.length;r++)t=n[r],a.indexOf(t)>=0||(o[t]=e[t]);return o}(e,a);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(r=0;r<n.length;r++)t=n[r],a.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var l=r.createContext({}),p=function(e){var a=r.useContext(l),t=a;return e&&(t="function"==typeof e?e(a):s(s({},a),e)),t},c=function(e){var a=p(e.components);return r.createElement(l.Provider,{value:a},e.children)},u={inlineCode:"code",wrapper:function(e){var a=e.children;return r.createElement(r.Fragment,{},a)}},d=r.forwardRef((function(e,a){var t=e.components,o=e.mdxType,n=e.originalType,l=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),d=p(t),h=o,m=d["".concat(l,".").concat(h)]||d[h]||u[h]||n;return t?r.createElement(m,s(s({ref:a},c),{},{components:t})):r.createElement(m,s({ref:a},c))}));function h(e,a){var t=arguments,o=a&&a.mdxType;if("string"==typeof e||o){var n=t.length,s=new Array(n);s[0]=d;var i={};for(var l in a)hasOwnProperty.call(a,l)&&(i[l]=a[l]);i.originalType=e,i.mdxType="string"==typeof e?e:o,s[1]=i;for(var p=2;p<n;p++)s[p]=t[p];return r.createElement.apply(null,s)}return r.createElement.apply(null,t)}d.displayName="MDXCreateElement"},13525:(e,a,t)=>{t.d(a,{Z:()=>r});const r=t.p+"assets/files/dataproc-jupyter-notebook-14d165b5563c903961beb68bef757a82.png"},83689:(e,a,t)=>{t.d(a,{Z:()=>r});const r=t.p+"assets/files/dataproc-spark-job-953a699ceef00b9e3b0f05068a844a56.png"},46217:(e,a,t)=>{t.d(a,{Z:()=>r});const r=t.p+"assets/files/spark-runtime-0b55b3d8793bab097b517603866abe16.png"},71725:(e,a,t)=>{t.d(a,{Z:()=>r});const r=t.p+"assets/images/dataproc-jupyter-notebook-14d165b5563c903961beb68bef757a82.png"},19037:(e,a,t)=>{t.d(a,{Z:()=>r});const r=t.p+"assets/images/dataproc-spark-job-953a699ceef00b9e3b0f05068a844a56.png"},94353:(e,a,t)=>{t.d(a,{Z:()=>r});const r=t.p+"assets/images/spark-gcp-featured-image-86e0bfd36db759253fff66591b594d8b.png"},5610:(e,a,t)=>{t.d(a,{Z:()=>r});const r=t.p+"assets/images/spark-runtime-0b55b3d8793bab097b517603866abe16.png"}}]);