---
slug: "recurse-javascript-object-to-get-values-for-a-given-key-the-easy-way"
title: "Recurse JavaScript Object to Get Values for a Given Key the Easy Way"
authors:	
  - jeffreyaven
draft: false
tags: 
  - "nodejs"
  - "javascript"
  - "openapi"
  - "swagger"
keywords:	
  - "nodejs"
  - "javascript"
  - "openapi"
  - "swagger"
---

I dad a scenario where I needed to find values for a key in a complex JavaScript object which could be nested __*n*__ levels deep.  

I found numerous approaches to doing this, most were overly complicated, so I thought I would share the simplest, most succinct approach to doing this.  

## the Code

One simple function implementing the __*"tail call recursion"*__ pattern, to search for a key (`key`) from the root of an object (`obj`), excluding any keys in `excludeKeys`.  

This will return a list of values for the given key, searching all levels in all branches of the object.   

```javascript
function getAllValuesForKey(obj, key, excludeKeys=[], values=[]) {
    for (let k in obj) {
        if (typeof obj[k] === "object") {
            if(!excludeKeys.includes(k)){
                getAllValuesForKey(obj[k], key, excludeKeys, values)
            }
        } else {
            if (k === key){
                values.push(obj[k]);
            }
        }
    }
    return values;
}
```

## Example

In parsing an OpenAPI or Swagger specification, I am looking for all of the schema `refs` in a successful response body, for example:  

```yaml
paths:
	'/orgs/{org}/actions/permissions/selected-actions':
		get:
		  ...
		  responses:
			'200': '...'
```

however these refs can present in various different ways depending upon the response type, such as:  

```yaml
'200':
	$ref: '#/components/responses/actions_runner_labels'
```

or  

```yaml
'200':      
	content:
		application/json:
		  schema:
			$ref: '#/components/schemas/runner'
```

or  

```yaml
'200':
  content:
	application/json:
	  schema:
		anyOf:
		  - $ref: '#/components/schemas/interaction-limit-response'
```

or

```yaml
'200':
  content:
	application/json:
	  schema:
		type: object
		required:
		  - total_count
		  - runners
		properties:
		  total_count:
			type: integer
		  runners:
			type: array
			items:
			  $ref: '#/components/schemas/runner'
```

To find all of the schema refs without knowing the response type or structure I used the above function as follows (excluding refs for `examples`):  

```javascript
function getRespSchemaName(op){
    for(let respCode in op.responses){
        if(respCode.startsWith('2')){
            return getAllValuesForKey(op.responses[respCode], "$ref", ['examples']);
        }
    }
}
```

You can find this implementation in [__`openapi-doc-util`__](https://github.com/stackql/openapi-doc-util) and [__`@stackql/openapi-doc-util`__](https://www.npmjs.com/package/@stackql/openapi-doc-util).  

simple!
