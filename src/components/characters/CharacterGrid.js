import React from 'react';
import Spinner from '../ui/Spinner';
import CharacterItem from './CharacterItem';

const CharacterGrid = ({ characters, isLoading }) => {
  return isLoading ? (
    <Spinner />
    ) : (
    <section className='cards'>
      {characters.map(character => (
        <CharacterItem key={character.char_id} character={character}></CharacterItem>
      ))}
    </section>
  )
}

export default CharacterGrid;