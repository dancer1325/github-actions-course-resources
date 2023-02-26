# Starting Project
* Simple React application

## Pre requisites
* Install node or npm directly

## How to run locally?
* `npm install`
* `npm run start`

## Notes
* workflows
  * It contains a dummy workflow to be extended in the next projects
  * "Get code", "Cache dependencies" and "Install dependencies" steps are repeated in all jobs
  * ".github/actions" folder
    * any name is accepted
    * add custom actions
      * "cached-deps"
        * composite custom action
      * "deploy-s3-docker"
        * docker custom action
      * "deploy-s3-javascript"
        * js custom action -- "main.js" --
* vite
  * Dependency which contains
    * dev server for your source files
    * build command