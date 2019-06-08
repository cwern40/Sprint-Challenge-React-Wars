import React from 'react';
import Character from './Character';

const CharacterList = props => {
    console.log("Character List:", props);
    return (
        <div className="character-list">
            <Character />
        </div>
    );
};

export default CharacterList;