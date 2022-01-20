import React from 'react'
import PropTypes from 'prop-types'
import { Helmet } from 'react-helmet'
import { useStaticQuery, graphql } from 'gatsby'

const Seo = ({ title, customDesc, article }) => {
  const { site, allMarkdownRemark } = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            title
            description
            titleTemplate
            url
          }
        }
        allMarkdownRemark {
          nodes {
            fields {
              slug
            }
          }
          edges {
            node {
              frontmatter {
                title
              }
            }
          }
        }
      }
    `,
  )

  const description =
    customDesc ||
    `Company Anadea is looking for an ${title}. Learn about job requirements, duties and opportunities here.`

  const slugIdx = allMarkdownRemark.edges?.findIndex(elem => elem.node.frontmatter.title === title ? true: false)
  const slug = allMarkdownRemark.nodes[slugIdx]?.fields.slug
  const pageUrl = slug ? site.siteMetadata.url + slug: site.siteMetadata.url
  return (
    <Helmet
      title={title || site.siteMetadata.title}
      titleTemplate={site.siteMetadata.titleTemplate}
      htmlAttributes={{
        lang: 'en',
      }}
      meta={[
        {
          name: 'description',
          content: description,
        },
        {
          property: 'og:description',
          content: description,
        },
        {
          property: 'twitter:description',
          content: description,
        },
        {
          property: 'og:type',
          content: article ? 'article':'website',
        },
        {
          property: 'og:url',
          content: pageUrl
        },
        {
          property: 'og:title',
          content: title || site.siteMetadata.title,
        },
        {
          property: 'twitter:title',
          content: title || site.siteMetadata.title,
        },
        {
          property: 'og:image',
          content: 'https://jobs.anadea.info/images/icons/preview-logo.png',
        },
        {
          property: 'twitter:image',
          content: 'https://jobs.anadea.info/images/icons/preview-logo.png',
        },
        {
          property: 'twitter:card',
          content: 'https://jobs.anadea.info/images/icons/preview-logo.png',
        },
      ]}
    />
  )
}

Seo.defaultProps = {
  customDesc: 'We hire young and talented specialists.',
  title: 'Jobs',
}

Seo.propTypes = {
  customDesc: PropTypes.string,
  title: PropTypes.string,
}

export default Seo
