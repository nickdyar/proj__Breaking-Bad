import React from 'react';

const CharacterItem = ({ character }) => {
  return (
    <article className='card'>
      <div className='card__inner'>
        <div className='card__front'>
          <img src={character.img} className='card__img' alt='' />
        </div>
        <div className='card__back'>
          <h1 className='card__title'>{character.name}</h1>
            <ul className='card__list'>
              <li className='card__item'>
              <strong>Actor:</strong> {character.portrayed}
              </li>
              <li className='card__item'>
              <strong>Nickname:</strong> {character.nickname}
              </li>
              <li className='card__item'>
              <strong>Birthdate:</strong> {character.birthday}
              </li>
              <li className='card__item'>
              <strong>Status:</strong> {character.status}
              </li>
            </ul>
        </div>
      </div>
    </article>
  )
}

export default CharacterItem;
