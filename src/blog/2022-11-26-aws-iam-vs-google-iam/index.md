---
slug: "aws-iam-vs-google-iam"
title: "AWS IAM vs Google IAM"
authors:  
  - jeffreyaven
draft: false
image: "/img/blog/aws-iam-vs-google-iam.png"
tags: 
  - "aws"
  - "google"  
  - "gcp"
  - "iam"
  - "aws iam"
  - "google iam"
  - "identity and access management"
keywords: 
  - "aws"
  - "google"  
  - "gcp"
  - "iam"
  - "aws iam"
  - "google iam"
  - "identity and access management"
description: A brief comparison of Identity and Access Management (IAM) in the Google Cloud Platform and AWS.
---

AWS and Google (and Microsoft Azure) have services called IAM, which stands for __Identity and Access Management__. The IAM service serves roughly the same purpose in each provider: to authorize principals (users, groups, or service accounts) to access and use services and resources on the respective platform. There are subtle yet significant differences and distinctions across the major cloud providers.  

This article will look at the differences between IAM in AWS and IAM in Google.  

## Identity Management
Firstly, Google's IAM is a slight misnomer regarding the I as it does not manage identities (with the single exception of service accounts). Google identities are sourced from Google accounts created and managed outside the Google Cloud Platform. Google identities (users and groups) are Google accounts which could be accounts in a Google Workspace domain, a Google Cloud Identity domain, or Gmail accounts. Still, these accounts are *NOT* created or managed using the Google IAM service.  

Conversely, AWS IAM creates and manages identities for use in the AWS platform (__IAM Users__), which can be used to access AWS resources using the AWS console or programmatically using API keys.  

## Overview of IAM entities in AWS and Google
It can be confusing for people coming from AWS to Google or vice-versa. Some of the same terms exist in both providers but mean different things. The table below summarises the difference in the meaning of terms in both providers. We will unpack this in more detail in the sections that follow.  

| AWS | Google<sup>*</sup> |
| --- | ----------- |
| Role | [Service Account](#service-accounts-in-google) |
| Managed Policy | [Predefined Role](#predefined-roles) |
| Customer Managed Policy | [Custom Role](#custom-roles) |
| Policy Attachment | [IAM Binding](#google-iam-bindings) |

<sup>*</sup> nearest equivalent

## Roles and Policies in AWS
An __AWS IAM Role__ is an identity that can be assumed by trusted entities using short-lived credentials (issued by the AWS Security Token Service or STS API). A trusted entity could be an IAM User, Group, or a service (such as Lambda or EC2).  

Permissions are assigned to IAM Roles (and IAM Users and Groups) through the attachment of __IAM Policies__.  

AWS Policies are collections of permissions in different services which can be used to *Allow* or *Deny* access (__Effect__); these can be scoped to a resource or have conditions attached. The following is an example of an AWS Policy:  

```json
{
    "Version": "2012-10-17",
    "Statement": [
        {
            "Effect": "Allow",
            "Action": "ec2:Describe*",
            "Resource": "*"
        },
        {
            "Effect": "Allow",
            "Action": "autoscaling:Describe*",
            "Resource": "*"
        }
    ]
}
```

Policies in AWS can be __Managed Policies__ (created and managed by AWS) or __Customer Managed Policies__ - where the customer defines and manages these policies.  

An IAM Role that is used by a service such as Lambda or EC2 will have a __Trust Policy__ attached, which will look something like this:  

```json
{
    "Version": "2012-10-17",
    "Statement": [
        {
            "Effect": "Allow",
            "Principal": {
                "Service": "lambda.amazonaws.com"
            },
            "Action": "sts:AssumeRole"
        }
    ]
}
```

## Roles and Policies in Google
__Roles__ in Google IAM are __*NOT identities*__ ; they are collections of permissions (similar to Policies in AWS). Roles can be of the following types:  

### Basic Roles (also referred to as Legacy or Primitive Roles) 
__Basic Roles__ are coarse-grained permissions set at a Project level across all services, such as *Owner*, *Editor*, and *Viewer*. Support for Basic Roles is maintained by Google, however, Google does not recommend using Basic Roles after a Project is created.  

### Predefined Roles
__Predefined Roles__ are pre-curated sets of permissions that align with a role that an actor (human or service account) would play, such as *BigQuery Admin*. Predefined roles are considered best practice in Google as the permissions for these roles are maintained by Google. Predefined Roles in Google would be the nearest equivalent to Managed Policies in AWS.  

### Custom Roles
__Custom Roles__ are user-specified and managed sets of permissions. These roles are scoped within your Project in Google and are your responsibility to maintain. Custom Roles are typically used when the permissions granted through a Predefined Role are too broad. Custom Roles would be the nearest equivalent of Customer Managed Policies in AWS.  

## Google IAM Bindings
Roles (collections of permissions) are attached to Principals (Identities such as users (Google accounts), groups and service accounts through __IAM bindings__.  The example below shows a binding between a user principal (a Google Workspace account) and a predefined role (*BigQuery Admin*) within a GCP project:    

[![Google IAM Binding](images/iam_binding.png)](images/iam_binding.png)

## Policies in Google
A __Policy__ in Google is a collection of IAM Bindings between *members* (principals) and *roles*. An example policy would be:  

```json
{
  "bindings": [
    {
      "members": [
        "user:javen@avensolutions.com"
      ],
      "role": "bigquery.admin"
    },
    ... another binding ...
  ]
}
```

## Service Accounts in Google
A __Service Account__ in GCP is a password-less identity created in a GCP Project that can be used to access GCP resources (usually by a process or service). Service accounts are identified by an email address, but these are NOT Google accounts (like the accounts used for users or groups). Service accounts can be associated with services such as Compute Engine, Cloud Functions, or Cloud Run (in much the same way as AWS Roles can be assigned to services such as Lambda functions or EC2 instances). Google Service accounts can use keys created in the IAM service, which are exchanged for short-lived credentials, or service accounts can use get tokens directly, which include OAuth 2.0 access tokens and OpenID Connect ID tokens. Service accounts in Google are the nearest equivalent to AWS IAM Roles.  

## Inheritance
AWS (save AWS Organizations) is a flat structure with no inherent hierarchy and is oriented around regions that are seperate API endpoints (almost providers unto themselves); IAM, however, is a global service in AWS.  

In contrast, GCP is hierarchical and globally scoped for all services, including IAM. Resources (such as Google Compute Engine Instances or Big Query Datasets) are created in Projects (similar to Resource Groups in Azure). Projects are nested under a resource hierarchy, starting at the root (the organization or org). Organizations can contain folders, which can be nested, and these folders can contain Projects.  

IAM Bindings (and the permissions they enable) are inherited from ancestor nodes in the GCP hierarchy. A Principal's net effective permissions are the union of the permissions assigned through IAM Bindings in the Project and the permissions set through IAM Bindings in all ancestor nodes (including Folders and the Org itself).  

## Summary
IAM governs access and entitlements to services and resources in cloud providers, although the design, implementation, and terminology are quite different as you get into the details. This is not to say one approach is better than the other, but as a multi-cloud warrior, you should understand the differences.  