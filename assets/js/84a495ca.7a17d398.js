"use strict";(self.webpackChunkfull_stack_chronicles=self.webpackChunkfull_stack_chronicles||[]).push([[46447],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>f});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=a.createContext({}),u=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},d=function(e){var t=u(e.components);return a.createElement(l.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,l=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),m=u(n),f=r,p=m["".concat(l,".").concat(f)]||m[f]||c[f]||o;return n?a.createElement(p,i(i({ref:t},d),{},{components:n})):a.createElement(p,i({ref:t},d))}));function f(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=m;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:r,i[1]=s;for(var u=2;u<o;u++)i[u]=n[u];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},85162:(e,t,n)=>{n.d(t,{Z:()=>i});var a=n(67294),r=n(34334);const o="tabItem_Ymn6";function i(e){let{children:t,hidden:n,className:i}=e;return a.createElement("div",{role:"tabpanel",className:(0,r.Z)(o,i),hidden:n},t)}},65488:(e,t,n)=>{n.d(t,{Z:()=>f});var a=n(83117),r=n(67294),o=n(34334),i=n(72389),s=n(67392),l=n(7094),u=n(12466);const d="tabList__CuJ",c="tabItem_LNqP";function m(e){var t;const{lazy:n,block:i,defaultValue:m,values:f,groupId:p,className:g}=e,h=r.Children.map(e.children,(e=>{if((0,r.isValidElement)(e)&&"value"in e.props)return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)})),D=f??h.map((e=>{let{props:{value:t,label:n,attributes:a}}=e;return{value:t,label:n,attributes:a}})),b=(0,s.l)(D,((e,t)=>e.value===t.value));if(b.length>0)throw new Error(`Docusaurus error: Duplicate values "${b.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`);const T=null===m?m:m??(null==(t=h.find((e=>e.props.default)))?void 0:t.props.value)??h[0].props.value;if(null!==T&&!D.some((e=>e.value===T)))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${T}" but none of its children has the corresponding value. Available values are: ${D.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);const{tabGroupChoices:v,setTabGroupChoices:y}=(0,l.U)(),[w,k]=(0,r.useState)(T),S=[],{blockElementScrollPositionUntilNextRender:O}=(0,u.o5)();if(null!=p){const e=v[p];null!=e&&e!==w&&D.some((t=>t.value===e))&&k(e)}const j=e=>{const t=e.currentTarget,n=S.indexOf(t),a=D[n].value;a!==w&&(O(t),k(a),null!=p&&y(p,String(a)))},E=e=>{var t;let n=null;switch(e.key){case"Enter":j(e);break;case"ArrowRight":{const t=S.indexOf(e.currentTarget)+1;n=S[t]??S[0];break}case"ArrowLeft":{const t=S.indexOf(e.currentTarget)-1;n=S[t]??S[S.length-1];break}}null==(t=n)||t.focus()};return r.createElement("div",{className:(0,o.Z)("tabs-container",d)},r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,o.Z)("tabs",{"tabs--block":i},g)},D.map((e=>{let{value:t,label:n,attributes:i}=e;return r.createElement("li",(0,a.Z)({role:"tab",tabIndex:w===t?0:-1,"aria-selected":w===t,key:t,ref:e=>S.push(e),onKeyDown:E,onClick:j},i,{className:(0,o.Z)("tabs__item",c,null==i?void 0:i.className,{"tabs__item--active":w===t})}),n??t)}))),n?(0,r.cloneElement)(h.filter((e=>e.props.value===w))[0],{className:"margin-top--md"}):r.createElement("div",{className:"margin-top--md"},h.map(((e,t)=>(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==w})))))}function f(e){const t=(0,i.Z)();return r.createElement(m,(0,a.Z)({key:String(t)},e))}},32276:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>d,contentTitle:()=>l,default:()=>f,frontMatter:()=>s,metadata:()=>u,toc:()=>c});var a=n(83117),r=(n(67294),n(3905)),o=n(65488),i=n(85162);const s={slug:"converting-to-local-time-in-aws-lambda-using-nodejs",title:"Converting to local time in AWS Lambda using Node.js",authors:["jeffreyaven"],draft:!1,image:"/img/fullstackchronicles-cover-image.png",tags:["aws","lambda","nodejs","javascript"],keywords:["aws","lambda","nodejs","javascript"],description:"A simple pattern for converting dates in AWS Lambda using a Node.js runtime from GMT/UTC (the default) to a local time observing daylight savings time."},l=void 0,u={permalink:"/converting-to-local-time-in-aws-lambda-using-nodejs",editUrl:"https://github.com/stackql/fullstackchronicles.io/tree/main/src/blog/blog/2022-01-29-converting-to-local-time-in-aws-lambda-using-nodejs/index.md",source:"@site/blog/2022-01-29-converting-to-local-time-in-aws-lambda-using-nodejs/index.md",title:"Converting to local time in AWS Lambda using Node.js",description:"A simple pattern for converting dates in AWS Lambda using a Node.js runtime from GMT/UTC (the default) to a local time observing daylight savings time.",date:"2022-01-29T00:00:00.000Z",formattedDate:"January 29, 2022",tags:[{label:"aws",permalink:"/tags/aws"},{label:"lambda",permalink:"/tags/lambda"},{label:"nodejs",permalink:"/tags/nodejs"},{label:"javascript",permalink:"/tags/javascript"}],readingTime:4.62,hasTruncateMarker:!1,authors:[{name:"Jeffrey Aven",title:"Technologist and Cloud Consultant",url:"https://www.linkedin.com/in/jeffreyaven/",imageURL:"https://s.gravatar.com/avatar/f96573d092470c74be233e1dded5376f?s=80",key:"jeffreyaven"}],frontMatter:{slug:"converting-to-local-time-in-aws-lambda-using-nodejs",title:"Converting to local time in AWS Lambda using Node.js",authors:["jeffreyaven"],draft:!1,image:"/img/fullstackchronicles-cover-image.png",tags:["aws","lambda","nodejs","javascript"],keywords:["aws","lambda","nodejs","javascript"],description:"A simple pattern for converting dates in AWS Lambda using a Node.js runtime from GMT/UTC (the default) to a local time observing daylight savings time."},prevItem:{title:"Simple SSO with an external IdP using Active Directory and Okta",permalink:"/simple-sso-with-an-external-idp-using-active-directory-and-okta"},nextItem:{title:"Automating Snowflake Role Based Storage Integration for AWS",permalink:"/automating-snowflake-role-based-storage-integration-for-aws"}},d={authorsImageUrls:[void 0]},c=[{value:"Background",id:"background",level:2},{value:"Solution",id:"solution",level:2},{value:"Breaking it down",id:"breaking-it-down",level:3},{value:"Tests",id:"tests",level:3}],m={toc:c};function f(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"background"},"Background"),(0,r.kt)("p",null,"AWS Lambda instances will return UTC/GMT time for any date time object created using the ",(0,r.kt)("inlineCode",{parentName:"p"},"Date.now()")," function in JavaScript as shown here:  "),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},"let now = new Date();\nconst tzOffset = now.getTimezoneOffset();\nconsole.log(`Default Timezone Offset: ${tzOffset}`);\n// results in ...\n// Default Timezone Offset: 0\n")),(0,r.kt)("p",null,"Moreover, Lambda instances are stateless and have no concept of local time.  This can make dealing with dates more challenging.  "),(0,r.kt)("p",null,"This is compounded for localities which have legislated Daylight Savings Time during part of the year.  "),(0,r.kt)("h2",{id:"solution"},"Solution"),(0,r.kt)("p",null,"A simple (vanilla JavaScript - no third party libraries or external API calls) to adjust the time to local time adjusted for Daylight Savings Time is provided here:  "),(0,r.kt)(o.Z,{defaultValue:"commented",values:[{label:"Commented",value:"commented"},{label:"Uncommented",value:"uncommented"}],mdxType:"Tabs"},(0,r.kt)(i.Z,{value:"commented",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},"function getGmtDstTransitionDate(year, month, transitionDay, hour){\n    const firstDayOfTheMonth = new Date(year, month, 1);\n    let transitionDate = new Date(firstDayOfTheMonth);\n    // find the first transition day of the month if the first day of the month is not a transition day\n    if (firstDayOfTheMonth.getDay() !== transitionDay) {\n        transitionDate = new Date(firstDayOfTheMonth.setDate(firstDayOfTheMonth.getDate() + (transitionDay - firstDayOfTheMonth.getDay())));\n    };\n    // return the transition date and time\n    return new Date(transitionDate.getTime() + (hour * 60 * 60000));\n};\n\nfunction getLocalDateTime(date) {\n    // default to GMT+11 for AEDT\n    let offsetInHours = 11;\n    // if month is between April and October check further, if not return AEDT offset\n    // remeber getMonth is zero based!\n    if (date.getMonth() >= 3 && date.getMonth() <= 9) {\n        // DST starts at 0200 on the First Sunday in October, which is 1600 (16) on the First Saturday (6) in October (9) GMT\n        const dstStartDate = getGmtDstTransitionDate(date.getFullYear(), 9, 6, 16);\n        // DST ends at 0300 on the First Sunday in April, which is 1600 (16) on the First Saturday (6) in April (3) GMT\n        const dstEndDate = getGmtDstTransitionDate(date.getFullYear(), 3, 6, 16);\n        if (date >= dstEndDate && date < dstStartDate) {\n            offsetInHours = 10;\n        };\n    };\n    // return the date and time in local time\n    return new Date(date.getTime() + (offsetInHours * 60 * 60000));\n}\n\n// get current timestamp\nlet now = new Date();\nconsole.log(`UTC Date: ${now}`);\nnow = getLocalDateTime(now);\nconsole.log(`Local toLocaleString: ${now.toLocaleString()}`);\n"))),(0,r.kt)(i.Z,{value:"uncommented",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},"function getGmtDstTransitionDate(year, month, transitionDay, hour){\n    const firstDayOfTheMonth = new Date(year, month, 1);\n    let transitionDate = new Date(firstDayOfTheMonth);\n    if (firstDayOfTheMonth.getDay() !== transitionDay) {\n        transitionDate = new Date(firstDayOfTheMonth.setDate(firstDayOfTheMonth.getDate() + (transitionDay - firstDayOfTheMonth.getDay())));\n    };\n    return new Date(transitionDate.getTime() + (hour * 60 * 60000));\n};\n\nfunction getLocalDateTime(date) {\n    let offsetInHours = 11;\n    if (date.getMonth() >= 3 && date.getMonth() <= 9) {\n        const dstStartDate = getGmtDstTransitionDate(date.getFullYear(), 9, 6, 16);\n        const dstEndDate = getGmtDstTransitionDate(date.getFullYear(), 3, 6, 16);\n        if (date >= dstEndDate && date < dstStartDate) {\n            offsetInHours = 10;\n        };\n    };\n    return new Date(date.getTime() + (offsetInHours * 60 * 60000));\n}\n\nlet now = new Date();\nconsole.log(`UTC Date: ${now}`);\nnow = getLocalDateTime(now);\nconsole.log(`Local toLocaleString: ${now.toLocaleString()}`);\n")))),(0,r.kt)("h3",{id:"breaking-it-down"},"Breaking it down"),(0,r.kt)("p",null,"This solution is comprised of two functions for DRY purposes.  "),(0,r.kt)("p",null,"The main function ",(0,r.kt)("inlineCode",{parentName:"p"},"getLocalDateTime")," takes a date object representing the current time in UTC and returns a date object representing the local (DST adjusted) time.  "),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"getLocalDateTime")," function sets a default DST adjusted offset in hours (11 in the case of AEDT), if the month is between April and October the ",(0,r.kt)("inlineCode",{parentName:"p"},"getGmtDstTransitionDate")," is used to determine the exact boundaries between Standard Time and Daylight Savings Time.  "),(0,r.kt)("p",null,"In the case of AEST/AEDT this is the first Sunday in October at 0200 to enter Daylight Savings Time and the first Sunday in April at 0300 to end Daylight Savings Time (both dates and times are adjusted to their equivalent GMT times) and return to Standard Time (10 hours in the cases of AEST).  "),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"offsetInHours")," variable and the arguments for ",(0,r.kt)("inlineCode",{parentName:"p"},"getGmtDstTransitionDate")," can be easily modified for other timezones.  "),(0,r.kt)("h3",{id:"tests"},"Tests"),(0,r.kt)("p",null,"Some simple tests to run to check if the code is working correctly, to help with this I have set up the following unit test function:  "),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},"function unitTest(inputDate, expOutputDate, testCase) {\n    if (getLocalDateTime(inputDate).toUTCString() === expOutputDate.toUTCString()) {\n        console.log(`TEST PASSED ${testCase}`)\n    } else {\n        console.log(`TEST FAILED ${testCase} : input date in GMT ${inputDate} should equal ${expOutputDate}`)\n    };\n};\n")),(0,r.kt)("p",null,"first create dates representing the beginning of Daylight Savings Time (immediately before the beginning, at the beginning and immediately after the beginning):  "),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},'unitTest(new Date(2022, 9, 1, 15, 59, 59, 999), new Date(2022, 9, 2, 1, 59, 59, 999), "one ms before dst start");\n// returns...\n// ...  INFO    TEST PASSED one ms before dst start\nunitTest(new Date(2022, 9, 1, 16, 0, 0, 0), new Date(2022, 9, 2, 3, 0, 0, 0), "dst start");\n// returns...\n// ...  INFO    TEST PASSED dst start    \nunitTest(new Date(2022, 9, 1, 16, 0, 0, 1), new Date(2022, 9, 2, 3, 0, 0, 1), "one ms after dst start");\n// returns...\n// ...  INFO    TEST PASSED one ms after dst start\n')),(0,r.kt)("p",null,"next create dates similar tests representing the end of Daylight Savings Time (or beginning of Standard Time):  "),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},'unitTest(new Date(2022, 3, 2, 15, 59, 59, 999), new Date(2022, 3, 3, 2, 59, 59, 999), "one ms before dst end");\n// returns...\n// ...  INFO    TEST PASSED one ms before dst end    \nunitTest(new Date(2022, 3, 2, 16, 0, 0, 0), new Date(2022, 3, 3, 2, 0, 0, 0), "dst end");\n// returns...\n// ...  INFO    TEST PASSED dst end    \nunitTest(new Date(2022, 3, 2, 16, 0, 0, 1), new Date(2022, 3, 3, 2, 0, 0, 1), "one ms after dst end");\n// returns...\n// ...  INFO    TEST PASSED one ms after dst end\n')),(0,r.kt)("p",null,"Enjoy"))}f.isMDXComponent=!0}}]);