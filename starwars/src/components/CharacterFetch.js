import React from 'react';
import CharacterList from './CharacterList';

const CharacterFetch = props => {
    const collect = props.mount;
    return (
        <div>
            <CharacterList characters={props.characters} />
        </div>
    );
};

export default CharacterFetch;