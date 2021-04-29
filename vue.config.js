module.exports = {
  css: {
    loaderOptions: {
      sass: {
        // data: `@import "@/css/capwell.scss";`,
        // additionalData: `@import "@/css/capwell.scss";`,
        prependData: `@import "@/css/css.scss";`,
      },
    },
  },
};
