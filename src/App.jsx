
import React from 'react';
import Pokemones from './Redux/componentes/Pokemones';
import {BrowserRouter as Router, Switch, Route, Redirect} from 'react-router-dom'
import Login from './Redux/componentes/Login';
import NavBar from './Redux/componentes/NavBar';
import { auth } from './firebase';
import Perfil from './Redux/componentes/Perfil';

function App() {
  const [firebaseUser, setFirebaseUser] = React.useState(false);
 
  React.useEffect(() => {
    
    const fethData = () =>{

      auth.onAuthStateChanged(user => {
      // console.log(user)
      if(user){
        setFirebaseUser(user)
      }else{
        setFirebaseUser(null)
      }
    })

    }

    fethData()
  },[]);

  const RutaProtegida = ({component, path, ...rest}) => {

    if (localStorage.getItem('usuario')) {
      const usuarioStorage = JSON.parse(localStorage.getItem('usuario'))
      if (usuarioStorage.uid === firebaseUser.uid) {
        
       return <Route component={component} path={path} {...rest}/>
       
      }else{
       return  <Redirect to="/login" {...rest}/>
      }
    } else {
          return  <Redirect to="/login" {...rest}/>
    }
  }
 
  return firebaseUser !== false ? (
    <Router>
      <div className="container m-3">
        <NavBar/>

        <Switch>
          <RutaProtegida component={Pokemones} path="/" exact/>
          <RutaProtegida component={Perfil} path="/perfil" exact/>
          <Route component={Login} path="/login" exact/>
        </Switch>
      </div>
    </Router>
      
  ): (<div className='text-center'>
    <div className="spinner-border text-dark" role="status">
      <span className="visually-hidden">Loading...</span>
    </div>
  </div>)
}

export default App;
