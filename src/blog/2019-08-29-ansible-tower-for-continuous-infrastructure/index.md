---
slug: "ansible-tower-for-continuous-infrastructure"
title: "Ansible Tower for Continuous Infrastructure"
authors:	
  - chrisottinger
draft: false
hide_table_of_contents: true
image: "/img/fullstackchronicles-cover-image.png"
tags: 
  - "ansible"
  - "ci-cd"
  - "continuous-infrastructure"
keywords:	
  - "ansible"
  - "ci-cd"
  - "continuous-infrastructure"
---

As infrastructure and teams scale, effective and robust configuration management requires growing beyond manual processes and local conventions. Fortunately, [Ansible Tower](https://www.ansible.com/products/tower) (or the upstream Open Source project [Ansible AWX](https://github.com/ansible/awx)) provides a perfect platform for configuration management at scale.

The [Ansible Tower/AWX documentation](https://docs.ansible.com/ansible-tower/index.html) and tutorials provide comprehensive information about the individual components.  However, assembling all the moving pieces into a whole working solution can involve some trial and error and reverse engineering in order to understand how the components relate to one another.  Ansible Tower, like the core Ansible solution, offers flexibility in how features assembled to support different typed of workflows. The types of workflows can include once-off initial configurations, ad-hoc system maintenance, or continuous convergence.

Continuous convergence, also referred to as desired state, regularly re-applies the defined configuration to infrastructure. This tends to 'correct the drift' often encountered when only applying the configuration on infrastructure setup. For example, a continuous convergence approach to configuration management could apply the desired configuration on a recurring schedule of every 30 minutes.  

Some continuous convergence workflow characteristics can include:

- Idempotent Ansible roles. If there are no required configuration deviations, run will report 0 changes.
- A source code repository per Ansible role, similar to the Ansible Galaxy approach,
- A source code repository for Ansible playbooks that include the individual Ansible roles,
- A host configured to provide one unique service function only,
- An Ansible playbook defined for each unique service function that gets applied to the host,
- Playbooks applied to each host on a repeating schedule.

One way to achieve a continuous convergence workflow combines the Ansible Tower components according to the following conceptual model.

[![](images/Ansible-AWX-Continuous-Convergence.png)](images/Ansible-AWX-Continuous-Convergence.png)

## The Workflow Components

### Playbook and Role Source Code

**Ansible roles** contain the individual tasks, handlers, and content with a role responsible for the installation and configuration of a particular software service.

**Ansible playbooks** configure a host for a particular service function in the environment acting as a wrapper for the individual role based configurations.  All the roles expected to be applied to a host must be defined in the playbook.

### Source Code Repositories

**Role git repositor**ies contain the versioned definition of a role, e.g. one git repository per individual role.  The roles are pulled into the playbooks using the git reference and tags, which pegs the role version used within a playbook.

**Project git repositories** group the individual playbooks into single collection, e.g. one git repository per set of playbooks.  As with roles, specific versions of project repositories are also identified by version tags. 

### Ansible Tower Server

Two foundational concepts in Ansible Tower are projects and inventories. Projects provide access to playbooks and roles. Inventories provide the connection to "real" infrastructure.  Inventories and projects also provide authorisation scope for activities in Ansible Tower. For example, a given group can use the playbooks in Project X and apply jobs to hosts in Inventory Y.

Each **Ansible Tower Project** is backed by a project git repository.  Each repository contains the playbooks and included roles that can be applied by a given job.  The Project is the glue between the Ansible configuration tasks and the plays that apply the configuration.

**Ansible Tower Inventories** are sets of hosts grouped for administration, similar to inventory sets used when applying playbooks manually.  One option is to group hosts into Inventories by environment.  For example, the hosts for development may be in one Inventory while the hosts for production may be in another Inventory.  User authorisation controls are applied at the Inventory level.

**Ansible Tower Inventory Groups** define sub-sets of hosts within the larger Inventory.  These subsets can then be used to limit the scope of a playbook job.  One option is to group hosts within an Inventory by function.  For example, the hosts for web servers may be in one Inventory Group and the hosts for databases may be in another Inventory Group.  This enables one playbook to target one inventory group.  Inventory groups effectively provide metadata labels for hosts in the Inventory.

An **Ansible Job Template** determines the configuration to be applied to hosts.  The Job Template links a playbook from a project to an inventory.   The inventory scope can be optionally further limited by specifying inventory group limits.  A Job Template can be invoked either on an ad-hoc basis or via a recurring schedule.

**Ansible Job Schedules** define the time and frequency at which the configuration specified in the Job Template is applied.  Each Job Template can be associated with one or more Job Schedules.  A schedule supports either once-off execution, for example during a defined change window, or regularly recurring execution.  A job schedule that applies the desired state configuration with a frequency of 30 minutes provides an example of a job schedule used for a continuous convergence workflow.

### "Real" Infrastructure

An **Ansible Job Instance** defines a single invocation of an Ansible Job Template, both for scheduled and ad-hoc invocations of the job template.  Outside of Ansible Tower, the Job Instance is the equivalent of executing the `ansible-playbook` command using an inventory file.

A **Host** is the actual target infrastructure resources configured by the job instance, applying an ansible playbook of included roles.

## A note on Ansible Variables

As with other features of Ansible and Ansible Tower, variables also offer flexibility in defining parameters and context when applying a configuration.  In addition to declaring and defining variables in roles and playbooks, variable definitions can also be defined in Ansible Tower job templates, inventory and inventory groups, and individual hosts.  Given the plethora of options for variable definition locations, without a set of conventions for managing variable values, debugging runtime issues with roles and playbooks can become difficult.  E.g. which value defined at which location was used when applying the role?

One example of variable definitions conventions could include:

- Variables shall be given default values in the role, .e.g. in the `../defaults/main.yml` file.
- If the variable must have a 'real' value supplied when applying the playbook, the variable shall be defined with an obvious placeholder value which will fail if not overridden.
- Variables shall be described in the role `README.md` documentation
- Do not apply variables at the host inventory level as host inventory can be transient.
- Variables that select specific capabilities within a role shall be defined at the Ansible Tower Inventory Group.  For example, a role contains the configuration definition for both master and work nodes.  The Inventory Group variables are used to indicate which hosts must have the master configuration and applied and which must have the worker configuration applied.
- Variables that define the environment context for configuration shall be defined in the Ansible Tower Job Template.

Following these conventions, each of the possible variable definition options serves a particular purpose.  When an issue with variable definition does arise, the source is easily identified.
