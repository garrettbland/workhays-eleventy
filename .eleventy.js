const Nunjucks = require("nunjucks");

module.exports = function (eleventyConfig) {
  let nunjucksEnvironment = new Nunjucks.Environment(
    new Nunjucks.FileSystemLoader("src")
  );

  eleventyConfig.setLibrary("njk", nunjucksEnvironment);

  eleventyConfig.addPassthroughCopy({ "src/public": "/" });

  return {
    dir: {
      // ⚠️ These values are both relative to your input directory.
      input: "src/pages",
      includes: "../includes",
      layouts: "../layouts",
      output: "./dist",
    },
  };
};
