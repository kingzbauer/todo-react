const withSass = require('@zeit/next-sass');

exports = withSass({
  sassLoaderOptions: {
    includePaths: ["node_modules"]
  },
  env: {
    apiHost: process.env.API_HOST,
    cliApiHost: process.env.CLI_API_HOST
  }
});

module.exports = exports;
