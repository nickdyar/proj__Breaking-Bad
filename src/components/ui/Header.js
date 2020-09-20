import React from 'react'
import logo from '../../img/logo-bb-white.svg'

const Header = () => {
  return (
    <header>
      <img src={logo} className='logo' alt='' />
      <h1 className='intro'>Character Database</h1>
    </header>
  )
}

export default Header;