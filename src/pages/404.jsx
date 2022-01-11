import React from 'react'
import '../styles/stylesheets/modules/_404.scss'
import Seo from '../components/Seo/Seo'

const NotFoundPage = () => (
  <div class="page-404">
    <Seo title={404} customDesc={`The page you were looking for doesn't exist (404)`}/>
    <h1>The page you were looking for doesn't exist.</h1>
    <p>You may have mistyped the address or the page may have moved.</p>
  </div>
)

export default NotFoundPage
