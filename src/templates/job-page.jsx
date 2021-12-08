import React from 'react'
import Benefits from '../components/Benefits/Benefits'
import { graphql } from 'gatsby'
import Layout from '../components/Layout/Layout'
import ApplyForm from '../components/ApplyForm/ApplyForm'

const JobPage = ({ data  }) => {
  const job = data.markdownRemark
  return (
    <Layout theme={'white'}>
      <div className="Section Section--start">
        <div className="Section-content">
          <div className="row">
            <div className="col-md-8">
              <div className="ContentGroup ContentGroup--padded">
                <div className="ContentGroup-title">
                  <h1 className="Typography Typography--heading1 Typography--cod-gray">
                    {job.frontmatter.title}
                  </h1>
                </div>
                <p className="Typography Typography--body2 Typography--cod-gray">
                  {`Location: ${job.frontmatter.location}`}
                </p>
              </div>
              <div
                className="JobPage"
                dangerouslySetInnerHTML={{ __html: job.html }} />
            </div>
            <div className="col-md-4">
              <ApplyForm data={data}/>
            </div>
          </div>
        </div>
      </div>
      <Benefits />
    </Layout>
  )
}

export default JobPage

export const query = graphql`
  query($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      frontmatter {
        title
        location
        linkedIn
      }
    }
  }
`
