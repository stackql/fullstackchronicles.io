"use strict";(self.webpackChunkfull_stack_chronicles=self.webpackChunkfull_stack_chronicles||[]).push([[79559],{3905:(e,t,a)=>{a.d(t,{Zo:()=>p,kt:()=>m});var n=a(67294);function o(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function s(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){o(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function r(e,t){if(null==e)return{};var a,n,o=function(e,t){if(null==e)return{};var a,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(o[a]=e[a]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(o[a]=e[a])}return o}var d=n.createContext({}),l=function(e){var t=n.useContext(d),a=t;return e&&(a="function"==typeof e?e(t):s(s({},t),e)),a},p=function(e){var t=l(e.components);return n.createElement(d.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},h=n.forwardRef((function(e,t){var a=e.components,o=e.mdxType,i=e.originalType,d=e.parentName,p=r(e,["components","mdxType","originalType","parentName"]),h=l(a),m=o,u=h["".concat(d,".").concat(m)]||h[m]||c[m]||i;return a?n.createElement(u,s(s({ref:t},p),{},{components:a})):n.createElement(u,s({ref:t},p))}));function m(e,t){var a=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=a.length,s=new Array(i);s[0]=h;var r={};for(var d in t)hasOwnProperty.call(t,d)&&(r[d]=t[d]);r.originalType=e,r.mdxType="string"==typeof e?e:o,s[1]=r;for(var l=2;l<i;l++)s[l]=a[l];return n.createElement.apply(null,s)}return n.createElement.apply(null,a)}h.displayName="MDXCreateElement"},85271:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>l,contentTitle:()=>r,default:()=>h,frontMatter:()=>s,metadata:()=>d,toc:()=>p});var n=a(83117),o=(a(67294),a(3905)),i=a(59943);const s={slug:"enhancing-dbt-snapshots-with-operational-metadata",title:"Enhancing dbt Snapshots with Operational Metadata",authors:["chrisottinger"],draft:!1,image:"/img/blog/enhancing-dbt-snapshots-with-operational-metadata.png",tags:["dbt","snapshot","dbt snapshot","cdc","change data capture","bigquery"],keywords:["dbt","snapshot","dbt snapshot","cdc","change data capture","bigquery"],description:"Override default dbt snapshot macros to add operational metadata to snapshot tables while still applying dbt logic and strategy processing."},r=void 0,d={permalink:"/enhancing-dbt-snapshots-with-operational-metadata",editUrl:"https://github.com/stackql/fullstackchronicles.io/edit/main/src/blog/2023-01-30-enhancing-dbt-snapshots-with-operational-metadata/index.md",source:"@site/blog/2023-01-30-enhancing-dbt-snapshots-with-operational-metadata/index.md",title:"Enhancing dbt Snapshots with Operational Metadata",description:"Override default dbt snapshot macros to add operational metadata to snapshot tables while still applying dbt logic and strategy processing.",date:"2023-01-30T00:00:00.000Z",formattedDate:"January 30, 2023",tags:[{label:"dbt",permalink:"/tags/dbt"},{label:"snapshot",permalink:"/tags/snapshot"},{label:"dbt snapshot",permalink:"/tags/dbt-snapshot"},{label:"cdc",permalink:"/tags/cdc"},{label:"change data capture",permalink:"/tags/change-data-capture"},{label:"bigquery",permalink:"/tags/bigquery"}],readingTime:5.19,hasTruncateMarker:!1,authors:[{name:"Chris Ottinger",title:"Senior Technologist",url:"https://github.com/datwiz",imageURL:"http://0.gravatar.com/avatar/f9af9c3fae755ac170c5798c53c5267d?s=80",key:"chrisottinger"}],frontMatter:{slug:"enhancing-dbt-snapshots-with-operational-metadata",title:"Enhancing dbt Snapshots with Operational Metadata",authors:["chrisottinger"],draft:!1,image:"/img/blog/enhancing-dbt-snapshots-with-operational-metadata.png",tags:["dbt","snapshot","dbt snapshot","cdc","change data capture","bigquery"],keywords:["dbt","snapshot","dbt snapshot","cdc","change data capture","bigquery"],description:"Override default dbt snapshot macros to add operational metadata to snapshot tables while still applying dbt logic and strategy processing."},nextItem:{title:"Yoast (like) JSON-LD Structured Data for Docusaurus",permalink:"/json-ld-structured-data-for-docusaurus"}},l={authorsImageUrls:[void 0]},p=[{value:"Objectives",id:"objectives",level:2},{value:"<code>NULL</code> vs High-End Date/Timestamp",id:"null-vs-high-end-datetimestamp",level:3},{value:"Enhancing the default Snapshot",id:"enhancing-the-default-snapshot",level:2},{value:"<code>build_snapshot_table()</code>",id:"build_snapshot_table",level:3},{value:"<code>snapshot_staging_table()</code>",id:"snapshot_staging_table",level:3},{value:"<code>snapshot_merge_sql()</code>",id:"snapshot_merge_sql",level:3},{value:"Conclusion",id:"conclusion",level:2}],c={toc:p};function h(e){let{components:t,...s}=e;return(0,o.kt)("wrapper",(0,n.Z)({},c,s,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"The out-of-the-box ",(0,o.kt)("a",{parentName:"p",href:"https://docs.getdbt.com/docs/build/snapshots"},(0,o.kt)("strong",{parentName:"a"},"dbt snapshots"))," provide change data capture (CDC) capability for tracking the changes to data in your data lake or data warehouse.  The dbt snapshot metadata columns enable a view of change to data - which records\nhave been updated and when.   However, the dbt snapshot metadata doesn't provide a view of the processing audit - which process\nor job was responsible for the changes.  The ability to audit at the processing level requires additional operational metadata."),(0,o.kt)("p",null,"The out-of-the-box ",(0,o.kt)("inlineCode",{parentName:"p"},"dbt snapshot")," strategies (rules for detecting changes) likely provide the desired logic for detecting and managing data change.\nNo change to the snapshot strategies or snapshot pipeline processing is desired, but additional operational metadata\nfields must be set and carried through with the data."),(0,o.kt)("admonition",{type:"note"},(0,o.kt)("p",{parentName:"admonition"},"The full source code for this article is available at ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/datwiz/dbt-snapshot-metadata"},(0,o.kt)("strong",{parentName:"a"},"github.com/datwiz/dbt-snapshot-metadata")),".")),(0,o.kt)("h2",{id:"objectives"},"Objectives"),(0,o.kt)("p",null,"Both operational and governance requirements can drive the need for greater fidelity of operational metadata.\nExample considerations could include:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"use of the out-of-the-box ",(0,o.kt)("inlineCode",{parentName:"li"},"dbt snapshot")," logic and strategies for Change Data Capture (CDC)"),(0,o.kt)("li",{parentName:"ul"},"addition of operational metadata fields to snapshot tables with processing details for ops support and audit",(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"when new records are inserted, add operational processing metadata information to each record"),(0,o.kt)("li",{parentName:"ul"},"when existing records are closed or end-dated, update operational metadata fields with processing metadata")))),(0,o.kt)("mermaid",{value:"---\ntitle: Example snapshot table out-of-the-box\n---\nerDiagram\n  BASIC_THING {\n    date txn_dt\n    int id\n    string status\n    string dbt_scd_id\n    datetime dbt_updated_at\n    datetime dbt_valid_from\n    datetime dbt_valid_to\n  }\n"}),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"standard snapshot table",src:a(96610).Z,width:"561",height:"66"})),(0,o.kt)("mermaid",{value:"---\ntitle: Example snapshot table with enhanced metadata\n---\nerDiagram\n  ENHANCED_THING {\n    date txn_dt\n    int id\n    string status\n    string insert_id\n    string update_id\n    timestamp start_dttm\n    timestamp end_dttm\n    timestamp insert_dttm\n    timestamp update_dttm\n    string dbt_scd_id\n    datetime dbt_updated_at\n    datetime dbt_valid_from\n    datetime dbt_valid_to\n  }"}),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"enhanced snapshot table",src:a(29951).Z,width:"818",height:"66"})),(0,o.kt)("p",null,"Aside from including a new ",(0,o.kt)("inlineCode",{parentName:"p"},"process_id")," value in records, these enhancements don't add further information to the\ntable.  Instead they are a materialization of the operational data that is easier to access.  The same information\ncould be derived from standard dbt metadata fields but would require a more complex SQL statement that includes\na left outer self-join.  As with any materialization decision, there is a trade-off between ease of access\nvs. additional storage requirements."),(0,o.kt)("h3",{id:"null-vs-high-end-datetimestamp"},(0,o.kt)("inlineCode",{parentName:"h3"},"NULL")," vs High-End Date/Timestamp"),(0,o.kt)("p",null,"In addition to the ops support and audit requirements, there can also be a legacy migration complication\nrelated to how open records (the most current version of the record) are represented in snapshots.  dbt snapshots\nrepresent open records using ",(0,o.kt)("inlineCode",{parentName:"p"},"NULL")," values for ",(0,o.kt)("inlineCode",{parentName:"p"},"dbt_valid_to")," fields.\nIn legacy data lakes or data warehouses, the open records often are identified using a\nwell-known high value for the effective end date/timestamp, such as ",(0,o.kt)("inlineCode",{parentName:"p"},"9999-12-31")," or ",(0,o.kt)("inlineCode",{parentName:"p"},"9999-12-31 23:59:59"),".  Adding\nadditional snapshot metadata columns enables a legacy view of record changes without having to alter the\n",(0,o.kt)("inlineCode",{parentName:"p"},"dbt snapshot")," strategy or processing logic.  "),(0,o.kt)("admonition",{type:"tip"},(0,o.kt)("p",{parentName:"admonition"},"Transitioning to ",(0,o.kt)("inlineCode",{parentName:"p"},"NULL")," values for the ",(0,o.kt)("inlineCode",{parentName:"p"},"valid_to")," end date/timestamp value for open records\nis highly recommended, especially when porting to a new database platform or cloud-based service.  On-premise\nlegacy database platforms often use ",(0,o.kt)("inlineCode",{parentName:"p"},"TIMESTAMP")," values without including timezones or timezone offsets, relying on a system-wide default timezone setting.\nDifferent databases may also have extra millisecond precision for ",(0,o.kt)("inlineCode",{parentName:"p"},"TIMESTAMP")," columns.\nPrecision and timezone treatment can cause unexpected issues when migrating to a new database platform."),(0,o.kt)("p",{parentName:"admonition"},"For example, in BigQuery"),(0,o.kt)("pre",{parentName:"admonition"},(0,o.kt)("code",{parentName:"pre"},"datetime('9999-12-31 23:59:59.999999', 'Australia/Melbourne')\n")),(0,o.kt)("p",{parentName:"admonition"},"will generate an invalid value error, while"),(0,o.kt)("pre",{parentName:"admonition"},(0,o.kt)("code",{parentName:"pre"},"timestamp('9999-12-31 23:59:59.999999', 'Australia/Melbourne')\n")),(0,o.kt)("p",{parentName:"admonition"},"will silently convert the localised timestamp to UTC ",(0,o.kt)("inlineCode",{parentName:"p"},"9999-12-31 23:59:59.999999+00")),(0,o.kt)("p",{parentName:"admonition"},"The use of ",(0,o.kt)("inlineCode",{parentName:"p"},"NULL")," values for open records/",(0,o.kt)("inlineCode",{parentName:"p"},"valid_to")," fields avoids this risk of subtle breakage.")),(0,o.kt)("h2",{id:"enhancing-the-default-snapshot"},"Enhancing the default Snapshot"),(0,o.kt)("p",null,"Modify the default dbt snapshot behavior by overriding the ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/dbt-labs/dbt-core/tree/main/core/dbt/include/global_project/macros/materializations/snapshots"},"dbt snapshot materialization macros"),".\ndbt enbles macros to be overridden using the following resolution or search order:"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"locally defined macros in the project's ./macros directory"),(0,o.kt)("li",{parentName:"ol"},"macros defined in additional dbt packages included in the project ",(0,o.kt)("inlineCode",{parentName:"li"},"packages.yml")," file"),(0,o.kt)("li",{parentName:"ol"},"dbt adaptor-specific macros"),(0,o.kt)("li",{parentName:"ol"},"dbt provided default macros")),(0,o.kt)("p",null,"To inject additional snapshot metadata fields into snapshot tables override the following two default macros:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"default__build_snapshot_table()")," creates the snapshot table on the first run"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"default__snapshot_staging_table()")," stages in the inserts and updates to be applied to the snapshot table")),(0,o.kt)("p",null,"To update fields on snapshot update, override the following default macro:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"default__snapshot_merge_sql()")," performs the MERGE/UPSERT ")),(0,o.kt)("p",null,"Note that if the dbt database adaptor implements adaptor-specific versions of these macros, then update\nthe adaptor-specific macro accordingly.  For example the ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/dbt-labs/dbt-spark/blob/main/dbt/include/spark/macros/materializations/snapshot.sql"},"dbt-spark")," adaptor overrides the\ndbt ",(0,o.kt)("inlineCode",{parentName:"p"},"default__snapshot_merge_sql()")," as ",(0,o.kt)("inlineCode",{parentName:"p"},"spark__snapshot_merge_sql()"),"."),(0,o.kt)("h3",{id:"build_snapshot_table"},(0,o.kt)("inlineCode",{parentName:"h3"},"build_snapshot_table()")),(0,o.kt)("p",null,"The ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/datwiz/dbt-snapshot-metadata/tree/main/dbt_snapshot_ops_metadata/macros/default__build_snapshot_table.sql"},"default__build_snapshot_table()")," macro is called on the first ",(0,o.kt)("inlineCode",{parentName:"p"},"dbt snapshot")," invocation.  This\nmacro defines the content to include in the ",(0,o.kt)("inlineCode",{parentName:"p"},"CREATE TABLE")," statement.  The following example adds\nprocess id's using the dbt ",(0,o.kt)("inlineCode",{parentName:"p"},"invocation_id")," and additional timestamp fields, including use of the\nwell-known high timestamp value for open records.  This value is defined as the variable ",(0,o.kt)("inlineCode",{parentName:"p"},"default_high_dttm"),"\nin the ",(0,o.kt)("inlineCode",{parentName:"p"},"dbt_project.yml")," file.  The ",(0,o.kt)("inlineCode",{parentName:"p"},"dbt snapshot")," strategy processing uses the unmodified\nstandard dbt columns, so modification to change detection logic is not required."),(0,o.kt)(i.Z,{id:"750d131f1e4c3891d1a358b3e655574e",mdxType:"Gist"}),(0,o.kt)("h3",{id:"snapshot_staging_table"},(0,o.kt)("inlineCode",{parentName:"h3"},"snapshot_staging_table()")),(0,o.kt)("p",null,"The ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/datwiz/dbt-snapshot-metadata/tree/main/dbt_snapshot_ops_metadata/macros/default__snapshot_staging_table.sql"},"default__snapshot_staging_table()")," macro is called on subsequent ",(0,o.kt)("inlineCode",{parentName:"p"},"dbt snapshot")," invocations.  This macro\ndefines the content in the ",(0,o.kt)("inlineCode",{parentName:"p"},"MERGE")," statement for inserts and updates.  The following example adds\nthe additional operational metadata fields to the ",(0,o.kt)("inlineCode",{parentName:"p"},"insertions")," common table expression (CTE) and the ",(0,o.kt)("inlineCode",{parentName:"p"},"updates")," (CTE).\nThe dbt ",(0,o.kt)("inlineCode",{parentName:"p"},"invocation_id")," is used again as the ",(0,o.kt)("inlineCode",{parentName:"p"},"process_id")," for inserts on new records and updates that\nclose existing records."),(0,o.kt)(i.Z,{id:"e4601e9d2cb4a1186390d47834d570f8",mdxType:"Gist"}),(0,o.kt)("p",null,"Note that the ",(0,o.kt)("inlineCode",{parentName:"p"},"deletes")," CTE has not been updated with the additional fields.  In scenarios that use the\nhard deletes feature, the ",(0,o.kt)("inlineCode",{parentName:"p"},"deletes")," CTE would need to be modified as well."),(0,o.kt)("h3",{id:"snapshot_merge_sql"},(0,o.kt)("inlineCode",{parentName:"h3"},"snapshot_merge_sql()")),(0,o.kt)("p",null,"The ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/datwiz/dbt-snapshot-metadata/tree/main/dbt_snapshot_ops_metadata/macros/default__snapshot_merge_sql.sql"},"default__snapshot_merge_sql()")," macro is called to perform the ",(0,o.kt)("inlineCode",{parentName:"p"},"MERGE"),"/",(0,o.kt)("inlineCode",{parentName:"p"},"UPSERT")," into the target snapshot table.  This macro defines how fields in the records being closed should be updated.  The ",(0,o.kt)("inlineCode",{parentName:"p"},"update set"),"\nsection of the ",(0,o.kt)("inlineCode",{parentName:"p"},"MERGE")," statement defines the updated columns and values."),(0,o.kt)(i.Z,{id:"d8b3180a11e7cf334ef7be3ac75429d9",mdxType:"Gist"}),(0,o.kt)("h2",{id:"conclusion"},"Conclusion"),(0,o.kt)("p",null,"Overriding the default dbt snapshot macros enables the injection and updating of additional operational\nmetadata in snapshot tables.  Fields can be added such that the provided dbt logic and snapshot\nstrategy processing is still applied. Still, the resulting snapshot tables contain the columns required\nfor the data lake or data warehouse."),(0,o.kt)("p",null,"The sample dbt project in ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/datwiz/dbt-snapshot-metadata/tree/main/dbt_snapshot_ops_metadata"},(0,o.kt)("strong",{parentName:"a"},"datwiz/dbt-snapshot-metadata/tree/main/dbt_snapshot_ops_metadata"))," contains an implementation of the snapshot customization."))}h.isMDXComponent=!0},59943:(e,t,a)=>{a.d(t,{Z:()=>s});var n=a(67294);a(45697);function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function i(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}const s=function(e){function t(){return o(this,t),i(this,e.apply(this,arguments))}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,e),t.prototype.componentDidMount=function(){this._updateIframeContent()},t.prototype.componentDidUpdate=function(e,t){this._updateIframeContent()},t.prototype._defineUrl=function(){var e=this.props,t=e.id,a=e.file;return"https://gist.github.com/"+t+".js"+(a?"?file="+a:"")},t.prototype._updateIframeContent=function(){var e=this.props,t=e.id,a=e.file,n=this.iframeNode,o=n.document;n.contentDocument?o=n.contentDocument:n.contentWindow&&(o=n.contentWindow.document);var i='<html><head><base target="_parent"><style>*{font-size:12px;}</style></head><body '+("onload=\"parent.document.getElementById('"+(a?"gist-"+t+"-"+a:"gist-"+t)+"').style.height=document.body.scrollHeight + 'px'\"")+">"+('<script type="text/javascript" src="'+this._defineUrl()+'"><\/script>')+"</body></html>";o.open(),o.writeln(i),o.close()},t.prototype.render=function(){var e=this,t=this.props,a=t.id,o=t.file;return n.createElement("iframe",{ref:function(t){e.iframeNode=t},width:"100%",frameBorder:0,id:o?"gist-"+a+"-"+o:"gist-"+a})},t}(n.PureComponent)},29951:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/enhanced-snapshot-table-f9b84b685e26fb2fbd1a7bdd4bfc7f16.png"},96610:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/standard-snapshot-table-e2687b61b721e1f1ee146b3b35ee47e8.png"}}]);