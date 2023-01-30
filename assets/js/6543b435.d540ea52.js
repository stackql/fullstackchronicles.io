"use strict";(self.webpackChunkfull_stack_chronicles=self.webpackChunkfull_stack_chronicles||[]).push([[39877],{3905:(e,t,a)=>{a.d(t,{Zo:()=>m,kt:()=>u});var n=a(67294);function o(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function r(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){o(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,n,o=function(e,t){if(null==e)return{};var a,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(o[a]=e[a]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(o[a]=e[a])}return o}var s=n.createContext({}),c=function(e){var t=n.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):r(r({},t),e)),a},m=function(e){var t=c(e.components);return n.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},p=n.forwardRef((function(e,t){var a=e.components,o=e.mdxType,i=e.originalType,s=e.parentName,m=l(e,["components","mdxType","originalType","parentName"]),p=c(a),u=o,g=p["".concat(s,".").concat(u)]||p[u]||d[u]||i;return a?n.createElement(g,r(r({ref:t},m),{},{components:a})):n.createElement(g,r({ref:t},m))}));function u(e,t){var a=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=a.length,r=new Array(i);r[0]=p;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:o,r[1]=l;for(var c=2;c<i;c++)r[c]=a[c];return n.createElement.apply(null,r)}return n.createElement.apply(null,a)}p.displayName="MDXCreateElement"},68453:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>s,contentTitle:()=>r,default:()=>d,frontMatter:()=>i,metadata:()=>l,toc:()=>c});var n=a(83117),o=(a(67294),a(3905));const i={slug:"okta-admin-command-line-interface",title:"Okta Admin Command Line Interface",authors:["jeffreyaven"],draft:!1,hide_table_of_contents:!0,image:"images/Dev_Logo-02_Large-thumbnail.png",tags:["cli","command-line","golang","identity","oauth-2-0","oidc","okta"],keywords:["cli","command-line","golang","identity","oauth-2-0","oidc","okta"]},r=void 0,l={permalink:"/okta-admin-command-line-interface",editUrl:"https://github.com/stackql/fullstackchronicles.io/edit/main/src/blog/2021-05-30-okta-admin-command-line-interface/index.md",source:"@site/blog/2021-05-30-okta-admin-command-line-interface/index.md",title:"Okta Admin Command Line Interface",description:"Okta Admin CLI",date:"2021-05-30T00:00:00.000Z",formattedDate:"May 30, 2021",tags:[{label:"cli",permalink:"/tags/cli"},{label:"command-line",permalink:"/tags/command-line"},{label:"golang",permalink:"/tags/golang"},{label:"identity",permalink:"/tags/identity"},{label:"oauth-2-0",permalink:"/tags/oauth-2-0"},{label:"oidc",permalink:"/tags/oidc"},{label:"okta",permalink:"/tags/okta"}],readingTime:1.58,hasTruncateMarker:!1,authors:[{name:"Jeffrey Aven",title:"Technologist and Cloud Consultant",url:"https://www.linkedin.com/in/jeffreyaven/",imageURL:"https://s.gravatar.com/avatar/f96573d092470c74be233e1dded5376f?s=80",key:"jeffreyaven"}],frontMatter:{slug:"okta-admin-command-line-interface",title:"Okta Admin Command Line Interface",authors:["jeffreyaven"],draft:!1,hide_table_of_contents:!0,image:"images/Dev_Logo-02_Large-thumbnail.png",tags:["cli","command-line","golang","identity","oauth-2-0","oidc","okta"],keywords:["cli","command-line","golang","identity","oauth-2-0","oidc","okta"]},prevItem:{title:"Simple Tasker: Configuration driven orchestration",permalink:"/simple-tasker-configuration-driven-orchestration"},nextItem:{title:"Enumerating all roles for a user in Snowflake",permalink:"/enumerating-all-roles-for-a-user-in-snowflake"}},s={authorsImageUrls:[void 0]},c=[],m={toc:c};function d(e){let{components:t,...i}=e;return(0,o.kt)("wrapper",(0,n.Z)({},m,i,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Okta Admin CLI",src:a(80704).Z,width:"96",height:"96"})),(0,o.kt)("p",null,"Identity and Access Management is a critical component of any application or SaaS architecture. I\u2019m currently doing a spike of the Okta solution for an application development project I am on. Okta is a comprehensive solution built on the open OAuth2 and OIDC protocols, as well as supporting more conventional identity federation approaches such as SAML."),(0,o.kt)("p",null,"Okta has a clean and easy to use web-based Admin interface which can be used to create applications, users, claims, identity providers and more."),(0,o.kt)("p",null,"During my spike, which was done in a crash and burn test Okta organisation, I had associated my user account with a Microsoft Identity Provider for SSO, and subsequently had issues accessing the Microsoft Account my user was associated with, as a result I managed to lock myself (the super admin) out of the Okta Admin Console."),(0,o.kt)("p",null,"Fortunately, prior to doing this I had created an API token for my user. So, I went about looking at ways I could interact with Okta programmatically. My first inclination was to use a simple CLI for Okta to get me out of jail\u2026 but I found there wasn\u2019t one that suited. There are, however, a wealth of SDKs for Okta across multiple front-end and back-end oriented programming languages (such as JavaScript, Golang, Python and more)."),(0,o.kt)("p",null,"Being in lockdown and having some free time on my hands, I decided to create a simple open source command line tool which could be used to administer an Okta organisation. The result of this weekend lockdown is ",(0,o.kt)("inlineCode",{parentName:"p"},"okta-admin"),"\u2026"),(0,o.kt)("p",null,(0,o.kt)("a",{target:"_blank",href:a(87095).Z},(0,o.kt)("img",{alt:"okta-admin cli",src:a(22677).Z,width:"1339",height:"622"}))),(0,o.kt)("p",null,"For this project I used the ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/okta/okta-sdk-golang"},"Golang SDK for Okta"),", along with the ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/spf13/cobra"},"Cobra")," and ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/spf13/viper"},"Viper")," Golang packages (used by ",(0,o.kt)("inlineCode",{parentName:"p"},"docker"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"kubectl")," and other popular command line utilities). To provide a query interface to JSON response payloads I use ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/tidwall/gjson"},"GJson"),"."),(0,o.kt)("p",null,"Will keep adding to this so stay tuned..."),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"Complete source code for this project is available at ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/gammastudios/okta-admin"},"https://github.com/gammastudios/okta-admin"))))}d.isMDXComponent=!0},87095:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/files/okta-admin-screenshot-0b64c7a4ed3137543c265761574f5879.png"},80704:(e,t,a)=>{a.d(t,{Z:()=>n});const n="data:image/png;base64,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"},22677:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/okta-admin-screenshot-0b64c7a4ed3137543c265761574f5879.png"}}]);