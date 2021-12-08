import React from 'react'
import Benefits from '../components/benefits/benefits'
import { graphql } from 'gatsby'
import Layout from '../components/layout/layout'

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
              <div className="FormBlue u-bg-royal-blue">
                <div className="FormBlue-title">
                  <p className="Typography Typography--white u-bold">
                    Apply now
                  </p>
                  <form id="new_job_application">
                    <input
                      type="hidden"
                      name="job_position"
                      id="job-position"
                      value={job.frontmatter.title}
                    />
                    <div className="InputGroup">
                      <div className="InputGroup-input">
                        <input
                          className="Input Input--large Input--autofillDark Typography Typography--white"
                          id="job_application_name"
                          type="text"
                          name="job_application[name]"
                        />
                      </div>
                      <div className="InputGroup-label">
                        <label
                          className="Label Typography Typography--white d-flex align-items-center"
                          htmlFor={'job_application_name'}
                        >
                          Name:
                        </label>
                      </div>
                    </div>

                    <div className="InputGroup">
                      <div className="InputGroup-input">
                        <input
                          className="Input Input--large Input--autofillDark Typography Typography--white"
                          id="job_application_phone"
                          type="text"
                          name="job_application[phone]"
                        />
                      </div>
                      <div className="InputGroup-label">
                        <label
                          className="Label Typography Typography--white d-flex align-items-center"
                          htmlFor={'job_application_phone'}
                        >
                          Phone:
                        </label>
                      </div>
                    </div>

                    <div className="InputGroup">
                      <div className="InputGroup-input">
                        <input
                          className="Input Input--large Input--autofillDark Typography Typography--white"
                          id="job_application_email"
                          type="text"
                          name="job_application[email]"
                        />
                      </div>
                      <div className="InputGroup-label">
                        <label
                          className="Label Typography Typography--white d-flex align-items-center"
                          htmlFor={'job_application_email'}
                        >
                          Email:
                        </label>
                      </div>
                    </div>

                    <div className="InputGroup">
                      <div className="InputGroup-input">
                        <input
                          className="Input Input--large Input--autofillDark Typography Typography--white"
                          id="job_application_skype"
                          type="text"
                          name="job_application[skype]"
                        />
                      </div>
                      <div className="InputGroup-label">
                        <label
                          className="Label Typography Typography--white d-flex align-items-center"
                          for="job_application_skype"
                        >
                          Skype:
                        </label>
                      </div>
                    </div>
                    <div className="InputGroup InputGroup--noBordered">
                      <label
                        className="d-flex u-w-100 align-items-center justify-content-center"
                        for="job_application_resume_file"
                      >
                        <span className="FormBlue-attachmentIcon u-opacity-6"></span>
                        <span className="FormBlue-attachmentLabel jsFileInputLabel Typography Typography--white Typography--body2 d-flex align-items-center">
                          Attach a resume
                        </span>
                      </label>
                      <div className="d-none">
                        <input
                          data-size="500"
                          className="jsFileInput"
                          type="file"
                          name="job_application[resume_file]"
                          id="job_application_resume_file"
                        />
                      </div>
                    </div>
                    <button
                      name="button"
                      type="submit"
                      className="Button Button--white Typography Typography---royal-blue u-w-100"
                      data-disable-with="Sending..."
                    >
                      Send
                    </button>
                  </form>
                </div>
              </div>
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
      }
    }
  }
`
