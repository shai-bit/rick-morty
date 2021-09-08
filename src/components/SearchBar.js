import React, { useState } from 'react';
import './SearchBar.css';

const SearchBar = ({ onTermSubmit }) => {
  const [characterName, setCharacterName] = useState('');

  const onFormSubmit = (e) => {
    e.preventDefault();
    onTermSubmit(characterName);
  };

  return (
    <div className="search-bar">
      <form className="search-bar_form" onSubmit={(e) => onFormSubmit(e)}>
        <label>Enter a character's name: </label>
        <input
          value={characterName}
          onChange={(e) => setCharacterName(e.target.value)}
        />
      </form>
    </div>
  );
};

export default SearchBar;
