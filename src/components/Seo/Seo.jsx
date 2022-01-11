import React from 'react'
import Helmet from 'react-helmet'
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
  const description = customDesc || `Company Anadea is looking for an ${title}. Learn about job requirements, duties and opportunities here.`
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

export default Seo
