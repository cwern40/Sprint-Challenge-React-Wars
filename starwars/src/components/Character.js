import React from 'react';

const Character = props => {
    console.log("Character Component", props);
    return (
        <div className="character">
            <h2 className="character-name">
            {props.character.name}
            </h2>
            <ul>
                <li>Gender: {props.character.gender}</li>
                <li>Height: {props.character.height}cm</li>
                <li>Weight: {props.character.mass}kg</li>
                <li>Hair Color: {props.character.hair_color}</li>
                <li>Number of Film Appearances: {props.character.films.length}</li>
            </ul>
        </div>
    );
};

export default Character;