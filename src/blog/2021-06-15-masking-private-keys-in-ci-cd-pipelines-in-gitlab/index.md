---
slug: "masking-private-keys-in-ci-cd-pipelines-in-gitlab"
title: "Masking Private Keys in CI/CD Pipelines in GitLab"
authors:	
  - jeffreyaven
draft: false
hide_table_of_contents: true
image: "/img/fullstackchronicles-cover-image.png"
tags: 
  - "ci"
  - "gitlab"
  - "gitlab-ci"
  - "private-keys"
  - "secrets"
keywords:	
  - "ci"
  - "gitlab"
  - "gitlab-ci"
  - "private-keys"
  - "secrets"
---

import Gist from 'react-gist';

Big fan of GitLab (and GitLab CI in particular). I had a recent requirement to push changes to a wiki repo associated with a GitLab project through a GitLab CI pipeline (using the SaaS version of GitLab) and ran into a conundrum…

Using the GitLab SaaS version - deploy tokens can’t have write api access, so the next best solution is to use deploy keys, adding your public key as a deploy key and granting this key write access to repositories is relatively straightforward.

This issue is when you attempt to create a masked GitLab CI variable using the private key from your keypair, you get this…

[![](images/masked-variable.png)](images/masked-variable.png)

I was a bit astonished to see this to be honest… Looks like it has been raised as an issue several times over the last few years but never resolved (the root cause of which is something to do with newline characters or base64 encoding or the overall length of the string).

I came up with a solution! Not pretty but effective, masks the variable so that it cannot be printed in CI logs as shown here:

[![](images/ci-ssh-key.png)](images/ci-ssh-key.png)

## Setup

Add a masked and protected GitLab variable for each line in the private key, for example:

[![](images/masked-vars.png)](images/masked-vars.png)

## The Code

Add the following block to your `.gitlab-ci.yml` file:

<Gist id="b5260f14ecc0bf0d080c80297d0b475c" 
/>

now within Jobs in your pipeline you can simply do this to clone, push or pull from a remote GitLab repo:

<Gist id="c96e211544f7cb4ef3ca4e90dc8e36e3" 
/>

as mentioned not pretty, but effective and no other cleaner options as I could see…
