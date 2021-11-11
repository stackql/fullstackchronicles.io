"use strict";(self.webpackChunkcloudy_with_a_chance_of_big_data=self.webpackChunkcloudy_with_a_chance_of_big_data||[]).push([[4591],{3905:function(e,t,a){a.d(t,{Zo:function(){return p},kt:function(){return g}});var n=a(67294);function o(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){o(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,n,o=function(e,t){if(null==e)return{};var a,n,o={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(o[a]=e[a]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(o[a]=e[a])}return o}var s=n.createContext({}),c=function(e){var t=n.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},p=function(e){var t=c(e.components);return n.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var a=e.components,o=e.mdxType,r=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),u=c(a),g=o,h=u["".concat(s,".").concat(g)]||u[g]||d[g]||r;return a?n.createElement(h,i(i({ref:t},p),{},{components:a})):n.createElement(h,i({ref:t},p))}));function g(e,t){var a=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=a.length,i=new Array(r);i[0]=u;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:o,i[1]=l;for(var c=2;c<r;c++)i[c]=a[c];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}u.displayName="MDXCreateElement"},90801:function(e,t,a){a.r(t),a.d(t,{frontMatter:function(){return l},contentTitle:function(){return s},metadata:function(){return c},assets:function(){return p},toc:function(){return d},default:function(){return g}});var n=a(83117),o=a(80102),r=(a(67294),a(3905)),i=["components"],l={slug:"scalable-secure-application-load-balancing-with-vpc-native-gke-and-istio",title:"Scalable, Secure Application Load Balancing with VPC Native GKE and Istio",authors:["jeffreyaven"],draft:!1,hide_table_of_contents:!0,image:"images/istio-blog-feature-image.png",tags:["cloud","gcp","google-cloud-platform","istio","load-balancing","vpc-native"],keywords:["cloud","gcp","google-cloud-platform","istio","load-balancing","vpc-native"]},s=void 0,c={permalink:"/scalable-secure-application-load-balancing-with-vpc-native-gke-and-istio",editUrl:"https://github.com/cloudywithachanceofbigdata/cloudywithachanceofbigdata.github.io/tree/main/src/blog/blog/2019-05-18-scalable-secure-application-load-balancing-with-vpc-native-gke-and-istio/index.md",source:"@site/blog/2019-05-18-scalable-secure-application-load-balancing-with-vpc-native-gke-and-istio/index.md",title:"Scalable, Secure Application Load Balancing with VPC Native GKE and Istio",description:"At the time of this writing, GCP does not have a generally available non-public facing Layer 7 load balancer. While this is sure to change in the future, this article outlines a design pattern which has been proven to provide scalable and extensible application load balancing services for multiple applications running in Kubernetes pods on GKE.",date:"2019-05-18T00:00:00.000Z",formattedDate:"May 18, 2019",tags:[{label:"cloud",permalink:"/tags/cloud"},{label:"gcp",permalink:"/tags/gcp"},{label:"google-cloud-platform",permalink:"/tags/google-cloud-platform"},{label:"istio",permalink:"/tags/istio"},{label:"load-balancing",permalink:"/tags/load-balancing"},{label:"vpc-native",permalink:"/tags/vpc-native"}],readingTime:2.855,truncated:!1,authors:[{name:"Jeffrey Aven",title:"Technologist and Cloud Consultant",url:"https://www.linkedin.com/in/jeffreyaven/",imageURL:"https://s.gravatar.com/avatar/f96573d092470c74be233e1dded5376f?s=80",key:"jeffreyaven"}],prevItem:{title:"Synthetic CDC Data Generator",permalink:"/synthetic-cdc-data-generator"},nextItem:{title:"AWS Professional and Speciality Exam Tips",permalink:"/aws-professional-and-speciality-exam-tips"}},p={authorsImageUrls:[void 0]},d=[{value:"Issue #1:",id:"issue-1",children:[],level:3},{value:"Issue #2:",id:"issue-2",children:[],level:3},{value:"The Solution:",id:"the-solution",children:[],level:3},{value:"The advantages of this design pattern are...",id:"the-advantages-of-this-design-pattern-are",children:[],level:3}],u={toc:d};function g(e){var t=e.components,l=(0,o.Z)(e,i);return(0,r.kt)("wrapper",(0,n.Z)({},u,l,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"At the time of this writing, GCP does not have a generally available non-public facing Layer 7 load balancer. While this is sure to change in the future, this article outlines a design pattern which has been proven to provide scalable and extensible application load balancing services for multiple applications running in Kubernetes pods on GKE."),(0,r.kt)("p",null,"When you create a service of type LoadBalancer in GKE, Kubernetes hooks into the provider (GCP in this case) on your behalf to create a Google Load Balancer, while this may be specified as INTERNAL, there are two issues:"),(0,r.kt)("h3",{id:"issue-1"},"Issue #1:"),(0,r.kt)("p",null,"The GCP load balancer created for you is a Layer 4 TCP load balancer."),(0,r.kt)("h3",{id:"issue-2"},"Issue #2:"),(0,r.kt)("p",null,"The normal behaviour is for Google to enumerate all of the node pools in your GKE cluster and \u201cautomagically\u201d create mapping GCE instance groups for each node pool for each zone the instances are deployed in. This means the entire surface area of your cluster is exposed to the external network \u2013 which may not be optimal for internal applications on a multi tenanted cluster."),(0,r.kt)("h3",{id:"the-solution"},"The Solution:"),(0,r.kt)("p",null,"Using ",(0,r.kt)("a",{parentName:"p",href:"https://istio.io/"},"Istio")," deployed on GKE along with the ",(0,r.kt)("a",{parentName:"p",href:"https://istio.io/docs/concepts/traffic-management/#ingress-and-egress"},"Istio Ingress Gateway")," along with an externally created load balancer, it is possible to get scalable HTTP load balancing along with all the normal ALB goodness (stickiness, path-based routing, host-based routing, health checks, TLS offload, etc.)."),(0,r.kt)("p",null,"An abstract depiction of this architecture is shown here:"),(0,r.kt)("p",null,(0,r.kt)("a",{target:"_blank",href:a(20813).Z},(0,r.kt)("img",{alt:"Istio Ingress Design Pattern for VPC Native GKE Clusters",src:a(61615).Z}))),(0,r.kt)("p",null,"This can be deployed with a combination of ",(0,r.kt)("a",{parentName:"p",href:"https://www.terraform.io/"},"Terraform")," and kubectl. The steps to deploy at a high level are:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Create a GKE cluster with at least two node pools: ingress-nodepool and service-nodepool. Ideally create these node pools as multi-zonal for availability. You could create additional node pools for your Egress Gateway or an operations-nodepool to host Istio, etc as well."),(0,r.kt)("li",{parentName:"ol"},"Deploy Istio."),(0,r.kt)("li",{parentName:"ol"},"Deploy the Istio Ingress Gateway service on the ingress-nodepool using Service type NodePort."),(0,r.kt)("li",{parentName:"ol"},"Create an associated Certificate Gateway using server certificates and private keys for TLS offload."),(0,r.kt)("li",{parentName:"ol"},"Create a service in the service-nodepool."),(0,r.kt)("li",{parentName:"ol"},"Reserve an unallocated static IP address from the node network range."),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("a",{parentName:"li",href:"https://cloud.google.com/load-balancing/docs/internal/setting-up-internal"},"Create an internal TCP load balancer"),":",(0,r.kt)("ol",{parentName:"li"},(0,r.kt)("li",{parentName:"ol"},"Specify the frontend as the IP address reserved in step 6."),(0,r.kt)("li",{parentName:"ol"},"Specify the backend as the managed instance groups created during the node pool creation for the ingress-nodepool (ingress-nodepool-ig-a, ingress-nodepool-ig-b, ingress-nodepool-ig-c)."),(0,r.kt)("li",{parentName:"ol"},"Specify ports 80 and 443."))),(0,r.kt)("li",{parentName:"ol"},"Create a GCP Firewall Rule to allow traffic from authorized sources (network tags or CIDR ranges) to a target of the ingress-nodepool network tag."),(0,r.kt)("li",{parentName:"ol"},"Create a Cloud DNS A Record for your managed zone as ","*",".namespace.zone pointing to the IP Address assigned to the load balancer frontend in step 7.1."),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("a",{parentName:"li",href:"https://cloud.google.com/load-balancing/docs/health-checks#firewall_rules"},"Enable Health Checks through the GCP firewall")," to reach the ingress-nodepool network tag at a minimum \u2013 however there is no harm in allowing these to all node pools.")),(0,r.kt)("p",null,"The service should then be resolvable and routable from authorized internal networks (peered private VPCs or internal networks connected via VPN or Dedicated Interconnect) as:"),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"https://_service",(0,r.kt)("strong",{parentName:"p"},"."),"namespace",(0,r.kt)("strong",{parentName:"p"},"."),"zone",(0,r.kt)("strong",{parentName:"p"},"/"),"endpoint__")),(0,r.kt)("h3",{id:"the-advantages-of-this-design-pattern-are"},"The advantages of this design pattern are..."),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"The Ingress Gateway provides fully functional application load balancing services."),(0,r.kt)("li",{parentName:"ol"},"Istio provides service discovery and routing using names and namespaces."),(0,r.kt)("li",{parentName:"ol"},"The Ingress Gateway service and ingress gateway node pool can be scaled as required to meet demand."),(0,r.kt)("li",{parentName:"ol"},"The Ingress Gateway is multi zonal for greater availability")))}g.isMDXComponent=!0},20813:function(e,t,a){t.Z=a.p+"assets/files/istio-ingress-blog-7f3d087a733de5cfabac40cf44b99bba.png"},61615:function(e,t,a){t.Z=a.p+"assets/images/istio-ingress-blog-7f3d087a733de5cfabac40cf44b99bba.png"}}]);