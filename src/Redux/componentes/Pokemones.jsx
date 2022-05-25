import React from 'react'
import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux'
import { anteriorPokemonAction, detallePokemonAction, obtenerPokemonesAccion, siguientePokemonAction } from '../pokeDucks'
import Detalle from './Detalle'

const Pokemones = () => {
    const dispatch = useDispatch()
    const pokemones = useSelector(store => store.pokemones.results)
    const next = useSelector(store => store.pokemones.next)
    const previous = useSelector(store => store.pokemones.previous)
   
    React.useEffect(() => { 

        const fethData = () => {
            dispatch(obtenerPokemonesAccion())
        }  

        fethData()
    }, [dispatch])

    return (
        <div className="row">

            <div className="col-6 mt-2">
            <h3>Lista de pokemones</h3>

            <ul className='list-group mt-3'>
                {
                    pokemones.map(item => (
                        
                             <li key={item.name} 
                             className="list-group-item text-uppercase d-flex justify-content-between">
                                 {item.name}
                                 <button 
                                 className="btn btn-dark btn-sm"
                                 onClick={() => dispatch(detallePokemonAction(item.url))}>Info</button>
                            </li>
                            
                       
                       
                    ))
                }
            </ul>
            <br/>
            <div className="d-flex justify-content-between">
                {
                pokemones.length === 0 && 
                <button 
                onClick={()=> dispatch(obtenerPokemonesAccion())}
                className="btn btn-dark">Get Pokemones</button>
                }

                
                {
                    previous &&
                    <button 
                    onClick={() => dispatch(anteriorPokemonAction())}
                    className="btn btn-dark">Anterior</button>
                }

                {
                    next && 
                    <button 
                    onClick={() => dispatch(siguientePokemonAction())}
                    className="btn btn-dark">Siguiente</button>
                }
            </div>
            
            
            
         
            </div>
            <div className="col-6 mt-2">
                <h3>Detalle del Pokemon</h3>
               <Detalle/>
            </div>
        </div>
    )
}

export default Pokemones
