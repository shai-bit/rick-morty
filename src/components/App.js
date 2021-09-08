import React, { useState, useEffect } from 'react';
import SearchBar from './SearchBar';
import CharacterList from './CharacterList';
import './App.css';
import axios from 'axios';

const App = () => {
  const [results, setResults] = useState([]);
  const [error, setError] = useState(false);

  useEffect(() => {
    onFormSubmit();
  }, []);

  const onFormSubmit = async (character) => {
    try {
      setError(false);
      const response = await axios.get(
        'https://rickandmortyapi.com/api/character/',
        {
          params: {
            name: character,
          },
        }
      );
      setResults(response.data.results);
    } catch (error) {
      setResults([]);
      setError(true);
    }
  };

  return (
    <div className="main">
      <SearchBar onTermSubmit={onFormSubmit} />
      <CharacterList results={results} />
      {error ? <b>No character found</b> : null}
    </div>
  );
};

export default App;
