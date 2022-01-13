import React from 'react'
import PropTypes from "prop-types"
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
          content: title ? description : site.siteMetadata.description,
        },
      ]}
    />
  )
}

Seo.defaultProps = {
  customDesc: 'We hire young and talented specialists.',
  title: 'Jobs'
}

Seo.propTypes = {
  customDesc: PropTypes.string,
  title: PropTypes.string,
}

export default Seo
