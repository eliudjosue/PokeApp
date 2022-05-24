
import React from 'react';
import Pokemones from './Redux/componentes/Pokemones';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import Login from './Redux/componentes/Login';
import NavBar from './Redux/componentes/NavBar';

function App() {
 
  return (
    <Router>
      <div className="container m-3">
        <NavBar/>

        <Switch>
          <Route component={Pokemones} path="/" exact/>
          <Route component={Login} path="/login" exact/>
        </Switch>
      </div>
    </Router>
      
  );
}

export default App;
