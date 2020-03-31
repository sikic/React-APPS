import React,{useState} from 'react';
import Header from './components/Header'
import Formulario from './components/Formulario'
import Resumen from './components/Resumen'
import Resultado from './components/Resultado'
import Spinner from './components/Spinner/Spinner'


import styled from '@emotion/styled';

const CustomContenedor= styled.div`
  max-width:600px;
  margin:0 auto;

`;

const CustomContenedorFormulario = styled.div`
  background-color: #FFF;
  padding:3rem;

`;

function App() {
  //state para el resumen
  
  const [resumen, setResumen] = useState({
    cotizacion:0,
    datos:{
      marca:'',
      plan:'',
      anio:''
    }
  });

  //state para mostrar o no el espinner
const [spinner, setSpinner] = useState(false);

  return (
    <CustomContenedor>
      <Header
        titulo="Cotizador de seguros"
      />

      <CustomContenedorFormulario>
        <Formulario
          setResumen={setResumen}
          setSpinner={setSpinner}
        />

        <Resumen
          resumen={resumen}
        />

        {
          spinner
          ?
            <Spinner/>
          :
            null
        }

        <Resultado
          resultado={resumen.cotizacion}
        />
      </CustomContenedorFormulario>
    </CustomContenedor>
  );
}

export default App;
