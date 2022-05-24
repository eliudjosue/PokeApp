import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { cerrarSesionAccion } from '../usuarioDuck'
import { withRouter } from 'react-router-dom'

const NavBar = (props) => {
  const dispatch = useDispatch()

  const cerrarSesion = () =>{
    dispatch(cerrarSesionAccion())
    props.history.push('/login')
  }

  return (
    <div className='navbar navbar-dark bg-dark'>
        <Link className="navbar-brand" to="/">APP POKE</Link>
        <div className="d-flex">
            <NavLink className="btn btn-dark mr-2" to="/" exact>Inicio</NavLink>
            <NavLink className="btn btn-dark mr-2" to="/login" exact>Login</NavLink>
            <button 
            className="btn btn-dark mr-2"
            onClick={()=> cerrarSesion()}
            >Cerrar sesion</button>
        </div>
    </div>
  )
}

export default withRouter(NavBar) 