const path = require('path')
const { createFilePath } = require('gatsby-source-filesystem')

exports.onCreateNode = ({ node, getNode, actions }) => {
  const { createNodeField } = actions
  if (node.internal.type === 'MarkdownRemark') {
    const slug = createFilePath({ node, getNode })
    createNodeField({
      node,
      name: 'slug',
      value: slug,
    })
  }
}


exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions
  return graphql(`
    {
      allMarkdownRemark {
        edges {
          node {
            fields {
              slug
            }
            frontmatter {
              isActive
            }
          }
        }
      }
    }
  `).then(result => {
    if (result.data.allMarkdownRemark.edges.length > 0) {
      result.data.allMarkdownRemark.edges.forEach(({ node }) => {
        if (node.frontmatter.isActive) {
          createPage({
            path: node.fields.slug,
            component: path.resolve('./src/templates/job-page.jsx'),
            context: {
              slug: node.fields.slug,
            },
          })
        }
      })
    }
    
  })
}

exports.createSchemaCustomization = ({ actions }) => {
  const { createTypes } = actions

  // Explicitly define the siteMetadata {} object
  // This way those will always be defined even if removed from gatsby-config.js

  // Also explicitly define the Markdown frontmatter
  // This way the "MarkdownRemark" queries will return `null` even when no
  // vacancies are stored inside "/markdown-pages" instead of returning an error
  createTypes(`

    type MarkdownRemark implements Node {
      frontmatter: Frontmatter
      fields: Fields
    }

    type Frontmatter {
      title: String
      location: String
      isActive: Boolean
      linkedIn: String
    }

    type Fields {
      slug: String
    }
  `)
}
