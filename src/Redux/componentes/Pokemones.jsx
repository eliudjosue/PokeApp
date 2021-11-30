import React from 'react'
import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux'
import { obtenerPokemonesAccion } from '../pokeDucks'

const Pokemones = () => {
    const dispatch = useDispatch()
    const pokemones = useSelector(store => store.pokemones.array)
    console.log(pokemones)
    return (
        <div>
            <h1>Lista de pokemones</h1>
            <button onClick={()=> dispatch(obtenerPokemonesAccion())}>Get Pokemones</button>
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
