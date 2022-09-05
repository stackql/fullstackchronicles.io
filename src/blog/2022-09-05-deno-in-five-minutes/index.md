---
slug: "deno-in-five-minutes"
title: "Deno in 5 Minutes"
authors:	
  - jeffreyaven
draft: false
image: "/img/blog/deno-in-five-minutes.png"
tags: 
  - "deno"
  - "javascript"  
  - "typescript"
  - "nodejs"
keywords:	
  - "deno"
  - "javascript"  
  - "typescript"
  - "nodejs"
description: A five minute introduction to Deno, a "package manager-less" runtime for TypeScript and JavaScript.
---

Those who have built projects (front end or back end) with JavaScript or TypeScript would have no doubt felt pain or been frustrated with some aspect of package management - `package.json`, `package-lock.json`, `node_modules`, `npm`, `npmjs`, `yarn` etc.  

Enter [__Deno__](https://deno.land/), a *"package manager-less"* runtime for JavaScript and TypeScript.  That's right, no `package.json`, no `node_modules` folder, no `npm` or `yarn`.  

## Background

Deno was created by Ryan Dahl, the creator of Node.js, who realised the monster that was created with package management and managers, dependencies, and dependency management, which in many cases is more complex than the frameworks or projects that are being implemented.  

## Packages

I said deno was *"package manager-less"*; however it is not *"package-less"*.  Deno does not use `npmjs`; instead, packages (js or ts) can be hosted at any reachable URL.  Local imports and exports are supported too.  

Deno's standard library packages ("batteries included" modules) are hosted at [deno.land/std@LATEST_VERSION](https://deno.land/std@0.153.0), a third-party hosted library is available at [deno.land/x](https://deno.land/x).  

With `deno` installed, you can run something like this:  

```
deno run https://deno.land/std@0.154.0/examples/welcome.ts
```

## Imports

Using the Deno runtime, developers specify modules to use in their program using this import syntax:  

```js
import { Application, Router } from "https://deno.land/x/oak/mod.ts";
```

You can specify a version if desired in the URL, such as:

```js
import {
  Bson,
  MongoClient,
} from "https://deno.land/x/mongo@v0.31.0/mod.ts";
```

Packages __do not__ have to be downloaded or installed before running your code.  

The first time your code is run, all packages are downloaded to a local cache and any Typescript modules are transpiled to JavaScript.  

## Publishing with Deno Deploy

Deno deploy is a package publishing framework that directly integrates with GitHub (no separate npm publish step).  Deno deploy is backed by a CDN and a network of edge servers to make deno packages available.  Packages can be published by a push to a branch, reviewed via a deployed preview, and merged to release to production.  

## Quickstart

To get going, you first need to download and install `deno`, which will vary based upon your operating system, but there are all the usual suspect installers available (homebrew, chocolatey, etc); see [__here__](https://deno.land/#installation).  

Once you have installed `deno` on your system, you can create a project folder (__no__ `npm init` or `package.json` required), and create the following file (as `server.ts`), which will run a very simple middleware server using a third-party module, `oak`.  

```js
import { Application, Router } from "https://deno.land/x/oak/mod.ts";

const router = new Router();
router
  .get("/ping", (context) => {
    context.response.body = "pong";
}); 

const app = new Application();
app.use(router.routes());
app.use(router.allowedMethods());

await app.listen({ port: 8080 });
```

now run your server using the following command:

```
deno run --allow-net server.ts
```

now:

```
curl -XGET http://localhost:8080/ping
```

should return:

```
pong
```
easy!




