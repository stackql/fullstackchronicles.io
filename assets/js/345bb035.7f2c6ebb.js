"use strict";(self.webpackChunkcloudy_with_a_chance_of_big_data=self.webpackChunkcloudy_with_a_chance_of_big_data||[]).push([[4412],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return m}});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=a.createContext({}),c=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=c(e.components);return a.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),d=c(n),m=r,h=d["".concat(l,".").concat(m)]||d[m]||u[m]||i;return n?a.createElement(h,o(o({ref:t},p),{},{components:n})):a.createElement(h,o({ref:t},p))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=d;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:r,o[1]=s;for(var c=2;c<i;c++)o[c]=n[c];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},58215:function(e,t,n){n.d(t,{Z:function(){return r}});var a=n(67294);function r(e){var t=e.children,n=e.hidden,r=e.className;return a.createElement("div",{role:"tabpanel",hidden:n,className:r},t)}},9877:function(e,t,n){n.d(t,{Z:function(){return p}});var a=n(83117),r=n(67294),i=n(72389),o=n(30662),s=n(86010),l="tabItem_LplD";function c(e){var t,n,i,c=e.lazy,p=e.block,u=e.defaultValue,d=e.values,m=e.groupId,h=e.className,f=r.Children.map(e.children,(function(e){if((0,r.isValidElement)(e)&&void 0!==e.props.value)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})),g=null!=d?d:f.map((function(e){var t=e.props;return{value:t.value,label:t.label,attributes:t.attributes}})),v=(0,o.lx)(g,(function(e,t){return e.value===t.value}));if(v.length>0)throw new Error('Docusaurus error: Duplicate values "'+v.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.');var y=null===u?u:null!=(t=null!=u?u:null==(n=f.find((function(e){return e.props.default})))?void 0:n.props.value)?t:null==(i=f[0])?void 0:i.props.value;if(null!==y&&!g.some((function(e){return e.value===y})))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+y+'" but none of its children has the corresponding value. Available values are: '+g.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");var k=(0,o.UB)(),w=k.tabGroupChoices,b=k.setTabGroupChoices,N=(0,r.useState)(y),S=N[0],T=N[1],$=[],C=(0,o.o5)().blockElementScrollPositionUntilNextRender;if(null!=m){var A=w[m];null!=A&&A!==S&&g.some((function(e){return e.value===A}))&&T(A)}var x=function(e){var t=e.currentTarget,n=$.indexOf(t),a=g[n].value;a!==S&&(C(t),T(a),null!=m&&b(m,a))},P=function(e){var t,n=null;switch(e.key){case"ArrowRight":var a=$.indexOf(e.currentTarget)+1;n=$[a]||$[0];break;case"ArrowLeft":var r=$.indexOf(e.currentTarget)-1;n=$[r]||$[$.length-1]}null==(t=n)||t.focus()};return r.createElement("div",{className:"tabs-container"},r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,s.Z)("tabs",{"tabs--block":p},h)},g.map((function(e){var t=e.value,n=e.label,i=e.attributes;return r.createElement("li",(0,a.Z)({role:"tab",tabIndex:S===t?0:-1,"aria-selected":S===t,key:t,ref:function(e){return $.push(e)},onKeyDown:P,onFocus:x,onClick:x},i,{className:(0,s.Z)("tabs__item",l,null==i?void 0:i.className,{"tabs__item--active":S===t})}),null!=n?n:t)}))),c?(0,r.cloneElement)(f.filter((function(e){return e.props.value===S}))[0],{className:"margin-vert--md"}):r.createElement("div",{className:"margin-vert--md"},f.map((function(e,t){return(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==S})}))))}function p(e){var t=(0,i.Z)();return r.createElement(c,(0,a.Z)({key:String(t)},e))}},5632:function(e,t,n){n.r(t),n.d(t,{assets:function(){return m},contentTitle:function(){return u},default:function(){return g},frontMatter:function(){return p},metadata:function(){return d},toc:function(){return h}});var a=n(83117),r=n(80102),i=(n(67294),n(3905)),o=n(9877),s=n(58215),l=n(59943),c=["components"],p={slug:"implementing-a-serverless-sftp-gateway-using-the-aws-transfer-family",title:"Implementing a Serverless SFTP Gateway using the AWS Transfer Family",authors:["jeffreyaven"],draft:!1,image:"/img/blog/aws-transfer-for-sftp.png",tags:["aws","aws transfer family","serverless","snowflake","snowpipe","sftp","managed file transfer"],keywords:["aws","aws transfer family","serverless","snowflake","snowpipe","sftp","managed file transfer"],description:"An example implementation of an SFTP gateway using the AWS Transfer Family service, to store client data in an encrypted S3 bucket."},u=void 0,d={permalink:"/implementing-a-serverless-sftp-gateway-using-the-aws-transfer-family",editUrl:"https://github.com/stackql/fullstackchronicles.io/tree/main/src/blog/blog/2022-02-23-implementing-a-serverless-sftp-gateway-using-the-aws-transfer-family/index.md",source:"@site/blog/2022-02-23-implementing-a-serverless-sftp-gateway-using-the-aws-transfer-family/index.md",title:"Implementing a Serverless SFTP Gateway using the AWS Transfer Family",description:"An example implementation of an SFTP gateway using the AWS Transfer Family service, to store client data in an encrypted S3 bucket.",date:"2022-02-23T00:00:00.000Z",formattedDate:"February 23, 2022",tags:[{label:"aws",permalink:"/tags/aws"},{label:"aws transfer family",permalink:"/tags/aws-transfer-family"},{label:"serverless",permalink:"/tags/serverless"},{label:"snowflake",permalink:"/tags/snowflake"},{label:"snowpipe",permalink:"/tags/snowpipe"},{label:"sftp",permalink:"/tags/sftp"},{label:"managed file transfer",permalink:"/tags/managed-file-transfer"}],readingTime:5.935,truncated:!1,authors:[{name:"Jeffrey Aven",title:"Technologist and Cloud Consultant",url:"https://www.linkedin.com/in/jeffreyaven/",imageURL:"https://s.gravatar.com/avatar/f96573d092470c74be233e1dded5376f?s=80",key:"jeffreyaven"}],frontMatter:{slug:"implementing-a-serverless-sftp-gateway-using-the-aws-transfer-family",title:"Implementing a Serverless SFTP Gateway using the AWS Transfer Family",authors:["jeffreyaven"],draft:!1,image:"/img/blog/aws-transfer-for-sftp.png",tags:["aws","aws transfer family","serverless","snowflake","snowpipe","sftp","managed file transfer"],keywords:["aws","aws transfer family","serverless","snowflake","snowpipe","sftp","managed file transfer"],description:"An example implementation of an SFTP gateway using the AWS Transfer Family service, to store client data in an encrypted S3 bucket."},prevItem:{title:"Scaling up Prefect with GitStorage",permalink:"/scaling-up-prefect-with-gitstorage"},nextItem:{title:"Simple SSO with an external IdP using Active Directory and Okta",permalink:"/simple-sso-with-an-external-idp-using-active-directory-and-okta"}},m={authorsImageUrls:[void 0]},h=[{value:"Architecture",id:"architecture",level:2},{value:"Setup",id:"setup",level:2},{value:"Setup the Service",id:"setup-the-service",level:2},{value:"Create the S3 Bucket",id:"create-the-s3-bucket",level:2},{value:"Create a Customer Managed KMS Key",id:"create-a-customer-managed-kms-key",level:2},{value:"User Directory Mappings",id:"user-directory-mappings",level:2},{value:"Create a Scoped Down Policy",id:"create-a-scoped-down-policy",level:3},{value:"Create a user",id:"create-a-user",level:3},{value:"Create a Route 53 CNAME record",id:"create-a-route-53-cname-record",level:2},{value:"Create some shared Tags",id:"create-some-shared-tags",level:2},{value:"Pull it all together!",id:"pull-it-all-together",level:2}],f={toc:h};function g(e){var t=e.components,p=(0,r.Z)(e,c);return(0,i.kt)("wrapper",(0,a.Z)({},f,p,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"When you want the SFTP service without the SFTP Server.  ")),(0,i.kt)("p",null,"In implementing data platforms with external data providers, it is common to use a managed file transfer platform or an SFTP gateway as an entry point for providers to supply data to your system.  "),(0,i.kt)("p",null,"Often in past implementations this would involve deploying a sever (typically a Linux VM) and provisioning and configuring an SFTP service.  If you wanted the data sent by clients to be copied to another storage medium (such as S3 or EFS) you would need to roll your own code or subscribe to a marketplace offering to do so.  "),(0,i.kt)("p",null,"I recently trialled the ",(0,i.kt)("a",{parentName:"p",href:"https://docs.aws.amazon.com/transfer/index.html"},"AWS Transfer Family SFTP gateway")," offering from AWS and sharing my adventures here.  "),(0,i.kt)("h2",{id:"architecture"},"Architecture"),(0,i.kt)("p",null,"In this reference architecture, we are deploying an SFTP service which uses a path in an S3 bucket as a user\u2019s home directory.  Objects in the bucket are encrypted with a customer managed KMS key.  The SFTP server front end address is mapped to a vanity URL using Route53.  The bucket and path are integrated with a ",(0,i.kt)("inlineCode",{parentName:"p"},"STORAGE INTEGRATION"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"STAGE")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"PIPE")," definition in Snowflake.  The Snowflake bits are covered in more detail in this blog: ",(0,i.kt)("strong",{parentName:"p"},(0,i.kt)("a",{parentName:"strong",href:"automating-snowflake-role-based-storage-integration-for-aws"},"Automating Snowflake Role Based Storage Integration for AWS")),".  This article just details the AWS Transfer Family SFTP setup."),(0,i.kt)(o.Z,{defaultValue:"architecture",values:[{label:"Architecture",value:"architecture"},{label:"PlantUML",value:"plantuml"}],mdxType:"Tabs"},(0,i.kt)(s.Z,{value:"architecture",mdxType:"TabItem"},(0,i.kt)("p",null,(0,i.kt)("a",{target:"_blank",href:n(51425).Z},(0,i.kt)("img",{alt:"AWS Transfer SFTP Architecture",src:n(71261).Z,width:"1014",height:"725"}))," ")),(0,i.kt)(s.Z,{value:"plantuml",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},'@startuml\n\nskinparam rectangle<<boundary>> {\n    Shadowing false\n    StereotypeFontSize 0\n    FontColor #444444\n    BorderColor #444444\n    BorderStyle dashed\n}\n\nskinparam defaultTextAlignment center\n\n!$imgroot = "https://github.com/avensolutions/plantuml-cloud-image-library/raw/main/images"\n\n!unquoted procedure $AwsS3($alias, $label, $techn, $descr="", $stereo="AWS S3")\n    rectangle "==$label\\n\\n<img:$imgroot/aws/Storage/S3.png>\\n//<size:12>[$techn]</size>//" <<$stereo>> as $alias #white\n!endprocedure\n\n!unquoted procedure $Kms($alias, $label, $techn, $descr="", $stereo="AWS KMS")\n    rectangle "==$label\\n\\n<img:$imgroot/aws/SecurityIdentityCompliance/kms.png{scale=0.80}>\\n//<size:12>[$techn]</size>//" <<$stereo>> as $alias #white\n!endprocedure\n\n!unquoted procedure $Route53($alias, $label, $techn, $descr="", $stereo="AWS Route53")\n    rectangle "==$label\\n\\n<img:$imgroot/aws/Networking/route53.png{scale=0.80}>\\n//<size:12>[$techn]</size>//" <<$stereo>> as $alias #white\n!endprocedure\n\n!unquoted procedure $AwsTransferFamily($alias, $label, $techn, $descr="", $stereo="AWS Transfer Family")\n    rectangle "==$label\\n\\n<img:$imgroot/aws/MigrationTransfer/TransferFamily.png>\\n//<size:12>[$techn]</size>//" <<$stereo>> as $alias #white\n!endprocedure\n\n!unquoted procedure $Data($alias, $label, $techn, $descr="", $stereo="Data")\n    rectangle "==$label\\n\\n<img:$imgroot/general/documents.png>\\n//<size:12>[$techn]</size>//" <<$stereo>> as $alias #white\n!endprocedure\n\n!unquoted procedure $Snowpipe($alias, $label, $techn, $descr="", $stereo="Snowpipe")\n    rectangle "==$label\\n\\n<img:$imgroot/snowflake/snowpipe.png{scale=0.60}>\\n//<size:12>[$techn]</size>//" <<$stereo>> as $alias #white\n!endprocedure\n\n!unquoted procedure $SnowflakeDb($alias, $label, $techn, $descr="", $stereo="Snowflake DB")\n    rectangle "==$label\\n\\n<img:$imgroot/snowflake/snowflakeDB.png{scale=0.70}>\\n//<size:12>[$techn]</size>//" <<$stereo>> as $alias #white\n!endprocedure\n\n$Data(supplier, Data Supplier, External Client)\n\nrectangle "AWS Environment" <<boundary>> {\n    $AwsTransferFamily(sftpgw, SFTP/FTPS Gateway, AWS Transfer Family)\n    $AwsS3(s3staging, Staging Bucket, AWS S3 Bucket)\n    $Kms(kms, KMS Key, Customer Managed Key)\n    $Route53(r53, CNAME Record, Route53 Record)\n}\n\nrectangle "Snowflake Environment" <<boundary>> {\n    $Snowpipe(snowpipe, Snowpipe, Snowpipe)\n    $SnowflakeDb(db, Snowflake DB, Snowflake DB)\n}\n\nr53 -[hidden]D- sftpgw\nsupplier -> r53 : resolves name\nr53 -> supplier : gets address\nsupplier -RIGHT-> sftpgw : SFTP\nsftpgw -DOWN-> kms : uses\nsftpgw -RIGHT-> s3staging: writes to\ns3staging -RIGHT-> snowpipe: writes to\nsnowpipe -DOWN-> kms: uses\nsnowpipe -RIGHT-> db: writes to\n\n@enduml\n')))),(0,i.kt)("h2",{id:"setup"},"Setup"),(0,i.kt)("p",null,"The steps to set up this pattern are detailed below.  "),(0,i.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"This example uses the Jsonnet/CloudFormation pattern described in this article: ",(0,i.kt)("strong",{parentName:"p"},(0,i.kt)("a",{parentName:"strong",href:"simplifying-large-cloudformation-templates-using-jsonnet"},"Simplifying Large CloudFormation Templates using Jsonnet")),".  This is a useful pattern for breaking up a monolithic CloudFormation template at design time to more manageable resource scoped documents, then pre-processing these in a CI routine (GitLab CI, GitHub Actions, etc) to create a complete template."))),(0,i.kt)("h2",{id:"setup-the-service"},"Setup the Service"),(0,i.kt)("p",null,"To setup the SFTP transfer service use the ",(0,i.kt)("inlineCode",{parentName:"p"},"AWS::Transfer::Server")," resource type as shown below:  "),(0,i.kt)(l.Z,{id:"c8b4ce8ab478715753aab73d478f4fcd",mdxType:"Gist"}),(0,i.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"Use the ",(0,i.kt)("inlineCode",{parentName:"p"},"tags")," shown to display the custom hostname (used as a vanity url) in the Transfer UI in the AWS console."))),(0,i.kt)("h2",{id:"create-the-s3-bucket"},"Create the S3 Bucket"),(0,i.kt)("p",null,"Create a bucket which will be used to store incoming files sent via SFTP.  "),(0,i.kt)(l.Z,{id:"82eb106bc13f1a888f823cc71a7ff933",mdxType:"Gist"}),(0,i.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"This example logs to a logging bucket, not shown for brevity."))),(0,i.kt)("h2",{id:"create-a-customer-managed-kms-key"},"Create a Customer Managed KMS Key"),(0,i.kt)("p",null,"Create a customer managed KMS key which will be used to encrypt data stored in the S3 bucket created in the previous step.  "),(0,i.kt)(l.Z,{id:"2c563411442c4541584815389de8a3b5",mdxType:"Gist"}),(0,i.kt)("h1",{id:"create-an-iam-role-to-access-the-bucket"},"Create an IAM role to access the bucket"),(0,i.kt)("p",null,"Create an IAM role which will be assumed by the AWS Transfer Service to read and write to the S3 staging bucket.  "),(0,i.kt)(l.Z,{id:"57e23a5c99c22f5550e99b086db5f9f1",mdxType:"Gist"}),(0,i.kt)("div",{className:"admonition admonition-important alert alert--info"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"important")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"You must assign permissions to use the KMS key created previously, failure to do so will result in errors such as:"),(0,i.kt)("pre",{parentName:"div"},(0,i.kt)("code",{parentName:"pre"},"remote readdir(): Permission denied\n")))),(0,i.kt)("h2",{id:"user-directory-mappings"},"User Directory Mappings"),(0,i.kt)("p",null,"An SFTP users home directory is mapped to a path in your S3 bucket.  It is recommended to use the ",(0,i.kt)("inlineCode",{parentName:"p"},"LOGICAL")," ",(0,i.kt)("inlineCode",{parentName:"p"},"HomeDirectoryType"),".  This will prevent SFTP users from:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"seeing or being able to access other users home directories"),(0,i.kt)("li",{parentName:"ul"},"seeing the bucket name or paths in the bucket above their home directory")),(0,i.kt)("p",null,"There are some trade offs for this which can make deployment a little more challenging but we will cover off the steps from here."),(0,i.kt)("h3",{id:"create-a-scoped-down-policy"},"Create a Scoped Down Policy"),(0,i.kt)("p",null,'A "scoped down" policy prevents users from seeing or accessing objects in other users home directories.  This is a text file that will be sourced as a string into the ',(0,i.kt)("inlineCode",{parentName:"p"},"Policy")," parameter of each SFTP user you create."),(0,i.kt)(l.Z,{id:"5e876bbf95b1b36355fa8af868572a26",mdxType:"Gist"}),(0,i.kt)("div",{className:"admonition admonition-important alert alert--info"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"important")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"Using the ",(0,i.kt)("inlineCode",{parentName:"p"},"LOGICAL")," ",(0,i.kt)("inlineCode",{parentName:"p"},"HomeDirectoryType")," you don't have access to variables which represent the bucket, so this needs to be hard coded in the ",(0,i.kt)("inlineCode",{parentName:"p"},"policy.txt")," document.  "),(0,i.kt)("p",{parentName:"div"},"Also if you are using a customer managed KMS key to encrypt the data in the bucket (which you should be), you need to add permissions to the key - which again cannot be represented by a variable.  "),(0,i.kt)("p",{parentName:"div"},"Failure to do so will result in errors when trying to ",(0,i.kt)("inlineCode",{parentName:"p"},"ls"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"put"),", etc into the user's home directory such as:  "),(0,i.kt)("pre",{parentName:"div"},(0,i.kt)("code",{parentName:"pre"},"Couldn't read directory: Permission denied\nCouldn't close file: Permission denied\n")),(0,i.kt)("p",{parentName:"div"},"Since these properties are unlikely to change for the lifetime of your service this should not be an issue.  "))),(0,i.kt)("h3",{id:"create-a-user"},"Create a user"),(0,i.kt)("p",null,"Users are identified by a username and an SSH key, providing the public key to the server.  A sample user is shown here:  "),(0,i.kt)(l.Z,{id:"1b946b07374b78e0aca380317729bfa9",mdxType:"Gist"}),(0,i.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"tip")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"As discussed previously, it is recommended to use ",(0,i.kt)("inlineCode",{parentName:"p"},"LOGICAL")," home directory mappings, which prevents users from seeing information about the bucket or other directories on the SFTP server (including other users directories)."))),(0,i.kt)("h2",{id:"create-a-route-53-cname-record"},"Create a Route 53 CNAME record"),(0,i.kt)("p",null,"Ideally you want to use a vanity url for users to access your SFTP service, such as ",(0,i.kt)("inlineCode",{parentName:"p"},"sftp.yourcompany.com"),".  This can be accomplished by using a Route 53 CNAME record as shown here:  "),(0,i.kt)(l.Z,{id:"0098851edc8d60b45534f6b1134be8cd",mdxType:"Gist"}),(0,i.kt)("h2",{id:"create-some-shared-tags"},"Create some shared Tags"),(0,i.kt)("p",null,"You would have noticed a shared ",(0,i.kt)("inlineCode",{parentName:"p"},"Tags")," definition in many of the ",(0,i.kt)("inlineCode",{parentName:"p"},"libsonnet")," files shown, an example ",(0,i.kt)("inlineCode",{parentName:"p"},"Tags")," source file is shown here:  "),(0,i.kt)(l.Z,{id:"8323d49f1045d2cd8c874d5a00e82a5e",mdxType:"Gist"}),(0,i.kt)("h2",{id:"pull-it-all-together"},"Pull it all together!"),(0,i.kt)("p",null,"Now that we have all of the input files, lets pull them all together in a ",(0,i.kt)("inlineCode",{parentName:"p"},"jsonnet")," file, which will be preprocessed in a CI process to create a template we can deploy with AWS CloudFormation.  "),(0,i.kt)(l.Z,{id:"f56065c075af9cc33853b0624f6ef636",mdxType:"Gist"}),(0,i.kt)("p",null,"Your customers would now connect to your service using they private key which corresponds to the public key they supplied to you in one of the previous steps, for example:    "),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"sftp -i mysftpkey jeffrey_aven@sftp.yourdomain.com\n")),(0,i.kt)("p",null,"Add more users and enjoy!"))}g.isMDXComponent=!0},51425:function(e,t,n){t.Z=n.p+"assets/files/aws-transfer-sftp-architecture-7964e0e7ee271b7c690605e7cfa8a72d.png"},59943:function(e,t,n){var a=n(67294);n(45697);function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function i(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}var o=function(e){function t(){return r(this,t),i(this,e.apply(this,arguments))}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,e),t.prototype.componentDidMount=function(){this._updateIframeContent()},t.prototype.componentDidUpdate=function(e,t){this._updateIframeContent()},t.prototype._defineUrl=function(){var e=this.props,t=e.id,n=e.file;return"https://gist.github.com/"+t+".js"+(n?"?file="+n:"")},t.prototype._updateIframeContent=function(){var e=this.props,t=e.id,n=e.file,a=this.iframeNode,r=a.document;a.contentDocument?r=a.contentDocument:a.contentWindow&&(r=a.contentWindow.document);var i='<html><head><base target="_parent"><style>*{font-size:12px;}</style></head><body '+("onload=\"parent.document.getElementById('"+(n?"gist-"+t+"-"+n:"gist-"+t)+"').style.height=document.body.scrollHeight + 'px'\"")+">"+('<script type="text/javascript" src="'+this._defineUrl()+'"><\/script>')+"</body></html>";r.open(),r.writeln(i),r.close()},t.prototype.render=function(){var e=this,t=this.props,n=t.id,r=t.file;return a.createElement("iframe",{ref:function(t){e.iframeNode=t},width:"100%",frameBorder:0,id:r?"gist-"+n+"-"+r:"gist-"+n})},t}(a.PureComponent);t.Z=o},71261:function(e,t,n){t.Z=n.p+"assets/images/aws-transfer-sftp-architecture-7964e0e7ee271b7c690605e7cfa8a72d.png"}}]);