# Starting Project
* Simple Node application.

## Pre requisites
* Install node or npm directly

## How to run locally?
* `npm install` 
* `npm run start`

## Notes
* It uses environment variables
  * `process.env`
* workflows
  * It contains a workflow using
    * environment variables
    * secrets
    * job environments
* playwright
  * E2E testing tool
* MongoDB
  * Create using atlas https://www.mongodb.com/atlas
    * Follow the steps to create one
  * How to configure?
    * Database, Connect, Connect your application, Copy the final part of "mongodb+srv..."
    * Paste for your "MONGODB_CLUSTER_ADDRESS" 
    * Network Access, ADD IP ADDRESS, Allow Access from anywhere