/* eslint-disable @next/next/no-img-element */
import { useState } from 'react';
import { Decoration } from '../Decoration';
import { Details } from '../Details';
import { Display } from '../Display';
import { Type } from '../Type';
import styles from './styles.module.scss'

interface pokemonType{
    weight: number
    id: number
    name: string
}


export function Pokedex(){
    const [input, setInput] = useState('');
    const [poke, setPoke] = useState({})
    
    async function searchPokemon(pokemon: string) {
        const dexSearch = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon}`);
        const dexPokemon = await dexSearch.json();

        setPoke(dexPokemon)

        console.log(dexPokemon)
    }

    return(
        <div className={styles.pokedex}>
            <div className={styles.left}>
                <div className={styles.button}>
                <span className={styles.bluebutton}></span>
                </div>
                <Display pokemon={poke} />
                <Details pokemon={poke} />
            </div>

            <div className={styles.middle}></div>

            <div className={styles.right}>
                <input type="text" placeholder="ID or Name" onChange={e => setInput(e.target.value)}/>
                <button onClick={() => searchPokemon(input)}>Search</button>

                <Decoration />

                <Type pokemon={poke}/>
            </div>
        </div>
    );
}