"use strict";(self.webpackChunkfull_stack_chronicles=self.webpackChunkfull_stack_chronicles||[]).push([[85939],{3905:(e,t,o)=>{o.d(t,{Zo:()=>p,kt:()=>g});var a=o(67294);function n(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}function i(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,a)}return o}function r(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?i(Object(o),!0).forEach((function(t){n(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):i(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}function l(e,t){if(null==e)return{};var o,a,n=function(e,t){if(null==e)return{};var o,a,n={},i=Object.keys(e);for(a=0;a<i.length;a++)o=i[a],t.indexOf(o)>=0||(n[o]=e[o]);return n}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)o=i[a],t.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(n[o]=e[o])}return n}var c=a.createContext({}),s=function(e){var t=a.useContext(c),o=t;return e&&(o="function"==typeof e?e(t):r(r({},t),e)),o},p=function(e){var t=s(e.components);return a.createElement(c.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var o=e.components,n=e.mdxType,i=e.originalType,c=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),d=s(o),g=n,f=d["".concat(c,".").concat(g)]||d[g]||u[g]||i;return o?a.createElement(f,r(r({ref:t},p),{},{components:o})):a.createElement(f,r({ref:t},p))}));function g(e,t){var o=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=o.length,r=new Array(i);r[0]=d;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:n,r[1]=l;for(var s=2;s<i;s++)r[s]=o[s];return a.createElement.apply(null,r)}return a.createElement.apply(null,o)}d.displayName="MDXCreateElement"},97344:(e,t,o)=>{o.d(t,{Z:()=>n});var a=o(67294);const n=e=>{let{imageSrc:t,altText:o}=e;return a.createElement("figure",null,a.createElement("a",{href:t},a.createElement("img",{src:t,alt:o})),a.createElement("figcaption",{className:"figure-caption"},o))}},20276:(e,t,o)=>{o.r(t),o.d(t,{assets:()=>b,contentTitle:()=>h,default:()=>w,frontMatter:()=>m,metadata:()=>k,toc:()=>y});var a=o(83117),n=(o(67294),o(3905)),i=o(59943),r=o(97344),l=o(27983),c=o(95266),s=o(90888),p=o(12646),u=o(14204),d=o(31745),g=o(72813),f=o(38645);const m={slug:"google-cloud-storage-object-notifications-using-slack",title:"Google Cloud Storage Object Notifications using Slack",authors:["jeffreyaven"],draft:!1,hide_table_of_contents:!0,image:"images/Slack-GCS-Image.png",tags:["gcp","googlecloudplatform","slack","terraform"],keywords:["gcp","googlecloudplatform","slack","terraform"]},h=void 0,k={permalink:"/google-cloud-storage-object-notifications-using-slack",editUrl:"https://github.com/stackql/fullstackchronicles.io/tree/main/src/blog/blog/2019-11-09-google-cloud-storage-object-notifications-using-slack/index.md",source:"@site/blog/2019-11-09-google-cloud-storage-object-notifications-using-slack/index.md",title:"Google Cloud Storage Object Notifications using Slack",description:"This article describes the steps to integrate Slack with Google Cloud Functions to get notified about object events within a specified Google Cloud Storage bucket.",date:"2019-11-09T00:00:00.000Z",formattedDate:"November 9, 2019",tags:[{label:"gcp",permalink:"/tags/gcp"},{label:"googlecloudplatform",permalink:"/tags/googlecloudplatform"},{label:"slack",permalink:"/tags/slack"},{label:"terraform",permalink:"/tags/terraform"}],readingTime:2.755,hasTruncateMarker:!1,authors:[{name:"Jeffrey Aven",title:"Technologist and Cloud Consultant",url:"https://www.linkedin.com/in/jeffreyaven/",imageURL:"https://s.gravatar.com/avatar/f96573d092470c74be233e1dded5376f?s=80",key:"jeffreyaven"}],frontMatter:{slug:"google-cloud-storage-object-notifications-using-slack",title:"Google Cloud Storage Object Notifications using Slack",authors:["jeffreyaven"],draft:!1,hide_table_of_contents:!0,image:"images/Slack-GCS-Image.png",tags:["gcp","googlecloudplatform","slack","terraform"],keywords:["gcp","googlecloudplatform","slack","terraform"]},prevItem:{title:"The Ultimate AWS to GCP Thesaurus",permalink:"/ultimate-aws-to-gcp-thesaurus"},nextItem:{title:"Map Reduce is Dead, Long Live Map Reduce",permalink:"/map-reduce-is-dead-long-live-map-reduce"}},b={authorsImageUrls:[void 0]},y=[],v={toc:y};function w(e){let{components:t,...m}=e;return(0,n.kt)("wrapper",(0,a.Z)({},v,m,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("p",null,"This article describes the steps to integrate Slack with Google Cloud Functions to get notified about object events within a specified Google Cloud Storage bucket."),(0,n.kt)("p",null,(0,n.kt)("a",{target:"_blank",href:o(814).Z},(0,n.kt)("img",{alt:"Google Cloud Storage Object Notifications using Slack",src:o(46370).Z,width:"560",height:"341"}))),(0,n.kt)("p",null,"Events could include the creation of new objects, as well as delete, archive or metadata operations performed on a given bucket."),(0,n.kt)("p",null,"This pattern could be easily extended to other event sources supported by Cloud Functions including:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Cloud Pub/Sub messages"),(0,n.kt)("li",{parentName:"ul"},"Cloud Firestore and Firebase events"),(0,n.kt)("li",{parentName:"ul"},"Stackdriver log entries")),(0,n.kt)("p",null,"More information can be found at ",(0,n.kt)("a",{parentName:"p",href:"https://cloud.google.com/functions/docs/concepts/events-triggers"},"https://cloud.google.com/functions/docs/concepts/events-triggers"),"."),(0,n.kt)("p",null,"The prerequisite steps to configure Slack are provided here:"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},"First you will need to create a Slack app (assuming you have already set up an account and a workspace). The following screenshots demonstrate this process:")),(0,n.kt)(r.Z,{imageSrc:l.Z,altText:"Create a Slack app",mdxType:"ImageWithCaption"}),(0,n.kt)(r.Z,{imageSrc:c.Z,altText:"Give the app a name and associate it with an existing Slack workspace",mdxType:"ImageWithCaption"}),(0,n.kt)("ol",{start:2},(0,n.kt)("li",{parentName:"ol"},"Next you need to Enable and Activate Incoming Webhooks to your app and add this to your workspace. The following screenshots demonstrate this process:")),(0,n.kt)(r.Z,{imageSrc:s.Z,altText:"Enable Incoming Web Hooks for the app",mdxType:"ImageWithCaption"}),(0,n.kt)(r.Z,{imageSrc:p.Z,altText:"Activate incoming webhooks",mdxType:"ImageWithCaption"}),(0,n.kt)(r.Z,{imageSrc:u.Z,altText:"Add the webhook to your workspace",mdxType:"ImageWithCaption"}),(0,n.kt)("ol",{start:3},(0,n.kt)("li",{parentName:"ol"},"Next you need to specify a channel for notifications generated from object events.")),(0,n.kt)(r.Z,{imageSrc:d.Z,altText:"Select a channel for the webhook",mdxType:"ImageWithCaption"}),(0,n.kt)("ol",{start:4},(0,n.kt)("li",{parentName:"ol"},"Now you need to copy the Webhook url provided, you will use this later in your Cloud Function.")),(0,n.kt)(r.Z,{imageSrc:g.Z,altText:"Copy the webhook URL to the clipboard",mdxType:"ImageWithCaption"}),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},"Treat your webhook url as a secret, do not upload this to a public source code repository")),(0,n.kt)("p",null,"Next you need to create your Cloud Function, this example uses Python but you can use an alternative runtime including Node.js or Go."),(0,n.kt)("p",null,"This example templates the source code using the Terraform ",(0,n.kt)("inlineCode",{parentName:"p"},"template_file")," data source. The function source code is shown here:"),(0,n.kt)(i.Z,{id:"e248abd1af393e58de84e8776161c8cb",mdxType:"Gist"}),(0,n.kt)("p",null,"Within your Terraform code you need to render your Cloud Function code substituting the ",(0,n.kt)("inlineCode",{parentName:"p"},"slack_webhook_url")," for it's value which you will supply as a Terraform variable. The rendered template file is then placed in a local directory along with a ",(0,n.kt)("inlineCode",{parentName:"p"},"requirements.txt")," file and zipped up. The resulting Zip archive is uploaded to a specified bucket where it will be sourced to create the Cloud Function."),(0,n.kt)(i.Z,{id:"e247d09d33a4aca9154de081f3063978",mdxType:"Gist"}),(0,n.kt)("p",null,"Now you need to create the Cloud Function, the following HCL snippet demonstrates this:"),(0,n.kt)(i.Z,{id:"87e2e83e5b2b800d685a8d239280ca13",mdxType:"Gist"}),(0,n.kt)("p",null,"The ",(0,n.kt)("inlineCode",{parentName:"p"},"event_trigger")," block in particular specifies which GCS bucket to watch and what events will trigger invocation of the function. Bucket events include:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"google.storage.object.finalize")," ",(0,n.kt)("em",{parentName:"li"},"(the creation of a new object)")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"google.storage.object.delete")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"google.storage.object.archive")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"google.storage.object.metadataUpdate"))),(0,n.kt)("p",null,"You could add additional logic to the Cloud Function code to look for specific object names or naming patterns, but keep in mind the function will fire upon every event matching the ",(0,n.kt)("inlineCode",{parentName:"p"},"event_type")," and ",(0,n.kt)("inlineCode",{parentName:"p"},"resource")," criteria."),(0,n.kt)("p",null,"To deploy the function, you would simply run:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"},'terraform apply -var="slack_webhook_url=https://hooks.slack.com/services/XXXXXXXXX/XXXXXXXXX/XXXXXXXXXXXXXXXXXXXXXXXX"\n')),(0,n.kt)("p",null,"Now once you upload a file named ",(0,n.kt)("inlineCode",{parentName:"p"},"test-object.txt"),", voil\xe0!:"),(0,n.kt)(r.Z,{imageSrc:f.Z,altText:"Slack notification for a new object created",mdxType:"ImageWithCaption"}),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},"Full source code is available at: ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/gamma-data/gcs-object-notifications-using-slack"},"https://github.com/gamma-data/gcs-object-notifications-using-slack"))))}w.isMDXComponent=!0},814:(e,t,o)=>{o.d(t,{Z:()=>a});const a=o.p+"assets/files/Slack-GCS-6de5cb5ede305869300f0f933537e240.png"},59943:(e,t,o)=>{o.d(t,{Z:()=>r});var a=o(67294);o(45697);function n(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function i(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}const r=function(e){function t(){return n(this,t),i(this,e.apply(this,arguments))}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,e),t.prototype.componentDidMount=function(){this._updateIframeContent()},t.prototype.componentDidUpdate=function(e,t){this._updateIframeContent()},t.prototype._defineUrl=function(){var e=this.props,t=e.id,o=e.file;return"https://gist.github.com/"+t+".js"+(o?"?file="+o:"")},t.prototype._updateIframeContent=function(){var e=this.props,t=e.id,o=e.file,a=this.iframeNode,n=a.document;a.contentDocument?n=a.contentDocument:a.contentWindow&&(n=a.contentWindow.document);var i='<html><head><base target="_parent"><style>*{font-size:12px;}</style></head><body '+("onload=\"parent.document.getElementById('"+(o?"gist-"+t+"-"+o:"gist-"+t)+"').style.height=document.body.scrollHeight + 'px'\"")+">"+('<script type="text/javascript" src="'+this._defineUrl()+'"><\/script>')+"</body></html>";n.open(),n.writeln(i),n.close()},t.prototype.render=function(){var e=this,t=this.props,o=t.id,n=t.file;return a.createElement("iframe",{ref:function(t){e.iframeNode=t},width:"100%",frameBorder:0,id:n?"gist-"+o+"-"+n:"gist-"+o})},t}(a.PureComponent)},72813:(e,t,o)=>{o.d(t,{Z:()=>a});const a=o.p+"assets/images/output-onlinepngtools-7bfe4ca076a72230bcf2aa722f6e61c0.png"},38645:(e,t,o)=>{o.d(t,{Z:()=>a});const a=o.p+"assets/images/slack-notification-296ef71c70119965cb16d4fe536b1fbe.png"},27983:(e,t,o)=>{o.d(t,{Z:()=>a});const a=o.p+"assets/images/slack-notifications-setup-1-4922d02dd437b80334c8b3b85d25a94b.png"},95266:(e,t,o)=>{o.d(t,{Z:()=>a});const a=o.p+"assets/images/slack-notifications-setup-2-82f83d053fab9830256ca8ecaaa8f33a.png"},90888:(e,t,o)=>{o.d(t,{Z:()=>a});const a=o.p+"assets/images/slack-notifications-setup-3-6dec01da96437a43cf7c4e4d948e0dd6.png"},12646:(e,t,o)=>{o.d(t,{Z:()=>a});const a=o.p+"assets/images/slack-notifications-setup-4-95fc759fc0221afdffaa694b14245feb.png"},14204:(e,t,o)=>{o.d(t,{Z:()=>a});const a=o.p+"assets/images/slack-notifications-setup-5-2b9b7c134f51bbd0393068a614b5469c.png"},31745:(e,t,o)=>{o.d(t,{Z:()=>a});const a=o.p+"assets/images/slack-notifications-setup-6-3b3d2000288499a7cdb60c2cf7af04c5.png"},46370:(e,t,o)=>{o.d(t,{Z:()=>a});const a=o.p+"assets/images/Slack-GCS-6de5cb5ede305869300f0f933537e240.png"}}]);