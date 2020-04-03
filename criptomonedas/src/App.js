import React,{useState,useEffect} from 'react';
import styled from '@emotion/styled';
import fondo from './cryptomonedas.png';
import Formulario from './Components/Formulario'
import Cotizacion from './Components/Cotizacion'
import Spinner from './Components/Spinner'
import Axios from 'axios';
import useCriptomoneda from './Hooks/useCriptomoneda';

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
  const [cargando, setCargando] = useState(false);
  useEffect(() => {
    
  const cotizarCripto = async () =>{
    if(moneda === '') return; //no se ejecuta la primera vez

    //consultar api
    const url = `https://min-api.cryptocompare.com/data/pricemultifull?fsyms=${criptomoneda}&tsyms=${moneda}`;
    const result = await Axios.get(url);

    setCargando(true);

    setTimeout(() => {
      //poner estado cargadno a false
      setCargando(false);

      setresultado(result.data.DISPLAY[criptomoneda][moneda]);
    }, 3000);
  }

  cotizarCripto();
  }, [moneda,criptomoneda])

let componenten = (cargando) ? <Spinner/> :  <Cotizacion resultado={resultado}/>;
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
       {componenten}
      </div>
    </Contenedor>
  );
}

export default App;
