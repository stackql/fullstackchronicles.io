---
slug: "from-wordpress-to-jamstack"
title: "From Wordpress to Jamstack"
authors:	
  - jeffreyaven
draft: false
hide_table_of_contents: true
image: "/img/fullstackchronicles-cover-image.png"
tags: 
  - "wordpress"
  - "jamstack"
  - "web development"
  - "github pages"
  - "docusaurus"
keywords:	
  - "wordpress"
  - "jamstack"
  - "web development"
  - "github pages"
  - "docusaurus"
---

I started this blog a few years back to chronicle my journeys through building cloud data platforms, along the way I gathered some friends to share their experiences as well.  The easiest platform to start this blog on was Wordpress.  This worked, but wasnt really aligned with the way myself and my collegues worked,and didnt really align with the types of things we were writing about in blog articles or embracing as general principles... e.g. 'everything-as-code', 'gitops', etc.  

Enter Static Site Generators and Jamstack architecture.  Not only does a Jamstack, SSG architecture for a blog site (or docs site or any other site), allow you to manage every aspect of your web property as code, but as a static site has several other benefits inlcuding increased performance, easier distribution (using CDNs), better security (no origin server required), all this as well as being SEO friendly (and optimised in many cases).  

But moving the site from Wordpress to a SSG must be an onerous task.. wrong.  

I moved this blog over a weekend which was quite simple in the end, here are the steps:  

1. Export your Wordpress site (Tools->Export), make sure to select *All Content*.  

2. Use [wordpress-export-to-markdown](https://github.com/lonekorean/wordpress-export-to-markdown) to convert your posts to a basic Markdown format with frontmatter, does a pretty good job

3. Choose and deploy a Static Site Generator (I chose [Docusaurus](https://docusaurus.io/), but there are several other alternatives available such as VuePress, Jekyll, etc)  

4. Drop your Markdown docs into your SSG content (blogs) directory (converted in step 2)  

5. You will probably need to do some fine tuning as some things may not export cleanly, but 99% of the content will be fine  

6. Deploy your new blog site, I am using GitHub Pages, but you could use anything similar - Netlify, Vercel, Digital Ocean, Azure Static Web Apps, etc or implement your own custom CI routine to build your project and push it to an object storage bucket configured to serve a static web site (such as Google Cloud Storage and AWS S3)  


Thats it!  