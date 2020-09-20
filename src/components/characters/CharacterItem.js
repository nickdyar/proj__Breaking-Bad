import React from 'react';

const CharacterItem = ({ character }) => {
  // console.log(character);
  return (
    <div className='card'>
      <div className='card-inner'>
        <div className='card-front'>
          <img src={character.img} className='card-img' alt='' />
        </div>
        <div className='card-back'>
          <h1 className='card-title'>{character.name}</h1>
            <ul className='card-list'>
              <li className='card-item'>
              <strong>Actor:</strong> {character.portrayed}
              </li>
              <li className='card-item'>
              <strong>Nickname:</strong> {character.nickname}
              </li>
              <li className='card-item'>
              <strong>Occupation:</strong> {character.occupation}
              </li>
              <li className='card-item'>
              <strong>Status:</strong> {character.status}
              </li>
            </ul>
        </div>
      </div>
    </div>
  )
}

export default CharacterItem;
