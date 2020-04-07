import React,{useState,useEffect} from 'react';
import Formulario from './Components/Formulario'
import Listado from './Components/ListadoImagenes'


function App() {

  //state de la app
  const [busqueda, setbusqueda] = useState('');
  //imagenes
  const [imagenes, setimagenes] = useState([]);

  //paginador
  //para la pagina actual 
  const [paginaActual, setpaginaActual] = useState(1);
  //para paginas total
  const [pagsTotal, setpagsTotal] = useState(1);
  useEffect(() => {
   if(busqueda === "") return;

   const consultaApi = async () =>{

    const imagenesPorPagina =30;
    const key='15919471-a5a5f55b7cdeb945ee877e88e';
    const url = `https://pixabay.com/api/?key=${key}&q=${busqueda}&per_page=${imagenesPorPagina}&page=${paginaActual}`;
    const response = await fetch(url);
    const resultado = await response.json();
    console.log(resultado);
    setpagsTotal(Math.ceil(resultado.totalHits/imagenesPorPagina));
    setimagenes(resultado.hits);

    //mover pantalla hasta arriba
    const jumbotron = document.querySelector('.jumbotron');
    jumbotron.scrollIntoView({ behavior: 'smooth' })
   }
   consultaApi();
  }, [busqueda,paginaActual])

  const paginaAnterior = () =>{
    const pagActual = paginaActual - 1;
    if(pagActual === 0)
      return;

    setpaginaActual(pagActual)
  }

  const paginaSiguiente = () =>{
    const pagActual = paginaActual + 1;
    if(pagActual > pagsTotal)
      return;
    
    setpaginaActual(pagActual);
  }

  return (
    <div className="container">
      <div className="jumbotron">
        <p className="lead text-center">Buscador de imágenes </p>
        <Formulario
          setbusqueda={setbusqueda}
        />
      </div>

      <div className="row justify-content-center">
        <Listado
          lista={imagenes}
        />

       {(paginaActual === 1) ? null : (
        <button
          type="button"
          className="btn btn-info mr-1"
          onClick={paginaAnterior}
        > &laquo; Anterior</button>)}

      {(paginaActual === pagsTotal) ? null :
      (  <button
        type="button"
        className="btn btn-info"
        onClick={paginaSiguiente}
      >Siguiente &raquo;</button>)
      }

      </div>
    </div>
  );
}

export default App;
