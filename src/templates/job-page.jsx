import React from 'react'
import Benefits from '../components/Benefits/Benefits'
import Layout from '../components/Layout/Layout'
import ApplyForm from '../components/ApplyForm/ApplyForm'
import Seo from '../components/Seo/Seo'

const JobPage = ({ pageContext }) => {
  return (
    <React.Fragment>
      <Seo title={pageContext.title} customDesc={''} />
      {pageContext ? (
        <Layout theme={'white'}>
          <div className="Section Section--job">
            <div className="Section-content">
              <div className="row">
                <div className="col-md-8">
                  <div className="ContentGroup ContentGroup--padded">
                    <div className="ContentGroup-title">
                      <h1 className="Typography Typography--heading2 Typography--cod-gray">
                        {pageContext.title}
                      </h1>
                    </div>
                    <p className="Typography Typography--body2 Typography--cod-gray">
                      <span className="Typography--bold">Location</span>:{' '}
                      {`${pageContext.location}`}
                    </p>
                  </div>
                  <div
                    className="JobPage"
                    dangerouslySetInnerHTML={{
                      __html: pageContext.html,
                    }}
                  />
                </div>
                <div className="col-md-4">
                  <ApplyForm jobTitle={pageContext.title} />
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
