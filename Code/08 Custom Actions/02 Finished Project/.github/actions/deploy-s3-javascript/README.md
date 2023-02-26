# JS custom action
* Node project for a custom action which upload files to S3 bucket

## How has it been created?
* `npm init`
* `npm install @actions/core @actions/github @actions/exec`
* Create a S3 bucket (via console or your preferred one)
  * Follow all the default configurations
  * Allow public access
  * Enable static website hosting
  * Add "PublicRead" policy
* Create Access keys
  * Required to upload to S3 bucket
* Configure the secrets in the remote repository hosting this code, for the variables
  * "AWS_ACCESS_KEY_ID"
  * "AWS_SECRET_ACCESS_KEY"

## Note
* :warning: It's important to commit this 'node_modules' folder
* S3 buckets generate website to check it's content