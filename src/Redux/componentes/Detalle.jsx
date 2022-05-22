import React from 'react'
import {useDispatch, useSelector} from 'react-redux'
import { detallePokemonAction } from '../pokeDucks'

const Detalle = () => {
    const dispatch = useDispatch()
 
    React.useEffect(() => { 

        const fethData = () => {
            dispatch(detallePokemonAction())
        }  

        fethData()
    }, [dispatch])

    const pokemon = useSelector(store => store.pokemones.unPokemon)
    
  return (
   pokemon ? (<div className='card mt-4 text-center'>
        <div className="card-body">
            <img src={pokemon.foto} alt="" className="fluid" />
            <div className="card-item text-uppercase">{pokemon.nombre}</div>
            <p className="cad-item">Ancho:{pokemon.ancho} | Alto:{pokemon.alto}</p>
        </div>
    </div>): null
  )
}

export default Detalle