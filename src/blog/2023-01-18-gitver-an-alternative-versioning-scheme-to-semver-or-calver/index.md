---
slug: "gitver-an-alternative-versioning-scheme-to-semver-or-calver"
title: "Introducing GitVer - an alternative versioning scheme"
authors:  
  - jeffreyaven
draft: false
image: "/img/blog/gitver-an-alternative-versioning-scheme-to-semver-or-calver.png"
tags: 
  - "gitver"  
  - "semver"
  - "calver"
  - "gitops"
  - "versioning"
  - "git"
  - "github"
  - "gitlab"
  - "bitbucket"
  - "gitflow"
keywords: 
  - "gitver"  
  - "semver"
  - "calver"
  - "gitops"
  - "versioning"
  - "git"
  - "github"
  - "gitlab"
  - "bitbucket"
  - "gitflow"
description: This article demonstrates the use of Deno Deploy to serve static text files as non-traditional development artifacts.
---

import Gist from 'react-gist';

With our StackQL Provider Registry, we had an interesting challenge:  

1.  Maintain different versions for one or more different documents in the same repo(which were decoupled from releases)
2.  Provide dynamic versioning (with no user input required and not dictated by tags)
3.  Maintain some traceability to the source repo (pull requests, commit shas, etc)

[SemVer](https://semver.org/) required users to make arbitrary decisions on major, minor, and build numbers.  

Although [CalVer](https://calver.org/) required less user discretion for the major and minor components, the micro-component was still an arbitrary number.  This was not ideal for our use case.  

As our document versioning was not related to tags, and we have implemented GitFlow (specifically based upon PRs to dev or main) as our release path, we created a new variant scheme... __GitVer__.  

> This is completely different from [GitVersion](https://github.com/GitTools/GitVersion), which is a tool to determine the version of a project based on Git history.  

This scheme is implemented using GitHub as the remote but could easily be adapted to GitLab, Bitbucket, etc.  

## How it works

Each pull request is assigned a version based on the date the PR was raised or merged, and the PR number.   This version (the GitVer) can then be used to version artifacts (which could be pushed to releases if desired).  


## Workflow Example Code

This is an example using GitHub actions.  The version is determined automatically within the workflow.  

`main.yml` example:  

<Gist id="94bcf43ba5deaf088a271d54d2a9c33e"
/>

The code used to get the relevant PR info is here (`setup-job.js`), the tricky bit is that the PR number presents differently for a pull request open or sync (pushing changes to an open PR) and a merge commit (which is simply a push to a protetcted branch).  See the code below:

<Gist id="bec7982143a9637f866b7239e8c18130"
/>

:::tip

you can export some other metadata while you are here like the commit sha, source and target branch, (PR) action, etc.

:::

The code to generate the GitVer for the PR is here (`get-version.js`):  

<Gist id="659b56d2474ed1fb8944e1c816b28f49"
/>

You can see it at work here [stackql/stackql-provider-registry](https://github.com/stackql/stackql-provider-registry/blob/dev/.github/workflows/main.yml) which builds and deploys [providers for StackQL](https://registry.stackql.io/).   

Thoughts?

> if you have enjoyed this post, please consider [__buying me a coffee ☕__](https://www.buymeacoffee.com/jeffreyaven) to help me keep writing!

