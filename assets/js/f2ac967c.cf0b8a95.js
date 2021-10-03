"use strict";(self.webpackChunkcloudy_with_a_chance_of_big_data=self.webpackChunkcloudy_with_a_chance_of_big_data||[]).push([[9923],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return d}});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=r.createContext({}),c=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=c(e.components);return r.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},f=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),f=c(n),d=o,m=f["".concat(s,".").concat(d)]||f[d]||p[d]||a;return n?r.createElement(m,i(i({ref:t},u),{},{components:n})):r.createElement(m,i({ref:t},u))}));function d(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=f;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:o,i[1]=l;for(var c=2;c<a;c++)i[c]=n[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}f.displayName="MDXCreateElement"},55423:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return s},contentTitle:function(){return c},metadata:function(){return u},assets:function(){return p},toc:function(){return f},default:function(){return m}});var r=n(87462),o=n(63366),a=(n(67294),n(3905)),i=n(59943),l=["components"],s={slug:"enumerating-all-roles-for-a-user-in-snowflake",title:"Enumerating all roles for a user in Snowflake",authors:["jeffreyaven"],draft:!1,hide_table_of_contents:!0,image:"images/snowflake.png",tags:["javascript","rbac","roles","snowflake","sql","stored-procedure","tail-call-recursion","tailcall"],keywords:["javascript","rbac","roles","snowflake","sql","stored-procedure","tail-call-recursion","tailcall"]},c=void 0,u={permalink:"/enumerating-all-roles-for-a-user-in-snowflake",editUrl:"https://github.com/cloudywithachanceofbigdata/cloudywithachanceofbigdata.github.io/tree/main/src/blog/blog/2021-03-23-enumerating-all-roles-for-a-user-in-snowflake/index.md",source:"@site/blog/2021-03-23-enumerating-all-roles-for-a-user-in-snowflake/index.md",title:"Enumerating all roles for a user in Snowflake",description:"Snowflake allows roles to be assigned to other roles, so when a user is assigned to a role, they may inherit the ability to use countless other roles.",date:"2021-03-23T00:00:00.000Z",formattedDate:"March 23, 2021",tags:[{label:"javascript",permalink:"/tags/javascript"},{label:"rbac",permalink:"/tags/rbac"},{label:"roles",permalink:"/tags/roles"},{label:"snowflake",permalink:"/tags/snowflake"},{label:"sql",permalink:"/tags/sql"},{label:"stored-procedure",permalink:"/tags/stored-procedure"},{label:"tail-call-recursion",permalink:"/tags/tail-call-recursion"},{label:"tailcall",permalink:"/tags/tailcall"}],readingTime:1,truncated:!1,authors:[{name:"Jeffrey Aven",title:"Technologist and Cloud Consultant",url:"https://www.linkedin.com/in/jeffreyaven/",imageURL:"https://s.gravatar.com/avatar/f96573d092470c74be233e1dded5376f?s=80",key:"jeffreyaven"}],prevItem:{title:"Okta Admin Command Line Interface",permalink:"/okta-admin-command-line-interface"},nextItem:{title:"EventArc: The state of eventing in Google Cloud",permalink:"/eventarc-the-state-of-eventing-in-google-cloud"}},p={authorsImageUrls:[void 0]},f=[],d={toc:f};function m(e){var t=e.components,n=(0,o.Z)(e,l);return(0,a.kt)("wrapper",(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"Snowflake allows roles to be assigned to other roles, so when a user is assigned to a role, they may inherit the ability to use countless other roles."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Challenge:")," recursively enumerate all roles for a given user"),(0,a.kt)("p",null,"One solution would be to create a complex query on the ",(0,a.kt)("inlineCode",{parentName:"p"},'\u201cSNOWFLAKE"."ACCOUNT_USAGE"."GRANTS_TO_ROLES"')," object."),(0,a.kt)("p",null,"An easier solution is to use a stored procedure to recurse through grants for a given user and return an ",(0,a.kt)("inlineCode",{parentName:"p"},"ARRAY")," of roles for that user."),(0,a.kt)("p",null,"This is a good programming exercise in tail call recursion (sort of) in JavaScript. Here is the code:"),(0,a.kt)(i.Z,{id:"9b9985dbf8163ade22b71f2ccf20cb51",mdxType:"Gist"}),(0,a.kt)("p",null,"To call the stored proc, execute:"),(0,a.kt)(i.Z,{id:"fbbfaa3b67af828e4d905411567cd031",mdxType:"Gist"}),(0,a.kt)("p",null,"One drawback of stored procedures in Snowflake is that they can only have scalar or array return types and cannot be used directly in a SQL query, however you can use the ",(0,a.kt)("inlineCode",{parentName:"p"},"table(result_scan(last_query_id()))")," trick to get around this, as shown below where we will pivot the ",(0,a.kt)("inlineCode",{parentName:"p"},"ARRAY")," into a record set with the array elements as rows:"),(0,a.kt)(i.Z,{id:"6a7e8bc552b87ab1e039f22bacf1b65f",mdxType:"Gist"}),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"IMPORTANT")),(0,a.kt)("p",null,"This query ",(0,a.kt)("strong",{parentName:"p"},"must")," be the next statement run immediately after the ",(0,a.kt)("inlineCode",{parentName:"p"},"CALL")," statement and cannot be run again until you run another ",(0,a.kt)("inlineCode",{parentName:"p"},"CALL")," statement."),(0,a.kt)("p",null,"More adventures with Snowflake soon!"))}m.isMDXComponent=!0},59943:function(e,t,n){var r=n(67294);n(45697);function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function a(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}var i=function(e){function t(){return o(this,t),a(this,e.apply(this,arguments))}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,e),t.prototype.componentDidMount=function(){this._updateIframeContent()},t.prototype.componentDidUpdate=function(e,t){this._updateIframeContent()},t.prototype._defineUrl=function(){var e=this.props,t=e.id,n=e.file;return"https://gist.github.com/"+t+".js"+(n?"?file="+n:"")},t.prototype._updateIframeContent=function(){var e=this.props,t=e.id,n=e.file,r=this.iframeNode,o=r.document;r.contentDocument?o=r.contentDocument:r.contentWindow&&(o=r.contentWindow.document);var a='<html><head><base target="_parent"><style>*{font-size:12px;}</style></head><body '+("onload=\"parent.document.getElementById('"+(n?"gist-"+t+"-"+n:"gist-"+t)+"').style.height=document.body.scrollHeight + 'px'\"")+">"+('<script type="text/javascript" src="'+this._defineUrl()+'"><\/script>')+"</body></html>";o.open(),o.writeln(a),o.close()},t.prototype.render=function(){var e=this,t=this.props,n=t.id,o=t.file;return r.createElement("iframe",{ref:function(t){e.iframeNode=t},width:"100%",frameBorder:0,id:o?"gist-"+n+"-"+o:"gist-"+n})},t}(r.PureComponent);t.Z=i}}]);