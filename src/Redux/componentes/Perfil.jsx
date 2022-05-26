import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { actualizarUsuarioAccion, editarFotoAccion } from '../usuarioDuck'

const Perfil = () => {
    const usuario = useSelector(store => store.usuario.user)
    const loading = useSelector(store => store.usuario.loading)
    const dispatch = useDispatch()

    const [activarFormulario, setActivarFormulario] = React.useState(false);
    const [nombreUsuario, setNombreUsuario] = React.useState(usuario.displayName)
    const [error, setError] = React.useState(false)

    const actualizarUsuario = () => {
        if(!nombreUsuario.trim()){
            // console.log('vacio')
            return
        }
        dispatch(actualizarUsuarioAccion(nombreUsuario))
        setActivarFormulario(false)
    }

    const seleccionarArchivo = imagen => {
        // console.log(imagen.target.files[0])
        const imagenUsuario = imagen.target.files[0]

          if(imagenUsuario === undefined){
            // console.log('No se selecciono la imagen')
            return
        }

        if(imagenUsuario.type === "image/png" || imagenUsuario.type === "image/jpeg"){
            dispatch(editarFotoAccion(imagenUsuario))
        
            setError(false)
        }else{
            setError(true)
        }
        
    }


  return (
    <div className='mt-5 text-center'>
        <div className="card-body">
            <img src={usuario.photoURL} alt="" style={{width:'150px'}} className="img-fluid rounded img-thumbnail" />
            <h5 className="card-title">{usuario.displayName}</h5>
            <p className="card-text">{usuario.email}</p>
            
            <button 
            className="btn btn-dark"
            onClick={()=> setActivarFormulario(true)}>
                Editar Nombre
            </button>

                {
                    error && 
                    <div className="alert alert-warning mt-3">
                        Solo se permiten archivos png o jpg
                    </div>
                }

            <div className="custom-file mt-3">
                <input 
                    type="file" 
                    className="custom-file-input"
                    id="inputGroupFile01"
                    style={{display:'none'}} 
                    onChange = {e => seleccionarArchivo(e)}
                    disabled={loading}
                />
                <label 
                    className={loading ? "btn btn-dark disabled" : "btn btn-dark" }
                    htmlFor="inputGroupFile01"
                >
                    Actualizar Imagen
                </label>
            </div>

            {
                loading && (<div className="card-body">
                                <div className="spinner-border text-dark" role="status">
                                    <span className="visually-hidden">Loading...</span>
                                </div>
                            </div>)
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