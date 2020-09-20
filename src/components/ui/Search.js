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
      <form>
        <input
          type="text"
          className="form-control"
          placeholder="search by name"
          value={text}
          onChange={(e) => onChange(e.target.value)}
          autoFocus
          >
        </input>
      </form>
    </section>
  )
}

export default Search;
