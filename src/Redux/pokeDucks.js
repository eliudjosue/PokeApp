import axios  from 'axios'
// constantes
const dataInicial = {
    count:0,
    next:null,
    previus:null,
    results:[]
}

// types
const OBTENER_POKEMONES_EXITO = 'OBTENER_POKEMONES_EXITO'
const SIGUIENTE_POKEMONES_EXITO = 'SIGUIENTE_POKEMONES_EXITO'
const POKE_INFO_EXITO = 'POKE_INFO_EXITO'
// reducer
export default function pokeReducer(state = dataInicial, action){
    switch(action.type){
        case OBTENER_POKEMONES_EXITO:
            return {...state, ...action.payload}
        case SIGUIENTE_POKEMONES_EXITO:
            return {...state, ...action.payload}
        case POKE_INFO_EXITO:
            return {...state, unPokemon: action.payload}        
            default:
                return state
    }
}
// acciones
export const obtenerPokemonesAccion = () =>async (dispatch, getState) => {

    if(localStorage.getItem('offset=0')){
        dispatch({
            type: OBTENER_POKEMONES_EXITO,
            payload: JSON.parse(localStorage.getItem('offset=0'))
        })
        return
    }
    
try {
    const res = await axios.get(`https://pokeapi.co/api/v2/pokemon?offset=0&limit=10`)
    dispatch({
        type: OBTENER_POKEMONES_EXITO,
        payload: res.data
    })
    localStorage.setItem('offset=0', JSON.stringify(res.data))
} catch (error) {
    console.log(error)
}
}



export const siguientePokemonAction = () => async(dispatch, getState) => {
    const next = getState().pokemones.next

    if(localStorage.getItem(next)){
        dispatch({
            type: SIGUIENTE_POKEMONES_EXITO,
            payload: JSON.parse(localStorage.getItem(next))
        })
        return
    }

    try {
        const res = await axios.get(next)
        dispatch({
            type: SIGUIENTE_POKEMONES_EXITO,
            payload: res.data
        })

        localStorage.setItem(next, JSON.stringify(res.data))
    } catch (error) {
        
    }
}

export const anteriorPokemonAction = () => async(dispatch, getState) => {
    const {previous} = getState().pokemones
   
    if(localStorage.getItem({previous})){
        dispatch({
            type: SIGUIENTE_POKEMONES_EXITO,
            payload: JSON.parse(localStorage.getItem({previous}))
        })
        return
    }
    try {
        const res = await axios.get(previous)
        dispatch({
            type: SIGUIENTE_POKEMONES_EXITO,
            payload: res.data
        })

        localStorage.setItem({previous}, JSON.stringify(res.data))
    } catch (error) {
        
    }
}

export const detallePokemonAction = (url = 'https://pokeapi.co/api/v2/pokemon/4/') => async(dispatch) =>{
    if(localStorage.getItem(url)){
        JSON.parse(localStorage.getItem(url))
    }

    try {
        const res = await axios.get(url)
        dispatch({
            type: POKE_INFO_EXITO,
            payload:{
                nombre:res.data.name,
                alto:res.data.height,
                ancho:res.data.weight,
                foto:res.data.sprites.front_default
            }
        })

        localStorage.setItem(url, JSON.stringify({
            nombre:res.data.name,
            alto:res.data.height,
            ancho:res.data.weight,
            foto:res.data.sprites.front_default
        }))
    } catch (error) {
        console.log(error)
    }
}