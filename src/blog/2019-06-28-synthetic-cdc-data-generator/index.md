---
slug: "synthetic-cdc-data-generator"
title: "Synthetic CDC Data Generator"
authors:	
  - jeffreyaven
draft: false
hide_table_of_contents: true
image: "/img/fullstackchronicles-cover-image.png"
tags: 
  - "cdc"
  - "python"
  - "spark"
keywords:	
  - "cdc"
  - "python"
  - "spark"
---

import Gist from 'react-gist';

This is a simple routine to generate random data with a configurable number or records, key fields and non key fields to be used to create synthetic data for source change data capture (CDC) processing. The output includes an initial directory containing CSV files representing an initial data load, and an incremental directory containing CSV files representing incremental data.

Spark Training Courses from the AlphaZetta Academy

[Data Transformation and Analysis Using Apache Spark](https://academy.alphazetta.ai/data-transformation-and-analysis-using-apache-spark/)  
[Stream and Event Processing using Apache Spark](https://academy.alphazetta.ai/stream-and-event-processing-using-apache-spark/)  
[Advanced Analytics Using Apache Spark](https://academy.alphazetta.ai/advanced-analytics-using-apache-spark/)

Arguments (by position) include:

- `no_init_recs` : the number of initial records to generate
- `no_incr_recs` : the number of incremental records on the second run - should be `>= no_init_recs`
- `no_keys` : number of key columns in the dataset – keys are generated as UUIDs
- `no_nonkeys` : number of non-key columns in the dataset – nonkey values are generated as random numbers
- `pct_del` : percentage of initial records deleted on the second run - between 0.0 and 1.0
- `pct_upd` : percentage of initial records updated on the second run - between 0.0 and 1.0
- `pct_unchanged` : percentage of records unchanged on the second run - between 0.0 and 1.0
- `initial_output` : folder for initial output in CSV format
- `incremental_output` : folder for incremental output in CSV format

NOTE : `pct_del` + `pct_upd` + `pct_unchanged` must equal 1.0

Example usage:

```
$ spark-submit synthetic-cdc-data-generator.py 100000 100000 2 3 0.2 0.4 0.4 data/day1 data/day2
```

Example output from the **_day1_** run for the above configuration would look like this:

<Gist id="befb034da2b4f25a1dbbc0e9b4b8eef6" 
/>

Note that this routine can be run subsequent times producing different key and non key values each time, as the keys are UUIDs and the values are random numbers.

We will use this application to generate random input data to demonstrate CDC using Spark in a subsequent post, see you soon!

> Full source code can be found at: [https://github.com/avensolutions/synthetic-cdc-data-generator](https://github.com/avensolutions/synthetic-cdc-data-generator)
