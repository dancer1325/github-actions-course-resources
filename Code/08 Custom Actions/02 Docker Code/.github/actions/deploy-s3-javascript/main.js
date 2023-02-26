const core = require('@actions/core');        //  https://www.npmjs.com/package/@actions/core
// const github = require('@actions/github'); //  https://www.npmjs.com/package/@actions/github
const exec = require('@actions/exec');        //  https://www.npmjs.com/package/@actions/exec

function run() {
  // 0) Add dummy initial message
  core.notice('Hello from my custom JS action')

  // 1) Get some input values
  const bucket = core.getInput('bucket', { required: true });
  const bucketRegion = core.getInput('bucket-region', { required: true });
  const distFolder = core.getInput('dist-folder', { required: true });

  // 2) Upload files
  // Ways to upload it
  // 2.1) Use aws sdk for JS  -- https://docs.aws.amazon.com/sdk-for-javascript/v3/developer-guide/getting-started-nodejs.html --
  // 2.2) Use @actions/exec   -- execute cli tools --
  const s3Uri = `s3://${bucket}`;   // Common s3Uri structure
  // Runner Machine normally contains AWS CLI https://github.com/actions/runner-images/blob/main/images/linux/Ubuntu2204-Readme.md#cli-tools
  exec.exec(`aws s3 sync ${distFolder} ${s3Uri} --region ${bucketRegion}`);

  // github
  // github.getOctokit().rest()      // Octokit client -- allows making easier GitHub REST API
  // github.context.                 // GitHub context

  // 3) Get the S3 website url, setting as output of the JS custom action
  const websiteUrl = `http://${bucket}.s3-website-${bucketRegion}.amazonaws.com`;
  core.setOutput('website-url', websiteUrl); // echo "website-url=..." >> $GITHUB_OUTPUT
}

run();
