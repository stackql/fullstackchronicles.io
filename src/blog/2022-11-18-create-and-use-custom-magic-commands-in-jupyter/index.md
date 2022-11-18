---
slug: "create-and-use-custom-magic-commands-in-jupyter"
title: "Create and use Custom Magic Commands in Jupyter"
authors:	
  - jeffreyaven
draft: false
image: "/img/blog/custom-jupyter-magic-featured-image.png"
tags: 
  - "jupyter"
  - "magic"  
  - "python"
  - "pandas"
keywords:	
  - "jupyter"
  - "magic"  
  - "python"
  - "pandas"
description: Quick example of creating and using a custom Jupyter magic command.
---

We were looking to implement a variant of the `%sql` magic command in Jupyter without using the default `sqlalchemy` module (in our case, just using `psycopg2` to connect to a local server - a StackQL postrges wire protocol server).  

## Create the extension module

We named our extension and cell magic command `stackql`, so start by creating a file named `stackql.py`.  We made this file in a directory name `ext` in the Jupyter working directory.    

## Write the magic extension

Magic commands can be __line-based__ or __cell-based__; in this example, we will use cell-based magic, meaning the decorator `%stackql` will be used to evaluate the entire contents of the cell it is used in.    

The bare-bones functions required for this extension are described below:  

### Load and register the extension

To register the magic function, use a function named `load_ipython_extension`, like the following:  

```python
def load_ipython_extension(ipython):
    ipython.register_magic_function(stackql, 'cell')
```

### Define the magic function

Now define the magic function which will be called and operate on the contents of the cell it is used in:  

```python
def stackql(line, cell):
    # do something with the contents of the cell
	  # e.g using StringIO(cell)
```
### Complete extension code

The complete code for our extension is shown here:  

```python
import pandas as pd
from io import StringIO
import psycopg2, json
from psycopg2.extras import RealDictCursor

conn = psycopg2.connect("dbname=stackql user=stackql host=localhost port=5444")

def run_query(query):
    cur = conn.cursor(cursor_factory=RealDictCursor)
    cur.execute(query)
    rows = cur.fetchall()
    cur.close()
    return json.dumps(rows)

def stackql(line, cell):
    query = StringIO(cell)
    return pd.read_json(run_query(query.read()))

def load_ipython_extension(ipython):
    ipython.register_magic_function(stackql, 'cell')
```

## Load the magic extension

To use our extension, we need to use the `%load_ext magic` command referencing the extension we created.  

```javascript
%load_ext ext.stackql
```
Note that since our extension was a file named `stackql.py` in a directory named `ext` we reference it using `ext.stackql`.   

## Use the magic function

To use the magic function, we use the `%%` decorator, like:

```javascript
%%stackql
SHOW SERVICES IN azure LIKE '%compute%'
```
An example is shown here:  

[![Using a Custom Jupyter Magic Command](images/custom-jupyter-magic-command.png)](images/custom-jupyter-magic-command.png)

The complete code can be found at [__stackql/stackql-jupyter-demo__](https://github.com/stackql/stackql-jupyter-demo).