const Nunjucks = require('nunjucks')

module.exports = function (eleventyConfig) {
    let nunjucksEnvironment = new Nunjucks.Environment(
        new Nunjucks.FileSystemLoader('src')
    )

    eleventyConfig.setLibrary('njk', nunjucksEnvironment)

    eleventyConfig.addPassthroughCopy({ 'src/public': '/' })

    /**
     * Add version shortcode to version and cache bust our stylesheet and
     * javascript packages
     */
    eleventyConfig.addGlobalData(
        'version',
        process.env.NODE_ENV === 'production'
            ? `.${process.env.GIT_SHORT_SHA}.`
            : '.'
    )

    return {
        dir: {
            // ⚠️ These values are both relative to your input directory.
            input: 'src/pages',
            includes: '../includes',
            layouts: '../layouts',
            output: './dist',
        },
    }
}
