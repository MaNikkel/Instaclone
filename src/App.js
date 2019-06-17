//esse componente isola parte do código
//componente é um fragmento do app que engloba o html, css e js num arquivo separado, como esse aqui
import React from 'react';
import {BrowserRouter} from 'react-router-dom';
import Header from './components/Header';
import Routes from './routes';

function App() {
  return (
    
      <BrowserRouter>
        <Header />
        <Routes />
      </BrowserRouter>
    
  );
}

export default App;
