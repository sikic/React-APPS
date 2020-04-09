import React, { Fragment, useState, useEffect } from 'react';
import Formulario from './Components/Formulario'
import Letra from './Components/Letras'
import Biografia from './Components/Biografia'



function App() {
  // para los input
  const [terminosBusqueda, setterminosBusqueda] = useState({});
  // para la letra de la cancion
  const [letra, setletra] = useState('');
  //para la biografia
  const [biografia, setbiografia] = useState('');
  //para el error
  const [error, seterror] = useState(false);

  useEffect(() => {
    const consultarApi = async () => {
      if (Object.keys(terminosBusqueda).length === 0)
        return;

      const url = `https://api.lyrics.ovh/v1/${terminosBusqueda.artista}/${terminosBusqueda.cancion}`;
      const url2 = `https://www.theaudiodb.com/api/v1/json/1/search.php?s=${terminosBusqueda.artista}`;

      try {
        const [letras, informacion] = await Promise.all([
          await fetch(url),
          await fetch(url2)
        ]);
        const resultado1 = await letras.json();
        //si no encuentra el artista que lance error
        if(resultado1["error"])
          throw Error;
        const resultado2 = await informacion.json();
        setletra(resultado1.lyrics);
        setbiografia(resultado2.artists[0]);
        seterror(false);
      }catch(e){
        setletra('');
        setbiografia('');
        seterror(true);
      }
   }

    consultarApi();
  }, [terminosBusqueda, biografia]);

  return (
    <Fragment>
      <Formulario
        setterminosBusqueda={setterminosBusqueda}
      />

      {error ? <p className="alert alert-danger p-5"> No ha sido posible encontrar ningún resultado, compruebe los datos e intentelo de nuevo.</p>
      :
      
      <div className="container mt-5">
        <div className="row">
          <div className="col-md-6">
            <Biografia
              info={biografia}
            />
          </div>

          <div className="col-md-6">
            <Letra
              letra={letra}
            />
          </div>
        </div>
      </div>
      }
    </Fragment>
  );
}

export default App;
