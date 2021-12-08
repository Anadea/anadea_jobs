module.exports = {
  siteMetadata: {
    title: 'Jobs - Anadea',
  },
  plugins: [
    'gatsby-plugin-netlify-cms',
    'gatsby-plugin-sass',
    'gatsby-plugin-image',
    'gatsby-plugin-sharp',
    'gatsby-transformer-remark',
    'gatsby-transformer-sharp',
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'images',
        path: `${__dirname}/src/images/`,
      },
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'fonts',
        path: `${__dirname}/static/fonts/`,
      },
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'markdowns',
        path: `${__dirname}/src/markdown-pages/`,
      },
    },
  ],
}
