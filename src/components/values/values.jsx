import React from 'react'
import ImageProvider from '../image-provider/image-provider'

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
                  In 2009 Regan Chorlog became the head manager of OnTrac Resident Manager. His responsibility was to
                  find capable engineers and manage their work.
                </p>
              </div>
            </div>
          </div>

          <div className="row">
            <div className="offset-md-2 col-md-4">
              <div className="ContentGroup ContentGroup--padded u-centered">
                <div className="ContentGroup-title">
                  <p className="Typography Typography--body2-smaller-mobile Typography--white">
                    Stav Online is an interactive e-learning platform that fuses progressive educational practices with
                    modern.
                  </p>
                </div>
                <ImageProvider fileName="1.png" className="Image" alt=""/>
              </div>
            </div>

            <div className="col-md-5">
              <div className="ContentGroup ContentGroup--padded u-centered">
                <div className="ContentGroup-title">
                  <ImageProvider fileName="2.png" className="Image" alt=""/>
                </div>
                <p className="Typography Typography--body2-smaller-mobile Typography--white">
                  Stav Online is an interactive e-learning platform that fuses progressive educational practices with
                  modern.
                </p>
              </div>
            </div>

            <div className="col-md-7">
              <div className="ContentGroup ContentGroup--padded u-centered">
                <ImageProvider fileName="3.png" className="Image" alt=""/>
              </div>
            </div>

            <div className="col-md-5">
              <div className="ContentGroup ContentGroup--padded u-centered">
                <div className="ContentGroup-title">
                  <ImageProvider fileName="4.png" className="Image" alt=""/>
                </div>
                <p className="Typography Typography--body2-smaller-mobile Typography--white">
                  Stav Online is an interactive e-learning platform that fuses progressive educational practices with
                  modern.
                </p>
              </div>
            </div>

            <div className="offset-md-1 col-md-5">
              <div className="ContentGroup ContentGroup--padded u-centered">
                <div className="ContentGroup-title">
                  <ImageProvider fileName="5.png" className="Image" alt=""/>
                </div>
                <p className="Typography Typography--body2-smaller-mobile Typography--white">
                  Stav Online is an interactive e-learning platform that fuses.
                </p>
              </div>
            </div>

            <div className="col-md-5">
              <div className="ContentGroup ContentGroup--padded u-centered">
                <div className="ContentGroup-title">
                  <ImageProvider fileName="6.png" className="Image" alt=""/>
                </div>
                <p className="Typography Typography--body2-smaller-mobile Typography--white">
                  Stav Online is an interactive e-learning platform that fuses.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <div className="Section u-noPadded">
        <div className="ContentGroup ContentGroup--padded ContentGroup--absolute d-flex u-h-100 flex-column-reverse">
          <div className="Section-content">
            <div className="row">
              <div className="offset-md-8 col-md-4 offset-sm-0 col-sm-12 d-md-flex justify-content-end d-block">
                <p className="Typography Typography--body2-smaller-mobile Typography--white">The askMUMM app gives
                  you <br/> the ability to ask a selected <br/> group of people.</p>
              </div>
            </div>
          </div>
        </div>
        <ImageProvider fileName="7.png" className="Image" alt=""/>
      </div>
      <section className="Section u-noPaddedBottom">
        <div className="Section-content">
          <div className="row">
            <div className="col-md-5">
              <div className="ContentGroup ContentGroup--padded u-centered">
                <div className="ContentGroup-title">
                  <ImageProvider fileName="8.png" className="Image" alt=""/>
                </div>
                <p className="Typography Typography--body2-smaller-mobile Typography--white">Uses progressive
                  educational practices with modern.</p>
              </div>
            </div>

            <div className="col-md-4">
              <div className="ContentGroup ContentGroup--padded u-centered">
                <ImageProvider fileName="9.png" className="Image" alt=""/>
              </div>
            </div>

            <div className="col-md-3">
              <div className="ContentGroup ContentGroup--padded u-centered">
                <ImageProvider fileName="10.png" className="Image" alt=""/>

              </div>
            </div>

            <div className="offset-md-1 col-md-5">
              <div className="ContentGroup ContentGroup--padded u-centered">
                <ImageProvider fileName="11.png" className="Image" alt=""/>

              </div>
            </div>

            <div className="col-md-5">
              <div className="ContentGroup ContentGroup--padded u-centered">
                <div className="ContentGroup-title">
                  <ImageProvider fileName="12.png" className="Image" alt=""/>
                </div>
                <p className="Typography Typography--body2-smaller-mobile Typography--white">Uses progressive
                  educational practices with modern.</p>

              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Values
