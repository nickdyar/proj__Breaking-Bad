import React from 'react'
import spinner from '../../img/spinner copy.gif'

const Spinner = () => {
  return (
    <img
      src={spinner}
      style={{ width: '220px', margin: 'auto', display: 'block' }}
      alt='Loading'
    />
  )
}

export default Spinner
