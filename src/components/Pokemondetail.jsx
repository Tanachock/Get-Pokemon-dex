import axios from 'axios';
import { useEffect, useState } from 'react';
import './Pokemondetail.css'


const Pokemondetail = ({ url }) => {
    const [pokemonDetails, setPokemonDetails] = useState(null);

    const fetchPokemonDetails = async (url) => {
        try {
            const response = await axios.get(url);
            const details = response.data;
            setPokemonDetails(details);
            //console.log('Pokemon Details:', details);
        } catch (error) {
            console.error('Error fetching Pokemon details:', error.message);
        }
    };

    useEffect(() => {
        fetchPokemonDetails(url);
    }, [url]);

    return (
        <section>
            {pokemonDetails && (
                <div className='Card-Pokemon'>
                    <div className='Img-Pokemon'>
                        <img src={pokemonDetails.sprites.front_default}></img>
                        <img src={pokemonDetails.sprites.back_default}></img>
                    </div>
                    <div className='detai-pokemon'>
                        <p><span className='bold'>Name: </span><span className='upper'>{pokemonDetails.name}</span></p>
                        <p><span className="bold">Type 1:</span> {pokemonDetails.types[0].type.name}</p>
                        {pokemonDetails.types[1] && <p><span className='bold'>Type 2: </span>{pokemonDetails.types[1].type.name}</p>}
                        <p className='bold'>Base stats</p>
                        <p>hp= {pokemonDetails.stats[0].base_stat}</p>
                        <p>attack= {pokemonDetails.stats[1].base_stat}</p>
                        <p>defense: {pokemonDetails.stats[2].base_stat}</p>
                        <p>special-attack= {pokemonDetails.stats[3].base_stat}</p>
                        <p>special-defense= {pokemonDetails.stats[4].base_stat}</p>
                        <p>speed= {pokemonDetails.stats[5].base_stat}</p>
                    </div>
                </div>
            )}
        </section>
    );
}

export default Pokemondetail
