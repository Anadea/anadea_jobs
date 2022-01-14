import React from 'react'
import Benefits from '../components/Benefits/Benefits'
import { graphql, StaticQuery } from 'gatsby'
import Layout from '../components/Layout/Layout'
import ApplyForm from '../components/ApplyForm/ApplyForm'
import Seo from '../components/Seo/Seo'

const JobPage = props => {
  const path = props.path;
  return (
    <StaticQuery
      query={graphql`
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
      `}
      render={data => {
        const nodes = data.allMarkdownRemark.nodes.find(elem => elem.fields.slug === path);
    
        return nodes ? (
        <Layout theme={'white'}>
          <Seo title={nodes.frontmatter.title} customDesc={''}/>
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
                      <span className='Typography--bold'>Location</span>: {`${nodes.frontmatter.location}`}
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
        ) : ''
      }
      }
    />
  )
}

export default JobPage
