/* eslint-disable @next/next/no-img-element */
import styles from './styles.module.scss'


export function Display(){

    return(
        <div className={styles.pokemon}>
            <div className={styles.breakdiv}>
                <span className={styles.break}></span>
            </div>
            <div className={styles.display}> 
                <span/>
                <div/>
                <img src="https://assets.pokemon.com/assets/cms2/img/pokedex/full/001.png" alt="" />
            </div>

            <span className={styles.name}>Bulbasauro</span>
        </div>
    );
}