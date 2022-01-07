module.exports = {
  css: {
    loaderOptions: {
      sass: {
        additionalData: `
          @import "@/scss/abstracts/index.scss";
          @import "@/scss/base/index.scss";
          @import "@/scss/theme/index.scss";
          `,
      },
    },
  },
};
