import React from 'react';
import './StarWars.css'

const Character = props => {
    console.log("Character Component", props);
    return (
        <div className="character">
            <h2 className="character-name">
            {props.character.name}
            </h2>
        </div>
    );
};

export default Character;