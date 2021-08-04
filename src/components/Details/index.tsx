import styles from './styles.module.scss'

export function Details(){
    return(
        <div className={styles.details}>
            <p>Weight: 6.9kg</p>
            <p>Abilities: Overgrow</p>
            <p>Hp: 45</p>
            <p>Attack: 49</p>
            <p>Defense: 49</p>
        </div>
    );
}