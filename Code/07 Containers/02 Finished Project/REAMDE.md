# Starting Project
* Simple Node application
* Project used as base in "02 Finished Project"

## Pre requisites
* Install docker

## How to run locally?
* `docker compose up`

## Notes
* workflows
  * It contains a workflow, using
    * container
    * service containers
* playwright
  * E2E testing tool
* MongoDB
  * Ways to use it
    * Create using atlas https://www.mongodb.com/atlas
      * Follow the steps to create one
      * How to configure?
        * Database, Connect, Connect your application, Copy the final part of "mongodb+srv..."
        * Paste for your "MONGODB_CLUSTER_ADDRESS"
        * Network Access, ADD IP ADDRESS, Allow Access from anywhere
    * Use a service container
      * The approach to use here