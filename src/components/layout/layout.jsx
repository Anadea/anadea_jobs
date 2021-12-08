import React from 'react'
import Header from '../header/header'
import Footer from '../footer/footer'


const Layout = ({ children, theme }) => {
  return (
    <>
      <Header  theme={theme}/>
      <main>{children}</main>
      <Footer />
    </>
  )
}

export default Layout
