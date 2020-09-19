import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Header from './components/ui/Header';
import './components/styles/App.css';

const App = () => {
  const [characters, setCharacters] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect (() =>  {
    const fetchCharacters = async () => {
      const result = await axios(
        `https://www.breakingbadapi.com/api/characters`
      )
      // console.log(result.data)
    }

    fetchCharacters();
  }, [])


  return (
    <div className="container">
      <Header />
    </div>
  )
}

export default App;