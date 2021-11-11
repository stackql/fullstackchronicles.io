"use strict";(self.webpackChunkcloudy_with_a_chance_of_big_data=self.webpackChunkcloudy_with_a_chance_of_big_data||[]).push([[2014],{3905:function(e,t,a){a.d(t,{Zo:function(){return p},kt:function(){return h}});var n=a(67294);function o(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){o(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,n,o=function(e,t){if(null==e)return{};var a,n,o={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(o[a]=e[a]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(o[a]=e[a])}return o}var l=n.createContext({}),d=function(e){var t=n.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},p=function(e){var t=d(e.components);return n.createElement(l.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var a=e.components,o=e.mdxType,r=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),u=d(a),h=o,m=u["".concat(l,".").concat(h)]||u[h]||c[h]||r;return a?n.createElement(m,i(i({ref:t},p),{},{components:a})):n.createElement(m,i({ref:t},p))}));function h(e,t){var a=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=a.length,i=new Array(r);i[0]=u;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:o,i[1]=s;for(var d=2;d<r;d++)i[d]=a[d];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}u.displayName="MDXCreateElement"},94414:function(e,t,a){a.r(t),a.d(t,{frontMatter:function(){return s},contentTitle:function(){return l},metadata:function(){return d},assets:function(){return p},toc:function(){return c},default:function(){return h}});var n=a(83117),o=a(80102),r=(a(67294),a(3905)),i=["components"],s={slug:"map-reduce-is-dead-long-live-map-reduce",title:"Map Reduce is Dead, Long Live Map Reduce",authors:["jeffreyaven"],draft:!1,hide_table_of_contents:!0,image:"images/image.png",tags:["big-data","hadoop","map-reduce"],keywords:["big-data","hadoop","map-reduce"]},l=void 0,d={permalink:"/map-reduce-is-dead-long-live-map-reduce",editUrl:"https://github.com/cloudywithachanceofbigdata/cloudywithachanceofbigdata.github.io/tree/main/src/blog/blog/2019-09-01-map-reduce-is-dead-long-live-map-reduce/index.md",source:"@site/blog/2019-09-01-map-reduce-is-dead-long-live-map-reduce/index.md",title:"Map Reduce is Dead, Long Live Map Reduce",description:"Firstly, this is not another Hadoop obituary, there are enough of those out there already.",date:"2019-09-01T00:00:00.000Z",formattedDate:"September 1, 2019",tags:[{label:"big-data",permalink:"/tags/big-data"},{label:"hadoop",permalink:"/tags/hadoop"},{label:"map-reduce",permalink:"/tags/map-reduce"}],readingTime:2.91,truncated:!1,authors:[{name:"Jeffrey Aven",title:"Technologist and Cloud Consultant",url:"https://www.linkedin.com/in/jeffreyaven/",imageURL:"https://s.gravatar.com/avatar/f96573d092470c74be233e1dded5376f?s=80",key:"jeffreyaven"}],prevItem:{title:"Google Cloud Storage Object Notifications using Slack",permalink:"/google-cloud-storage-object-notifications-using-slack"},nextItem:{title:"Ansible Tower for Continuous Infrastructure",permalink:"/ansible-tower-for-continuous-infrastructure"}},p={authorsImageUrls:[void 0]},c=[{value:"The Reports of My Death Have Been Greatly Exaggerated",id:"the-reports-of-my-death-have-been-greatly-exaggerated",children:[],level:2},{value:"On the fall of Hadoop...",id:"on-the-fall-of-hadoop",children:[],level:2}],u={toc:c};function h(e){var t=e.components,a=(0,o.Z)(e,i);return(0,r.kt)("wrapper",(0,n.Z)({},u,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"Firstly, this is not another Hadoop obituary, there are enough of those out there already."),(0,r.kt)("p",null,"The generalized title of this article has been used as an expression to convey the idea that something old has been replaced by something new. In the case of the expression \u201cthe King is dead, long live the King\u201d the inference is that although one monarch has passed, another monarch instantly succeeds him."),(0,r.kt)("p",null,"In the age of instant gratification and hype cycle driven \u2018pump and dump\u2019 investment we are very quick to discard technologies that don\u2019t realise overzealous targets for sales or market share. In our continuous attempts to find the next big thing, we are quick to throw out the last big thing and everything associated with it."),(0,r.kt)("h2",{id:"the-reports-of-my-death-have-been-greatly-exaggerated"},"The Reports of My Death Have Been Greatly Exaggerated"),(0,r.kt)("p",null,"A classic example of this is the notion that Map Reduce is dead. Largely proliferated by the Hadoop obituaries which seem to be growing exponentially with each day."),(0,r.kt)("p",null,"A common e-myth is that Google invented the Map Reduce pattern, which is completely incorrect. In 2004, Google described a framework distributed systems implementation of the Map Reduce pattern in a white paper named ",(0,r.kt)("em",{parentName:"p"},"\u201cMapReduce: Simplified Data Processing on Large Clusters.\u201d")," \u2013 this would inspire the first-generation processing framework (MapReduce) in the Hadoop project. But neither Google nor Yahoo! nor contributors to the Hadoop project (which include the pure play vendors) created the Map Reduce algorithm or processing pattern and neither shall any one of these have the rights to kill it."),(0,r.kt)("p",null,"The origins of the Map Reduce pattern can be traced all the way back to the early foundations of functional programming beginning with Lambda Calculus in the 1930s to LISP in the 1960s. Map Reduce is an integral pattern in all of today\u2019s functional and distributed systems programming. You only need to look at the support for ",(0,r.kt)("inlineCode",{parentName:"p"},"map()")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"reduce()")," operators in some of the most popular languages today including Python, JavaScript, Scala, and many more languages that support functional programming."),(0,r.kt)("p",null,"As far as distributed processing frameworks go, the Map Reduce pattern and its ",(0,r.kt)("inlineCode",{parentName:"p"},"map()")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"reduce()")," methods are very prominent as higher order functions in APIs such as Spark, Kafka Streams, Apache Samza and Apache Flink to name a few."),(0,r.kt)("p",null,"While the initial Hadoop adaptation of Map Reduce has been supplanted by superior approaches, the Map Reduce processing pattern is far from dead."),(0,r.kt)("h2",{id:"on-the-fall-of-hadoop"},"On the fall of Hadoop..."),(0,r.kt)("p",null,"There is so much hysteria around the fall of Hadoop, we need to be careful not to toss the baby out with the bath water. Hadoop served a significant role in bringing open source, distributed systems from search engine providers to academia all the way to the mainstream, and still serves an important purpose in many organizations data ecosystems today and will continue to do so for some time."),(0,r.kt)("p",null,"OK, it wasn\u2019t the panacea to everything, but who said it was supposed to be? The Hadoop movement was hijacked by hysteria, hype, venture capital, over ambitious sales targets and financial engineering \u2013 this does not mean the technology was bad."),(0,r.kt)("p",null,"Hadoop spawned many significant related projects such as Spark, Kafka and Presto to name a few. These projects paved the way for cloud integration, which is now the dominant vector for data storage, processing, and analysis."),(0,r.kt)("p",null,"While the quest for world domination by the Hadoop pure play vendors may be over, the Hadoop movement (and the impact it has had on the enterprise data landscape) will live on."))}h.isMDXComponent=!0}}]);