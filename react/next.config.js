/* eslint-disable @typescript-eslint/no-var-requires */
const withImages = require('next-images');

module.exports = withImages({
  basePath: process.env.NODE_ENV === 'production' ? '/estudo/spiderman-frontweek/react' : '',
  compress: true,
  devIndicators: {
    autoPrerender: false,
  },
});
