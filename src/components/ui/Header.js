import React from 'react'
import logo from '../../img/logo-bb-white.svg'

const Header = () => {
  return (
    <header>
      <img src={logo} className='logo' alt='logo' />
      <h1 className="intro">Character Database</h1>
      <input></input>
    </header>
  )
}

export default Header;