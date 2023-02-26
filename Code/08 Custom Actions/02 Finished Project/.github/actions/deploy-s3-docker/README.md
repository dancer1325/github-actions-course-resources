# Docker custom action
* Dockerfile with a python script for a custom action which upload files to S3 bucket

## How has it been created?
* Create Dockerfile
* Create python script
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
* S3 buckets generate website to check it's content