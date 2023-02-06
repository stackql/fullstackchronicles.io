---
slug: "converting-to-local-time-in-aws-lambda-using-nodejs"
title: "Converting to local time in AWS Lambda using Node.js"
authors:	
  - jeffreyaven
draft: false
image: "/img/fullstackchronicles-cover-image.png"
tags: 
  - "aws"
  - "lambda"
  - "nodejs"
  - "javascript"
keywords:	
  - "aws"
  - "lambda"
  - "nodejs"
  - "javascript"
description: A simple pattern for converting dates in AWS Lambda using a Node.js runtime from GMT/UTC (the default) to a local time observing daylight savings time.
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

## Background  

AWS Lambda instances will return UTC/GMT time for any date time object created using the `Date.now()` function in JavaScript as shown here:  

```javascript
let now = new Date();
const tzOffset = now.getTimezoneOffset();
console.log(`Default Timezone Offset: ${tzOffset}`);
// results in ...
// Default Timezone Offset: 0
```
Moreover, Lambda instances are stateless and have no concept of local time.  This can make dealing with dates more challenging.  

This is compounded for localities which have legislated Daylight Savings Time during part of the year.  

## Solution

A simple (vanilla JavaScript - no third party libraries or external API calls) to adjust the time to local time adjusted for Daylight Savings Time is provided here:  

<Tabs
  defaultValue="commented"
  values={[
    { label: 'Commented', value: 'commented', },
    { label: 'Uncommented', value: 'uncommented', },
  ]
}>
<TabItem value="commented">

```javascript
function getGmtDstTransitionDate(year, month, transitionDay, hour){
    const firstDayOfTheMonth = new Date(year, month, 1);
    let transitionDate = new Date(firstDayOfTheMonth);
    // find the first transition day of the month if the first day of the month is not a transition day
    if (firstDayOfTheMonth.getDay() !== transitionDay) {
        transitionDate = new Date(firstDayOfTheMonth.setDate(firstDayOfTheMonth.getDate() + (transitionDay - firstDayOfTheMonth.getDay())));
    };
    // return the transition date and time
    return new Date(transitionDate.getTime() + (hour * 60 * 60000));
};

function getLocalDateTime(date) {
    // default to GMT+11 for AEDT
    let offsetInHours = 11;
    // if month is between April and October check further, if not return AEDT offset
    // remeber getMonth is zero based!
    if (date.getMonth() >= 3 && date.getMonth() <= 9) {
        // DST starts at 0200 on the First Sunday in October, which is 1600 (16) on the First Saturday (6) in October (9) GMT
        const dstStartDate = getGmtDstTransitionDate(date.getFullYear(), 9, 6, 16);
        // DST ends at 0300 on the First Sunday in April, which is 1600 (16) on the First Saturday (6) in April (3) GMT
        const dstEndDate = getGmtDstTransitionDate(date.getFullYear(), 3, 6, 16);
        if (date >= dstEndDate && date < dstStartDate) {
            offsetInHours = 10;
        };
    };
    // return the date and time in local time
    return new Date(date.getTime() + (offsetInHours * 60 * 60000));
}

// get current timestamp
let now = new Date();
console.log(`UTC Date: ${now}`);
now = getLocalDateTime(now);
console.log(`Local toLocaleString: ${now.toLocaleString()}`);
```

</TabItem>
<TabItem value="uncommented">

```javascript
function getGmtDstTransitionDate(year, month, transitionDay, hour){
    const firstDayOfTheMonth = new Date(year, month, 1);
    let transitionDate = new Date(firstDayOfTheMonth);
    if (firstDayOfTheMonth.getDay() !== transitionDay) {
        transitionDate = new Date(firstDayOfTheMonth.setDate(firstDayOfTheMonth.getDate() + (transitionDay - firstDayOfTheMonth.getDay())));
    };
    return new Date(transitionDate.getTime() + (hour * 60 * 60000));
};

function getLocalDateTime(date) {
    let offsetInHours = 11;
    if (date.getMonth() >= 3 && date.getMonth() <= 9) {
        const dstStartDate = getGmtDstTransitionDate(date.getFullYear(), 9, 6, 16);
        const dstEndDate = getGmtDstTransitionDate(date.getFullYear(), 3, 6, 16);
        if (date >= dstEndDate && date < dstStartDate) {
            offsetInHours = 10;
        };
    };
    return new Date(date.getTime() + (offsetInHours * 60 * 60000));
}

let now = new Date();
console.log(`UTC Date: ${now}`);
now = getLocalDateTime(now);
console.log(`Local toLocaleString: ${now.toLocaleString()}`);
```

</TabItem>
</Tabs>

### Breaking it down

This solution is comprised of two functions for DRY purposes.  

The main function `getLocalDateTime` takes a date object representing the current time in UTC and returns a date object representing the local (DST adjusted) time.  

The `getLocalDateTime` function sets a default DST adjusted offset in hours (11 in the case of AEDT), if the month is between April and October the `getGmtDstTransitionDate` is used to determine the exact boundaries between Standard Time and Daylight Savings Time.  

In the case of AEST/AEDT this is the first Sunday in October at 0200 to enter Daylight Savings Time and the first Sunday in April at 0300 to end Daylight Savings Time (both dates and times are adjusted to their equivalent GMT times) and return to Standard Time (10 hours in the cases of AEST).  

The `offsetInHours` variable and the arguments for `getGmtDstTransitionDate` can be easily modified for other timezones.  

### Tests

Some simple tests to run to check if the code is working correctly, to help with this I have set up the following unit test function:  

```javascript
function unitTest(inputDate, expOutputDate, testCase) {
	if (getLocalDateTime(inputDate).toUTCString() === expOutputDate.toUTCString()) {
		console.log(`TEST PASSED ${testCase}`)
	} else {
		console.log(`TEST FAILED ${testCase} : input date in GMT ${inputDate} should equal ${expOutputDate}`)
	};
};
```

first create dates representing the beginning of Daylight Savings Time (immediately before the beginning, at the beginning and immediately after the beginning):  

```javascript
unitTest(new Date(2022, 9, 1, 15, 59, 59, 999), new Date(2022, 9, 2, 1, 59, 59, 999), "one ms before dst start");
// returns...
// ...	INFO	TEST PASSED one ms before dst start
unitTest(new Date(2022, 9, 1, 16, 0, 0, 0), new Date(2022, 9, 2, 3, 0, 0, 0), "dst start");
// returns...
// ...	INFO	TEST PASSED dst start    
unitTest(new Date(2022, 9, 1, 16, 0, 0, 1), new Date(2022, 9, 2, 3, 0, 0, 1), "one ms after dst start");
// returns...
// ...	INFO	TEST PASSED one ms after dst start
```

next create dates similar tests representing the end of Daylight Savings Time (or beginning of Standard Time):  

```javascript
unitTest(new Date(2022, 3, 2, 15, 59, 59, 999), new Date(2022, 3, 3, 2, 59, 59, 999), "one ms before dst end");
// returns...
// ...	INFO	TEST PASSED one ms before dst end    
unitTest(new Date(2022, 3, 2, 16, 0, 0, 0), new Date(2022, 3, 3, 2, 0, 0, 0), "dst end");
// returns...
// ...	INFO	TEST PASSED dst end    
unitTest(new Date(2022, 3, 2, 16, 0, 0, 1), new Date(2022, 3, 3, 2, 0, 0, 1), "one ms after dst end");
// returns...
// ...	INFO	TEST PASSED one ms after dst end
```

Enjoy  

> if you have enjoyed this post, please consider [__buying me a coffee ☕__](https://www.buymeacoffee.com/jeffreyaven) to help me keep writing!