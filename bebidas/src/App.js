import React,{Fragment} from 'react';
import Header from './Components/Header'
import Formulario from './Components/Formulario'
import Lista from './Components/ListaRecetas'

import CategoriasProvider from './Context/CategoriasContext'
import RecetasProvider from './Context/RecetasContext';
import ModalContextProvider from './Context/ModalContext';

function App() {
  return (
   <CategoriasProvider>
     <RecetasProvider>
       <ModalContextProvider>
          <Header/>
          <div className="container mt-5">
            <div className="row">
              <Formulario/>
            </div>

            <Lista/>
          </div>
       </ModalContextProvider>
     </RecetasProvider>
   </CategoriasProvider>
  );
}

export default App;
