import React,{useState,useEffect} from 'react';
import styled from '@emotion/styled';
import fondo from './cryptomonedas.png';
import Formulario from './Components/Formulario'
import Cotizacion from './Components/Cotizacion'

import Axios from 'axios';

const Contenedor = styled.div`
 max-width:900px;
 margin:0 auto;
  @media(min-width:992px)  {
    display:grid;
    grid-template-columns:repeat(2,1fr);
    column-gap:2rem;
  }
`;

const Heading = styled.h1`
font-family:'Bebas Neue', cursive;
color:#FFF;
text-align:left;
font-weight:700;
font-size:50px;
margin-bottom:50px;
margin-top:80px;

&::after{
  content:'';
  width:100px;
  height:6px;
  background-color:#66A2FE;
  display:block;

}

`;

const Imagen = styled.img`
 max-width:100%;
 margin-top:5rem;
`;

function App() {

  //state moneda y cripto que ira a formulario y lo recogera
  const [moneda, setmoneda] = useState('');
  const [criptomoneda, setcriptomoneda] = useState('');
  const [resultado, setresultado] = useState({});

  useEffect(() => {
    
  const cotizarCripto = async () =>{
    if(moneda === '') return; //no se ejecuta la primera vez

    //consultar api
    const url = `https://min-api.cryptocompare.com/data/pricemultifull?fsyms=${criptomoneda}&tsyms=${moneda}`;
    const result = await Axios.get(url);
    setresultado(result.data.DISPLAY[criptomoneda][moneda]);
  }

  cotizarCripto();
  }, [moneda,criptomoneda])
  return (
    <Contenedor>
      <div>
        <Imagen
          src={fondo}
          alt="imagen cripto"
        />
      </div>

      <div>
        <Heading>Cotiza Criptomonodeas al instante</Heading>
        <Formulario
          setmoneda={setmoneda}
          setcriptomoneda={setcriptomoneda}
        />
        <Cotizacion
          resultado={resultado}
        />
      </div>
    </Contenedor>
  );
}

export default App;
