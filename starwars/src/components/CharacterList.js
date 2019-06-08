import React from 'react';
import Character from './Character';

const CharacterList = props => {
    console.log("Character List:", props);
    return (
        <div className="character-list">
            {props.characters.map(character => (
                <Character character={character} key={character.created}/>
            ))}
        </div>
    );
};

export default CharacterList;