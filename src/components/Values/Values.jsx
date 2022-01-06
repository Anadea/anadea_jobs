import React from 'react'
import ImageProvider from '../ImageProvider/ImageProvider'

const Values = () => {
  return (
    <div className="u-bg-jobs-bastille">
      <section className="Section">
        <div className="Section-content">
          <div className="ContentGroup ContentGroup--padded u-centered u-mb-15">
            <div className="ContentGroup-title">
              <h2 className="Typography Typography--heading2 Typography--centered Typography--white">
                History
              </h2>
            </div>
            <div className="row">
              <div className="offset-md-3 col-md-6">
                <p className="Typography Typography--body3 Typography--white Typography--centered Typography--thin u-pb-dk-40 u-pb-mb-20">
                  Anadea Inc. was born on 17th of December 2000 when 4 young
                  talented software developers decided to create a company that
                  will be the best place for programmers.
                </p>
              </div>
              <div className="offset-md-3 col-md-6">
                <p className="Typography Typography--body3 Typography--white Typography--centered Typography--thin u-pb-dk-40 u-pb-mb-20">
                  Key components of a company's success are flexible business
                  processes,usage of effective technologies, continuous
                  improvement of coworker`s qualifications, complex approach to
                  solving business tasks and success of our customers. Each one
                  of us contributes to a common result. The more successful the
                  company is, the more successful we are.{' '}
                </p>
              </div>
            </div>
          </div>

          <div className="row">
            <div className="offset-md-2 col-md-4">
              <div className="ContentGroup ContentGroup--padded u-centered">
                <ImageProvider fileName="1.png" className="Image" alt="" />
              </div>
            </div>

            <div className="col-md-5">
              <div className="ContentGroup ContentGroup--padded u-centered">
                <div className="ContentGroup-title">
                  <ImageProvider fileName="2.png" className="Image" alt="" />
                </div>
              </div>
            </div>

            <div className="col-md-7">
              <div className="ContentGroup ContentGroup--padded u-centered">
                <ImageProvider fileName="3.png" className="Image" alt="" />
              </div>
            </div>

            <div className="col-md-5">
              <div className="ContentGroup ContentGroup--padded u-centered">
                <div className="ContentGroup-title">
                  <ImageProvider fileName="4.png" className="Image" alt="" />
                </div>
              </div>
            </div>

            <div className="offset-md-1 col-md-5">
              <div className="ContentGroup ContentGroup--padded u-centered">
                <div className="ContentGroup-title">
                  <ImageProvider fileName="5.png" className="Image" alt="" />
                </div>
              </div>
            </div>

            <div className="col-md-5">
              <div className="ContentGroup ContentGroup--padded u-centered">
                <div className="ContentGroup-title">
                  <ImageProvider fileName="6.png" className="Image" alt="" />
                </div>
              </div>
            </div>

            <div className="offset-md-3 col-md-6">
              <p className="Typography Typography--body3 Typography--white Typography--centered Typography--thin u-pt-dk-40">
                We appreciate versatile experience, provide you with mentor`s
                support from the first workday in the company, and care about
                support of the team`s resource state. We drive expertise and
                experience exchange and aren't afraid of professional and life
                challenges!
              </p>
            </div>
          </div>
        </div>
      </section>

      <div className="Section u-noPadded">
        <div className="ContentGroup ContentGroup--padded ContentGroup--absolute d-flex u-h-100 flex-column-reverse">
          <div className="Section-content">
            <div className="row flex-column align-content-end u-text-align-right">
              <p className="Typography Typography--heading2 Typography--right Typography--white u-pb-dk-40">
                Values
              </p>
              <ul className='Typography Typography--body3 Typography--white  Typography--thin  u-pb-dk-40'>
                <li>Respect</li>
                <li>Freedom of communication and choice</li>
                <li>Professional pride</li>
                <li>Honesty</li>
                <li>Erudition and broad worldview</li>
              </ul>
            </div>
          </div>
        </div>
        <ImageProvider fileName="7.png" className="Image" alt="" />
      </div>

      <section className="Section u-noPaddedBottom">
        <div className="Section-content">
          <div className="row">
            <div className="col-md-5">
              <div className="ContentGroup ContentGroup--padded u-centered">
                <div className="ContentGroup-title">
                  <ImageProvider fileName="8.png" className="Image" alt="" />
                </div>
              </div>
            </div>

            <div className="col-md-4">
              <div className="ContentGroup ContentGroup--padded u-centered">
                <ImageProvider fileName="9.png" className="Image" alt="" />
              </div>
            </div>

            <div className="col-md-3">
              <div className="ContentGroup ContentGroup--padded u-centered">
                <ImageProvider fileName="10.png" className="Image" alt="" />
              </div>
            </div>

            <div className="offset-md-1 col-md-5">
              <div className="ContentGroup ContentGroup--padded u-centered">
                <ImageProvider fileName="11.png" className="Image" alt="" />
              </div>
            </div>

            <div className="col-md-5">
              <div className="ContentGroup ContentGroup--padded u-centered">
                <div className="ContentGroup-title">
                  <ImageProvider fileName="12.png" className="Image" alt="" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Values
