/* eslint-disable @next/next/no-img-element */
import { useState } from 'react';
import { Decoration } from '../Decoration';
import { Details } from '../Details';
import { Display } from '../Display';
import { Type } from '../Type';
import styles from './styles.module.scss'

export function Pokedex(){
    function searchPokemon() {
        const [input, setInput] = useState('');

        return (
            <div>
            <label>Please specify:</label>
            <input value={input} onInput={e => setInput(e.target.value)}/>
            </div>
    );
    }

    return(
        <div className={styles.pokedex}>
            <div className={styles.left}>
                <div className={styles.button}>
                <span className={styles.bluebutton}></span>
                </div>
                <Display />
                <Details />
            </div>

            <div className={styles.right}>
                <input type="text" onSubmit={searchPokemon}/>

                <Decoration />

                <Type />
            </div>
        </div>
    );
}