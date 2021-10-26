import React from 'react';
import './card.css';

export const Card = props =>(
    <div className="card-continer">
            <img alt="pokemon" src={`https://img.pokemondb.net/artwork/large/${props.pokemon.name}.jpg`}/>
            <h2>{props.pokemon.name[0].toUpperCase()+props.pokemon.name.slice(1)}</h2>
    </div>
);