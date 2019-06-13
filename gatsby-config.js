module.exports = {
    siteMetadata: {
        title: `Integrify Design Bootcamp`,
        description: `Prep project for Integrify Design Bootcamp (June 26th-28th, 2019)`,
        author: `André Vollrath and Xurxe Toivo García`,
    },
    plugins: [
        `gatsby-plugin-react-helmet`,
        {
            resolve: `gatsby-source-filesystem`,
            options: {
                name: `images`,
                path: `${__dirname}/src/images`,
            },
        },
        `gatsby-transformer-sharp`,
        `gatsby-plugin-sharp`,
        `gatsby-plugin-manifest`
    ],
}
