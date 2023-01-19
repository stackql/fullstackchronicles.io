"use strict";(self.webpackChunkfull_stack_chronicles=self.webpackChunkfull_stack_chronicles||[]).push([[40420],{3905:(e,t,o)=>{o.d(t,{Zo:()=>l,kt:()=>g});var n=o(67294);function r(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}function a(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,n)}return o}function i(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?a(Object(o),!0).forEach((function(t){r(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):a(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}function c(e,t){if(null==e)return{};var o,n,r=function(e,t){if(null==e)return{};var o,n,r={},a=Object.keys(e);for(n=0;n<a.length;n++)o=a[n],t.indexOf(o)>=0||(r[o]=e[o]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)o=a[n],t.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(r[o]=e[o])}return r}var s=n.createContext({}),p=function(e){var t=n.useContext(s),o=t;return e&&(o="function"==typeof e?e(t):i(i({},t),e)),o},l=function(e){var t=p(e.components);return n.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var o=e.components,r=e.mdxType,a=e.originalType,s=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),u=p(o),g=r,f=u["".concat(s,".").concat(g)]||u[g]||d[g]||a;return o?n.createElement(f,i(i({ref:t},l),{},{components:o})):n.createElement(f,i({ref:t},l))}));function g(e,t){var o=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=o.length,i=new Array(a);i[0]=u;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:r,i[1]=c;for(var p=2;p<a;p++)i[p]=o[p];return n.createElement.apply(null,i)}return n.createElement.apply(null,o)}u.displayName="MDXCreateElement"},46316:(e,t,o)=>{o.r(t),o.d(t,{assets:()=>p,contentTitle:()=>c,default:()=>u,frontMatter:()=>i,metadata:()=>s,toc:()=>l});var n=o(83117),r=(o(67294),o(3905)),a=o(59943);const i={slug:"converting-google-discovery-docs-to-openapi3-specs",title:"Converting Google Discovery Docs to OpenAPI3 Specs",authors:["jeffreyaven"],draft:!1,image:"/img/blog/google-discovery-doc-to-openapi-conversion.png",tags:["openapi","openapi3","openapi","googlecloud","gcp","swagger"],keywords:["openapi","openapi3","openapi","googlecloud","gcp","swagger"]},c=void 0,s={permalink:"/converting-google-discovery-docs-to-openapi3-specs",editUrl:"https://github.com/stackql/fullstackchronicles.io/tree/main/src/blog/blog/2022-06-24-converting-google-discovery-docs-to-openapi3-specs/index.md",source:"@site/blog/2022-06-24-converting-google-discovery-docs-to-openapi3-specs/index.md",title:"Converting Google Discovery Docs to OpenAPI3 Specs",description:"",date:"2022-06-24T00:00:00.000Z",formattedDate:"June 24, 2022",tags:[{label:"openapi",permalink:"/tags/openapi"},{label:"openapi3",permalink:"/tags/openapi-3"},{label:"googlecloud",permalink:"/tags/googlecloud"},{label:"gcp",permalink:"/tags/gcp"},{label:"swagger",permalink:"/tags/swagger"}],readingTime:1.45,hasTruncateMarker:!1,authors:[{name:"Jeffrey Aven",title:"Technologist and Cloud Consultant",url:"https://www.linkedin.com/in/jeffreyaven/",imageURL:"https://s.gravatar.com/avatar/f96573d092470c74be233e1dded5376f?s=80",key:"jeffreyaven"}],frontMatter:{slug:"converting-google-discovery-docs-to-openapi3-specs",title:"Converting Google Discovery Docs to OpenAPI3 Specs",authors:["jeffreyaven"],draft:!1,image:"/img/blog/google-discovery-doc-to-openapi-conversion.png",tags:["openapi","openapi3","openapi","googlecloud","gcp","swagger"],keywords:["openapi","openapi3","openapi","googlecloud","gcp","swagger"]},prevItem:{title:"Analyze Developer Activity with StackQL, Jupyter and BigQuery",permalink:"/analyze-developer-activity-with-stackql-jupyter-bigquery"},nextItem:{title:"Recurse JavaScript Object to Get Values for a Given Key the Easy Way",permalink:"/recurse-javascript-object-to-get-values-for-a-given-key-the-easy-way"}},p={authorsImageUrls:[void 0]},l=[{value:"Code Overview",id:"code-overview",level:2},{value:"Extracting Paths and Verbs",id:"extracting-paths-and-verbs",level:3}],d={toc:l};function u(e){let{components:t,...o}=e;return(0,r.kt)("wrapper",(0,n.Z)({},d,o,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"This article walks through the process of converting service specific OpenAPI specifications from Google Discovery REST URLs using Python.  "),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"Full code for this article can be found at ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/stackql/google-discovery-to-openapi"},(0,r.kt)("strong",{parentName:"a"},"stackql/google-discovery-to-openapi")),"  ")),(0,r.kt)("p",null,"Google publishes JSON specifications for all of their APIs (including GCP services as well as other APIs associated with other products - like analytics or workspace).  These specifications can be accessed without authentication starting with the root document (",(0,r.kt)("a",{parentName:"p",href:"https://discovery.googleapis.com/discovery/v1/apis"},"https://discovery.googleapis.com/discovery/v1/apis"),") which contains metadata and the URL for each service specific document (for services like ",(0,r.kt)("inlineCode",{parentName:"p"},"compute")," or ",(0,r.kt)("inlineCode",{parentName:"p"},"storage"),")."),(0,r.kt)("h2",{id:"code-overview"},"Code Overview"),(0,r.kt)("p",null,"The program fetches the service document for each service that is included and not explicitly excluded (configured through variables in the program).  Non preferred services (beta or alpha versions) can be included by setting the variable ",(0,r.kt)("inlineCode",{parentName:"p"},"get_preferred_only")," to ",(0,r.kt)("inlineCode",{parentName:"p"},"False"),".  "),(0,r.kt)("p",null,"An OpenAPI spec is constructed for each service based upon the data in the service discovery doc.  In many cases this is a straightforward one to one mapping, such as to top level ",(0,r.kt)("inlineCode",{parentName:"p"},"info"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"title")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"description")," values, it gets more complicated with parameters and schemas where some extra logic is required to keep the json pointers (",(0,r.kt)("inlineCode",{parentName:"p"},"$ref"),") valid.  "),(0,r.kt)("h3",{id:"extracting-paths-and-verbs"},"Extracting Paths and Verbs"),(0,r.kt)("p",null,"The real magic is in extracting paths and verbs in a compliant OpenAPI format, as Google nests this data (potentially multiple levels deep) under resources.  "),(0,r.kt)("p",null,"The first step is to identify ",(0,r.kt)("inlineCode",{parentName:"p"},"methods")," nested under a ",(0,r.kt)("inlineCode",{parentName:"p"},"resources")," object (which can be mapped to operations - with a path and HTTP verb required to populate an OpenAPI spec), this function does this:  "),(0,r.kt)(a.Z,{id:"11ee413049cdcd81a433d4df8925c016",mdxType:"Gist"}),(0,r.kt)("p",null,"Now each method can be processed yielding an operation (combination of ",(0,r.kt)("inlineCode",{parentName:"p"},"path")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"verb"),"), this is done using this function:  "),(0,r.kt)(a.Z,{id:"2ffd64aa8ba07a8f9ccd441ed9709ef3",mdxType:"Gist"}),(0,r.kt)("p",null,"Full source code can be found at ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/stackql/google-discovery-to-openapi"},(0,r.kt)("strong",{parentName:"a"},"stackql/google-discovery-to-openapi")),"."))}u.isMDXComponent=!0},59943:(e,t,o)=>{o.d(t,{Z:()=>i});var n=o(67294);o(45697);function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function a(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}const i=function(e){function t(){return r(this,t),a(this,e.apply(this,arguments))}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,e),t.prototype.componentDidMount=function(){this._updateIframeContent()},t.prototype.componentDidUpdate=function(e,t){this._updateIframeContent()},t.prototype._defineUrl=function(){var e=this.props,t=e.id,o=e.file;return"https://gist.github.com/"+t+".js"+(o?"?file="+o:"")},t.prototype._updateIframeContent=function(){var e=this.props,t=e.id,o=e.file,n=this.iframeNode,r=n.document;n.contentDocument?r=n.contentDocument:n.contentWindow&&(r=n.contentWindow.document);var a='<html><head><base target="_parent"><style>*{font-size:12px;}</style></head><body '+("onload=\"parent.document.getElementById('"+(o?"gist-"+t+"-"+o:"gist-"+t)+"').style.height=document.body.scrollHeight + 'px'\"")+">"+('<script type="text/javascript" src="'+this._defineUrl()+'"><\/script>')+"</body></html>";r.open(),r.writeln(a),r.close()},t.prototype.render=function(){var e=this,t=this.props,o=t.id,r=t.file;return n.createElement("iframe",{ref:function(t){e.iframeNode=t},width:"100%",frameBorder:0,id:r?"gist-"+o+"-"+r:"gist-"+o})},t}(n.PureComponent)}}]);