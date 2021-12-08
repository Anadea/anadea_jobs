import React from 'react'
import {withPrefix} from 'gatsby'
import benefitsList from '../../constants/benefits-list'

const Benefits = () => {
  return (
    <section className="Section u-bg-jobs-bastille">
      <div className="Section-content">
        <div className="ContentGroup ContentGroup--padded u-centered">
          <div className="ContentGroup-title">
            <h2 className="Typography Typography--heading2 Typography--centered Typography--white">
              Benefits & Perks
            </h2>
          </div>
          <div className="row">
            <div className="offset-md-3 col-md-6">
              <p className="Typography Typography--body3 Typography--white Typography--centered u-opacity-8 u-mb-60">
                His responsibility was to find capable engineers and manage their work.
              </p>
            </div>
          </div>
        </div>
        <ul className="row">
          {benefitsList.map(benefit => {
            return (
              <li key={benefit.id} className="col-md-4  benefit">
                <div className="ContentGroup" >
                  <div className="benefit__image">
                    <img src={withPrefix(benefit.image)} className="Image "/>
                  </div>
                  <h3 className="Typography Typography--heading3 Typography--centered Typography--white u-mb-10">
                    {benefit.title}
                  </h3>
                  <p className="Typography Typography--body2-smaller-mobile Typography--centered Typography--white Typography--thin benefit__desc">
                    {benefit.description}
                  </p>
                </div>
              </li>
            )
          })}
        </ul>
      </div>
    </section>
  )
}

export default Benefits
