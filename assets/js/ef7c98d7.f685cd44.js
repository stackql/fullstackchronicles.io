(self.webpackChunkfull_stack_chronicles=self.webpackChunkfull_stack_chronicles||[]).push([[73426],{81502:(e,t,a)=>{"use strict";a.r(t),a.d(t,{assets:()=>E,contentTitle:()=>I,default:()=>R,frontMatter:()=>S,metadata:()=>O,toc:()=>Q});var o=a(83117),r=(a(67294),a(3905)),i=a(59943),l=a(4729),s=a(33939),n=a.n(s),p=a(83630),c=a.n(p),d=a(45846),g=a.n(d),u=a(22484),A=a.n(u),m=a(34070),h=a.n(m),f=a(77856),b=a.n(f),y=a(13041),w=a.n(y),k=a(69905),v=a.n(k),q=a(6836),C=a.n(q);const S={slug:"google-cloud-sql-availability-for-postgresql-read-replicas",title:"Google Cloud SQL \u2013 Availability for PostgreSQL \u2013 Part II (Read Replicas)",authors:["jeffreyaven"],draft:!1,hide_table_of_contents:!0,image:"images/cloudsql-featured-image.png",tags:["cloudsql","gcp","google-cloud-platform","googlecloudplatform","ha","highavailability","postgresql"],keywords:["cloudsql","gcp","google-cloud-platform","googlecloudplatform","ha","highavailability","postgresql"]},I=void 0,O={permalink:"/google-cloud-sql-availability-for-postgresql-read-replicas",editUrl:"https://github.com/stackql/fullstackchronicles.io/edit/main/src/blog/2020-01-24-google-cloud-sql-availability-for-postgresql-read-replicas/index.md",source:"@site/blog/2020-01-24-google-cloud-sql-availability-for-postgresql-read-replicas/index.md",title:"Google Cloud SQL \u2013 Availability for PostgreSQL \u2013 Part II (Read Replicas)",description:"CloudSQL HA",date:"2020-01-24T00:00:00.000Z",formattedDate:"January 24, 2020",tags:[{label:"cloudsql",permalink:"/tags/cloudsql"},{label:"gcp",permalink:"/tags/gcp"},{label:"google-cloud-platform",permalink:"/tags/google-cloud-platform"},{label:"googlecloudplatform",permalink:"/tags/googlecloudplatform"},{label:"ha",permalink:"/tags/ha"},{label:"highavailability",permalink:"/tags/highavailability"},{label:"postgresql",permalink:"/tags/postgresql"}],readingTime:4.23,hasTruncateMarker:!1,authors:[{name:"Jeffrey Aven",title:"Technologist and Cloud Consultant",url:"https://www.linkedin.com/in/jeffreyaven/",imageURL:"https://s.gravatar.com/avatar/f96573d092470c74be233e1dded5376f?s=80",key:"jeffreyaven"}],frontMatter:{slug:"google-cloud-sql-availability-for-postgresql-read-replicas",title:"Google Cloud SQL \u2013 Availability for PostgreSQL \u2013 Part II (Read Replicas)",authors:["jeffreyaven"],draft:!1,hide_table_of_contents:!0,image:"images/cloudsql-featured-image.png",tags:["cloudsql","gcp","google-cloud-platform","googlecloudplatform","ha","highavailability","postgresql"],keywords:["cloudsql","gcp","google-cloud-platform","googlecloudplatform","ha","highavailability","postgresql"]},prevItem:{title:"Query Cloud SQL through Big Query",permalink:"/query-cloud-sql-through-big-query"},nextItem:{title:"Introducing Service Mesh Part II",permalink:"/introducing-service-mesh-part-ii"}},E={authorsImageUrls:[void 0]},Q=[{value:"Deploying Read Replica(s)",id:"deploying-read-replicas",level:2},{value:"Read Replicas in Action",id:"read-replicas-in-action",level:2},{value:"Some Points to Note about Cloud SQL Read Replicas",id:"some-points-to-note-about-cloud-sql-read-replicas",level:2},{value:"Promoting a Read Replica",id:"promoting-a-read-replica",level:2}],N={toc:Q};function R(e){let{components:t,...s}=e;return(0,r.kt)("wrapper",(0,o.Z)({},N,s,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"CloudSQL HA",src:a(17469).Z,width:"151",height:"151"})),(0,r.kt)("p",null,"In this post we will look at read replicas as an additional method to achieve multi zone availability for Cloud SQL, which gives us - in turn - the ability to offload (potentially expensive) IO operations such as user created backups or read operations without adding load to the master instance."),(0,r.kt)("p",null,"In the previous post in this series we looked at Regional availability for PostgreSQL HA using Cloud SQL:"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://cloudywithachanceofbigdata.com/google-cloud-sql-ha-backup-and-recovery-replication-failover-and-security-for-postgresql-part-i/"},(0,r.kt)("strong",{parentName:"a"},"Google Cloud SQL \u2013 Availability, Replication, Failover for PostgreSQL \u2013 Part I"))),(0,r.kt)("p",null,"Recall that this option was simple to implement and worked relatively seamlessly and transparently with respect to zonal failover."),(0,r.kt)("p",null,"Now let's look at read replicas in Cloud SQL as an additional measure for availability."),(0,r.kt)("h2",{id:"deploying-read-replicas"},"Deploying Read Replica(s)"),(0,r.kt)("p",null,"Deploying read replicas is slightly more involved than simple regional (high) availability, as you will need to define each replica or replicas as a separate Cloud SQL instance which is a slave to the primary instance (the master instance)."),(0,r.kt)("p",null,"An example using Terraform is provided here, starting by creating the master instance:"),(0,r.kt)(i.Z,{id:"34371a3c7edab140e70208cd7710c25a",mdxType:"Gist"}),(0,r.kt)("p",null,"Next you would specify one or more read replicas (typically in a zone other than the zone the master is in):"),(0,r.kt)(i.Z,{id:"980f2d6461db0613b4090413041b5ec5",mdxType:"Gist"}),(0,r.kt)("p",null,"Note that several of the options supplied are omitted when creating a read replica database instance, such as the backup and maintenance options - as these operations cannot be performed on a read replica as we will see later."),(0,r.kt)(l.Z,{imageSrc:n(),altText:"Cloud SQL Instances - showing master and replica",mdxType:"ImageWithCaption"}),(0,r.kt)(l.Z,{imageSrc:c(),altText:"Cloud SQL Master Instance",mdxType:"ImageWithCaption"}),(0,r.kt)("p",null,"Voila! You have just set up a master instance (the primary instance your application and/or users will connect to) along with a read replica in a different zone which will be asynchronously updated as changes occur on the master instance."),(0,r.kt)("h2",{id:"read-replicas-in-action"},"Read Replicas in Action"),(0,r.kt)("p",null,"Now that we have created a read replica, lets see it in action. After connecting to the read replica (like you would any other instance), attempt to access a table that has ",(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("em",{parentName:"strong"},"not"))," been created on the master as shown here:"),(0,r.kt)(l.Z,{imageSrc:g(),altText:"SELECT operation from the replica instance",mdxType:"ImageWithCaption"}),(0,r.kt)("p",null,"Now create the table and insert some data on the ",(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("em",{parentName:"strong"},"master"))," instance:"),(0,r.kt)(l.Z,{imageSrc:A(),altText:"Create a table and insert a record on the master instance",mdxType:"ImageWithCaption"}),(0,r.kt)("p",null,"Now try the select operation on the ",(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("em",{parentName:"strong"},"replica"))," instance:"),(0,r.kt)(l.Z,{imageSrc:h(),altText:"SELECT operation from the replica instance (after changes have been made on the master)",mdxType:"ImageWithCaption"}),(0,r.kt)("p",null,"It works!"),(0,r.kt)("h2",{id:"some-points-to-note-about-cloud-sql-read-replicas"},"Some Points to Note about Cloud SQL Read Replicas"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Users connect to a read replica as a normal database connection (as shown above)"),(0,r.kt)("li",{parentName:"ul"},"Google managed backups (using the console or ",(0,r.kt)("inlineCode",{parentName:"li"},"gcloud sql backups create ..")," ) can ",(0,r.kt)("strong",{parentName:"li"},(0,r.kt)("em",{parentName:"strong"},"NOT"))," be performed against replica instances"),(0,r.kt)("li",{parentName:"ul"},"Read replicas can be used to offload IO intensive operations from the the master instance - such as user managed backup operations (e.g. ",(0,r.kt)("inlineCode",{parentName:"li"},"pg_dump"),")")),(0,r.kt)(l.Z,{imageSrc:b(),altText:"pg_dump operation against a replica instance",mdxType:"ImageWithCaption"}),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"BE CAREFUL")," Despite their name, read replicas are ",(0,r.kt)("strong",{parentName:"li"},"NOT")," read only, updates can be made which will NOT propagate back to the master instance - you could get yourself in an awful mess if you allow users to perform ",(0,r.kt)("inlineCode",{parentName:"li"},"INSERT"),", ",(0,r.kt)("inlineCode",{parentName:"li"},"UPDATE"),", ",(0,r.kt)("inlineCode",{parentName:"li"},"DELETE"),", ",(0,r.kt)("inlineCode",{parentName:"li"},"CREATE")," or ",(0,r.kt)("inlineCode",{parentName:"li"},"DROP")," operations against replica instances.")),(0,r.kt)("h2",{id:"promoting-a-read-replica"},"Promoting a Read Replica"),(0,r.kt)("p",null,"If required a read replica can be promoted to a standalone Cloud SQL instance, which is another DR option. Keep in mind however as the read replica is updated in an asynchronous manner, promotion of a read replica may result in a loss of data (hopefully not much but a loss nonetheless). Your application RPO will dictate if this is acceptable or not."),(0,r.kt)("p",null,"Promotion of a read replica is reasonably straightforward as demonstrated here using the console:"),(0,r.kt)(l.Z,{imageSrc:w(),altText:"Promoting a read replica using the console",mdxType:"ImageWithCaption"}),(0,r.kt)("p",null,"You can also use the following ",(0,r.kt)("inlineCode",{parentName:"p"},"gcloud")," command:"),(0,r.kt)("p",null," gcloud sql instances promote-replica  <replica","_","instance","_","name>"),(0,r.kt)("p",null,"Once you click on the ",(0,r.kt)("em",{parentName:"p"},"Promote Replica")," button you will see the following warning:"),(0,r.kt)(l.Z,{imageSrc:v(),altText:"",mdxType:"ImageWithCaption"}),(0,r.kt)("p",null,(0,r.kt)("em",{parentName:"p"},"Promoting a read replica using the console")),(0,r.kt)("p",null,"This simply states that once you promote the replica instance your instance will become an independent instance with no further relationship with the master instance. Once accepted and the promotion process is complete, you can see that you now have two independent Cloud SQL instances (as advertised!):"),(0,r.kt)(l.Z,{imageSrc:C(),altText:"Promoted Cloud SQL instance",mdxType:"ImageWithCaption"}),(0,r.kt)("p",null,"Some of the options you would normally configure with a master instance would need to be configured on the promoted replica instance - such as high availability, maintenance and scheduled backups - but in the event of a zonal failure you would be back up and running with virtually no data loss!"),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"Full source code for this article is available at: ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/gamma-data/cloud-sql-postgres-availability-tutorial"},"https://github.com/gamma-data/cloud-sql-postgres-availability-tutorial"))),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"if you have enjoyed this post, please consider ",(0,r.kt)("a",{parentName:"p",href:"https://www.buymeacoffee.com/jeffreyaven"},(0,r.kt)("strong",{parentName:"a"},"buying me a coffee \u2615"))," to help me keep writing!")))}R.isMDXComponent=!0},4729:(e,t,a)=>{"use strict";a.d(t,{Z:()=>r});var o=a(67294);const r=e=>{let{imageSrc:t,altText:a}=e;return o.createElement("figure",null,o.createElement("a",{href:t},o.createElement("img",{src:t,alt:a})),o.createElement("figcaption",{className:"figure-caption"},a))}},33939:(e,t,a)=>{e.exports={src:{srcSet:a.p+"assets/ideal-img/cloud-sql-postgres-read-replicas-1.d14f64d.1920.png 1920w",images:[{path:a.p+"assets/ideal-img/cloud-sql-postgres-read-replicas-1.d14f64d.1920.png",width:1920,height:279}],src:a.p+"assets/ideal-img/cloud-sql-postgres-read-replicas-1.d14f64d.1920.png",toString:function(){return a.p+"assets/ideal-img/cloud-sql-postgres-read-replicas-1.d14f64d.1920.png"},placeholder:void 0,width:1920,height:279},preSrc:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAACCAIAAADuA9qHAAAACXBIWXMAAA7DAAAOwwHHb6hkAAAAR0lEQVQImQXBbQqAIAwAUO9/jOgDDDqFiEZX6c9muM1t9l7Y0xsLLgnWDLHC9bTzxi3jUTBWCEwf9eYmc6oOVuluYoNcebr+Flk1N3GOAm0AAAAASUVORK5CYII="}},83630:(e,t,a)=>{e.exports={src:{srcSet:a.p+"assets/ideal-img/cloud-sql-postgres-read-replicas-2.233b947.648.png 648w",images:[{path:a.p+"assets/ideal-img/cloud-sql-postgres-read-replicas-2.233b947.648.png",width:648,height:432}],src:a.p+"assets/ideal-img/cloud-sql-postgres-read-replicas-2.233b947.648.png",toString:function(){return a.p+"assets/ideal-img/cloud-sql-postgres-read-replicas-2.233b947.648.png"},placeholder:void 0,width:648,height:432},preSrc:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAHCAYAAAAxrNxjAAAACXBIWXMAAA7CAAAOwgEVKEqAAAAAs0lEQVQYlU2NUWoDMQxEfcZAodCv9EoJtB/N8UqXdUjWstder2y/YkOaDgwC6WnGvJy/OX7NvF8sx4vl7XMe8/XDcjh3zxxOM2aafrDWktJGzpnFLXjvKaronmm1QKuYGFeC9wNSVW5yH48iHhGhtUaX8T6wLI5t29hVEScDeKhjHTYhBLzIX6KkFSdCipGU0tiNxOs9Ml0DLmRk3dFaKN2lUGt9VqeUCSGSdx3Vj8N/9epfsIoGtXa5qjIAAAAASUVORK5CYII="}},45846:(e,t,a)=>{e.exports={src:{srcSet:a.p+"assets/ideal-img/cloud-sql-postgres-read-replicas-3.7e776fd.902.png 902w",images:[{path:a.p+"assets/ideal-img/cloud-sql-postgres-read-replicas-3.7e776fd.902.png",width:902,height:356}],src:a.p+"assets/ideal-img/cloud-sql-postgres-read-replicas-3.7e776fd.902.png",toString:function(){return a.p+"assets/ideal-img/cloud-sql-postgres-read-replicas-3.7e776fd.902.png"},placeholder:void 0,width:902,height:356},preSrc:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAECAYAAAC3OK7NAAAACXBIWXMAAA7CAAAOwgEVKEqAAAAAhUlEQVQImS3KWwqCQBhA4VmGjtnl1zKjdMYghYKKiDZYBBbKVPs8ofjwwXk46t4+ebia5uNw7kf9bngNuu607otablZkRc54OsHzfTyt8bVGB5qgFxCGI9SprDjuSipjqawlSxLWcUwcRUQDEUHdjOWc51yM4VpsOaQp+0XCXISZSD914x8fwEg7+wWKpAAAAABJRU5ErkJggg=="}},22484:(e,t,a)=>{e.exports={src:{srcSet:a.p+"assets/ideal-img/cloud-sql-postgres-read-replicas-4.9599c32.902.png 902w",images:[{path:a.p+"assets/ideal-img/cloud-sql-postgres-read-replicas-4.9599c32.902.png",width:902,height:356}],src:a.p+"assets/ideal-img/cloud-sql-postgres-read-replicas-4.9599c32.902.png",toString:function(){return a.p+"assets/ideal-img/cloud-sql-postgres-read-replicas-4.9599c32.902.png"},placeholder:void 0,width:902,height:356},preSrc:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAECAIAAAA4WjmaAAAACXBIWXMAAA7DAAAOwwHHb6hkAAAAbUlEQVQImR3CQQrDIBAAQN8RRYhV92DQVQ8eGnxlacEk25p8tMRh2Is+796Os//Oa9vpflDbqW307RdzfsGMs5oFv00D55MQQkrJcsrrc00phRC894gYY3TOaa2VerBaayllGQDAWgsAxhg1/AFLjSCQuOjysQAAAABJRU5ErkJggg=="}},34070:(e,t,a)=>{e.exports={src:{srcSet:a.p+"assets/ideal-img/cloud-sql-postgres-read-replicas-5.4f0284d.902.png 902w",images:[{path:a.p+"assets/ideal-img/cloud-sql-postgres-read-replicas-5.4f0284d.902.png",width:902,height:403}],src:a.p+"assets/ideal-img/cloud-sql-postgres-read-replicas-5.4f0284d.902.png",toString:function(){return a.p+"assets/ideal-img/cloud-sql-postgres-read-replicas-5.4f0284d.902.png"},placeholder:void 0,width:902,height:403},preSrc:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAECAIAAAA4WjmaAAAACXBIWXMAAA7DAAAOwwHHb6hkAAAATUlEQVQImWPIry4sqi8tq6osK6vILygsKCyCooKisvIKBi0tLX19fTk5WQkJCUkMwGAOBkZGRiYmJurq6qqogEFXV1dLS0tRUVEJGwAACJwaS5kGSIgAAAAASUVORK5CYII="}},77856:(e,t,a)=>{e.exports={src:{srcSet:a.p+"assets/ideal-img/cloud-sql-postgres-read-replicas-6.ad21c63.902.png 902w",images:[{path:a.p+"assets/ideal-img/cloud-sql-postgres-read-replicas-6.ad21c63.902.png",width:902,height:305}],src:a.p+"assets/ideal-img/cloud-sql-postgres-read-replicas-6.ad21c63.902.png",toString:function(){return a.p+"assets/ideal-img/cloud-sql-postgres-read-replicas-6.ad21c63.902.png"},placeholder:void 0,width:902,height:305},preSrc:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAADCAIAAAAlXwkiAAAACXBIWXMAAA7DAAAOwwHHb6hkAAAARUlEQVQImWPIry7KrykuLi+tqKwqLCwuKCgqKASjgqKy8goGLS0tPX19RQUFWTCQRAUMxnamulb6Oga6ujq6mpqaqqgAABhLFgrEzlhUAAAAAElFTkSuQmCC"}},13041:(e,t,a)=>{e.exports={src:{srcSet:a.p+"assets/ideal-img/cloud-sql-postgres-read-replicas-7.52031cf.1212.png 1212w",images:[{path:a.p+"assets/ideal-img/cloud-sql-postgres-read-replicas-7.52031cf.1212.png",width:1212,height:379}],src:a.p+"assets/ideal-img/cloud-sql-postgres-read-replicas-7.52031cf.1212.png",toString:function(){return a.p+"assets/ideal-img/cloud-sql-postgres-read-replicas-7.52031cf.1212.png"},placeholder:void 0,width:1212,height:379},preSrc:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAADCAIAAAAlXwkiAAAACXBIWXMAAA7DAAAOwwHHb6hkAAAAXklEQVQImS3BOQ6AIBAAQP7/BgmF4hMsLExEY/yHlbEgHAK7HGvjDOPLIw/T71oo3a2GKys2N55+mG85XQyCo4YFbU2GqBA1+jWiyqzzMcEbonW+1JpLi5ABcwIMCT4c9VHEPjSMrAAAAABJRU5ErkJggg=="}},69905:(e,t,a)=>{e.exports={src:{srcSet:a.p+"assets/ideal-img/cloud-sql-postgres-read-replicas-8.979f5b6.1920.png 1920w",images:[{path:a.p+"assets/ideal-img/cloud-sql-postgres-read-replicas-8.979f5b6.1920.png",width:1920,height:971}],src:a.p+"assets/ideal-img/cloud-sql-postgres-read-replicas-8.979f5b6.1920.png",toString:function(){return a.p+"assets/ideal-img/cloud-sql-postgres-read-replicas-8.979f5b6.1920.png"},placeholder:void 0,width:1920,height:971},preSrc:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAFCAIAAADzBuo/AAAACXBIWXMAAA7DAAAOwwHHb6hkAAAAfklEQVQImT3JSw6CMBQAwJ5ZkRgXQtDlA96fFos3ELmXBK9gYqKznbCv2qJqd+e2qPpD3Zd1f7xg2VDZ4OnKQYWU0YTG6FNO9zxGVxNKg0XXQMwsAgDPZXmt67a9H/MMAKomooGZEbHrOnePKd1y9mHQn28TIiIRAQAR/c/MPunQVxgfKz+6AAAAAElFTkSuQmCC"}},6836:(e,t,a)=>{e.exports={src:{srcSet:a.p+"assets/ideal-img/cloud-sql-postgres-read-replicas-9.2b47cb5.1920.png 1920w",images:[{path:a.p+"assets/ideal-img/cloud-sql-postgres-read-replicas-9.2b47cb5.1920.png",width:1920,height:279}],src:a.p+"assets/ideal-img/cloud-sql-postgres-read-replicas-9.2b47cb5.1920.png",toString:function(){return a.p+"assets/ideal-img/cloud-sql-postgres-read-replicas-9.2b47cb5.1920.png"},placeholder:void 0,width:1920,height:279},preSrc:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAACCAIAAADuA9qHAAAACXBIWXMAAA7DAAAOwwHHb6hkAAAAR0lEQVQImQXB2w2AIAwAQPafwygfkLiEL8RR/Gk1pba03oW43qnAsMC4QT5xvp5ccdoxHpgKBCLk9rp36yJMKs36Z8qm7KY/HK01WtLWiPwAAAAASUVORK5CYII="}},3905:(e,t,a)=>{"use strict";a.d(t,{Zo:()=>c,kt:()=>u});var o=a(67294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,o)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,o,r=function(e,t){if(null==e)return{};var a,o,r={},i=Object.keys(e);for(o=0;o<i.length;o++)a=i[o],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(o=0;o<i.length;o++)a=i[o],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var n=o.createContext({}),p=function(e){var t=o.useContext(n),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},c=function(e){var t=p(e.components);return o.createElement(n.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},g=o.forwardRef((function(e,t){var a=e.components,r=e.mdxType,i=e.originalType,n=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),g=p(a),u=r,A=g["".concat(n,".").concat(u)]||g[u]||d[u]||i;return a?o.createElement(A,l(l({ref:t},c),{},{components:a})):o.createElement(A,l({ref:t},c))}));function u(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=a.length,l=new Array(i);l[0]=g;var s={};for(var n in t)hasOwnProperty.call(t,n)&&(s[n]=t[n]);s.originalType=e,s.mdxType="string"==typeof e?e:r,l[1]=s;for(var p=2;p<i;p++)l[p]=a[p];return o.createElement.apply(null,l)}return o.createElement.apply(null,a)}g.displayName="MDXCreateElement"},59943:(e,t,a)=>{"use strict";a.d(t,{Z:()=>l});var o=a(67294);a(45697);function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function i(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}const l=function(e){function t(){return r(this,t),i(this,e.apply(this,arguments))}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,e),t.prototype.componentDidMount=function(){this._updateIframeContent()},t.prototype.componentDidUpdate=function(e,t){this._updateIframeContent()},t.prototype._defineUrl=function(){var e=this.props,t=e.id,a=e.file;return"https://gist.github.com/"+t+".js"+(a?"?file="+a:"")},t.prototype._updateIframeContent=function(){var e=this.props,t=e.id,a=e.file,o=this.iframeNode,r=o.document;o.contentDocument?r=o.contentDocument:o.contentWindow&&(r=o.contentWindow.document);var i='<html><head><base target="_parent"><style>*{font-size:12px;}</style></head><body '+("onload=\"parent.document.getElementById('"+(a?"gist-"+t+"-"+a:"gist-"+t)+"').style.height=document.body.scrollHeight + 'px'\"")+">"+('<script type="text/javascript" src="'+this._defineUrl()+'"><\/script>')+"</body></html>";r.open(),r.writeln(i),r.close()},t.prototype.render=function(){var e=this,t=this.props,a=t.id,r=t.file;return o.createElement("iframe",{ref:function(t){e.iframeNode=t},width:"100%",frameBorder:0,id:r?"gist-"+a+"-"+r:"gist-"+a})},t}(o.PureComponent)},17469:(e,t,a)=>{"use strict";a.d(t,{Z:()=>o});const o=a.p+"assets/images/cloudsql-featured-image-896f0c764d7310d88c5cc9461f3feb6c.png"}}]);