const path = require('path');

module.exports = {
  chainWebpack: (config) => {
    config.resolve.alias
      .set('@', path.resolve(__dirname, 'src'));
  },
  css: {
    loaderOptions: {
      sass: {
        prependData: `
          @import "@/styles/_variables.scss";
          @import "@/styles/_mixins.scss";
        `,
      },
    },
  },
};
