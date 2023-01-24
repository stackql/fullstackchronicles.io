---
slug: "json-ld-structured-data-for-docusaurus"
title: "Yoast (like) JSON-LD Structured Data for Docusaurus"
authors:  
  - jeffreyaven
draft: false
image: "/img/blog/json-ld-structured-data-for-docusaurus.png"
tags: 
  - "structured data"  
  - "docusaurus"
  - "seo"
  - "json-ld"
  - "yoast"
keywords: 
  - "structured data"  
  - "docusaurus"
  - "seo"
  - "json-ld"
  - "yoast"
description: This article demonstrates the use of the docusaurus-plugin-structured-data plugin to add JSON-LD structured data to sites built with docusaurus for improved on-page SEO and rich results.
---

[Yoast](https://developer.yoast.com/) is a well-known SEO plugin for WordPress which automagically generates structured data for every page (amongst other things). This helps render rich results for search as well as improve general on-site SEO.  

We use [Docusaurus](https://docusaurus.io/), a React-based Static Site Generator from Facebook, for all of our docs and blog properties. Docusaurus does have some native structured data capabilities through [Microdata](https://html.spec.whatwg.org/multipage/microdata.html#microdata). We were after:  

- Structured data implemented using [JSON-LD](https://json-ld.org/) - which is the recommended approach by Google; and
- Support multi-level structured data (like Yoast does), including `Organization`, `WebSite`, `WebPage`, `Article`, and `Breadcrumb` level data

The solution was to create a Docusaurus plugin, [__docusaurus-plugin-structured-data__](https://github.com/stackql/docusaurus-plugin-structured-data).  

:::info

Google allows you to combine structured data in Microdata format with data in JSON-LD format. You can see the union of the two markup approaches using the [Rich Results Test](https://search.google.com/test/rich-results).

:::

## How it works

`Organization` and `Website` level structured data are defined in the plugin configurations (see [Configuration](#configuration)). `WebPage`, `Article` and `Breadcrumb` level data are derived for each page from metadata sourced from the [`postBuild` lifecycle api](https://docusaurus.io/docs/api/plugin-methods/lifecycle-apis#postBuild) and then injected into the `<head>` of each page using JSON-LD format as follows:  

```html
<head>
...
<script type="application/ld+json">
{"@context":"https://schema.org","@graph":[...]}
</script>
...
</head>
```

### Breadcrumbs

Docusaurus allows you to create hierarchical document structures using categories and folders defined at build time; although this is useful for organization and context, to search engines, it can appear too complex (with leaf-level documents seemingly multiple clicks from the home page). In actuality, this is not the case, as the sidebar in Docusuarus makes any page one click away from the home page.  

As a solution (to keep the hierarchy), the plugin takes each level in the route, maps it to a friendly term or token (using the `breadCrumbLabelMap` configuration property), and creates a concatenated string, so for a route such as:  

```
/docs/language-spec/functions/aggregate/group_concat
```

The resultant `Breadcrumb` structured data looks like this...  

```json
    {
      "@type": "BreadcrumbList",
      "@id": "https://stackql.io/docs/language-spec/functions/aggregate/group_concat/#breadcrumb",
      "itemListElement": [
        {
          "@type": "ListItem",
          "position": 1,
          "item": "https://stackql.io",
          "name": "Home"
        },
        {
          "@type": "ListItem",
          "position": 2,
          "item": "https://stackql.io/docs",
          "name": "Documentation"
        },
        {
          "@type": "ListItem",
          "position": 3,
          "name": "Language Specification - Functions - Aggregate - GROUP_CONCAT"
        }
      ]
    },
```

### Blog Posts

The [__docusaurus-plugin-structured-data__](https://github.com/stackql/docusaurus-plugin-structured-data) plugin detects blog posts and injects [Article](https://schema.org/Article) structured data accordingly, including the following properties:  

- `author`
- `headline`
- `datePublished`
- `dateModified`
- `wordCount`
- `keywords`
- and more...

An example is shown here:  

```json
    {
      "@type": "Article",
      "@id": "https://stackql.io/blog/sumologic-provider-for-stackql-now-available/#article",
      "isPartOf": {
        "@type": "WebPage",
        "@id": "https://stackql.io/blog/sumologic-provider-for-stackql-now-available/#webpage"
      },
      "author": {
        "name": "Jeffrey Aven",
        "@id": "https://stackql.io/#/schema/person/1"
      },
      "headline": "Sumologic Provider for StackQL Now Available",
      "datePublished": "2023-01-03T00:00:00.000Z",
      "dateModified": "2023-01-03T00:00:00.000Z",
      "mainEntityOfPage": {
        "@id": "https://stackql.io/blog/sumologic-provider-for-stackql-now-available/#webpage"
      },
      "wordCount": 201,
      "publisher": {
        "@id": "https://stackql.io/#organization"
      },
      "image": {
        "@id": "https://stackql.io/blog/sumologic-provider-for-stackql-now-available/#primaryimage"
      },
      "thumbnailUrl": "https://stackql.io/img/blog/stackql-sumologic-provider-featured-image.png",
      "keywords": ["stackql", "sumologic", "multicloud", "monitoring", "logging"],
      "articleSection": ["Blog"],
      "inLanguage": "en-US"
    }
```

## Installation

The [__docusaurus-plugin-structured-data__](https://github.com/stackql/docusaurus-plugin-structured-data) is available via NPMJS at [__@stackql/docusaurus-plugin-structured-data__](https://www.npmjs.com/package/@stackql/docusaurus-plugin-structured-data).  

To install via NPM use:  

```
npm i @stackql/docusaurus-plugin-structured-data
```

To install using Yarn use:

```
yarn add @stackql/docusaurus-plugin-structured-data
```

## Configuration

Add the [__docusaurus-plugin-structured-data__](https://github.com/stackql/docusaurus-plugin-structured-data) plugin to `plugins` section in `docusaurus.config.js`:

```javascript
{
  plugins: [
    '@stackql/docusaurus-plugin-structured-data',
    ...
  ]
}
```

Update `themeConfig` in the `docusaurus.config.js` file, the following shows mandatory properties:  

```javascript
{
  ...,
  themeConfig: {
    structuredData: {
      excludedRoutes: [], // array of routes to exclude from structured data generation, include custom redirects here
      verbose: boolean, // print verbose output to console (default: false)
      featuredImageDimensions: {
        width: 1200,
        height: 630,
      },
      authors:{
          author_name: {
            authorId: string, // unique id for the author - used as an identifier in structured data
            url: string, // MUST be the same as the `url` property in the `authors.yml` file in the `blog` directory
            imageUrl: string, // gravatar url
            sameAs: [] // synonymous entity links, e.g. github, linkedin, twitter, etc.
          },
      },
      organization: {}, // Organization properties can be added to this object
      website: {}, // WebSite properties can be added to this object
      webpage: {
        datePublished: string, // default is the current date
        inLanguage: string, // default: en-US
      },
      breadcrumbLabelMap: {} // used to map the breadcrumb labels to a custom value
      }
    },
    ...
  }
```

## Resultant Structured Data Example

Below is an example of the data created and injected into the `<head>` of each page in the generated site (this is formatted for readability - the actual structured data generated is minified for performance).    

<details>
  <summary>Docusaurus Structured Data Example</summary>

```html
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebPage",
      "isPartOf": {
        "@id": "https://stackql.io/#website"
      },
      "inLanguage": "en-US",
      "datePublished": "2021-07-01",
      "@id": "https://stackql.io/docs/language-spec/functions/json/json_extract/#webpage",
      "url": "https://stackql.io/docs/language-spec/functions/json/json_extract",
      "name": "JSON_EXTRACT",
      "description": "Query and Deploy Cloud Infrastructure and Resources using SQL",
      "dateModified": "2023-01-23T23:56:08.545Z",
      "breadcrumb": {
        "@id": "https://stackql.io/docs/language-spec/functions/json/json_extract/#breadcrumb"
      },
      "potentialAction": [
        {
          "@type": "ReadAction",
          "target": [
            "https://stackql.io/docs/language-spec/functions/json/json_extract"
          ]
        }
      ]
    },
    {
      "@type": "BreadcrumbList",
      "@id": "https://stackql.io/docs/language-spec/functions/json/json_extract/#breadcrumb",
      "itemListElement": [
        {
          "@type": "ListItem",
          "position": 1,
          "item": "https://stackql.io",
          "name": "Home"
        },
        {
          "@type": "ListItem",
          "position": 2,
          "item": "https://stackql.io/docs",
          "name": "Documentation"
        },
        {
          "@type": "ListItem",
          "position": 3,
          "name": "Language Specification - Functions - JSON - JSON_EXTRACT"
        }
      ]
    },
    {
      "@type": "WebSite",
      "@id": "https://stackql.io/#website",
      "name": "StackQL",
      "url": "https://stackql.io",
      "description": "Provision and Query Cloud and SaaS Resources using SQL",
      "publisher": {
        "@id": "https://stackql.io/#organization"
      },
      "potentialAction": [
        {
          "@type": "SearchAction",
          "target": {
            "@type": "EntryPoint",
            "urlTemplate": "https://stackql.io/search?q={searchTerms}"
          },
          "query-input": "required name=searchTerms"
        }
      ],
      "inLanguage": "en-US"
    },
    {
      "@type": "Organization",
      "@id": "https://stackql.io/#organization",
      "name": "StackQL",
      "url": "https://stackql.io",
      "sameAs": [
        "https://twitter.com/stackql",
        "https://www.linkedin.com/company/stackql",
        "https://github.com/stackql",
        "https://www.youtube.com/@stackql",
        "https://hub.docker.com/u/stackql"
      ],
      "contactPoint": {
        "@type": "ContactPoint",
        "email": "info@stackql.io"
      },
      "logo": {
        "@type": "ImageObject",
        "inLanguage": "en-US",
        "@id": "https://stackql.io/#logo",
        "url": "https://stackql.io/img/stackql-cover.png",
        "contentUrl": "https://stackql.io/img/stackql-cover.png",
        "width": 1440,
        "height": 900,
        "caption": "StackQL - your cloud using SQL"
      },
      "image": {
        "@id": "https://stackql.io/#logo"
      },
      "address": {
        "@type": "PostalAddress",
        "addressCountry": "AU",
        "postalCode": "3001",
        "streetAddress": "Level 24, 570 Bourke Street, Melbourne, Victoria"
      },
      "duns": "750469226",
      "taxID": "ABN 65 656 147 054"
    }
  ]
}
</script>
```

</details>

## Testing

Once you have built and deployed your site (using `yarn build`), you can use the [Schema Validator Tool](https://validator.schema.org/) or the [Google Rich Results Tool](https://search.google.com/test/rich-results) to inspect urls from your site.  

Pull requests or issues are welcome.  Please feel free to contribute. Thanks!    


