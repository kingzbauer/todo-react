const withSass = require('@zeit/next-sass');

module.exports = withSass({
  sassLoaderOptions: {
    includePaths: ["node_modules"]
  },
  env: {
    apiHost: process.env.API_HOST
  }
});
