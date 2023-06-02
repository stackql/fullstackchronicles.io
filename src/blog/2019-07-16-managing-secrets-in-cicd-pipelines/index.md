---
slug: "managing-secrets-in-cicd-pipelines"
title: "Managing Secrets in CICD Pipelines"
authors:	
  - chrisottinger
draft: false
hide_table_of_contents: true
image: "images/Gitlab-Vault.png"
tags: 
  - "ci-cd"
  - "gitlab-ci"
  - "hashicorp-vault"
  - "jenkins"
  - "secrets-management"
keywords:	
  - "ci-cd"
  - "gitlab-ci"
  - "hashicorp-vault"
  - "jenkins"
  - "secrets-management"
---

![Gitlab Vault](images/Gitlab-Vault.png)

## Overview

With the adoption automation for deploying and managing application environments, protecting privileged accounts and credential secrets in a consistent, secure, and scalable manner becomes critical.  Secrets can include account usernames, account passwords and API tokens.  Good credentials management and secrets automation practices reduce the risk of secrets escaping into the wild and being used either intentionally (hacked) or unintentionally (accident).

- Reduce the likelihood of passwords slipping into source code commits and getting pushed to code repositories, especially public repositories such as github.
- Minimise the secrets exposure surface area by reducing the number of people who require knowledge of credentials.  With an automated credentials management process that number can reach zero.
- Limit the useful life of a secret by employing short expiry times and small time-to-live (TTL) values.  Automation enables reliable low-effort secret re-issue and rotation.

## Objectives

The following objectives have been considered in designing a secrets automation solution that can be integrated into an existing CICD environment.

- Integrate into an existing CICD environment without requiring an "all or nothing" implementation.  Allow existing jobs to operate alongside jobs that have been converted to the new secrets automation solution.
- A single design that can be applied across different toolchains and deployment models.  For example, deployment to a Kubernetes environment can use the same secrets management process as an application installation on a virtual machine.  Similarly, the design can be used with different CICD tools, such as [GitLab-CI](https://about.gitlab.com), [Travis-CI](https://travis-ci.org), or other build and deploy automation tool.
- Multi-cloud capable by limiting coupling to a specific hosting environment or cloud services provider.
- The use of secrets (or not) can be decided at any point in time, without requiring changes to the CICD job definition, similar to the use of feature flags in applications.
- Enable changes to secrets, either due to rotation or revocation, to be maintained from a central service point.  Avoid storing the same secret multiple times in different locations.
- Secrets organised in predictable locations in a "rest-ish" fashion by treating secrets and credentials as attributes of entities.
- Use environment variables as the standard interface between deployment orchestration and deployed application, following the 12 Factor App approach.

## Solution

- Secrets stored centrally in Hashicorp Vault.
- CICD jobs retrieve secrets from Vault and configure the application deployment environment.
- Deployed applications use the secrets supplied by CICD job to access backend services.

[![CICD Secrets with Vault](images/Screen-Shot-2019-07-16-at-17.03.47.png)](images/Screen-Shot-2019-07-16-at-17.03.47.png)

## Storing Secrets

Use [Vault by Hashicorp](https://www.vaultproject.io/) as a centralised secrets storage service.  The CICD service retrieves secrets information for integration and deployment jobs.  Vault provides a flexible set of features to support numerous different workflows and available as either Vault Open Source or Vault Enterprise.  The secrets management pattern described uses the Vault Open Source version.  The workflow described here can be explored using Vault in the unsecured development mode, however, a properly configured and managed Vault service is required for production use.

Vault supports a number of secrets backends and access workflow models.  This solution makes use of the [Vault AppRole method](https://www.vaultproject.io/docs/auth/approle.html), which is designed to support machine-to-machine automated workflows.  With the AppRole workflow model human access to secrets is minimised through the use of access controls and temporary credentials with short TTL's.  Within Vault, secrets are organised using an entity centric "rest-ish" style approach ensuring a given secret for a given service is stored in a single predictable location.

The use of Vault satisfies several of the design objectives:

- enables single point management of secrets. The secrets content is stored in a single location referenced at CICD job runtime.  On the next invocation, the CICD job retrieves the latest version of the secrets content.
- enables storing secrets in predictable locations with file system directory style path location.  The "rest-ish" approach to organising secret locations enables storing a given secret only once.  Access policies provide the mechanism to limit CICD  visibility to only those secrets required for the CICD job.

## Passing Secrets to Applications

Use environment variables to pass secrets from the CICD service to the application environment.  

There are existing utilities available for populating a child process environment with Vault sourced secrets, such as [vaultenv](https://github.com/channable/vaultenv) or [envconsul](https://github.com/hashicorp/envconsul).  This approach works well for running an application service.  However, with CICD, often there are often sets of tasks that require access to secrets information as opposed to a single command.  Using the child environment approach would require wrapping each command in a CICD job step with the env utility.  This works against the objective of introducing a secrets automation solution into existing CICD jobs without requiring substantial refactoring.  Similarly, some CICD solutions such as [Jenkins](https://jenkins.io/) provide Vault integration plugins which pre-populate the environment with secrets content.  This meets the objective of minimal CICD job refactoring, but closely couples the solution to a particular CICD service stack, reducing portability.  

With a job script oriented CICD automation stack like GitLab-CI or Travis-CI, an alternative is to insert a job step at the beginning of a series of CICD tasks that will populated the required secret values into expected environment variables.  Subsequent tasks in the job can then execute without requiring refactoring.  The decision on whether to source a particular environment variable's content directly from the CICD job setup or from the Vault secrets store can be made by adding an optional prefix to environment variables to be sourced from the Vault secrets store.  The prefixed instance of the environment variable contains the location or path to the required secret.  Secret locations are identified using the convention `/<vault-secret-path>/<secret-key>`

- enables progressive implementation due to transparency of secret sourcing. Subsequent steps continue to rely on expected environment vars
- enables use in any toolchain that supports use of environment variables to pass information to application environment. 
- CICD job steps not tied to a specific secrets store. An alternative secrets storage service could be supported by only requiring modification of the secret getter utility.
- control of whether to source application environment variables from the CICD job directly or from the secrets engine is managed at the CICD job setup level as opposed to requiring CICD job refactoring to switch the content source.
- continues the 12 Factor App approach of using environment variables to pass context to application environments.

## Example Workflow

An example workflow for a CICD job designed to use environment variables for configuring an application.

### Assumptions

The following are available in the CICD environment.

- A job script oriented CICD automation stack that executes job tasks as a series of shell commands, such as [GitLab-CI](https://about.gitlab.com) or [Jenkins Pipelines](https://jenkins.io/doc/book/pipeline/).
- A secrets storage engine with a python API, such as Hashicorp Vault.
- CICD execution environment includes the `[get-vault-secrets-by-approle](https://github.com/datwiz/cicd-secrets-in-vault/blob/master/scripts/get-vault-secrets-by-approle)` utility script.

### Workflow Steps

### Add a Vault secret

Add a secret to Vault at the location `secret/fake-app/users/fake-users` with a key/value entry of `password=fake-password`

### Add a Vault access policy

Add a Vault policy for the CICD job (or set of CICD jobs) that includes 'read' access to the secret.

```
# cicd-fake-app-policy 
path "secret/data/fake-app/users/fake-user" {
    capabilities = ["read"]
}

path "secret/metadata/fake-app/users/fake-user" {
    capabilities = ["list"]
}
```

### Add a Vault appRole

Add a Vault appRole linked to the new policy.  This example specifies a new appRole with an secret-id TTL of 60 days and non-renewable access tokens with a TTL of 5 minutes.  The CICD job uses the access token to read secrets.

```
vault write auth/approle/role/fake-role \
    secret_id_ttl=1440h \
    token_ttl=5m \
    token_max_ttl=5m \
    policies=cicd-fake-app-policy
```

### Read the Vault approle-id

Retrieve the approle-id of the new appRole taking note of the returned approle-id.

```
vault read auth/approle/role/fake-role
```

### Add a Vault appRole secret-id

Add a secret-id for the appRole, taking note of the returned secret-id

```
vault write -f auth/approle/role/fake-role/secret-id
```

### Add CICD Job Steps

In the CICD job definition insert job steps to retrieve secrets values a set variables in the job execution environment. These are the steps to add in a gitlab-ci.yml CICD job.

```
...
script:
- get-vault-secrets-by-approle > ${VAULT_VAR_FILE}
- source ${VAULT_VAR_FILE} && rm ${VAULT_VAR_FILE}
...
```

The helper script `get-vault-secrets-by-approle` could be executed and sourced in a single step, e.g. `source $(get-vault-secrets-by-approle)`.  However, when executed in a single statement all script output is processed by the `source` command and script error messages don't get printed and captured in the job logs.  Splitting the read and environment var sourcing into 2 steps aids in troubleshooting.

### Add CICD job vars for Vault access

In the CICD job configuration add Vault access environment variables.

```
VAULT_ADDR=https://vault.example.com:8200
VAULT_ROLE_ID=db02de05-fa39-4855-059b-67221c5c2f63
VAULT_SECRET_ID=6a174c20-f6de-a53c-74d2-6018fcceff64
VAULT_VAR_FILE=/var/tmp/vault-vars.sh
```

### Add CICD job vars for Vault secrets

In the CICD job configuration add environment variables for the items to be sourced from vault secrets.  The secret path follows the convention of `<secret-mount-path>/<secret-path>/<secret-key>`

```
V_FAKE_PASSWORD=secret/fake-app/users/fake-user/password
```
### Remove CICD job vars

In the CICD job configuration remove the previously used `FAKE_APP_PASSWORD` variable.

### Execute the CICD job

Kick off the CICD job.  Any CICD job configuration variables prefixed with "`V_`" results in the addition of a corresponding environment variable in the job execution environment with content sourced from Vault.

> Full source code can be found at:
> 
> [https://github.com/datwiz/cicd-secrets-in-vault](https://github.com/datwiz/cicd-secrets-in-vault)
