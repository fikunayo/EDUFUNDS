module.exports = {
    css: {
      loaderOptions: {
        sass: {
          data: `@import "@/styles/_variables.scss";`,
          // prependData: `@import "~@/sass/main.scss";`
        }
      }
    }
  };