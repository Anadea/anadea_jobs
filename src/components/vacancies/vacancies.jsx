import React, {useState} from 'react'
import {Link} from 'gatsby'
import VacanciesCount from "../vacanciesCount/vacanciesCount";

const Vacancies = ({ data }) => {
  const [showCount, setShowCount] = useState(5);
  const [buttonText, setButtonText] = useState('Show more');
  const filteredData = data.allMarkdownRemark.nodes.filter(
    (elem) => elem.frontmatter.isActive === true,
  )

  const showVacancies = () => {
    if (showCount === null) {
      setShowCount(5);
      setButtonText('Show more');
    } else {
      setShowCount(null);
      setButtonText('Show less');
    }
  }

  return (
    <section className="Section u-noPaddedTop u-bg-jobs-bastille">
      <div className="Section-content">
        <div className="ContentGroup ContentGroup--padded u-centered">
          <div className="ContentGroup-title">
            <h2 className="Typography Typography--heading2 Typography--centered Typography--white">
              Open positions <VacanciesCount count={filteredData.length} />
            </h2>
          </div>
          <div className="row">
            <div className="offset-md-3 col-md-6">
              <p className="Typography Typography--body3 Typography--white Typography--centered u-opacity-8 u-mb-15">
                His responsibility was to find capable engineers and manage their work.
              </p>
            </div>
          </div>
        </div>
        <ul className="row vacancies-list">
          {filteredData.map(( elem, index ) => {
            return index < showCount || showCount === null ? (
              <li key={elem.id}
                  className={filteredData.length > 4 ? 'col-md-3 vacancies-list__item': 'col-md-3'}>
              <Link className="RoundedWrapper RoundedWrapper--small u-bg-jobs-bastille2 u-h-100 d-flex flex-column Typography Typography--no-underline" to={elem.fields.slug}>
                <div className="u-h-100">
                  <h2 className="Typography Typography--heading3 Typography--jobs-bright-turquoise u-mb-15">
                    {elem.frontmatter.title}
                  </h2>
                  <p className="Typography Typography--body2 Typography--white u-opacity-6">
                    {elem.frontmatter.location}
                  </p>
                </div>
                </Link>
              </li>
            ): ''
          })}
        </ul>
        {filteredData.length > 5 ?  <button className="Button d-block u-m-auto u-mb-20" onClick={showVacancies}>{buttonText}</button>: ''}
      </div>
    </section>
  )
}

export default Vacancies
