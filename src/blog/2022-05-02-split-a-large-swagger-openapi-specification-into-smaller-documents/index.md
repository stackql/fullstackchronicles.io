---
slug: "split-a-large-swagger-openapi-specification-into-smaller-documents"
title: "Split a large Open API or Swagger Specification into smaller documents"
authors:	
  - jeffreyaven
draft: false
image: "/img/blog/split-up-large-openapi-docs.png"
tags: 
  - "openapi"
  - "swagger"
  - "api"
  - "stackql"
keywords:	
  - "openapi"
  - "swagger"
  - "api"
  - "stackql"
description: Simple utility to split a large Open API or Swagger specification into smaller documents.
---

Open API specifications can get quite large, especially for providers with upwards of 500 routes or operations.  

The challenge is to create standalone documents scoped by a service or path within the parent API specification and include only the components (schemas, responses, etc.) that pertain to operations included in the child document.  

When I went looking for library or utility to do this, I couldn’t find one... so I have developed one myself.  

It's a simple command (nodejs based but can be run in a bash terminal or from the Windows command line) which requires a few options, including:  

- the __*provider name*__ (e.g. `github`)
- a __*provider version*__ which is a version you set - allowing you to make minor modifications to the output documents (e.g. `v0.1.0`)
- a __*service discriminator*__ which is a JSONPath expression to identify a service name within each route in the parent file, this is used to assign operations to services in separate documents (e.g. `'$["x-github"].category'`)
- an __*output directory*__ (e.g. `./dev`)

and of course, the __*openapi spec document*__ you are splitting up.

an example is shown here:

```
openapi-doc-util split \
-n github \
-v v0.1.0 \
-s '$["x-github"].category' \
-o ./dev \
ref/github/api.github.com.yaml
```

Help for the command is available using `openapi-doc-util split`.  

The net result is 59 self-contained, service scoped documents, containing only the components referenced by routes in the service document.

You can access this utility via [__NPMJS__](https://www.npmjs.com/package/@stackql/openapi-doc-util) or via [__GitHub__](https://github.com/stackql/openapi-doc-util).  

Splitting up a large open API spec document, is the first stage in developing a [__StackQL__](https://github.com/stackql/stackql) provider which we will discuss next time!