//constantes
const dataInicial = {
    count:0,
    pages:0,
    next:null,
    prev:null,
    results:[]
}
//types
const OBTENER_RICKMORTY_EXITO = 'OBTENER_RICKMORTY_EXITO'
//reducer
export default function pokeReducer(state = dataInicial, action){
    switch(action.type){
        case OBTENER_RICKMORTY_EXITO:
            return {...state, ...action.payload}       
            default:
                return state
    }
}
//acciones

