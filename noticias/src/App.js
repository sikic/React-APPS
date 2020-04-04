import React,{useState,useEffect,Fragment} from 'react';
import Header from './Components/Header'
import Formulario from './Components/Formulario'


function App() {
  return (
    <Fragment>
      <Header
        titulo="Buscador de noticias"
      />

    <div className="container white">
      <Formulario
      
      />       
    </div>
    </Fragment>
  );
}

export default App;
