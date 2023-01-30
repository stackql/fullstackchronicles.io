"use strict";(self.webpackChunkfull_stack_chronicles=self.webpackChunkfull_stack_chronicles||[]).push([[46447],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>f});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=a.createContext({}),u=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=u(e.components);return a.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),m=u(n),f=r,p=m["".concat(l,".").concat(f)]||m[f]||d[f]||o;return n?a.createElement(p,i(i({ref:t},c),{},{components:n})):a.createElement(p,i({ref:t},c))}));function f(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=m;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:r,i[1]=s;for(var u=2;u<o;u++)i[u]=n[u];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},69151:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>l,default:()=>f,frontMatter:()=>s,metadata:()=>u,toc:()=>d});var a=n(83117),r=(n(67294),n(3905)),o=n(73992),i=n(18679);const s={slug:"converting-to-local-time-in-aws-lambda-using-nodejs",title:"Converting to local time in AWS Lambda using Node.js",authors:["jeffreyaven"],draft:!1,image:"/img/fullstackchronicles-cover-image.png",tags:["aws","lambda","nodejs","javascript"],keywords:["aws","lambda","nodejs","javascript"],description:"A simple pattern for converting dates in AWS Lambda using a Node.js runtime from GMT/UTC (the default) to a local time observing daylight savings time."},l=void 0,u={permalink:"/converting-to-local-time-in-aws-lambda-using-nodejs",editUrl:"https://github.com/stackql/fullstackchronicles.io/edit/main/src/blog/2022-01-29-converting-to-local-time-in-aws-lambda-using-nodejs/index.md",source:"@site/blog/2022-01-29-converting-to-local-time-in-aws-lambda-using-nodejs/index.md",title:"Converting to local time in AWS Lambda using Node.js",description:"A simple pattern for converting dates in AWS Lambda using a Node.js runtime from GMT/UTC (the default) to a local time observing daylight savings time.",date:"2022-01-29T00:00:00.000Z",formattedDate:"January 29, 2022",tags:[{label:"aws",permalink:"/tags/aws"},{label:"lambda",permalink:"/tags/lambda"},{label:"nodejs",permalink:"/tags/nodejs"},{label:"javascript",permalink:"/tags/javascript"}],readingTime:4.62,hasTruncateMarker:!1,authors:[{name:"Jeffrey Aven",title:"Technologist and Cloud Consultant",url:"https://www.linkedin.com/in/jeffreyaven/",imageURL:"https://s.gravatar.com/avatar/f96573d092470c74be233e1dded5376f?s=80",key:"jeffreyaven"}],frontMatter:{slug:"converting-to-local-time-in-aws-lambda-using-nodejs",title:"Converting to local time in AWS Lambda using Node.js",authors:["jeffreyaven"],draft:!1,image:"/img/fullstackchronicles-cover-image.png",tags:["aws","lambda","nodejs","javascript"],keywords:["aws","lambda","nodejs","javascript"],description:"A simple pattern for converting dates in AWS Lambda using a Node.js runtime from GMT/UTC (the default) to a local time observing daylight savings time."},prevItem:{title:"Simple SSO with an external IdP using Active Directory and Okta",permalink:"/simple-sso-with-an-external-idp-using-active-directory-and-okta"},nextItem:{title:"Automating Snowflake Role Based Storage Integration for AWS",permalink:"/automating-snowflake-role-based-storage-integration-for-aws"}},c={authorsImageUrls:[void 0]},d=[{value:"Background",id:"background",level:2},{value:"Solution",id:"solution",level:2},{value:"Breaking it down",id:"breaking-it-down",level:3},{value:"Tests",id:"tests",level:3}],m={toc:d};function f(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"background"},"Background"),(0,r.kt)("p",null,"AWS Lambda instances will return UTC/GMT time for any date time object created using the ",(0,r.kt)("inlineCode",{parentName:"p"},"Date.now()")," function in JavaScript as shown here:  "),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},"let now = new Date();\nconst tzOffset = now.getTimezoneOffset();\nconsole.log(`Default Timezone Offset: ${tzOffset}`);\n// results in ...\n// Default Timezone Offset: 0\n")),(0,r.kt)("p",null,"Moreover, Lambda instances are stateless and have no concept of local time.  This can make dealing with dates more challenging.  "),(0,r.kt)("p",null,"This is compounded for localities which have legislated Daylight Savings Time during part of the year.  "),(0,r.kt)("h2",{id:"solution"},"Solution"),(0,r.kt)("p",null,"A simple (vanilla JavaScript - no third party libraries or external API calls) to adjust the time to local time adjusted for Daylight Savings Time is provided here:  "),(0,r.kt)(o.Z,{defaultValue:"commented",values:[{label:"Commented",value:"commented"},{label:"Uncommented",value:"uncommented"}],mdxType:"Tabs"},(0,r.kt)(i.Z,{value:"commented",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},"function getGmtDstTransitionDate(year, month, transitionDay, hour){\n    const firstDayOfTheMonth = new Date(year, month, 1);\n    let transitionDate = new Date(firstDayOfTheMonth);\n    // find the first transition day of the month if the first day of the month is not a transition day\n    if (firstDayOfTheMonth.getDay() !== transitionDay) {\n        transitionDate = new Date(firstDayOfTheMonth.setDate(firstDayOfTheMonth.getDate() + (transitionDay - firstDayOfTheMonth.getDay())));\n    };\n    // return the transition date and time\n    return new Date(transitionDate.getTime() + (hour * 60 * 60000));\n};\n\nfunction getLocalDateTime(date) {\n    // default to GMT+11 for AEDT\n    let offsetInHours = 11;\n    // if month is between April and October check further, if not return AEDT offset\n    // remeber getMonth is zero based!\n    if (date.getMonth() >= 3 && date.getMonth() <= 9) {\n        // DST starts at 0200 on the First Sunday in October, which is 1600 (16) on the First Saturday (6) in October (9) GMT\n        const dstStartDate = getGmtDstTransitionDate(date.getFullYear(), 9, 6, 16);\n        // DST ends at 0300 on the First Sunday in April, which is 1600 (16) on the First Saturday (6) in April (3) GMT\n        const dstEndDate = getGmtDstTransitionDate(date.getFullYear(), 3, 6, 16);\n        if (date >= dstEndDate && date < dstStartDate) {\n            offsetInHours = 10;\n        };\n    };\n    // return the date and time in local time\n    return new Date(date.getTime() + (offsetInHours * 60 * 60000));\n}\n\n// get current timestamp\nlet now = new Date();\nconsole.log(`UTC Date: ${now}`);\nnow = getLocalDateTime(now);\nconsole.log(`Local toLocaleString: ${now.toLocaleString()}`);\n"))),(0,r.kt)(i.Z,{value:"uncommented",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},"function getGmtDstTransitionDate(year, month, transitionDay, hour){\n    const firstDayOfTheMonth = new Date(year, month, 1);\n    let transitionDate = new Date(firstDayOfTheMonth);\n    if (firstDayOfTheMonth.getDay() !== transitionDay) {\n        transitionDate = new Date(firstDayOfTheMonth.setDate(firstDayOfTheMonth.getDate() + (transitionDay - firstDayOfTheMonth.getDay())));\n    };\n    return new Date(transitionDate.getTime() + (hour * 60 * 60000));\n};\n\nfunction getLocalDateTime(date) {\n    let offsetInHours = 11;\n    if (date.getMonth() >= 3 && date.getMonth() <= 9) {\n        const dstStartDate = getGmtDstTransitionDate(date.getFullYear(), 9, 6, 16);\n        const dstEndDate = getGmtDstTransitionDate(date.getFullYear(), 3, 6, 16);\n        if (date >= dstEndDate && date < dstStartDate) {\n            offsetInHours = 10;\n        };\n    };\n    return new Date(date.getTime() + (offsetInHours * 60 * 60000));\n}\n\nlet now = new Date();\nconsole.log(`UTC Date: ${now}`);\nnow = getLocalDateTime(now);\nconsole.log(`Local toLocaleString: ${now.toLocaleString()}`);\n")))),(0,r.kt)("h3",{id:"breaking-it-down"},"Breaking it down"),(0,r.kt)("p",null,"This solution is comprised of two functions for DRY purposes.  "),(0,r.kt)("p",null,"The main function ",(0,r.kt)("inlineCode",{parentName:"p"},"getLocalDateTime")," takes a date object representing the current time in UTC and returns a date object representing the local (DST adjusted) time.  "),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"getLocalDateTime")," function sets a default DST adjusted offset in hours (11 in the case of AEDT), if the month is between April and October the ",(0,r.kt)("inlineCode",{parentName:"p"},"getGmtDstTransitionDate")," is used to determine the exact boundaries between Standard Time and Daylight Savings Time.  "),(0,r.kt)("p",null,"In the case of AEST/AEDT this is the first Sunday in October at 0200 to enter Daylight Savings Time and the first Sunday in April at 0300 to end Daylight Savings Time (both dates and times are adjusted to their equivalent GMT times) and return to Standard Time (10 hours in the cases of AEST).  "),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"offsetInHours")," variable and the arguments for ",(0,r.kt)("inlineCode",{parentName:"p"},"getGmtDstTransitionDate")," can be easily modified for other timezones.  "),(0,r.kt)("h3",{id:"tests"},"Tests"),(0,r.kt)("p",null,"Some simple tests to run to check if the code is working correctly, to help with this I have set up the following unit test function:  "),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},"function unitTest(inputDate, expOutputDate, testCase) {\n    if (getLocalDateTime(inputDate).toUTCString() === expOutputDate.toUTCString()) {\n        console.log(`TEST PASSED ${testCase}`)\n    } else {\n        console.log(`TEST FAILED ${testCase} : input date in GMT ${inputDate} should equal ${expOutputDate}`)\n    };\n};\n")),(0,r.kt)("p",null,"first create dates representing the beginning of Daylight Savings Time (immediately before the beginning, at the beginning and immediately after the beginning):  "),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},'unitTest(new Date(2022, 9, 1, 15, 59, 59, 999), new Date(2022, 9, 2, 1, 59, 59, 999), "one ms before dst start");\n// returns...\n// ...  INFO    TEST PASSED one ms before dst start\nunitTest(new Date(2022, 9, 1, 16, 0, 0, 0), new Date(2022, 9, 2, 3, 0, 0, 0), "dst start");\n// returns...\n// ...  INFO    TEST PASSED dst start    \nunitTest(new Date(2022, 9, 1, 16, 0, 0, 1), new Date(2022, 9, 2, 3, 0, 0, 1), "one ms after dst start");\n// returns...\n// ...  INFO    TEST PASSED one ms after dst start\n')),(0,r.kt)("p",null,"next create dates similar tests representing the end of Daylight Savings Time (or beginning of Standard Time):  "),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},'unitTest(new Date(2022, 3, 2, 15, 59, 59, 999), new Date(2022, 3, 3, 2, 59, 59, 999), "one ms before dst end");\n// returns...\n// ...  INFO    TEST PASSED one ms before dst end    \nunitTest(new Date(2022, 3, 2, 16, 0, 0, 0), new Date(2022, 3, 3, 2, 0, 0, 0), "dst end");\n// returns...\n// ...  INFO    TEST PASSED dst end    \nunitTest(new Date(2022, 3, 2, 16, 0, 0, 1), new Date(2022, 3, 3, 2, 0, 0, 1), "one ms after dst end");\n// returns...\n// ...  INFO    TEST PASSED one ms after dst end\n')),(0,r.kt)("p",null,"Enjoy"))}f.isMDXComponent=!0},18679:(e,t,n)=>{n.d(t,{Z:()=>i});var a=n(67294),r=n(34334);const o="tabItem_Ymn6";function i(e){let{children:t,hidden:n,className:i}=e;return a.createElement("div",{role:"tabpanel",className:(0,r.Z)(o,i),hidden:n},t)}},73992:(e,t,n)=>{n.d(t,{Z:()=>w});var a=n(83117),r=n(67294),o=n(34334),i=n(76775),s=n(75238),l=n(33609),u=n(92560);function c(e){return function(e){return r.Children.map(e,(e=>{if((0,r.isValidElement)(e)&&"value"in e.props)return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))}(e).map((e=>{let{props:{value:t,label:n,attributes:a,default:r}}=e;return{value:t,label:n,attributes:a,default:r}}))}function d(e){const{values:t,children:n}=e;return(0,r.useMemo)((()=>{const e=t??c(n);return function(e){const t=(0,l.l)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,n])}function m(e){let{value:t,tabValues:n}=e;return n.some((e=>e.value===t))}function f(e){let{queryString:t=!1,groupId:n}=e;const a=(0,i.k6)(),o=function(e){let{queryString:t=!1,groupId:n}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!n)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return n??null}({queryString:t,groupId:n});return[(0,s._X)(o),(0,r.useCallback)((e=>{if(!o)return;const t=new URLSearchParams(a.location.search);t.set(o,e),a.replace({...a.location,search:t.toString()})}),[o,a])]}function p(e){const{defaultValue:t,queryString:n=!1,groupId:a}=e,o=d(e),[i,s]=(0,r.useState)((()=>function(e){let{defaultValue:t,tabValues:n}=e;if(0===n.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!m({value:t,tabValues:n}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${n.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const a=n.find((e=>e.default))??n[0];if(!a)throw new Error("Unexpected error: 0 tabValues");return a.value}({defaultValue:t,tabValues:o}))),[l,c]=f({queryString:n,groupId:a}),[p,g]=function(e){let{groupId:t}=e;const n=function(e){return e?`docusaurus.tab.${e}`:null}(t),[a,o]=(0,u.Nk)(n);return[a,(0,r.useCallback)((e=>{n&&o.set(e)}),[n,o])]}({groupId:a}),h=(()=>{const e=l??p;return m({value:e,tabValues:o})?e:null})();(0,r.useEffect)((()=>{h&&s(h)}),[h]);return{selectedValue:i,selectValue:(0,r.useCallback)((e=>{if(!m({value:e,tabValues:o}))throw new Error(`Can't select invalid tab value=${e}`);s(e),c(e),g(e)}),[c,g,o]),tabValues:o}}var g=n(72957),h=n(51048);const b="tabList__CuJ",D="tabItem_LNqP";function v(e){let{className:t,block:n,selectedValue:i,selectValue:s,tabValues:l}=e;const u=[],{blockElementScrollPositionUntilNextRender:c}=(0,g.o5)(),d=e=>{const t=e.currentTarget,n=u.indexOf(t),a=l[n].value;a!==i&&(c(t),s(a))},m=e=>{var t;let n=null;switch(e.key){case"Enter":d(e);break;case"ArrowRight":{const t=u.indexOf(e.currentTarget)+1;n=u[t]??u[0];break}case"ArrowLeft":{const t=u.indexOf(e.currentTarget)-1;n=u[t]??u[u.length-1];break}}null==(t=n)||t.focus()};return r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,o.Z)("tabs",{"tabs--block":n},t)},l.map((e=>{let{value:t,label:n,attributes:s}=e;return r.createElement("li",(0,a.Z)({role:"tab",tabIndex:i===t?0:-1,"aria-selected":i===t,key:t,ref:e=>u.push(e),onKeyDown:m,onClick:d},s,{className:(0,o.Z)("tabs__item",D,null==s?void 0:s.className,{"tabs__item--active":i===t})}),n??t)})))}function T(e){let{lazy:t,children:n,selectedValue:a}=e;if(t){const e=n.find((e=>e.props.value===a));return e?(0,r.cloneElement)(e,{className:"margin-top--md"}):null}return r.createElement("div",{className:"margin-top--md"},n.map(((e,t)=>(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==a}))))}function y(e){const t=p(e);return r.createElement("div",{className:(0,o.Z)("tabs-container",b)},r.createElement(v,(0,a.Z)({},e,t)),r.createElement(T,(0,a.Z)({},e,t)))}function w(e){const t=(0,h.Z)();return r.createElement(y,(0,a.Z)({key:String(t)},e))}}}]);