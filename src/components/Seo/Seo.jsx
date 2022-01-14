import React from 'react'
import PropTypes from 'prop-types'
import { Helmet } from 'react-helmet'
import { useStaticQuery, graphql } from 'gatsby'

const Seo = ({ title, customDesc }) => {
  const { site } = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            title
            description
            titleTemplate
          }
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
          content: window.location.href
        },
        {
          name: 'twitter:url',
          content: window.location.href
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
