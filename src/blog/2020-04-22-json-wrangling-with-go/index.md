---
slug: "json-wrangling-with-go"
title: "JSON Wrangling with Go"
authors:	
  - jeffreyaven
draft: false
hide_table_of_contents: true
image: "images/json-go.png"
tags: 
  - "golang"
  - "json"
keywords:	
  - "golang"
  - "json"
---

import Gist from 'react-gist';

![JSON Golang](images/json-go.png)

Golang is a fantastic language but at first glance it is a bit clumsy when it comes to JSON in contrast to other languages such as Python or Javascript. Having said that once you master the concepts involved with JSON wrangling using Go it is equally as functional – with added type safety and performance.

In this article we will build a program in Golang to parse a JSON file containing a collection held in a named key – without knowing the structure of this object, we will expose the schema for the object including data types and recurse the object for its values.

This example uses a great Go package called `tablewriter` to render the output of these operations using a table style result set.

The program has `describe` and `select` verbs as operation types; describe shows the column names in the collection and their respective data types, select prints the keys and values as a tabular result set with column headers for the keys and rows containing their corresponding values.

Starting with this:

<Gist id="cceeb5b667ccfe8a9e20437d3f1dde42" 
/>

We will end up with this when performing a `describe` operation:

<Gist id="fbd04c220a70d439df3a14d4a4f48a3e" 
/>

And this when performing a `select` operation:

<Gist id="0b795b13b160cfbcd6796243c0fbb238" 
/>

Now let’s talk about how we got there…

## The JSON package

Support for JSON in Go is provided using the `encoding/json` package, this needs to be imported in your program of course… You will also need to import the `reflect` package – more on this later. `io/ioutil` is required to read the data from a file input, there are other packages included in the program that are removed for brevity:

<Gist id="def7e02eac07ded8b80ff807cf023989" 
/>

## Reading the data…

We will read the data from the JSON file into a variable called `body`, note that we are not attempting to deserialize the data at this point. This is also a good opportunity to handle any runtime or IO errors that occur here as well.

<Gist id="74a2c2c839a30ed8cc66d83d3ddde3b4" 
/>

## The interface…

We will declare an empty interface called `data` which will be used to decode the json object (of which the structure is not known), we will also create an abstract interface called `colldata` to hold the contents of the collection contained inside the JSON object that we are specifically looking for:

<Gist id="32555f65af4be1fc2504f2d11e15aa19" 
/>

## Validating…

Next we need to validate that the input is a valid JSON object, we can use the `json.Valid(body)` method to do this:

<Gist id="c7afe41fcca4ba1e3ed009044cea76de" 
/>

## Unmarshalling…

Now the interesting bits, we will deserialize the JSON object to the empty data interface we created earlier using the `json.Unmarshal()` method:

<Gist id="2579ec79be915fb89e91ea0977bfbff6" 
/>

Note that this operation is another opportunity to catch unexpected errors and handle them accordingly.

## Checking the type of the object using reflection…

Now that we have serialized the JSON object into the data interface, there are several ways we can inspect the type of the object (which could be a map or an array). One such way is to use reflection. Reflection is the ability of a program to inspect itself at runtime. An example is shown here:

<Gist id="1ccd077de0fdee8973e25ac79719cbf5" 
/>

This instruction would produce the following output for our `zones.json` file:

<Gist id="04c1b3ae79e969e4be32ef7fa1c07736" 
/>

## The type switch…

Another method to decode the type of the data object (and any objects nested as elements or keys within the data object), is to use the type switch, an example of a type switch function is shown here:

<Gist id="2e7a3d62ec6f7c71a9c01bfa8d360e4e" 
/>

## Finding the nested collection and recursing it…

The aim of the program is to find a collection (an array of maps) nested in a JSON object. The maps with each element of the array are unknown at runtime and are discovered through recursion.

If we are performing a describe operation, we only need to parse the first element of the collection to get the key names and the data type of the values (for which we will use the same `getObjectType` function to perform a type switch.

If we are performing a select operation, we need to parse the first element to get the column names (the keys in the map) and then we need to recurse each element to get the values for each key.

If the element contains a key named id or name, we will place this at the beginning of the resultant record, as maps are unordered by definition.

## The output…

As mentioned, we are using the `tablewriter` package to render the output of the collection as a pretty printed table in our terminal. As wrap around can get pretty ugly an additional `maxfieldlen` argument is provided to truncate the values if needed.

## In summary…

Although it is a bit more involved than some other languages, once you get your head around processing JSON in Go, the possibilities are endless!

> Full source code can be found at: [https://github.com/gamma-data/json-wrangling-with-golang](https://github.com/gamma-data/json-wrangling-with-golang)
