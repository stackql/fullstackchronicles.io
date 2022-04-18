"use strict";(self.webpackChunkcloudy_with_a_chance_of_big_data=self.webpackChunkcloudy_with_a_chance_of_big_data||[]).push([[9877],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return p}});var a=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var c=a.createContext({}),s=function(e){var t=a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=s(e.components);return a.createElement(c.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,r=e.originalType,c=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),d=s(n),p=o,f=d["".concat(c,".").concat(p)]||d[p]||m[p]||r;return n?a.createElement(f,i(i({ref:t},u),{},{components:n})):a.createElement(f,i({ref:t},u))}));function p(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=n.length,i=new Array(r);i[0]=d;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:o,i[1]=l;for(var s=2;s<r;s++)i[s]=n[s];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},21099:function(e,t,n){n.r(t),n.d(t,{assets:function(){return u},contentTitle:function(){return c},default:function(){return p},frontMatter:function(){return l},metadata:function(){return s},toc:function(){return m}});var a=n(83117),o=n(80102),r=(n(67294),n(3905)),i=["components"],l={slug:"okta-admin-command-line-interface",title:"Okta Admin Command Line Interface",authors:["jeffreyaven"],draft:!1,hide_table_of_contents:!0,image:"images/Dev_Logo-02_Large-thumbnail.png",tags:["cli","command-line","golang","identity","oauth-2-0","oidc","okta"],keywords:["cli","command-line","golang","identity","oauth-2-0","oidc","okta"]},c=void 0,s={permalink:"/okta-admin-command-line-interface",editUrl:"https://github.com/stackql/fullstackchronicles.io/tree/main/src/blog/blog/2021-05-30-okta-admin-command-line-interface/index.md",source:"@site/blog/2021-05-30-okta-admin-command-line-interface/index.md",title:"Okta Admin Command Line Interface",description:"Identity and Access Management is a critical component of any application or SaaS architecture. I\u2019m currently doing a spike of the Okta solution for an application development project I am on. Okta is a comprehensive solution built on the open OAuth2 and OIDC protocols, as well as supporting more conventional identity federation approaches such as SAML.",date:"2021-05-30T00:00:00.000Z",formattedDate:"May 30, 2021",tags:[{label:"cli",permalink:"/tags/cli"},{label:"command-line",permalink:"/tags/command-line"},{label:"golang",permalink:"/tags/golang"},{label:"identity",permalink:"/tags/identity"},{label:"oauth-2-0",permalink:"/tags/oauth-2-0"},{label:"oidc",permalink:"/tags/oidc"},{label:"okta",permalink:"/tags/okta"}],readingTime:1.565,truncated:!1,authors:[{name:"Jeffrey Aven",title:"Technologist and Cloud Consultant",url:"https://www.linkedin.com/in/jeffreyaven/",imageURL:"https://s.gravatar.com/avatar/f96573d092470c74be233e1dded5376f?s=80",key:"jeffreyaven"}],frontMatter:{slug:"okta-admin-command-line-interface",title:"Okta Admin Command Line Interface",authors:["jeffreyaven"],draft:!1,hide_table_of_contents:!0,image:"images/Dev_Logo-02_Large-thumbnail.png",tags:["cli","command-line","golang","identity","oauth-2-0","oidc","okta"],keywords:["cli","command-line","golang","identity","oauth-2-0","oidc","okta"]},prevItem:{title:"Simple Tasker: Configuration driven orchestration",permalink:"/simple-tasker-configuration-driven-orchestration"},nextItem:{title:"Enumerating all roles for a user in Snowflake",permalink:"/enumerating-all-roles-for-a-user-in-snowflake"}},u={authorsImageUrls:[void 0]},m=[],d={toc:m};function p(e){var t=e.components,l=(0,o.Z)(e,i);return(0,r.kt)("wrapper",(0,a.Z)({},d,l,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"Identity and Access Management is a critical component of any application or SaaS architecture. I\u2019m currently doing a spike of the Okta solution for an application development project I am on. Okta is a comprehensive solution built on the open OAuth2 and OIDC protocols, as well as supporting more conventional identity federation approaches such as SAML."),(0,r.kt)("p",null,"Okta has a clean and easy to use web-based Admin interface which can be used to create applications, users, claims, identity providers and more."),(0,r.kt)("p",null,"During my spike, which was done in a crash and burn test Okta organisation, I had associated my user account with a Microsoft Identity Provider for SSO, and subsequently had issues accessing the Microsoft Account my user was associated with, as a result I managed to lock myself (the super admin) out of the Okta Admin Console."),(0,r.kt)("p",null,"Fortunately, prior to doing this I had created an API token for my user. So, I went about looking at ways I could interact with Okta programmatically. My first inclination was to use a simple CLI for Okta to get me out of jail\u2026 but I found there wasn\u2019t one that suited. There are, however, a wealth of SDKs for Okta across multiple front-end and back-end oriented programming languages (such as JavaScript, Golang, Python and more)."),(0,r.kt)("p",null,"Being in lockdown and having some free time on my hands, I decided to create a simple open source command line tool which could be used to administer an Okta organisation. The result of this weekend lockdown is ",(0,r.kt)("inlineCode",{parentName:"p"},"okta-admin"),"\u2026"),(0,r.kt)("p",null,(0,r.kt)("a",{target:"_blank",href:n(87095).Z},(0,r.kt)("img",{alt:"okta-admin cli",src:n(22677).Z,width:"1339",height:"622"}))),(0,r.kt)("p",null,"For this project I used the ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/okta/okta-sdk-golang"},"Golang SDK for Okta"),", along with the ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/spf13/cobra"},"Cobra")," and ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/spf13/viper"},"Viper")," Golang packages (used by ",(0,r.kt)("inlineCode",{parentName:"p"},"docker"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"kubectl")," and other popular command line utilities). To provide a query interface to JSON response payloads I use ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/tidwall/gjson"},"GJson"),"."),(0,r.kt)("p",null,"Will keep adding to this so stay tuned..."),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"Complete source code for this project is available at ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/gammastudios/okta-admin"},"https://github.com/gammastudios/okta-admin"))))}p.isMDXComponent=!0},87095:function(e,t,n){t.Z=n.p+"assets/files/okta-admin-screenshot-0b64c7a4ed3137543c265761574f5879.png"},22677:function(e,t,n){t.Z=n.p+"assets/images/okta-admin-screenshot-0b64c7a4ed3137543c265761574f5879.png"}}]);