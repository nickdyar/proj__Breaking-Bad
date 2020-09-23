import React, { useState } from 'react';

const Search = ({ getQuery }) => {
  const [text, setText] = useState('');

  // use 'q' for query
  const onChange = (q) => {
    setText(q)
    getQuery(q)
  }

  return (
  <section className="search">
    <div className="search__wrapper">
      <form className="search__form">
        <input
          type='text'
          className='search__input'
          placeholder='search...'
          value={text}
          onChange={(e) => onChange(e.target.value)}
          autoFocus
          aria-label='search'
          autoComplete='off'
        >
        </input>
      </form>
    </div>
  </section>
  )
}

export default Search;
