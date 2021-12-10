import React from 'react'
import Benefits from '../components/Benefits/Benefits'
import { graphql, StaticQuery } from 'gatsby'
import Layout from '../components/Layout/Layout'
import ApplyForm from '../components/ApplyForm/ApplyForm'

const JobPage = props => {
  const path = props.path;
  return (
    <StaticQuery
      query={graphql`
        query {
          allMarkdownRemark {
            edges {
              node {
                html
                frontmatter {
                  title
                  location
                  linkedIn
                }
                fields {
                  slug
                }
              }
            }
          }
        }
      `}
      render={data => {
        const node = data.allMarkdownRemark.edges.find(elem => elem.node.fields.slug === path).node;
        
        return (<Layout theme={'white'}>
          <div className="Section Section--start">
            <div className="Section-content">
              <div className="row">
                <div className="col-md-8">
                  <div className="ContentGroup ContentGroup--padded">
                    <div className="ContentGroup-title">
                      <h1 className="Typography Typography--heading1 Typography--cod-gray">
                        {node.frontmatter.title}
                      </h1>
                    </div>
                    <p className="Typography Typography--body2 Typography--cod-gray">
                      {`Location: ${node.frontmatter.location}`}
                    </p>
                  </div>
                  <div
                    className="JobPage"
                    dangerouslySetInnerHTML={{
                      __html: node.html,
                    }}
                  />
                </div>
                <div className="col-md-4">
                  <ApplyForm data={node} />
                </div>
              </div>
            </div>
          </div>
          <Benefits />
        </Layout>
        )
      }
      }
    />
  )
}

export default JobPage
