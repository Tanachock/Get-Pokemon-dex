import React, { useState } from 'react';
import axios from 'axios';
import Pokemondetail from './Pokemondetail';
import './Pokemonlist.css'

const PokemonList = () => {
  const [pokemonData, setPokemonData] = useState([]);

  const fetchPokemonData = async () => {
    try {
      const response = await axios.get('https://pokeapi.co/api/v2/pokemon?offset=0&limit=151');
      const pokemonList = response.data.results;
      setPokemonData(pokemonList);
    } catch (error) {
      console.error('Error fetching Pokemon data:', error.message);
    }
  };

  return (
    <section>
      <div className='Container-btn'>
        <div className='container-title-input'>
          <div className='Title'>
            <p>API</p>
            <p>Pokemon</p>
          </div>
          <div className='Btn'>
            <button className='btn-pokemon' onClick={fetchPokemonData}>Get pokemon dex</button>
          </div>
        </div>
      </div>
      <div className='Container-Card'>
        <div className='Container-poke'>
          <div className='Card'>
            {pokemonData.map((pokemon) => (
              <div key={pokemon.name}>
                <Pokemondetail url={pokemon.url} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default PokemonList;


