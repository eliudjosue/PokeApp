import {createStore, combineReducers, applyMiddleware} from 'redux'
import thunk from 'redux-thunk'
import {composeWithDevTools} from 'redux-devtools-extension'
 
import pokesReducer from './pokeDucks'
import usuarioReducer, {leeerUnUsuarioAccion} from './usuarioDuck'
 
const rootReducer = combineReducers({
    pokemones: pokesReducer,
    usuario: usuarioReducer
})
 


export default function generateStore() {
    const store = createStore( rootReducer, composeWithDevTools( applyMiddleware(thunk) ) )
    leeerUnUsuarioAccion()(store.dispatch)
    return store
}