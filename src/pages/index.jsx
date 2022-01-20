import React from 'react'
import {graphql} from 'gatsby'
import Animation from '../components/Animation/Animation'
import Benefits from '../components/Benefits/Benefits'
import Layout from '../components/Layout/Layout'
import Vacancies from '../components/Vacancies/Vacancies'
import History from '../components/History/History'
import Values from '../components/Values/Values'
import Seo from '../components/Seo/Seo'


const IndexPage = ({data}) => {

  return (
    <Layout theme={'dark'}>
      <Seo/>
      <div className="ContentGroup ContentGroup--absolute">
        <section className="Section Section--start">
          <div className="Section-content">
            <div className="ContentGroup u-widthMedium u-centered">
              <div className="ContentGroup-title">
                <h1 className="Typography Typography--heading1 Typography--centered Typography--white">
                  Join the Team
                </h1>
              </div>
              <p className="Typography Typography--body3 Typography--white Typography--centered u-opacity-8">
              Respectfully and honestly working on high value software products along with customers to serve their business needs. 
              </p>
            </div>
          </div>
        </section>
      </div>
      <Animation/>
      <Vacancies data={data} />
      <Benefits/>
      <Values/>
      <History/>
    </Layout>
  )
}

export const query = graphql`
      query Vacancies {
          allMarkdownRemark {
              nodes {
                  id
                  frontmatter {
                      location
                      title
                  }
                  fields {
                      slug
                  }
              }

          }
      }
  `


export default IndexPage