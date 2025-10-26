module.exports = function (eleventyConfig) {
   return {
      pathPrefix: "/blog",
      dir: { input: "blog-src", output: "blog" },
      markdownTemplateEngine: "njk",
      htmlTemplateEngine: "njk",
      dataTemplateEngine: "njk"
   };
};

module.exports = function (eleventyConfig) {
   eleventyConfig.addFilter("ruDate", (value, locale = "en", timeZone = "Europe/Warsaw") => {
      const date = value instanceof Date ? value : new Date(value);
      return new Intl.DateTimeFormat(locale, {
         day: "numeric",
         month: "long",
         year: "numeric",
         timeZone
      }).format(date);
   });

   return {
      pathPrefix: "/blog",
      dir: { input: "blog-src", output: "blog" },
      markdownTemplateEngine: "njk",
      htmlTemplateEngine: "njk",
      dataTemplateEngine: "njk"
   };
};
