---
slug: "azure-static-web-app-review"
title: "Azure Static Web App Review"
authors:	
  - jeffreyaven
draft: false
hide_table_of_contents: true
image: "images/AzureStaticWebApp.png"
tags: 
  - "azure"
  - "jamstack"
  - "microsoft-azure"
  - "netlify"
  - "progressive-web-application"
  - "pwa"
  - "react"
  - "single-page-application"
  - "spa"
  - "vercel"
  - "vue-js"
keywords:	
  - "azure"
  - "jamstack"
  - "microsoft-azure"
  - "netlify"
  - "progressive-web-application"
  - "pwa"
  - "react"
  - "single-page-application"
  - "spa"
  - "vercel"
  - "vue-js"
---

import Gist from 'react-gist';

The Azure Static Web App feature is relatively new in the Azure estate which has recently become generally available, I thought I would take it for a test drive and discuss my findings.

I am a proponent of the JAMStack architecture for front end applications and a user of CD enabled CDN services like Netlify, so this Azure feature was naturally appealing to me.

Azure SWAs allow you to serve static assets (like JavaScript) without a origin server, meaning you don’t need a web server, are able to streamline content distribution and web app performance, and reduce the attack surface area of your application.

The major advantage to using is simplicity, no scaffolding or infra requirements and it is seamlessly integrated into your CI/CD processes (natively if you are using GitHub).

## Deploying Static Web Apps in Azure

Pretty simple to setup, aside from a name and a resource group, you just need to supply:

- a **location** (Azure region to be used for serverless back end APIs via Azure Function Apps) note that this is not a location where the static web is necessarily running
- a GitHub or GitLab **repo URL**
- the **branch** you wish to use to trigger production deployments (e.g. `main`)
- a **path** to your code within your app (e.g. where your `package.json` file is located)
- an **output folder** (e.g. `dist`) this should not exist in your repo
- a project or personal access **token** for your GitHub account (alternatively you can perform an interactive OAuth2.0 consent if using the portal)

An example is shown here:

<Gist id="eef5a25ed01327a180711fd64370c457" 
/>

## GitHub Actions

Using the consent provided (either using the OAuth flow or by providing a token), Azure Static Web Apps will automagically create the GitHub Actions workflow to deploy your application on a push or merge event to your repo. This includes providing scoped API credentials to Azure to allow access to the Static Web App resource using secrets in GitHub (which are created automagically as well). An example workflow is shown here:

<Gist id="8e7ad2bdd9ba351368c5aedad289e972" 
/>

## Preview or Staging Releases

Similar to the functionality in analogous services like Netlify, you can configure preview releases of your application to be deployed from specified branches on pull request events.

## Routes and Authorization

Routes (for SPAs) need to be provided to Azure by using a file named `staticwebapp.config.json` located in the application root of your repo (same level as you `package.json` file). You can also specify response codes and whether the rout requires authentication as shown here:

<Gist id="7dd3bcf05474da551b3d311ae0729e18" 
/>

## Pros

- Globally distributed CDN
- Increased security posture, reduced attack surface area
- Simplified architecture and deployment
- No App Service Plan required – cost reduction
- Enables Continuous Deployment – incl preview/staging environments
- TLS and DNS can be easily configured for your app

## Cons

- Serverless API locations are limited
- Integration with other VCS/CI/CD systems like GitLab would need to be custom built (GitHub and Azure DevOps is integrated)

Overall, this is a good feature for deploying SPAs or PWAs in Azure.
