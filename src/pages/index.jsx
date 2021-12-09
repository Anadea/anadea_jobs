import React from 'react'
import {graphql} from 'gatsby'
import Animation from '../components/Animation/Animation'
import Benefits from '../components/Benefits/Benefits'
import Layout from '../components/Layout/Layout'
import Vacancies from '../components/Vacancies/Vacancies'
import Values from '../components/Values/Values'

const IndexPage = ({data}) => {
  const isActive = data.allMarkdownRemark.nodes.find(elem => elem.frontmatter.isActive);

  return (
    <Layout theme={'dark'}>
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
                Stav Online is an interactive e-learning platform that fuses progressive educational practices with
                modern.
              </p>
            </div>
          </div>
        </section>
      </div>
      <Animation/>
      <Vacancies data={data} />
      <Benefits/>
      <Values/>
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
                      isActive
                  }
                  fields {
                      slug
                  }
              }

          }
      }
  `


export default IndexPage