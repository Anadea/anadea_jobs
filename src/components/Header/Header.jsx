import React, { useEffect, useState } from 'react'
import logo from '../../images/icons/logo.svg'
import logoText from '../../images/icons/logo-text.svg'

const Header = () => {
  const [offset, setOffset] = useState(false)
  useEffect(() => {
    window.onscroll = () => {
      const transformPoint = 40
      setOffset(window.scrollY > transformPoint)
    }
  }, [])

  return (
    <header
      className={`Navigation jsNavigation u-bg-jobs-bastille ${
        offset ? 'isCompressed' : ''
      }`}
    >
      <nav className="Navigation-content">
        <a className="Navigation-logo" href="https://anadea.info">
          <div className="Navigation-logoImage">
            <img className="Image" alt="logo" src={logo} />
          </div>
          <img className="Image" alt="anadea" src={logoText} />
        </a>
      </nav>
    </header>
  )
}

export default Header
