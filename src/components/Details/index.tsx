import styles from './styles.module.scss'

interface pokemonProps{
    pokemon: pokemon;
}
interface pokemon{
    weight: number
    stats: Array<any>
    abilities: Array<any>
}

export function Details(props : pokemonProps){

    return(
        <div className={styles.details}>
            <p>{`Weight: ${props.pokemon.weight ? props.pokemon.weight/10 : 6.9} kg`}</p>
            <p>{`Ability: ${props.pokemon.abilities[1] ? props.pokemon.abilities[0].ability.name : 'overgrow'}`}</p>
            <p>{`Hp: ${props.pokemon.stats ? props.pokemon.stats[0].base_stat : '45'}`}</p>
            <p>{`Attack: ${props.pokemon.stats ? props.pokemon.stats[1].base_stat : '49'}`}</p>
            <p>{`Defense: ${props.pokemon.stats ? props.pokemon.stats[2].base_stat : '49'}`}</p>
        </div>
    );
}