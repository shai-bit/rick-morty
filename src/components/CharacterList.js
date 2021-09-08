import React from 'react';
import CharacterCard from './CharacterCard';
import './CharacterList.css';

const CharacterList = ({ results }) => {
  const renderedResults = results.map((result) => {
    return <CharacterCard key={result.id} character={result} />;
  });
  return <div className="character-list">{renderedResults}</div>;
};

export default CharacterList;
