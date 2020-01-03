const withSass = require('@zeit/next-sass');

console.log(process.env.API_HOST);

module.exports = withSass({
  sassLoaderOptions: {
    includePaths: ["node_modules"]
  },
  env: {
    apiHost: process.env.API_HOST
  }
});
