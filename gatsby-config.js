require("dotenv").config()

module.exports = {
    siteMetadata: {
        title: `Integrify Design Bootcamp`,
        description: `Prep project for Integrify Design Bootcamp (June 26th-28th, 2019)`,
        author: `André Vollrath and Xurxe Toivo García`,
    },
    plugins: [
        `gatsby-plugin-react-helmet`,
        {
            resolve: `gatsby-source-contentful`,
            options: {
                spaceId: process.env.spaceId,
                accessToken: process.env.accessToken,
            },
        },
        `gatsby-transformer-sharp`,
        `gatsby-plugin-sharp`,
        `gatsby-plugin-manifest`,
        {
            resolve: `gatsby-plugin-postcss`,
            options: {
                postCssPlugins: [require(`autoprefixer`)],
            },
        },
    ],
}
