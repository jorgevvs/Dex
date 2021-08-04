import styles from './styles.module.scss'

export function Type(){
    return(
        <div className={styles.typediv}>
            <div className={styles.typesContainer}>
                <h1>Type:</h1> <br/>
                <span className={`${styles.type} ${styles.grass}`}>Grass</span>
                <span className={`${styles.type} ${styles.poison}`}>Poison</span>
                <span className={`${styles.type} ${styles.fire}`}>Fire</span>
                <span className={`${styles.type} ${styles.flying}`}>Flying</span>
            </div>
        

        </div>
    );
}