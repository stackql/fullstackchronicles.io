"use strict";(self.webpackChunkfull_stack_chronicles=self.webpackChunkfull_stack_chronicles||[]).push([[8659],{43994:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>l,default:()=>u,frontMatter:()=>r,metadata:()=>s,toc:()=>d});var a=n(83117),i=(n(67294),n(3905)),o=n(59943);const r={slug:"json-wrangling-with-go",title:"JSON Wrangling with Go",authors:["jeffreyaven"],draft:!1,hide_table_of_contents:!0,image:"images/json-go.png",tags:["golang","json"],keywords:["golang","json"]},l=void 0,s={permalink:"/json-wrangling-with-go",editUrl:"https://github.com/stackql/fullstackchronicles.io/edit/main/src/blog/2020-04-22-json-wrangling-with-go/index.md",source:"@site/blog/2020-04-22-json-wrangling-with-go/index.md",title:"JSON Wrangling with Go",description:"JSON Golang",date:"2020-04-22T00:00:00.000Z",formattedDate:"April 22, 2020",tags:[{label:"golang",permalink:"/tags/golang"},{label:"json",permalink:"/tags/json"}],readingTime:4.21,hasTruncateMarker:!1,authors:[{name:"Jeffrey Aven",title:"Technologist and Cloud Consultant",url:"https://www.linkedin.com/in/jeffreyaven/",imageURL:"https://s.gravatar.com/avatar/f96573d092470c74be233e1dded5376f?s=80",key:"jeffreyaven"}],frontMatter:{slug:"json-wrangling-with-go",title:"JSON Wrangling with Go",authors:["jeffreyaven"],draft:!1,hide_table_of_contents:!0,image:"images/json-go.png",tags:["golang","json"],keywords:["golang","json"]},prevItem:{title:"Automated GCS Object Scanning Using DLP with Notifications Using Slack",permalink:"/automated-gcs-object-scanning-using-dlp-with-notifications-using-slack"},nextItem:{title:"Forseti Terraform Validator: Enforcing resource policy compliance in your CI pipeline",permalink:"/forseti-terraform-validator-enforcing-resource-policy-compliance-in-your-ci-pipeline"}},c={authorsImageUrls:[void 0]},d=[{value:"The JSON package",id:"the-json-package",level:2},{value:"Reading the data\u2026",id:"reading-the-data",level:2},{value:"The interface\u2026",id:"the-interface",level:2},{value:"Validating\u2026",id:"validating",level:2},{value:"Unmarshalling\u2026",id:"unmarshalling",level:2},{value:"Checking the type of the object using reflection\u2026",id:"checking-the-type-of-the-object-using-reflection",level:2},{value:"The type switch\u2026",id:"the-type-switch",level:2},{value:"Finding the nested collection and recursing it\u2026",id:"finding-the-nested-collection-and-recursing-it",level:2},{value:"The output\u2026",id:"the-output",level:2},{value:"In summary\u2026",id:"in-summary",level:2}],p={toc:d};function u(e){let{components:t,...r}=e;return(0,i.kt)("wrapper",(0,a.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"JSON Golang",src:n(55248).Z,width:"214",height:"92"})),(0,i.kt)("p",null,"Golang is a fantastic language but at first glance it is a bit clumsy when it comes to JSON in contrast to other languages such as Python or Javascript. Having said that once you master the concepts involved with JSON wrangling using Go it is equally as functional \u2013 with added type safety and performance."),(0,i.kt)("p",null,"In this article we will build a program in Golang to parse a JSON file containing a collection held in a named key \u2013 without knowing the structure of this object, we will expose the schema for the object including data types and recurse the object for its values."),(0,i.kt)("p",null,"This example uses a great Go package called ",(0,i.kt)("inlineCode",{parentName:"p"},"tablewriter")," to render the output of these operations using a table style result set."),(0,i.kt)("p",null,"The program has ",(0,i.kt)("inlineCode",{parentName:"p"},"describe")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"select")," verbs as operation types; describe shows the column names in the collection and their respective data types, select prints the keys and values as a tabular result set with column headers for the keys and rows containing their corresponding values."),(0,i.kt)("p",null,"Starting with this:"),(0,i.kt)(o.Z,{id:"cceeb5b667ccfe8a9e20437d3f1dde42",mdxType:"Gist"}),(0,i.kt)("p",null,"We will end up with this when performing a ",(0,i.kt)("inlineCode",{parentName:"p"},"describe")," operation:"),(0,i.kt)(o.Z,{id:"fbd04c220a70d439df3a14d4a4f48a3e",mdxType:"Gist"}),(0,i.kt)("p",null,"And this when performing a ",(0,i.kt)("inlineCode",{parentName:"p"},"select")," operation:"),(0,i.kt)(o.Z,{id:"0b795b13b160cfbcd6796243c0fbb238",mdxType:"Gist"}),(0,i.kt)("p",null,"Now let\u2019s talk about how we got there\u2026"),(0,i.kt)("h2",{id:"the-json-package"},"The JSON package"),(0,i.kt)("p",null,"Support for JSON in Go is provided using the ",(0,i.kt)("inlineCode",{parentName:"p"},"encoding/json")," package, this needs to be imported in your program of course\u2026 You will also need to import the ",(0,i.kt)("inlineCode",{parentName:"p"},"reflect")," package \u2013 more on this later. ",(0,i.kt)("inlineCode",{parentName:"p"},"io/ioutil")," is required to read the data from a file input, there are other packages included in the program that are removed for brevity:"),(0,i.kt)(o.Z,{id:"def7e02eac07ded8b80ff807cf023989",mdxType:"Gist"}),(0,i.kt)("h2",{id:"reading-the-data"},"Reading the data\u2026"),(0,i.kt)("p",null,"We will read the data from the JSON file into a variable called ",(0,i.kt)("inlineCode",{parentName:"p"},"body"),", note that we are not attempting to deserialize the data at this point. This is also a good opportunity to handle any runtime or IO errors that occur here as well."),(0,i.kt)(o.Z,{id:"74a2c2c839a30ed8cc66d83d3ddde3b4",mdxType:"Gist"}),(0,i.kt)("h2",{id:"the-interface"},"The interface\u2026"),(0,i.kt)("p",null,"We will declare an empty interface called ",(0,i.kt)("inlineCode",{parentName:"p"},"data")," which will be used to decode the json object (of which the structure is not known), we will also create an abstract interface called ",(0,i.kt)("inlineCode",{parentName:"p"},"colldata")," to hold the contents of the collection contained inside the JSON object that we are specifically looking for:"),(0,i.kt)(o.Z,{id:"32555f65af4be1fc2504f2d11e15aa19",mdxType:"Gist"}),(0,i.kt)("h2",{id:"validating"},"Validating\u2026"),(0,i.kt)("p",null,"Next we need to validate that the input is a valid JSON object, we can use the ",(0,i.kt)("inlineCode",{parentName:"p"},"json.Valid(body)")," method to do this:"),(0,i.kt)(o.Z,{id:"c7afe41fcca4ba1e3ed009044cea76de",mdxType:"Gist"}),(0,i.kt)("h2",{id:"unmarshalling"},"Unmarshalling\u2026"),(0,i.kt)("p",null,"Now the interesting bits, we will deserialize the JSON object to the empty data interface we created earlier using the ",(0,i.kt)("inlineCode",{parentName:"p"},"json.Unmarshal()")," method:"),(0,i.kt)(o.Z,{id:"2579ec79be915fb89e91ea0977bfbff6",mdxType:"Gist"}),(0,i.kt)("p",null,"Note that this operation is another opportunity to catch unexpected errors and handle them accordingly."),(0,i.kt)("h2",{id:"checking-the-type-of-the-object-using-reflection"},"Checking the type of the object using reflection\u2026"),(0,i.kt)("p",null,"Now that we have serialized the JSON object into the data interface, there are several ways we can inspect the type of the object (which could be a map or an array). One such way is to use reflection. Reflection is the ability of a program to inspect itself at runtime. An example is shown here:"),(0,i.kt)(o.Z,{id:"1ccd077de0fdee8973e25ac79719cbf5",mdxType:"Gist"}),(0,i.kt)("p",null,"This instruction would produce the following output for our ",(0,i.kt)("inlineCode",{parentName:"p"},"zones.json")," file:"),(0,i.kt)(o.Z,{id:"04c1b3ae79e969e4be32ef7fa1c07736",mdxType:"Gist"}),(0,i.kt)("h2",{id:"the-type-switch"},"The type switch\u2026"),(0,i.kt)("p",null,"Another method to decode the type of the data object (and any objects nested as elements or keys within the data object), is to use the type switch, an example of a type switch function is shown here:"),(0,i.kt)(o.Z,{id:"2e7a3d62ec6f7c71a9c01bfa8d360e4e",mdxType:"Gist"}),(0,i.kt)("h2",{id:"finding-the-nested-collection-and-recursing-it"},"Finding the nested collection and recursing it\u2026"),(0,i.kt)("p",null,"The aim of the program is to find a collection (an array of maps) nested in a JSON object. The maps with each element of the array are unknown at runtime and are discovered through recursion."),(0,i.kt)("p",null,"If we are performing a describe operation, we only need to parse the first element of the collection to get the key names and the data type of the values (for which we will use the same ",(0,i.kt)("inlineCode",{parentName:"p"},"getObjectType")," function to perform a type switch."),(0,i.kt)("p",null,"If we are performing a select operation, we need to parse the first element to get the column names (the keys in the map) and then we need to recurse each element to get the values for each key."),(0,i.kt)("p",null,"If the element contains a key named id or name, we will place this at the beginning of the resultant record, as maps are unordered by definition."),(0,i.kt)("h2",{id:"the-output"},"The output\u2026"),(0,i.kt)("p",null,"As mentioned, we are using the ",(0,i.kt)("inlineCode",{parentName:"p"},"tablewriter")," package to render the output of the collection as a pretty printed table in our terminal. As wrap around can get pretty ugly an additional ",(0,i.kt)("inlineCode",{parentName:"p"},"maxfieldlen")," argument is provided to truncate the values if needed."),(0,i.kt)("h2",{id:"in-summary"},"In summary\u2026"),(0,i.kt)("p",null,"Although it is a bit more involved than some other languages, once you get your head around processing JSON in Go, the possibilities are endless!"),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"Full source code can be found at: ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/gamma-data/json-wrangling-with-golang"},"https://github.com/gamma-data/json-wrangling-with-golang"))),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"if you have enjoyed this post, please consider ",(0,i.kt)("a",{parentName:"p",href:"https://www.buymeacoffee.com/jeffreyaven"},(0,i.kt)("strong",{parentName:"a"},"buying me a coffee \u2615"))," to help me keep writing!")))}u.isMDXComponent=!0},3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>h});var a=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var s=a.createContext({}),c=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},d=function(e){var t=c(e.components);return a.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,o=e.originalType,s=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),u=c(n),h=i,f=u["".concat(s,".").concat(h)]||u[h]||p[h]||o;return n?a.createElement(f,r(r({ref:t},d),{},{components:n})):a.createElement(f,r({ref:t},d))}));function h(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=n.length,r=new Array(o);r[0]=u;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:i,r[1]=l;for(var c=2;c<o;c++)r[c]=n[c];return a.createElement.apply(null,r)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},59943:(e,t,n)=>{n.d(t,{Z:()=>r});var a=n(67294);n(45697);function i(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function o(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}const r=function(e){function t(){return i(this,t),o(this,e.apply(this,arguments))}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,e),t.prototype.componentDidMount=function(){this._updateIframeContent()},t.prototype.componentDidUpdate=function(e,t){this._updateIframeContent()},t.prototype._defineUrl=function(){var e=this.props,t=e.id,n=e.file;return"https://gist.github.com/"+t+".js"+(n?"?file="+n:"")},t.prototype._updateIframeContent=function(){var e=this.props,t=e.id,n=e.file,a=this.iframeNode,i=a.document;a.contentDocument?i=a.contentDocument:a.contentWindow&&(i=a.contentWindow.document);var o='<html><head><base target="_parent"><style>*{font-size:12px;}</style></head><body '+("onload=\"parent.document.getElementById('"+(n?"gist-"+t+"-"+n:"gist-"+t)+"').style.height=document.body.scrollHeight + 'px'\"")+">"+('<script type="text/javascript" src="'+this._defineUrl()+'"><\/script>')+"</body></html>";i.open(),i.writeln(o),i.close()},t.prototype.render=function(){var e=this,t=this.props,n=t.id,i=t.file;return a.createElement("iframe",{ref:function(t){e.iframeNode=t},width:"100%",frameBorder:0,id:i?"gist-"+n+"-"+i:"gist-"+n})},t}(a.PureComponent)},55248:(e,t,n)=>{n.d(t,{Z:()=>a});const a="data:image/png;base64,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"}}]);