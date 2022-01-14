import React from 'react'
import PropTypes from 'prop-types'
import { Helmet } from 'react-helmet'
import { useStaticQuery, graphql } from 'gatsby'

const Seo = ({ title, customDesc }) => {
  const { site, sitePage } = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            title
            description
            titleTemplate,
            url
          }
        }
        sitePage {
          path
        }
      }
    `,
  )

  const description =
    customDesc ||
    `Company Anadea is looking for an ${title}. Learn about job requirements, duties and opportunities here.`
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
          content: description
        },
        {
          name: 'og:description',
          content: description
        },
        {
          name: 'twitter:description',
          content: description,
        },
        {
          name: 'og:type',
          content: 'website'
        },
        {
          name: 'twitter:type',
          content: 'website'
        },
        {
          name: 'og:url',
          content: site.siteMetadata.url + sitePage.path
        },
        {
          name: 'twitter:url',
          content: site.siteMetadata.url + sitePage.path
        },
        {
          name: 'og:title',
          content: title || site.siteMetadata.title
        },
        {
          name: 'twitter:title',
          content: title || site.siteMetadata.title
        },
        {
          name: 'og:image',
          content: 'https://jobs.anadea.info/images/icons/favicon.ico'
        },
        {
          name: 'twitter:image',
          content: 'https://jobs.anadea.info/images/icons/favicon.ico'
        }
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
