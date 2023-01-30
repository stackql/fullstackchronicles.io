"use strict";(self.webpackChunkfull_stack_chronicles=self.webpackChunkfull_stack_chronicles||[]).push([[34659],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>m});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=a.createContext({}),u=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=u(e.components);return a.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),d=u(n),m=r,f=d["".concat(l,".").concat(m)]||d[m]||p[m]||o;return n?a.createElement(f,i(i({ref:t},c),{},{components:n})):a.createElement(f,i({ref:t},c))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=d;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:r,i[1]=s;for(var u=2;u<o;u++)i[u]=n[u];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},3919:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>u,default:()=>f,frontMatter:()=>l,metadata:()=>c,toc:()=>d});var a=n(83117),r=(n(67294),n(3905)),o=n(73992),i=n(18679),s=n(59943);const l={slug:"implementing-a-serverless-sftp-gateway-using-the-aws-transfer-family",title:"Implementing a Serverless SFTP Gateway using the AWS Transfer Family",authors:["jeffreyaven"],draft:!1,image:"/img/blog/aws-transfer-for-sftp.png",tags:["aws","aws transfer family","serverless","snowflake","snowpipe","sftp","managed file transfer"],keywords:["aws","aws transfer family","serverless","snowflake","snowpipe","sftp","managed file transfer"],description:"An example implementation of an SFTP gateway using the AWS Transfer Family service, to store client data in an encrypted S3 bucket."},u=void 0,c={permalink:"/implementing-a-serverless-sftp-gateway-using-the-aws-transfer-family",editUrl:"https://github.com/stackql/fullstackchronicles.io/edit/main/blog/2022-02-23-implementing-a-serverless-sftp-gateway-using-the-aws-transfer-family/index.md",source:"@site/blog/2022-02-23-implementing-a-serverless-sftp-gateway-using-the-aws-transfer-family/index.md",title:"Implementing a Serverless SFTP Gateway using the AWS Transfer Family",description:"An example implementation of an SFTP gateway using the AWS Transfer Family service, to store client data in an encrypted S3 bucket.",date:"2022-02-23T00:00:00.000Z",formattedDate:"February 23, 2022",tags:[{label:"aws",permalink:"/tags/aws"},{label:"aws transfer family",permalink:"/tags/aws-transfer-family"},{label:"serverless",permalink:"/tags/serverless"},{label:"snowflake",permalink:"/tags/snowflake"},{label:"snowpipe",permalink:"/tags/snowpipe"},{label:"sftp",permalink:"/tags/sftp"},{label:"managed file transfer",permalink:"/tags/managed-file-transfer"}],readingTime:5.935,hasTruncateMarker:!1,authors:[{name:"Jeffrey Aven",title:"Technologist and Cloud Consultant",url:"https://www.linkedin.com/in/jeffreyaven/",imageURL:"https://s.gravatar.com/avatar/f96573d092470c74be233e1dded5376f?s=80",key:"jeffreyaven"}],frontMatter:{slug:"implementing-a-serverless-sftp-gateway-using-the-aws-transfer-family",title:"Implementing a Serverless SFTP Gateway using the AWS Transfer Family",authors:["jeffreyaven"],draft:!1,image:"/img/blog/aws-transfer-for-sftp.png",tags:["aws","aws transfer family","serverless","snowflake","snowpipe","sftp","managed file transfer"],keywords:["aws","aws transfer family","serverless","snowflake","snowpipe","sftp","managed file transfer"],description:"An example implementation of an SFTP gateway using the AWS Transfer Family service, to store client data in an encrypted S3 bucket."},prevItem:{title:"Scaling up Prefect with GitStorage",permalink:"/scaling-up-prefect-with-gitstorage"},nextItem:{title:"Simple SSO with an external IdP using Active Directory and Okta",permalink:"/simple-sso-with-an-external-idp-using-active-directory-and-okta"}},p={authorsImageUrls:[void 0]},d=[{value:"Architecture",id:"architecture",level:2},{value:"Setup",id:"setup",level:2},{value:"Setup the Service",id:"setup-the-service",level:2},{value:"Create the S3 Bucket",id:"create-the-s3-bucket",level:2},{value:"Create a Customer Managed KMS Key",id:"create-a-customer-managed-kms-key",level:2},{value:"User Directory Mappings",id:"user-directory-mappings",level:2},{value:"Create a Scoped Down Policy",id:"create-a-scoped-down-policy",level:3},{value:"Create a user",id:"create-a-user",level:3},{value:"Create a Route 53 CNAME record",id:"create-a-route-53-cname-record",level:2},{value:"Create some shared Tags",id:"create-some-shared-tags",level:2},{value:"Pull it all together!",id:"pull-it-all-together",level:2}],m={toc:d};function f(e){let{components:t,...l}=e;return(0,r.kt)("wrapper",(0,a.Z)({},m,l,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"When you want the SFTP service without the SFTP Server.  ")),(0,r.kt)("p",null,"In implementing data platforms with external data providers, it is common to use a managed file transfer platform or an SFTP gateway as an entry point for providers to supply data to your system.  "),(0,r.kt)("p",null,"Often in past implementations this would involve deploying a sever (typically a Linux VM) and provisioning and configuring an SFTP service.  If you wanted the data sent by clients to be copied to another storage medium (such as S3 or EFS) you would need to roll your own code or subscribe to a marketplace offering to do so.  "),(0,r.kt)("p",null,"I recently trialled the ",(0,r.kt)("a",{parentName:"p",href:"https://docs.aws.amazon.com/transfer/index.html"},"AWS Transfer Family SFTP gateway")," offering from AWS and sharing my adventures here.  "),(0,r.kt)("h2",{id:"architecture"},"Architecture"),(0,r.kt)("p",null,"In this reference architecture, we are deploying an SFTP service which uses a path in an S3 bucket as a user\u2019s home directory.  Objects in the bucket are encrypted with a customer managed KMS key.  The SFTP server front end address is mapped to a vanity URL using Route53.  The bucket and path are integrated with a ",(0,r.kt)("inlineCode",{parentName:"p"},"STORAGE INTEGRATION"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"STAGE")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"PIPE")," definition in Snowflake.  The Snowflake bits are covered in more detail in this blog: ",(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("a",{parentName:"strong",href:"automating-snowflake-role-based-storage-integration-for-aws"},"Automating Snowflake Role Based Storage Integration for AWS")),".  This article just details the AWS Transfer Family SFTP setup."),(0,r.kt)(o.Z,{defaultValue:"architecture",values:[{label:"Architecture",value:"architecture"},{label:"PlantUML",value:"plantuml"}],mdxType:"Tabs"},(0,r.kt)(i.Z,{value:"architecture",mdxType:"TabItem"},(0,r.kt)("p",null,(0,r.kt)("a",{target:"_blank",href:n(51425).Z},(0,r.kt)("img",{alt:"AWS Transfer SFTP Architecture",src:n(71261).Z,width:"1014",height:"725"}))," ")),(0,r.kt)(i.Z,{value:"plantuml",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},'@startuml\n\nskinparam rectangle<<boundary>> {\n    Shadowing false\n    StereotypeFontSize 0\n    FontColor #444444\n    BorderColor #444444\n    BorderStyle dashed\n}\n\nskinparam defaultTextAlignment center\n\n!$imgroot = "https://github.com/avensolutions/plantuml-cloud-image-library/raw/main/images"\n\n!unquoted procedure $AwsS3($alias, $label, $techn, $descr="", $stereo="AWS S3")\n    rectangle "==$label\\n\\n<img:$imgroot/aws/Storage/S3.png>\\n//<size:12>[$techn]</size>//" <<$stereo>> as $alias #white\n!endprocedure\n\n!unquoted procedure $Kms($alias, $label, $techn, $descr="", $stereo="AWS KMS")\n    rectangle "==$label\\n\\n<img:$imgroot/aws/SecurityIdentityCompliance/kms.png{scale=0.80}>\\n//<size:12>[$techn]</size>//" <<$stereo>> as $alias #white\n!endprocedure\n\n!unquoted procedure $Route53($alias, $label, $techn, $descr="", $stereo="AWS Route53")\n    rectangle "==$label\\n\\n<img:$imgroot/aws/Networking/route53.png{scale=0.80}>\\n//<size:12>[$techn]</size>//" <<$stereo>> as $alias #white\n!endprocedure\n\n!unquoted procedure $AwsTransferFamily($alias, $label, $techn, $descr="", $stereo="AWS Transfer Family")\n    rectangle "==$label\\n\\n<img:$imgroot/aws/MigrationTransfer/TransferFamily.png>\\n//<size:12>[$techn]</size>//" <<$stereo>> as $alias #white\n!endprocedure\n\n!unquoted procedure $Data($alias, $label, $techn, $descr="", $stereo="Data")\n    rectangle "==$label\\n\\n<img:$imgroot/general/documents.png>\\n//<size:12>[$techn]</size>//" <<$stereo>> as $alias #white\n!endprocedure\n\n!unquoted procedure $Snowpipe($alias, $label, $techn, $descr="", $stereo="Snowpipe")\n    rectangle "==$label\\n\\n<img:$imgroot/snowflake/snowpipe.png{scale=0.60}>\\n//<size:12>[$techn]</size>//" <<$stereo>> as $alias #white\n!endprocedure\n\n!unquoted procedure $SnowflakeDb($alias, $label, $techn, $descr="", $stereo="Snowflake DB")\n    rectangle "==$label\\n\\n<img:$imgroot/snowflake/snowflakeDB.png{scale=0.70}>\\n//<size:12>[$techn]</size>//" <<$stereo>> as $alias #white\n!endprocedure\n\n$Data(supplier, Data Supplier, External Client)\n\nrectangle "AWS Environment" <<boundary>> {\n    $AwsTransferFamily(sftpgw, SFTP/FTPS Gateway, AWS Transfer Family)\n    $AwsS3(s3staging, Staging Bucket, AWS S3 Bucket)\n    $Kms(kms, KMS Key, Customer Managed Key)\n    $Route53(r53, CNAME Record, Route53 Record)\n}\n\nrectangle "Snowflake Environment" <<boundary>> {\n    $Snowpipe(snowpipe, Snowpipe, Snowpipe)\n    $SnowflakeDb(db, Snowflake DB, Snowflake DB)\n}\n\nr53 -[hidden]D- sftpgw\nsupplier -> r53 : resolves name\nr53 -> supplier : gets address\nsupplier -RIGHT-> sftpgw : SFTP\nsftpgw -DOWN-> kms : uses\nsftpgw -RIGHT-> s3staging: writes to\ns3staging -RIGHT-> snowpipe: writes to\nsnowpipe -DOWN-> kms: uses\nsnowpipe -RIGHT-> db: writes to\n\n@enduml\n')))),(0,r.kt)("h2",{id:"setup"},"Setup"),(0,r.kt)("p",null,"The steps to set up this pattern are detailed below.  "),(0,r.kt)("admonition",{type:"info"},(0,r.kt)("p",{parentName:"admonition"},"This example uses the Jsonnet/CloudFormation pattern described in this article: ",(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("a",{parentName:"strong",href:"simplifying-large-cloudformation-templates-using-jsonnet"},"Simplifying Large CloudFormation Templates using Jsonnet")),".  This is a useful pattern for breaking up a monolithic CloudFormation template at design time to more manageable resource scoped documents, then pre-processing these in a CI routine (GitLab CI, GitHub Actions, etc) to create a complete template.")),(0,r.kt)("h2",{id:"setup-the-service"},"Setup the Service"),(0,r.kt)("p",null,"To setup the SFTP transfer service use the ",(0,r.kt)("inlineCode",{parentName:"p"},"AWS::Transfer::Server")," resource type as shown below:  "),(0,r.kt)(s.Z,{id:"c8b4ce8ab478715753aab73d478f4fcd",mdxType:"Gist"}),(0,r.kt)("admonition",{type:"note"},(0,r.kt)("p",{parentName:"admonition"},"Use the ",(0,r.kt)("inlineCode",{parentName:"p"},"tags")," shown to display the custom hostname (used as a vanity url) in the Transfer UI in the AWS console.")),(0,r.kt)("h2",{id:"create-the-s3-bucket"},"Create the S3 Bucket"),(0,r.kt)("p",null,"Create a bucket which will be used to store incoming files sent via SFTP.  "),(0,r.kt)(s.Z,{id:"82eb106bc13f1a888f823cc71a7ff933",mdxType:"Gist"}),(0,r.kt)("admonition",{type:"note"},(0,r.kt)("p",{parentName:"admonition"},"This example logs to a logging bucket, not shown for brevity.")),(0,r.kt)("h2",{id:"create-a-customer-managed-kms-key"},"Create a Customer Managed KMS Key"),(0,r.kt)("p",null,"Create a customer managed KMS key which will be used to encrypt data stored in the S3 bucket created in the previous step.  "),(0,r.kt)(s.Z,{id:"2c563411442c4541584815389de8a3b5",mdxType:"Gist"}),(0,r.kt)("h1",{id:"create-an-iam-role-to-access-the-bucket"},"Create an IAM role to access the bucket"),(0,r.kt)("p",null,"Create an IAM role which will be assumed by the AWS Transfer Service to read and write to the S3 staging bucket.  "),(0,r.kt)(s.Z,{id:"57e23a5c99c22f5550e99b086db5f9f1",mdxType:"Gist"}),(0,r.kt)("admonition",{type:"important"},(0,r.kt)("p",{parentName:"admonition"},"You must assign permissions to use the KMS key created previously, failure to do so will result in errors such as:"),(0,r.kt)("pre",{parentName:"admonition"},(0,r.kt)("code",{parentName:"pre"},"remote readdir(): Permission denied\n"))),(0,r.kt)("h2",{id:"user-directory-mappings"},"User Directory Mappings"),(0,r.kt)("p",null,"An SFTP users home directory is mapped to a path in your S3 bucket.  It is recommended to use the ",(0,r.kt)("inlineCode",{parentName:"p"},"LOGICAL")," ",(0,r.kt)("inlineCode",{parentName:"p"},"HomeDirectoryType"),".  This will prevent SFTP users from:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"seeing or being able to access other users home directories"),(0,r.kt)("li",{parentName:"ul"},"seeing the bucket name or paths in the bucket above their home directory")),(0,r.kt)("p",null,"There are some trade offs for this which can make deployment a little more challenging but we will cover off the steps from here."),(0,r.kt)("h3",{id:"create-a-scoped-down-policy"},"Create a Scoped Down Policy"),(0,r.kt)("p",null,'A "scoped down" policy prevents users from seeing or accessing objects in other users home directories.  This is a text file that will be sourced as a string into the ',(0,r.kt)("inlineCode",{parentName:"p"},"Policy")," parameter of each SFTP user you create."),(0,r.kt)(s.Z,{id:"5e876bbf95b1b36355fa8af868572a26",mdxType:"Gist"}),(0,r.kt)("admonition",{type:"important"},(0,r.kt)("p",{parentName:"admonition"},"Using the ",(0,r.kt)("inlineCode",{parentName:"p"},"LOGICAL")," ",(0,r.kt)("inlineCode",{parentName:"p"},"HomeDirectoryType")," you don't have access to variables which represent the bucket, so this needs to be hard coded in the ",(0,r.kt)("inlineCode",{parentName:"p"},"policy.txt")," document.  "),(0,r.kt)("p",{parentName:"admonition"},"Also if you are using a customer managed KMS key to encrypt the data in the bucket (which you should be), you need to add permissions to the key - which again cannot be represented by a variable.  "),(0,r.kt)("p",{parentName:"admonition"},"Failure to do so will result in errors when trying to ",(0,r.kt)("inlineCode",{parentName:"p"},"ls"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"put"),", etc into the user's home directory such as:  "),(0,r.kt)("pre",{parentName:"admonition"},(0,r.kt)("code",{parentName:"pre"},"Couldn't read directory: Permission denied\nCouldn't close file: Permission denied\n")),(0,r.kt)("p",{parentName:"admonition"},"Since these properties are unlikely to change for the lifetime of your service this should not be an issue.  ")),(0,r.kt)("h3",{id:"create-a-user"},"Create a user"),(0,r.kt)("p",null,"Users are identified by a username and an SSH key, providing the public key to the server.  A sample user is shown here:  "),(0,r.kt)(s.Z,{id:"1b946b07374b78e0aca380317729bfa9",mdxType:"Gist"}),(0,r.kt)("admonition",{type:"tip"},(0,r.kt)("p",{parentName:"admonition"},"As discussed previously, it is recommended to use ",(0,r.kt)("inlineCode",{parentName:"p"},"LOGICAL")," home directory mappings, which prevents users from seeing information about the bucket or other directories on the SFTP server (including other users directories).")),(0,r.kt)("h2",{id:"create-a-route-53-cname-record"},"Create a Route 53 CNAME record"),(0,r.kt)("p",null,"Ideally you want to use a vanity url for users to access your SFTP service, such as ",(0,r.kt)("inlineCode",{parentName:"p"},"sftp.yourcompany.com"),".  This can be accomplished by using a Route 53 CNAME record as shown here:  "),(0,r.kt)(s.Z,{id:"0098851edc8d60b45534f6b1134be8cd",mdxType:"Gist"}),(0,r.kt)("h2",{id:"create-some-shared-tags"},"Create some shared Tags"),(0,r.kt)("p",null,"You would have noticed a shared ",(0,r.kt)("inlineCode",{parentName:"p"},"Tags")," definition in many of the ",(0,r.kt)("inlineCode",{parentName:"p"},"libsonnet")," files shown, an example ",(0,r.kt)("inlineCode",{parentName:"p"},"Tags")," source file is shown here:  "),(0,r.kt)(s.Z,{id:"8323d49f1045d2cd8c874d5a00e82a5e",mdxType:"Gist"}),(0,r.kt)("h2",{id:"pull-it-all-together"},"Pull it all together!"),(0,r.kt)("p",null,"Now that we have all of the input files, lets pull them all together in a ",(0,r.kt)("inlineCode",{parentName:"p"},"jsonnet")," file, which will be preprocessed in a CI process to create a template we can deploy with AWS CloudFormation.  "),(0,r.kt)(s.Z,{id:"f56065c075af9cc33853b0624f6ef636",mdxType:"Gist"}),(0,r.kt)("p",null,"Your customers would now connect to your service using they private key which corresponds to the public key they supplied to you in one of the previous steps, for example:    "),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"sftp -i mysftpkey jeffrey_aven@sftp.yourdomain.com\n")),(0,r.kt)("p",null,"Add more users and enjoy!"))}f.isMDXComponent=!0},18679:(e,t,n)=>{n.d(t,{Z:()=>i});var a=n(67294),r=n(34334);const o="tabItem_Ymn6";function i(e){let{children:t,hidden:n,className:i}=e;return a.createElement("div",{role:"tabpanel",className:(0,r.Z)(o,i),hidden:n},t)}},73992:(e,t,n)=>{n.d(t,{Z:()=>S});var a=n(83117),r=n(67294),o=n(34334),i=n(76775),s=n(75238),l=n(33609),u=n(92560);function c(e){return function(e){return r.Children.map(e,(e=>{if((0,r.isValidElement)(e)&&"value"in e.props)return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))}(e).map((e=>{let{props:{value:t,label:n,attributes:a,default:r}}=e;return{value:t,label:n,attributes:a,default:r}}))}function p(e){const{values:t,children:n}=e;return(0,r.useMemo)((()=>{const e=t??c(n);return function(e){const t=(0,l.l)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,n])}function d(e){let{value:t,tabValues:n}=e;return n.some((e=>e.value===t))}function m(e){let{queryString:t=!1,groupId:n}=e;const a=(0,i.k6)(),o=function(e){let{queryString:t=!1,groupId:n}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!n)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return n??null}({queryString:t,groupId:n});return[(0,s._X)(o),(0,r.useCallback)((e=>{if(!o)return;const t=new URLSearchParams(a.location.search);t.set(o,e),a.replace({...a.location,search:t.toString()})}),[o,a])]}function f(e){const{defaultValue:t,queryString:n=!1,groupId:a}=e,o=p(e),[i,s]=(0,r.useState)((()=>function(e){let{defaultValue:t,tabValues:n}=e;if(0===n.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!d({value:t,tabValues:n}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${n.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const a=n.find((e=>e.default))??n[0];if(!a)throw new Error("Unexpected error: 0 tabValues");return a.value}({defaultValue:t,tabValues:o}))),[l,c]=m({queryString:n,groupId:a}),[f,h]=function(e){let{groupId:t}=e;const n=function(e){return e?`docusaurus.tab.${e}`:null}(t),[a,o]=(0,u.Nk)(n);return[a,(0,r.useCallback)((e=>{n&&o.set(e)}),[n,o])]}({groupId:a}),g=(()=>{const e=l??f;return d({value:e,tabValues:o})?e:null})();(0,r.useEffect)((()=>{g&&s(g)}),[g]);return{selectedValue:i,selectValue:(0,r.useCallback)((e=>{if(!d({value:e,tabValues:o}))throw new Error(`Can't select invalid tab value=${e}`);s(e),c(e),h(e)}),[c,h,o]),tabValues:o}}var h=n(72957),g=n(51048);const y="tabList__CuJ",b="tabItem_LNqP";function k(e){let{className:t,block:n,selectedValue:i,selectValue:s,tabValues:l}=e;const u=[],{blockElementScrollPositionUntilNextRender:c}=(0,h.o5)(),p=e=>{const t=e.currentTarget,n=u.indexOf(t),a=l[n].value;a!==i&&(c(t),s(a))},d=e=>{var t;let n=null;switch(e.key){case"Enter":p(e);break;case"ArrowRight":{const t=u.indexOf(e.currentTarget)+1;n=u[t]??u[0];break}case"ArrowLeft":{const t=u.indexOf(e.currentTarget)-1;n=u[t]??u[u.length-1];break}}null==(t=n)||t.focus()};return r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,o.Z)("tabs",{"tabs--block":n},t)},l.map((e=>{let{value:t,label:n,attributes:s}=e;return r.createElement("li",(0,a.Z)({role:"tab",tabIndex:i===t?0:-1,"aria-selected":i===t,key:t,ref:e=>u.push(e),onKeyDown:d,onClick:p},s,{className:(0,o.Z)("tabs__item",b,null==s?void 0:s.className,{"tabs__item--active":i===t})}),n??t)})))}function w(e){let{lazy:t,children:n,selectedValue:a}=e;if(t){const e=n.find((e=>e.props.value===a));return e?(0,r.cloneElement)(e,{className:"margin-top--md"}):null}return r.createElement("div",{className:"margin-top--md"},n.map(((e,t)=>(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==a}))))}function v(e){const t=f(e);return r.createElement("div",{className:(0,o.Z)("tabs-container",y)},r.createElement(k,(0,a.Z)({},e,t)),r.createElement(w,(0,a.Z)({},e,t)))}function S(e){const t=(0,g.Z)();return r.createElement(v,(0,a.Z)({key:String(t)},e))}},51425:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/files/aws-transfer-sftp-architecture-7964e0e7ee271b7c690605e7cfa8a72d.png"},59943:(e,t,n)=>{n.d(t,{Z:()=>i});var a=n(67294);n(45697);function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function o(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}const i=function(e){function t(){return r(this,t),o(this,e.apply(this,arguments))}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,e),t.prototype.componentDidMount=function(){this._updateIframeContent()},t.prototype.componentDidUpdate=function(e,t){this._updateIframeContent()},t.prototype._defineUrl=function(){var e=this.props,t=e.id,n=e.file;return"https://gist.github.com/"+t+".js"+(n?"?file="+n:"")},t.prototype._updateIframeContent=function(){var e=this.props,t=e.id,n=e.file,a=this.iframeNode,r=a.document;a.contentDocument?r=a.contentDocument:a.contentWindow&&(r=a.contentWindow.document);var o='<html><head><base target="_parent"><style>*{font-size:12px;}</style></head><body '+("onload=\"parent.document.getElementById('"+(n?"gist-"+t+"-"+n:"gist-"+t)+"').style.height=document.body.scrollHeight + 'px'\"")+">"+('<script type="text/javascript" src="'+this._defineUrl()+'"><\/script>')+"</body></html>";r.open(),r.writeln(o),r.close()},t.prototype.render=function(){var e=this,t=this.props,n=t.id,r=t.file;return a.createElement("iframe",{ref:function(t){e.iframeNode=t},width:"100%",frameBorder:0,id:r?"gist-"+n+"-"+r:"gist-"+n})},t}(a.PureComponent)},71261:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/aws-transfer-sftp-architecture-7964e0e7ee271b7c690605e7cfa8a72d.png"}}]);