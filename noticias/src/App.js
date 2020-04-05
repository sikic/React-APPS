import React,{useState,useEffect,Fragment} from 'react';
import Header from './Components/Header'
import Formulario from './Components/Formulario'
import Listado from './Components/ListadoNoticias'

function App() {

  //definir la categoria
  const [categoria, setcategoria] = useState('');

  //state para las noticias
  const [noticias, setnoticias] = useState([]);

  //cuando la categoria cambia que se llame a la api
  useEffect(() => {
    const consultarApi = async () => {
      //Api key de la web de noticias
      const key = '7a8f88dadd8e4f2498d9d1540df81666';
      const url = `https://newsapi.org/v2/top-headlines?country=us&category=${categoria}&apikey=${key}`;
      const resultado = await fetch(url);
      const lista = await resultado.json();
      setnoticias(lista.articles);

    }
    consultarApi();
    
  }, [categoria])



  return (
    <Fragment>
      <Header
        titulo="Buscador de noticias"
      />

    <div className="container white">
      <Formulario
        setcategoria={setcategoria}
      />       

      <Listado
        noticias={noticias}
      />

    </div>
    </Fragment>
  );
}

export default App;
