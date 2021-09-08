import React, { useState } from 'react';
import './CharacterCard.css';

const CharacterCard = ({ character }) => {
  const [infoVisible, setInfoVisible] = useState(false);
  return (
    <div
      onClick={() => setInfoVisible(!infoVisible)}
      className="character-card"
    >
      <img src={character.image} alt={character.name} />
      <div className="character-card_info">
        <h3>{character.name}</h3>
        <div
          className={`character-card_info ${
            infoVisible ? 'visible' : 'hidden '
          }`}
        >
          <p>
            <b>Gender: </b>
            {character.gender}
          </p>
          <p>
            {' '}
            <b>Origin:</b> {character.origin.name}
          </p>
          <p>
            {' '}
            <b>Status:</b> {character.status}
          </p>
        </div>
      </div>
    </div>
  );
};

export default CharacterCard;
