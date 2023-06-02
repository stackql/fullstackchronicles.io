---
slug: "enumerating-all-roles-for-a-user-in-snowflake"
title: "Enumerating all roles for a user in Snowflake"
authors:	
  - jeffreyaven
draft: false
hide_table_of_contents: true
image: "images/snowflake.png"
tags: 
  - "javascript"
  - "rbac"
  - "roles"
  - "snowflake"
  - "sql"
  - "stored-procedure"
  - "tail-call-recursion"
  - "tailcall"
keywords:	
  - "javascript"
  - "rbac"
  - "roles"
  - "snowflake"
  - "sql"
  - "stored-procedure"
  - "tail-call-recursion"
  - "tailcall"
---

import Gist from 'react-gist';

![Snowflake](images/snowflake.png)

Snowflake allows roles to be assigned to other roles, so when a user is assigned to a role, they may inherit the ability to use countless other roles.

**Challenge:** recursively enumerate all roles for a given user

One solution would be to create a complex query on the `“SNOWFLAKE"."ACCOUNT_USAGE"."GRANTS_TO_ROLES"` object.

An easier solution is to use a stored procedure to recurse through grants for a given user and return an `ARRAY` of roles for that user.

This is a good programming exercise in tail call recursion (sort of) in JavaScript. Here is the code:

<Gist id="9b9985dbf8163ade22b71f2ccf20cb51" 
/>

To call the stored proc, execute:

<Gist id="fbbfaa3b67af828e4d905411567cd031" 
/>

One drawback of stored procedures in Snowflake is that they can only have scalar or array return types and cannot be used directly in a SQL query, however you can use the `table(result_scan(last_query_id()))` trick to get around this, as shown below where we will pivot the `ARRAY` into a record set with the array elements as rows:

<Gist id="6a7e8bc552b87ab1e039f22bacf1b65f" 
/>

__IMPORTANT__

This query **must** be the next statement run immediately after the `CALL` statement and cannot be run again until you run another `CALL` statement.

More adventures with Snowflake soon!

> if you have enjoyed this post, please consider [__buying me a coffee ☕__](https://www.buymeacoffee.com/jeffreyaven) to help me keep writing!
