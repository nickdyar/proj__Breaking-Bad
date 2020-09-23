import React from 'react'
import logo from '../../img/logo-bb-white.svg'

const Header = () => {
  return (
    <div className="header__wrapper">
      <header>
        <img src={logo} className='header__logo' alt='' />
        <h1 className='header__title'>Character Database</h1>
      </header>
    </div>
  )
}

export default Header;