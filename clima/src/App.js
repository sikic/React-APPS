import React,{Fragment,useState,useEffect} from 'react';
import Header from './Components/Header'
import Formulario from './Components/Formulario'
import {Clima} from './Components/Clima'
import Error from './Components/Error'

function App() {
  const [busqueda, setbusqueda] = useState({
    ciudad:'',
    pais:''
  });

  const {ciudad,pais} = busqueda;
  const [consultar, setconsultar] = useState(false);

  const [informacion, setinformacion] = useState({});
  const [error, seterror] = useState(false);
  useEffect(() => {
    //funcion que hace la llamada a la APi
    const consultarApi = async() =>{
     if(consultar){
      const appid= '902ae4644c5b9024ed2d1f8c87a19102';
      const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${ciudad},${pais}&appid=${appid}`); 
      const result = await response.json();  
      setinformacion(result);
      setconsultar(false);

      //Detecta si hubo resultados incorrectos en la consulta
      if(result.cod ==="404")
        seterror(true);
      else
        seterror(false);
     }
    }
    consultarApi();
  }, [consultar]);

  let componente;
  if(error)
    componente= <Error mensaje="no hay resultados"/>
  else
  componente=  <Clima informacion={informacion}/>


  return (
    <Fragment>
      <Header
        titulo = "Clima React App"
      />

      <div className="contenedor-form">
        <div className="container">
          <div className="row">
            <div className="col m6 s12">
               <Formulario
                busqueda={busqueda}
                setbusqueda={setbusqueda}
                setconsultar={setconsultar}
               />
            </div>

            <div className="col m6 s12">
              {componente}
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
}

export default App;
