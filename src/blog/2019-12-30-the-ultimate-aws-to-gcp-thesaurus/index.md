---
slug: "ultimate-aws-to-gcp-thesaurus"
title: "The Ultimate AWS to GCP Thesaurus"
authors:	
  - jeffreyaven
draft: false
hide_table_of_contents: false
image: "images/aws-to-gcp-thesauraus.png"
tags: 
  - "amazonwebservices"
  - "aws"
  - "gcp"
  - "googlecloudplatform"
keywords:	
  - "amazonwebservices"
  - "aws"
  - "gcp"
  - "googlecloudplatform"
---

![aws to gcp thesauraus](images/aws-to-gcp-thesauraus.png)

There are many posts available which map analogous services between the different cloud providers, but this post attempts to go a step further and map additional concepts, terms, and configuration options to be the definitive thesaurus for cloud practitioners familiar with AWS looking to fast track their familiarisation with GCP.

It should be noted that AWS and GCP are fundamentally different platforms, nowhere is this more apparent than in the way networking is implemented between the two providers, see: [__GCP Networking for AWS Professionals__](https://cloudywithachanceofbigdata.com/gcp-networking-for-aws-professionals/)

This post is focused on the core infrastructure, networking and security services offered by the two major cloud providers, I will do a future post on higher level services such as the ML/AI offerings from the respective providers.

Furthermore this will be a living post which I will continue to update, I encourage comments from readers on additional mappings which I will incorporate into the post as well.

I have broken this down into sections based upon the layout of the AWS Console.

- [![](images/compute.png) __Compute__](#compute)
- [![](images/storage.png) __Storage__](#storage)
- [![](images/database.png) __Database__](#database)
- [![](images/networking.png) __Networking & Content Delivery__](#networking)
- [![](images/security.png) __Security, Identity, & Compliance__](#security)

<a name="compute"></a>

## ![](images/compute.png) Compute

![](images/aws.png) | ![](images/gcp.png)
--- | ---
EC2 (Elastic Compute Cloud) | GCE (Google Compute Engine)
Availability Zone | Zone
Instance | VM Instance
Instance Family | Machine Family
Instance Type | Machine Type
Amazon Machine Image (AMI) | Image
IAM Role (for an EC2 Instance) | Service Account
Security Groups | VPC Firewall Rules (ALLOW)
Tag | Label
Termination Protection | Deletion Protection
Reserved Instances | Committed Use Discounts
Capacity Reservation | Reservation
User Data | Startup Script
Spot Instances | Preemptible VMs
Dedicated Instances | Sole Tenancy
EBS Volume | Persistent Disk
Auto Scaling Group | Managed Instance Group
Launch Configuration | Instance Template
ELB Listener | URL Map (Load Balancer)
ELB Target Group | Backend/ Instance Group
Instance Storage (ephemeral) | Local SSDs
EBS Snapshots | Snapshots
Keypair | SSH Keys
Elastic IP | External IP
Lambda | Google Cloud Functions
Elastic Beanstalk | Google App Engine
Elastic Container Registry (ECR) | Google Container Registry (GCR)
Elastic Container Service (ECS) | Google Kubernetes Engine (GKE)
Elastic Kubernetes Service (EKS) | Google Kubernetes Engine (GKE)
AWS Fargate | Cloud Run
AWS Service Quotas | Allocation Quotas
Account (within an Organisation)&dagger; | Project
Region | Region
AWS Cloud​Formation | Cloud Deployment Manager

<a name="storage"></a>

## ![](images/storage.png) Storage

![](images/aws.png) | ![](images/gcp.png)
--- | ---
Simple Storage Service (S3) | Google Cloud Storage (GCS)
Standard Storage Class | Standard Storage Class
Infrequent Access Storage Class | Nearline Storage Class
Amazon Glacier | Coldline Storage Class
Lifecycle Policy | Retention Policy
Tags | Labels
Snowball | Transfer Appliance
Requester Pays | Requester Pays
Region | Location Type/Location
Object Lock | Hold
Vault Lock (Glacier) | Bucket Lock
Multi Part Upload | Parallel Composite Transfer
Cross-Origin Resource Sharing (CORS) | Cross-Origin Resource Sharing (CORS)
Static Website Hosting | Bucket Website Configuration
S3 Access Points | VPC Service Controls
Object Notifications | Pub/Sub Notifications for Cloud Storage
Presigned URL | Signed URL
Transfer Acceleration | Storage Transfer Service
Elastic File System (EFS) | Cloud Filestore
AWS DataSync | Transfer Service for on-premises data
ETag | ETag
Bucket | Bucket
`aws s3` | `gsutil`

<a name="database"></a>

## ![](images/database.png) Database

![](images/aws.png) | ![](images/gcp.png)
--- | ---
Relational Database Service (RDS) | Cloud SQL
DynamoDB | Cloud Datastore
ElastiCache | Cloud Memorystore
Table (DynamoDB) | Kind (Cloud Datastore)
Item (DynamoDB) | Entity (Cloud Datastore)
Partition Key (DynamoDB) | Key (Cloud Datastore)
Attributes (DynamoDB) | Properties (Cloud Datastore)
Local Secondary Index (DynamoDB) | Composite Index (Cloud Datastore)
Elastic Map Reduce (EMR) | Cloud DataProc
Athena | Big Query
AWS Glue | Cloud DataFlow
Glue Catalog | Data Catalog
Amazon Simple Notification Service (SNS) | Cloud PubSub (push subscription)
Amazon Kinesis | Cloud PubSub
Amazon Simple Queue Service (SQS) | Cloud PubSub (poll and pull mode)

<a name="networking"></a>

## ![](images/networking.png) Networking & Content Delivery

![](images/aws.png) | ![](images/gcp.png)
--- | ---
Virtual Private Cloud (VPC) (Regional) | VPC Network (Global or Regional)
Subnet (Zonal) | Subnet (Regional)
Route Tables | Routes
Network ACLs (NACLS) | VPC Firewall Rules (ALLOW or DENY)
CloudFront | Cloud CDN
Route 53 | Cloud DNS/Google Domains
Direct Connect | Dedicated (or Partner) Interconnect
Virtual Private Network (VPN) | Cloud VPN
AWS PrivateLink | Google Private Access
NAT Gateway | Cloud NAT
Elastic Load Balancer | Load Balancer
AWS WAF | Cloud Armour
VPC Peering Connection | VPC Network Peering
Amazon API Gateway | Apigee API Gateway
Amazon API Gateway | Cloud Endpoints

<a name="security"></a>

## ![](images/security.png) Security, Identity, & Compliance

![](images/aws.png) | ![](images/gcp.png)
--- | ---
Root Account | Super Admin
IAM User | Member
IAM Policy | Role (Collection of Permissions)
IAM Policy Attachment | IAM Role Binding (or IAM Binding)
Key Management Service (KMS) | Cloud KMS
CloudHSM | Cloud HSM
Amazon Inspector (agent based) | Cloud Security Scanner (scan based)
AWS Security Hub | Cloud Security Command Center (SCC)
Secrets Manager | Secret Manager
Amazon Macie | Cloud Data Loss Prevention (DLP)
AWS WAF | Cloud Armour
AWS Shield | Cloud Armour

† No direct equivalent, this is the closest equivalent

> if you have enjoyed this post, please consider [__buying me a coffee ☕__](https://www.buymeacoffee.com/jeffreyaven) to help me keep writing!