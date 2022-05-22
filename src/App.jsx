
import React from 'react';
import { Provider } from 'react-redux';

import Pokemones from './Redux/componentes/Pokemones';
import generateStore from './Redux/store';

function App() {
  const store = generateStore()
  return (
    <Provider store = {store}>
      <div className="container m-3">
        <Pokemones/>
      </div>
      
    </Provider>
    
    
  );
}

export default App;
