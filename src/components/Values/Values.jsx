import React from 'react'

const Values = () => {
  const values = [
    'Respect',
    'Freedom of communication and choice',
    'Professional pride',
    'Honesty',
    'Erudition and broad worldview',
  ]
  return (
    <div className="Section u-bg-jobs-bastille">
      <div className="ContentGroup ContentGroup--padded align-items-center">
        <div className="Section-content">
          <div className="row">
            <div className="col-md-12 d-flex justify-content-center">
              <div className="values__list RoundedWrapper RoundedWrapper--large u-bg-jobs-bastille2">
                <p className="Typography Typography--heading2 Typography--centered Typography--white u-pb-40">
                  Values
                </p>
                <ul>
                  {values.map((elem, index) => {
                    return (
                      <li key={index} className="Typography Typography--heading3 Typography--white">
                        {elem}
                      </li>
                    )
                  })}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Values
