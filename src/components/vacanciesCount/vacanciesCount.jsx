import React from 'react'

const VacanciesCount = ({ data, count, location }) => {
  return (count ? <span className={`vacancies-count ${location ? `vacancies-count--${location}`: ''}`}>{count}</span> : '');
}

export default VacanciesCount