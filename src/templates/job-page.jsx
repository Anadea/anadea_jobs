import React from 'react'
import Benefits from '../components/Benefits/Benefits'
import { graphql, useStaticQuery } from 'gatsby'
import Layout from '../components/Layout/Layout'
import ApplyForm from '../components/ApplyForm/ApplyForm'
import Seo from '../components/Seo/Seo'

const JobPage = ({ path, pageContext }) => {
  const data = useStaticQuery(graphql`
    query {
      allMarkdownRemark {
        nodes {
          html
          frontmatter {
            title
            location
          }
          fields {
            slug
          }
        }
      }
    }
  `)
  const nodes = data.allMarkdownRemark.nodes.find(
    (elem) => elem.fields.slug === path,
  )
  return (
    <React.Fragment>
      <Seo title={pageContext.title} customDesc={''} article={true} />
      {nodes ? (
        <Layout theme={'white'}>
          <div className="Section Section--job">
            <div className="Section-content">
              <div className="row">
                <div className="col-md-8">
                  <div className="ContentGroup ContentGroup--padded">
                    <div className="ContentGroup-title">
                      <h1 className="Typography Typography--heading2 Typography--cod-gray">
                        {nodes.frontmatter.title}
                      </h1>
                    </div>
                    <p className="Typography Typography--body2 Typography--cod-gray">
                      <span className="Typography--bold">Location</span>:{' '}
                      {`${nodes.frontmatter.location}`}
                    </p>
                  </div>
                  <div
                    className="JobPage"
                    dangerouslySetInnerHTML={{
                      __html: nodes.html,
                    }}
                  />
                </div>
                <div className="col-md-4">
                  <ApplyForm data={nodes} />
                </div>
              </div>
            </div>
          </div>
          <Benefits />
        </Layout>
      ) : (
        ''
      )}
    </React.Fragment>
  )
}

export default JobPage
