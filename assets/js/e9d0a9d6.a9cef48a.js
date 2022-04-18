"use strict";(self.webpackChunkcloudy_with_a_chance_of_big_data=self.webpackChunkcloudy_with_a_chance_of_big_data||[]).push([[6487],{3905:function(e,t,a){a.d(t,{Zo:function(){return p},kt:function(){return h}});var n=a(67294);function i(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){i(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,n,i=function(e,t){if(null==e)return{};var a,n,i={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(i[a]=e[a]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(i[a]=e[a])}return i}var l=n.createContext({}),c=function(e){var t=n.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},p=function(e){var t=c(e.components);return n.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var a=e.components,i=e.mdxType,r=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),d=c(a),h=i,m=d["".concat(l,".").concat(h)]||d[h]||u[h]||r;return a?n.createElement(m,o(o({ref:t},p),{},{components:a})):n.createElement(m,o({ref:t},p))}));function h(e,t){var a=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=a.length,o=new Array(r);o[0]=d;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:i,o[1]=s;for(var c=2;c<r;c++)o[c]=a[c];return n.createElement.apply(null,o)}return n.createElement.apply(null,a)}d.displayName="MDXCreateElement"},54066:function(e,t,a){a.r(t),a.d(t,{assets:function(){return p},contentTitle:function(){return l},default:function(){return h},frontMatter:function(){return s},metadata:function(){return c},toc:function(){return u}});var n=a(83117),i=a(80102),r=(a(67294),a(3905)),o=["components"],s={slug:"managing-secrets-in-cicd-pipelines",title:"Managing Secrets in CICD Pipelines",authors:["chrisottinger"],draft:!1,hide_table_of_contents:!0,image:"images/Gitlab-Vault.png",tags:["ci-cd","gitlab-ci","hashicorp-vault","jenkins","secrets-management"],keywords:["ci-cd","gitlab-ci","hashicorp-vault","jenkins","secrets-management"]},l=void 0,c={permalink:"/managing-secrets-in-cicd-pipelines",editUrl:"https://github.com/stackql/fullstackchronicles.io/tree/main/src/blog/blog/2019-07-16-managing-secrets-in-cicd-pipelines/index.md",source:"@site/blog/2019-07-16-managing-secrets-in-cicd-pipelines/index.md",title:"Managing Secrets in CICD Pipelines",description:"Overview",date:"2019-07-16T00:00:00.000Z",formattedDate:"July 16, 2019",tags:[{label:"ci-cd",permalink:"/tags/ci-cd"},{label:"gitlab-ci",permalink:"/tags/gitlab-ci"},{label:"hashicorp-vault",permalink:"/tags/hashicorp-vault"},{label:"jenkins",permalink:"/tags/jenkins"},{label:"secrets-management",permalink:"/tags/secrets-management"}],readingTime:7.53,truncated:!1,authors:[{name:"Chris Ottinger",title:"Senior Technologist",url:"https://github.com/datwiz",imageURL:"http://0.gravatar.com/avatar/f9af9c3fae755ac170c5798c53c5267d?s=80",key:"chrisottinger"}],frontMatter:{slug:"managing-secrets-in-cicd-pipelines",title:"Managing Secrets in CICD Pipelines",authors:["chrisottinger"],draft:!1,hide_table_of_contents:!0,image:"images/Gitlab-Vault.png",tags:["ci-cd","gitlab-ci","hashicorp-vault","jenkins","secrets-management"],keywords:["ci-cd","gitlab-ci","hashicorp-vault","jenkins","secrets-management"]},prevItem:{title:"Ansible Tower for Continuous Infrastructure",permalink:"/ansible-tower-for-continuous-infrastructure"},nextItem:{title:"Change Data Capture at Scale using Spark",permalink:"/change-data-capture-at-scale-using-spark"}},p={authorsImageUrls:[void 0]},u=[{value:"Overview",id:"overview",level:2},{value:"Objectives",id:"objectives",level:2},{value:"Solution",id:"solution",level:2},{value:"Storing Secrets",id:"storing-secrets",level:2},{value:"Passing Secrets to Applications",id:"passing-secrets-to-applications",level:2},{value:"Example Workflow",id:"example-workflow",level:2},{value:"Assumptions",id:"assumptions",level:3},{value:"Workflow Steps",id:"workflow-steps",level:3},{value:"Add a Vault secret",id:"add-a-vault-secret",level:3},{value:"Add a Vault access policy",id:"add-a-vault-access-policy",level:3},{value:"Add a Vault appRole",id:"add-a-vault-approle",level:3},{value:"Read the Vault approle-id",id:"read-the-vault-approle-id",level:3},{value:"Add a Vault appRole secret-id",id:"add-a-vault-approle-secret-id",level:3},{value:"Add CICD Job Steps",id:"add-cicd-job-steps",level:3},{value:"Add CICD job vars for Vault access",id:"add-cicd-job-vars-for-vault-access",level:3},{value:"Add CICD job vars for Vault secrets",id:"add-cicd-job-vars-for-vault-secrets",level:3},{value:"Remove CICD job vars",id:"remove-cicd-job-vars",level:3},{value:"Execute the CICD job",id:"execute-the-cicd-job",level:3}],d={toc:u};function h(e){var t=e.components,s=(0,i.Z)(e,o);return(0,r.kt)("wrapper",(0,n.Z)({},d,s,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"overview"},"Overview"),(0,r.kt)("p",null,"With the adoption automation for deploying and managing application environments, protecting privileged accounts and credential secrets in a consistent, secure, and scalable manner becomes critical. \xa0Secrets can include account usernames, account passwords and API tokens. \xa0Good credentials management and secrets automation practices reduce the risk of secrets escaping into the wild and being used either intentionally (hacked) or unintentionally (accident)."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Reduce the likelihood of passwords slipping into source code commits and getting pushed to code repositories, especially public repositories such as github."),(0,r.kt)("li",{parentName:"ul"},"Minimise the secrets exposure surface area by reducing the number of people who require knowledge of credentials. \xa0With an automated credentials management process that number can reach zero."),(0,r.kt)("li",{parentName:"ul"},"Limit the useful life of a secret by employing short expiry times and small time-to-live (TTL) values. \xa0Automation enables reliable low-effort secret re-issue and rotation.")),(0,r.kt)("h2",{id:"objectives"},"Objectives"),(0,r.kt)("p",null,"The following objectives have been considered in designing a secrets automation solution that can be integrated into an existing CICD environment."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},'Integrate into an existing CICD environment without requiring an "all or nothing" implementation. \xa0Allow existing jobs to operate alongside jobs that have been converted to the new secrets automation solution.'),(0,r.kt)("li",{parentName:"ul"},"A single design that can be applied across different toolchains and deployment models. \xa0For example, deployment to a Kubernetes environment can use the same secrets management process as an application installation on a virtual machine. \xa0Similarly, the design can be used with different CICD tools, such as ",(0,r.kt)("a",{parentName:"li",href:"https://about.gitlab.com"},"GitLab-CI"),", ",(0,r.kt)("a",{parentName:"li",href:"https://travis-ci.org"},"Travis-CI"),", or other build and deploy automation tool."),(0,r.kt)("li",{parentName:"ul"},"Multi-cloud capable by limiting coupling to a specific hosting environment or cloud services provider."),(0,r.kt)("li",{parentName:"ul"},"The use of secrets (or not) can be decided at any point in time, without requiring changes to the CICD job definition, similar to the use of feature flags in applications."),(0,r.kt)("li",{parentName:"ul"},"Enable changes to secrets, either due to rotation or revocation, to be maintained from a central service point. \xa0Avoid storing the same secret multiple times in different locations."),(0,r.kt)("li",{parentName:"ul"},'Secrets organised in predictable locations in a "rest-ish" fashion by treating secrets and credentials as attributes of entities.'),(0,r.kt)("li",{parentName:"ul"},"Use environment variables as the standard interface between deployment orchestration and deployed application, following the 12 Factor App approach.")),(0,r.kt)("h2",{id:"solution"},"Solution"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Secrets stored centrally in Hashicorp Vault."),(0,r.kt)("li",{parentName:"ul"},"CICD jobs retrieve secrets from Vault and configure the application deployment environment."),(0,r.kt)("li",{parentName:"ul"},"Deployed applications use the secrets supplied by CICD job to access backend services.")),(0,r.kt)("p",null,(0,r.kt)("a",{target:"_blank",href:a(61843).Z},(0,r.kt)("img",{alt:"CICD Secrets with Vault",src:a(20817).Z,width:"750",height:"434"}))),(0,r.kt)("h2",{id:"storing-secrets"},"Storing Secrets"),(0,r.kt)("p",null,"Use\xa0",(0,r.kt)("a",{parentName:"p",href:"https://www.vaultproject.io/"},"Vault by Hashicorp"),"\xa0as a centralised secrets storage service. \xa0The CICD service retrieves secrets information for integration and deployment jobs. \xa0Vault provides a flexible set of features to support numerous different workflows and available as either Vault Open Source or Vault Enterprise. \xa0The secrets management pattern described uses the Vault Open Source version. \xa0The workflow described here can be explored using Vault in the unsecured development mode, however, a properly configured and managed Vault service is required for production use."),(0,r.kt)("p",null,"Vault supports a number of secrets backends and access workflow models. \xa0This solution makes use of the\xa0",(0,r.kt)("a",{parentName:"p",href:"https://www.vaultproject.io/docs/auth/approle.html"},"Vault AppRole method"),', which is designed to support machine-to-machine automated workflows. \xa0With the AppRole workflow model human access to secrets is minimised through the use of access controls and temporary credentials with short TTL\'s. \xa0Within Vault, secrets are organised using an entity centric "rest-ish" style approach ensuring a given secret for a given service is stored in a single predictable location.'),(0,r.kt)("p",null,"The use of Vault satisfies several of the design objectives:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"enables single point management of secrets. The secrets content is stored in a single location referenced at CICD job runtime. \xa0On the next invocation, the CICD job retrieves the latest version of the secrets content."),(0,r.kt)("li",{parentName:"ul"},'enables storing secrets in predictable locations with file system directory style path location. \xa0The "rest-ish" approach to organising secret locations enables storing a given secret only once. \xa0Access policies provide the mechanism to limit CICD \xa0visibility to only those secrets required for the CICD job.')),(0,r.kt)("h2",{id:"passing-secrets-to-applications"},"Passing Secrets to Applications"),(0,r.kt)("p",null,"Use environment variables to pass secrets from the CICD service to the application environment. \xa0"),(0,r.kt)("p",null,"There are existing utilities available for populating a child process environment with Vault sourced secrets, such as\xa0",(0,r.kt)("a",{parentName:"p",href:"https://github.com/channable/vaultenv"},"vaultenv"),"\xa0or\xa0",(0,r.kt)("a",{parentName:"p",href:"https://github.com/hashicorp/envconsul"},"envconsul"),". \xa0This approach works well for running an application service. \xa0However, with CICD, often there are often sets of tasks that require access to secrets information as opposed to a single command. \xa0Using the child environment approach would require wrapping each command in a CICD job step with the env utility. \xa0This works against the objective of introducing a secrets automation solution into existing CICD jobs without requiring substantial refactoring. \xa0Similarly, some CICD solutions such as\xa0",(0,r.kt)("a",{parentName:"p",href:"https://jenkins.io/"},"Jenkins"),"\xa0provide Vault integration plugins which pre-populate the environment with secrets content. \xa0This meets the objective of minimal CICD job refactoring, but closely couples the solution to a particular CICD service stack, reducing portability. \xa0"),(0,r.kt)("p",null,"With a job script oriented CICD automation stack like GitLab-CI or Travis-CI, an alternative is to insert a job step at the beginning of a series of CICD tasks that will populated the required secret values into expected environment variables. \xa0Subsequent tasks in the job can then execute without requiring refactoring. \xa0The decision on whether to source a particular environment variable's content directly from the CICD job setup or from the Vault secrets store can be made by adding an optional prefix to environment variables to be sourced from the Vault secrets store. \xa0The prefixed instance of the environment variable contains the location or path to the required secret. \xa0Secret locations are identified using the convention\xa0",(0,r.kt)("inlineCode",{parentName:"p"},"/<vault-secret-path>/<secret-key>")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"enables progressive implementation due to transparency of secret sourcing. Subsequent steps continue to rely on expected environment vars"),(0,r.kt)("li",{parentName:"ul"},"enables use in any toolchain that supports use of environment variables to pass information to application environment.\xa0"),(0,r.kt)("li",{parentName:"ul"},"CICD job steps not tied to a specific secrets store. An alternative secrets storage service could be supported by only requiring modification of the secret getter utility."),(0,r.kt)("li",{parentName:"ul"},"control of whether to source application environment variables from the CICD job directly or from the secrets engine is managed at the CICD job setup level as opposed to requiring CICD job refactoring to switch the content source."),(0,r.kt)("li",{parentName:"ul"},"continues the 12 Factor App approach of using environment variables to pass context to application environments.")),(0,r.kt)("h2",{id:"example-workflow"},"Example Workflow"),(0,r.kt)("p",null,"An example workflow for a CICD job designed to use environment variables for configuring an application."),(0,r.kt)("h3",{id:"assumptions"},"Assumptions"),(0,r.kt)("p",null,"The following are available in the CICD environment."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"A job script oriented CICD automation stack that executes job tasks as a series of shell commands, such as ",(0,r.kt)("a",{parentName:"li",href:"https://about.gitlab.com"},"GitLab-CI")," or ",(0,r.kt)("a",{parentName:"li",href:"https://jenkins.io/doc/book/pipeline/"},"Jenkins Pipelines"),"."),(0,r.kt)("li",{parentName:"ul"},"A secrets storage engine with a python API, such as Hashicorp Vault."),(0,r.kt)("li",{parentName:"ul"},"CICD execution environment includes the\xa0",(0,r.kt)("inlineCode",{parentName:"li"},"[get-vault-secrets-by-approle](https://github.com/datwiz/cicd-secrets-in-vault/blob/master/scripts/get-vault-secrets-by-approle)"),"\xa0utility script.")),(0,r.kt)("h3",{id:"workflow-steps"},"Workflow Steps"),(0,r.kt)("h3",{id:"add-a-vault-secret"},"Add a Vault secret"),(0,r.kt)("p",null,"Add a secret to Vault at the location\xa0",(0,r.kt)("inlineCode",{parentName:"p"},"secret/fake-app/users/fake-users"),"\xa0with a key/value entry of\xa0",(0,r.kt)("inlineCode",{parentName:"p"},"password=fake-password")),(0,r.kt)("h3",{id:"add-a-vault-access-policy"},"Add a Vault access policy"),(0,r.kt)("p",null,"Add a Vault policy for the CICD job (or set of CICD jobs) that includes 'read' access to the secret."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},'# cicd-fake-app-policy \npath "secret/data/fake-app/users/fake-user" {\n    capabilities = ["read"]\n}\n\npath "secret/metadata/fake-app/users/fake-user" {\n    capabilities = ["list"]\n}\n')),(0,r.kt)("h3",{id:"add-a-vault-approle"},"Add a Vault appRole"),(0,r.kt)("p",null,"Add a Vault appRole linked to the new policy. \xa0This example specifies a new appRole with an secret-id TTL of 60 days and non-renewable access tokens with a TTL of 5 minutes. \xa0The CICD job uses the access token to read secrets."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"vault write auth/approle/role/fake-role \\\n    secret_id_ttl=1440h \\\n    token_ttl=5m \\\n    token_max_ttl=5m \\\n    policies=cicd-fake-app-policy\n")),(0,r.kt)("h3",{id:"read-the-vault-approle-id"},"Read the Vault approle-id"),(0,r.kt)("p",null,"Retrieve the approle-id of the new appRole taking note of the returned approle-id."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"vault\xa0read auth/approle/role/fake-role\n")),(0,r.kt)("h3",{id:"add-a-vault-approle-secret-id"},"Add a Vault appRole secret-id"),(0,r.kt)("p",null,"Add a secret-id for the appRole, taking note of the returned secret-id"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"vault write -f auth/approle/role/fake-role/secret-id\n")),(0,r.kt)("h3",{id:"add-cicd-job-steps"},"Add CICD Job Steps"),(0,r.kt)("p",null,"In the CICD job definition insert job steps to retrieve secrets values a set variables in the job execution environment. These are the steps to add in a gitlab-ci.yml CICD job."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"...\nscript:\n- get-vault-secrets-by-approle > ${VAULT_VAR_FILE}\n- source ${VAULT_VAR_FILE} && rm ${VAULT_VAR_FILE}\n...\n")),(0,r.kt)("p",null,"The helper script ",(0,r.kt)("inlineCode",{parentName:"p"},"get-vault-secrets-by-approle")," could be executed and sourced in a single step, e.g.\xa0",(0,r.kt)("inlineCode",{parentName:"p"},"source $(get-vault-secrets-by-approle)"),". \xa0However, when executed in\xa0a single statement all script output is processed by the\xa0",(0,r.kt)("inlineCode",{parentName:"p"},"source"),"\xa0command and script\xa0error messages\xa0don't get printed and captured in the job logs. \xa0Splitting the read and environment var sourcing into 2 steps aids in troubleshooting."),(0,r.kt)("h3",{id:"add-cicd-job-vars-for-vault-access"},"Add CICD job vars for Vault access"),(0,r.kt)("p",null,"In the CICD job configuration add Vault access environment variables."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"VAULT_ADDR=https://vault.example.com:8200\nVAULT_ROLE_ID=db02de05-fa39-4855-059b-67221c5c2f63\nVAULT_SECRET_ID=6a174c20-f6de-a53c-74d2-6018fcceff64\nVAULT_VAR_FILE=/var/tmp/vault-vars.sh\n")),(0,r.kt)("h3",{id:"add-cicd-job-vars-for-vault-secrets"},"Add CICD job vars for Vault secrets"),(0,r.kt)("p",null,"In the CICD job configuration add environment variables for the items to be sourced from vault secrets. \xa0The secret path follows the convention of\xa0",(0,r.kt)("inlineCode",{parentName:"p"},"<secret-mount-path>/<secret-path>/<secret-key>")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"V_FAKE_PASSWORD=secret/fake-app/users/fake-user/password\n")),(0,r.kt)("h3",{id:"remove-cicd-job-vars"},"Remove CICD job vars"),(0,r.kt)("p",null,"In the CICD job configuration remove the previously used\xa0",(0,r.kt)("inlineCode",{parentName:"p"},"FAKE_APP_PASSWORD"),"\xa0variable."),(0,r.kt)("h3",{id:"execute-the-cicd-job"},"Execute the CICD job"),(0,r.kt)("p",null,'Kick off the CICD job. \xa0Any CICD job configuration variables prefixed with "',(0,r.kt)("inlineCode",{parentName:"p"},"V_"),'" results in the addition of a corresponding environment variable in the job execution environment with content sourced from Vault.'),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"Full source code can be found at:"),(0,r.kt)("p",{parentName:"blockquote"},(0,r.kt)("a",{parentName:"p",href:"https://github.com/datwiz/cicd-secrets-in-vault"},"https://github.com/datwiz/cicd-secrets-in-vault"))))}h.isMDXComponent=!0},61843:function(e,t,a){t.Z=a.p+"assets/files/Screen-Shot-2019-07-16-at-17.03.47-d299ab2b399de970fe6ecdc17536fb1a.png"},20817:function(e,t,a){t.Z=a.p+"assets/images/Screen-Shot-2019-07-16-at-17.03.47-d299ab2b399de970fe6ecdc17536fb1a.png"}}]);