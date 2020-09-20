import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Header from './components/ui/Header';
import CharacterGrid from './components/characters/CharacterGrid';
import Search from './components/ui/Search';
import './components/styles/App.css';


const App = () => {
  const [characters, setCharacters] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [query, setQuery] = useState('');

  useEffect (() =>  {
    const fetchCharacters = async () => {
      const result = await axios( `https://www.breakingbadapi.com/api/characters?name=${query}`)
      setCharacters(result.data);
      setIsLoading(false);
    }
    fetchCharacters();
    // adding `query` as dependency will cause `useEffect` to fire on each search. If blank, useEffect only fires on initial page load.
  }, [query])

  return (
    <div className='container'>
      <Header />
      <Search getQuery={(q) => setQuery(q)} />
      <CharacterGrid isLoading={isLoading} characters={characters} />
    </div>
  )
}

export default App;