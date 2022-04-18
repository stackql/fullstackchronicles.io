"use strict";(self.webpackChunkcloudy_with_a_chance_of_big_data=self.webpackChunkcloudy_with_a_chance_of_big_data||[]).push([[2246],{3905:function(e,a,t){t.d(a,{Zo:function(){return u},kt:function(){return d}});var n=t(67294);function r(e,a,t){return a in e?Object.defineProperty(e,a,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[a]=t,e}function o(e,a){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);a&&(n=n.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),t.push.apply(t,n)}return t}function i(e){for(var a=1;a<arguments.length;a++){var t=null!=arguments[a]?arguments[a]:{};a%2?o(Object(t),!0).forEach((function(a){r(e,a,t[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(t,a))}))}return e}function l(e,a){if(null==e)return{};var t,n,r=function(e,a){if(null==e)return{};var t,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)t=o[n],a.indexOf(t)>=0||(r[t]=e[t]);return r}(e,a);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)t=o[n],a.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var s=n.createContext({}),c=function(e){var a=n.useContext(s),t=a;return e&&(t="function"==typeof e?e(a):i(i({},a),e)),t},u=function(e){var a=c(e.components);return n.createElement(s.Provider,{value:a},e.children)},p={inlineCode:"code",wrapper:function(e){var a=e.children;return n.createElement(n.Fragment,{},a)}},g=n.forwardRef((function(e,a){var t=e.components,r=e.mdxType,o=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),g=c(t),d=r,f=g["".concat(s,".").concat(d)]||g[d]||p[d]||o;return t?n.createElement(f,i(i({ref:a},u),{},{components:t})):n.createElement(f,i({ref:a},u))}));function d(e,a){var t=arguments,r=a&&a.mdxType;if("string"==typeof e||r){var o=t.length,i=new Array(o);i[0]=g;var l={};for(var s in a)hasOwnProperty.call(a,s)&&(l[s]=a[s]);l.originalType=e,l.mdxType="string"==typeof e?e:r,i[1]=l;for(var c=2;c<o;c++)i[c]=t[c];return n.createElement.apply(null,i)}return n.createElement.apply(null,t)}g.displayName="MDXCreateElement"},97871:function(e,a,t){t.r(a),t.d(a,{assets:function(){return u},contentTitle:function(){return s},default:function(){return d},frontMatter:function(){return l},metadata:function(){return c},toc:function(){return p}});var n=t(83117),r=t(80102),o=(t(67294),t(3905)),i=["components"],l={slug:"gcp-networking-for-aws-professionals",title:"GCP Networking for AWS Professionals",authors:["jeffreyaven"],draft:!1,hide_table_of_contents:!0,description:"A primer on GCP networking for AWS engineers and architects",image:"images/gcp-aws-networking.png",tags:["aws","cloud","gcp","google-cloud-platform","networking"],keywords:["aws","cloud","gcp","google-cloud-platform","networking"]},s=void 0,c={permalink:"/gcp-networking-for-aws-professionals",editUrl:"https://github.com/stackql/fullstackchronicles.io/tree/main/src/blog/blog/2019-02-21-gcp-networking-for-aws-professionals/index.md",source:"@site/blog/2019-02-21-gcp-networking-for-aws-professionals/index.md",title:"GCP Networking for AWS Professionals",description:"A primer on GCP networking for AWS engineers and architects",date:"2019-02-21T00:00:00.000Z",formattedDate:"February 21, 2019",tags:[{label:"aws",permalink:"/tags/aws"},{label:"cloud",permalink:"/tags/cloud"},{label:"gcp",permalink:"/tags/gcp"},{label:"google-cloud-platform",permalink:"/tags/google-cloud-platform"},{label:"networking",permalink:"/tags/networking"}],readingTime:3.94,truncated:!1,authors:[{name:"Jeffrey Aven",title:"Technologist and Cloud Consultant",url:"https://www.linkedin.com/in/jeffreyaven/",imageURL:"https://s.gravatar.com/avatar/f96573d092470c74be233e1dded5376f?s=80",key:"jeffreyaven"}],frontMatter:{slug:"gcp-networking-for-aws-professionals",title:"GCP Networking for AWS Professionals",authors:["jeffreyaven"],draft:!1,hide_table_of_contents:!0,description:"A primer on GCP networking for AWS engineers and architects",image:"images/gcp-aws-networking.png",tags:["aws","cloud","gcp","google-cloud-platform","networking"],keywords:["aws","cloud","gcp","google-cloud-platform","networking"]},prevItem:{title:"AWS Professional and Speciality Exam Tips",permalink:"/aws-professional-and-speciality-exam-tips"},nextItem:{title:"The Streaming Data Warehouse",permalink:"/the-streaming-data-warehouse-kappa-architecture-and-data-warehousing-re-imagined"}},u={authorsImageUrls:[void 0]},p=[{value:"<em>Google was born to be global, Amazon became global</em>",id:"google-was-born-to-be-global-amazon-became-global",level:4},{value:"<em>AWS is a leader in IaaS, GCP is a leader in PaaS</em>",id:"aws-is-a-leader-in-iaas-gcp-is-a-leader-in-paas",level:4},{value:"GCP VPCs are Global by default, AWS VPCs are Regional only",id:"gcp-vpcs-are-global-by-default-aws-vpcs-are-regional-only",level:3},{value:"GCP Subnets are Regional, AWS Subnets are Zonal",id:"gcp-subnets-are-regional-aws-subnets-are-zonal",level:3},{value:"All GCP Firewall Rules are Stateful",id:"all-gcp-firewall-rules-are-stateful",level:3},{value:"Load Balancers in GCP are layer 4 (TCP/UDP) unless they are public facing",id:"load-balancers-in-gcp-are-layer-4-tcpudp-unless-they-are-public-facing",level:3},{value:"Firewall rules are at the Network Level not at the Instance or Service Level",id:"firewall-rules-are-at-the-network-level-not-at-the-instance-or-service-level",level:3}],g={toc:p};function d(e){var a=e.components,l=(0,r.Z)(e,i);return(0,o.kt)("wrapper",(0,n.Z)({},g,l,{components:a,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"GCP and AWS share many similarities, they both provide similar services and both leverage containerization, virtualization and software defined networking."),(0,o.kt)("p",null,"There are some significant differences when it comes to their respective implementations, networking is a key example of this."),(0,o.kt)("p",null,"Before we compare and contrast the two different approaches to networking, it is worthwhile noting the genesis of the two major cloud providers."),(0,o.kt)("h4",{id:"google-was-born-to-be-global-amazon-became-global"},(0,o.kt)("em",{parentName:"h4"},"Google was born to be global, Amazon became global")),(0,o.kt)("p",null,"By no means am I suggesting that Amazon didn't have designs on going global from it's beginnings, but AWS was driven (entirely at the beginning) by the needs of the Amazon eCommerce business. Amazon started in the US before expanding into other regions (such as Europe and Australia). In some cases the expansion took decades (Amazon only entered Australia as a retailer in 2018)."),(0,o.kt)("p",null,"Google, by contrast, was providing application, search and marketing services worldwide from its very beginning. GCP which was used as the vector to deliver these services and applications was architected around this global model, even though their actual data centre expansion may not have been as rapid as AWS\u2019s (for example GCP opened its Australia region 5 years after AWS)."),(0,o.kt)("p",null,"Their respective networking implementations reflect how their respective companies evolved."),(0,o.kt)("h4",{id:"aws-is-a-leader-in-iaas-gcp-is-a-leader-in-paas"},(0,o.kt)("em",{parentName:"h4"},"AWS is a leader in IaaS, GCP is a leader in PaaS")),(0,o.kt)("p",null,"This is only an opinion and may be argued, however if you look at the chronology of the two platforms, consider this:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"The first services released by AWS (simultaneously for all intents and purposes) were S3, SQS and EC2"),(0,o.kt)("li",{parentName:"ul"},"The first service released by Google was AppEngine (a pure PaaS offering)")),(0,o.kt)("p",null,"Google has launched and matured their IaaS offerings since as AWS has done similarly with their PaaS offerings, but they started from much different places."),(0,o.kt)("p",null,"With all of that said, here are the key differences when it comes to networking between the two major cloud providers:"),(0,o.kt)("h3",{id:"gcp-vpcs-are-global-by-default-aws-vpcs-are-regional-only"},"GCP VPCs are Global by default, AWS VPCs are Regional only"),(0,o.kt)("p",null,"This is the first fundamental difference between the two providers. Each GCP project is allocated one VPC network with Subnets in each of the 18 GCP Regions. Whereas each AWS Account is allocated one Default VPC in each AWS Region with a Subnet in each AWS Availability Zone for that Region, that is each account has 17 VPCs in each of the 17 Regions (excluding GovCloud regions)."),(0,o.kt)("p",null,(0,o.kt)("a",{target:"_blank",href:t(67626).Z},(0,o.kt)("img",{alt:"Default Global VPC Network in GCP",src:t(5121).Z,width:"1920",height:"1080"}))),(0,o.kt)("p",null,"It is entirely possible to create VPCs in GCP which are Regional, but they are Global by default."),(0,o.kt)("p",null,"This global tenancy can be advantageous in many cases, but can be limiting in others, for instance there is a limit of 25 peering connections to any one VPC, the limit in AWS is 125."),(0,o.kt)("h3",{id:"gcp-subnets-are-regional-aws-subnets-are-zonal"},"GCP Subnets are Regional, AWS Subnets are Zonal"),(0,o.kt)("p",null,"Subnets in GCP automatically span all Zones in a Region, whereas AWS VPC Subnets are assigned to Availability Zones in a Region. This means you are abstracted from some of the networking and zonal complexity, but you have less control over specific network placement of instances and endpoints. You can infer from this design that Zones are replicated or synchronised within a Region, making them less of a direct consideration for High Availability (or at least as much or your concern as they otherwise would be)."),(0,o.kt)("h3",{id:"all-gcp-firewall-rules-are-stateful"},"All GCP Firewall Rules are Stateful"),(0,o.kt)("p",null,"AWS Security Groups are stateful firewall rules \u2013 meaning they maintain connection state for inbound connections, AWS also has Network ACLs (NACLs) which are stateless firewall rules. GCP has no direct equivalent of NACLs, however GCP Firewall Rules are more configurable than their AWS counterparts. For instance, GCP Firewall Rules can include Deny actions which is not an option with AWS Security Group Rules."),(0,o.kt)("h3",{id:"load-balancers-in-gcp-are-layer-4-tcpudp-unless-they-are-public-facing"},"Load Balancers in GCP are layer 4 (TCP/UDP) unless they are public facing"),(0,o.kt)("p",null,"AWS Application Load Balancers can be deployed in private VPCs with no external IPs attached to them. GCP has Application Load Balancers (Layer 7 load balancers) but only for public facing applications, internal facing load balancers in GCP are Network Load Balancers. This presents some challenges with application level load balancing functionality such as stickiness. There are potential workarounds however such as NGINX in GKE behind"),(0,o.kt)("h3",{id:"firewall-rules-are-at-the-network-level-not-at-the-instance-or-service-level"},"Firewall rules are at the Network Level not at the Instance or Service Level"),(0,o.kt)("p",null,"There are simple firewall settings available at the instance level, these are limited to allowing HTTP and HTTPS traffic to the instance only and don\u2019t allow you to specify sources. Detailed Firewall Rules are set at the GCP VPC Network level and are not attached or associated with instances as they are in AWS."),(0,o.kt)("p",null,(0,o.kt)("em",{parentName:"p"},"Hopefully this is helpful for AWS engineers and architects being exposed to GCP for the first time!")))}d.isMDXComponent=!0},67626:function(e,a,t){a.Z=t.p+"assets/files/gcp-default-network-bb8c3f62583663e872cc53948671005f.png"},5121:function(e,a,t){a.Z=t.p+"assets/images/gcp-default-network-bb8c3f62583663e872cc53948671005f.png"}}]);