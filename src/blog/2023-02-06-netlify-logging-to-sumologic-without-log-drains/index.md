---
slug: "netlify-logging-to-sumologic-without-log-drains"
title: "Netlify logging to SumoLogic Without Log Drains"
authors:  
  - jeffreyaven
draft: false
image: "/img/blog/netlify-logging-to-sumologic-without-log-drains.png"
tags: 
  - "netlify"  
  - "sumologic"
  - "JAMStack"
  - "logging"
  - "log drain"
keywords: 
  - "netlify"  
  - "sumologic"
  - "JAMStack"
  - "logging"
  - "log drain"
description: This is a solution to get verbose logs from Netlify functions and CDN logs to SumoLogic without needing a Log Drain.
---

import Gist from 'react-gist';

Log Drains for function and CDN logs from Netlify, which have native SumoLogic collectors available, are included with Enterprise level subscriptions.  However, there is a quantum jump in subscription costs between the Teams or Pro Editions of Netlify and the Enterprise Edition.  

If you are deploying a JAMStack app in Netlify, the odds are each page will include an API call (using Netlify functions), and for authenticated pages, the request will include a Bearer Token.  

## Solution Overview

Create a logging module that exports functions that can be used by any of your Netlify functions to log verbose data to the console (seen in the function log output in the Netlify app) and to push log events to a Hosted SumoLogic Collector Source.  This will allow you to see verbose logs for each function call and CDN logs for each page load.  

## Steps

Steps to deploy this solution are detailed here:  

### Step 1.  Set up a Collector and Source

Set up a Custom HTTP Collector and Source in SumoLogic (copy the source URL) using the SumoLogic web interface; see the documentation here:  [https://help.sumologic.com/03Send-Data/Sources/02Sources-for-Hosted-Collectors/HTTP-Source/Upload-Data-to-an-HTTP-Source](https://help.sumologic.com/03Send-Data/Sources/02Sources-for-Hosted-Collectors/HTTP-Source/Upload-Data-to-an-HTTP-Source).


### Step 2.  Create Netlify Environment Variable(s)

Create a build time environment variable in Netlify for the Sumo Source URL you generated in Step 1 (in this case, I have called it `SUMO_REQUEST_SOURCE_URL`).

### Step 3.  Create a logging module

Create your logging module (this example is in TypeScript, but you could implement the same logic in any other language/runtime).  In this case, we will unpack the request event and send the fields to the collector source.  

<Gist id="7b218eee7984c81302ac59e15279c72b"
/>

### Step 4.  Import and use the logging module

Now import and use the `logRequest` function at the beginning of each Netlify function you deploy.  

<Gist id="f0e6c21b256a9fa72cb40d9f09084a8d"
/>

You will now get verbose logs (similar to CDN logs) to the Netlify console and to Sumo Logic!  

You can implement similar functions for each request to log the `jwtId` and `userInfo` from the Bearer Token.  This will allow you to see the user information for each request in SumoLogic.  


:::info

Your http response header should include:  

```typescript
headers: {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'Content-Type',
  ...
},
```

:::

> if you have enjoyed this post, please consider [__buying me a coffee ☕__](https://www.buymeacoffee.com/jeffreyaven) to help me keep writing!

