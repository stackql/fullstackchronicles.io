---
slug: "use-deno-deploy-to-serve-non-traditional-artifacts"
title: "Use Deno Deploy to Serve Non-Traditional Artifacts"
authors:  
  - jeffreyaven
draft: false
image: "/img/blog/apache-beam-in-five-minutes.png"
tags: 
  - "deno deploy"  
  - "deno"
  - "javascript"
  - "typescript"
  - "api"
  - "openapi"
  - "stackql"
keywords: 
  - "deno deploy"  
  - "deno"
  - "javascript"
  - "typescript"
  - "api"
  - "openapi"
  - "stackql"
description: This article demonstrates the use of Deno Deploy to serve static text files as non-traditional development artifacts.
---

import Gist from 'react-gist';

In the [__stackql__](https://github.com/stackql/stackql) project we needed an API to serve configuration file packages (stackql providers) to the stackql application at runtime.  

Traditional artifact repositories or package managers were unsuitable as they were mainly designed for container images, JavaScript modules, Python packages etc.  The artifacts, in this case, are signed tarball sets of OpenAPI specification documents (text files).  

We have recently moved our provider registry ([__stackql-provider-registry__](https://github.com/stackql/stackql-provider-registry)) to use [__Deno Deploy__](https://deno.com/deploy) as the serving layer (the API).  

## The code

The code is reasonably straightforward as shown here:  

<Gist id="8747fa98e61e411373a95dbe2e261bd6"
/>

## The deployment

We are using GitHub Actions to push assets and code to Deno Deploy, this was straightforward as well as you can see here:  

<Gist id="e4e98f427c80ecee4f82fb8731565289"
/>





