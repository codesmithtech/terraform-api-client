This project takes the approach of defining Terraform Cloud's API endpoints as YAML documents, then auto-generating strongly-types API clients for each of the Terraform APIs.

`./ref/api` contains the YAML definitions of the Terraform Cloud APIs
`./generator` contains the code to generate the API clients, based on the definitions
`./src` contains the generated Terraform API clients which you should use in your code

The project aims to implement - in full - the Terraform Cloud API as defined at https://www.terraform.io/docs/cloud/api/index.html

Progress is as follows:

- [ ] Accounts
- [ ] Agent Pools
- [ ] Agent Tokens
- [ ] Applies
- [ ] Audit Trails
- [ ] Configuration Versions
- [ ] Cost Estimates
- [ ] Feature Sets
- [ ] Invoices
- [ ] IP Ranges
- [ ] Notification Configurations
- [ ] OAuth Clients
- [ ] OAuth Tokens
- [ ] Organizations
- [ ] Organization Memberships
- [ ] Organization Tokens
- [ ] Plan Exports
- [ ] Plans
- [ ] Policies
- [ ] Policy Checks
- [ ] Policy Sets
- [ ] Policy Set Parameters
- [ ] Registry Modules
- [ ] Runs
- [ ] Run Triggers
- [ ] SSH Keys
- [ ] State Versions
- [ ] Subscriptions
- [ ] State Version Outputs
- [ ] Team Access
- [ ] Team Membership
- [ ] Team Tokens
- [ ] Teams
- [ ] User Tokens
- [ ] Users
- [ ] Variables
- [ ] Workspaces
- [ ] Workspace Variables
