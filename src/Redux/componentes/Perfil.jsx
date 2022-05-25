import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { actualizarUsuarioAccion } from '../usuarioDuck'

const Perfil = () => {
    const usuario = useSelector(store => store.usuario.user)
    const loading = useSelector(store => store.usuario.loading)
    const dispatch = useDispatch()

    const [activarFormulario, setActivarFormulario] = React.useState(false);
    const [nombreUsuario, setNombreUsuario] = React.useState(usuario.displayName)

    const actualizarUsuario = () => {
        if(!nombreUsuario.trim()){
            console.log('vacio')
            return
        }
        dispatch(actualizarUsuarioAccion(nombreUsuario))
        setActivarFormulario(false)
    }
  return (
    <div className='mt-5 text-center'>
        <div className="card-body">
            <img src={usuario.photoURL} alt="" className="fluid" />
            <h5 className="card-title">{usuario.displayName}</h5>
            <p className="card-text">{usuario.email}</p>
            <button 
            className="btn btn-dark"
            onClick={()=> setActivarFormulario(true)}>
                Editar Nombre
            </button>

            {
                loading && <div className="card-body">
                    <div class="spinner-border text-dark" role="status">
                        <span class="visually-hidden">Loading...</span>
                    </div>
                </div>
            }
                {
                    activarFormulario && (

                        <div className="card-body mt-5">
                            <div className="row justify-content-center">
                                <div className="col-md-5">
                                    <div className="input-group mb-3">
                                        <input 
                                        type="text"
                                        className='form-control'
                                        value={nombreUsuario}
                                        onChange={e => setNombreUsuario(e.target.value)}
                                        />

                                        <div className="input-group-append">
                                            <button 
                                            className="btn btn-dark"
                                            type='button'
                                            onClick={() => actualizarUsuario()}
                                            >
                                                Actualizar
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )
                }
            
        </div>
    </div>
  )
}

export default Perfil