const withSass = require('@zeit/next-sass');

console.log(process.env.API_HOST);

exports = withSass({
  sassLoaderOptions: {
    includePaths: ["node_modules"]
  },
  env: {
    apiHost: process.env.API_HOST,
    cliApiHost: process.env.CLI_API_HOST
  }
});

console.log(exports);

module.exports = exports;
