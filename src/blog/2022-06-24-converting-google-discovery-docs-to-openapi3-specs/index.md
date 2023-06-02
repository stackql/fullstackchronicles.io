---
slug: "converting-google-discovery-docs-to-openapi3-specs"
title: "Converting Google Discovery Docs to OpenAPI3 Specs"
authors:	
  - jeffreyaven
draft: false
image: "/img/blog/google-discovery-doc-to-openapi-conversion.png"
tags: 
  - "openapi"
  - "openapi3"
  - "openapi"
  - "googlecloud"
  - "gcp"
  - "swagger"  
keywords:	
  - "openapi"
  - "openapi3"
  - "openapi"
  - "googlecloud"
  - "gcp"
  - "swagger"  
description: This article demonstrates how to generate OpenAPI3 specification documents for Google Cloud services.  
---

import Gist from 'react-gist';

This article walks through the process of converting service specific OpenAPI specifications from Google Discovery REST URLs using Python.  

> Full code for this article can be found at [__stackql/google-discovery-to-openapi__](https://github.com/stackql/google-discovery-to-openapi)  

Google publishes JSON specifications for all of their APIs (including GCP services as well as other APIs associated with other products - like analytics or workspace).  These specifications can be accessed without authentication starting with the root document ([https://discovery.googleapis.com/discovery/v1/apis](https://discovery.googleapis.com/discovery/v1/apis)) which contains metadata and the URL for each service specific document (for services like `compute` or `storage`).

## Code Overview

The program fetches the service document for each service that is included and not explicitly excluded (configured through variables in the program).  Non preferred services (beta or alpha versions) can be included by setting the variable `get_preferred_only` to `False`.  

An OpenAPI spec is constructed for each service based upon the data in the service discovery doc.  In many cases this is a straightforward one to one mapping, such as to top level `info`, `title` and `description` values, it gets more complicated with parameters and schemas where some extra logic is required to keep the json pointers (`$ref`) valid.  

### Extracting Paths and Verbs

The real magic is in extracting paths and verbs in a compliant OpenAPI format, as Google nests this data (potentially multiple levels deep) under resources.  

The first step is to identify `methods` nested under a `resources` object (which can be mapped to operations - with a path and HTTP verb required to populate an OpenAPI spec), this function does this:  

<Gist id="11ee413049cdcd81a433d4df8925c016" 
/>

Now each method can be processed yielding an operation (combination of `path` and `verb`), this is done using this function:  

<Gist id="2ffd64aa8ba07a8f9ccd441ed9709ef3" 
/>

Full source code can be found at [__stackql/google-discovery-to-openapi__](https://github.com/stackql/google-discovery-to-openapi).

> if you have enjoyed this post, please consider [__buying me a coffee ☕__](https://www.buymeacoffee.com/jeffreyaven) to help me keep writing!
