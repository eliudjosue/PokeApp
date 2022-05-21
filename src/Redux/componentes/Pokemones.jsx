import React from 'react'
import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux'
import { anteriorPokemonAction, obtenerPokemonesAccion, siguientePokemonAction } from '../pokeDucks'

const Pokemones = () => {
    const dispatch = useDispatch()
    const pokemones = useSelector(store => store.pokemones.results)
    console.log(pokemones)
    return (
        <div>
            <h1>Lista de pokemones</h1>
            <button onClick={()=> dispatch(obtenerPokemonesAccion())}>Get Pokemones</button>
            <button onClick={() => dispatch(siguientePokemonAction())}>Siguiente</button>
            <button onClick={() => dispatch(anteriorPokemonAction())}>Anterior</button>
            <ul>
                {
                    pokemones.map(item => (
                        <li key={item.name}>{item.name}</li>
                    ))
                }
            </ul>
        </div>
    )
}

export default Pokemones
