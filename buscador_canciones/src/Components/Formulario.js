import React,{useState,useEffect} from 'react'

const Formulario = ({setterminosBusqueda}) => {
//state
    const [busqueda, setbusqueda] = useState({
        artista:'',
        cancion:''
    })

    const [error, seterror] = useState(false);
    //funcion de cada state para leer su input
    const actualizarState = e =>{
        setbusqueda({
           ...busqueda,
           [e.target.name] :e.target.value 
        })
    }


    const {artista,cancion} = busqueda;

    const buscarInformarcion= e=>{
        e.preventDefault();

        //validamos
        if(artista.trim() ==='' || cancion.trim() === '')
            return seterror(true);

        seterror(false);

        //pasar al componente ppal
        setterminosBusqueda(busqueda);
    }

    return (
        <div className="bg-info">
                    {error ? <p className="alert alert-danger text-center p-2"> Todos los datos son obligatorios</p>
                    : null    
                }
            <div className="container">
                <div className="row">
                    <form
                     onSubmit={buscarInformarcion}
                     className="col card text-white bg-transparent mb-5 pt-5 pb-2">
                        <fieldset>
                            <legend className="texte-center">Buscador letras canciones</legend>
                            <div className="row">
                                <div className="col-md-6">
                                    <div className="form-group">
                                        <label>Artista:</label>
                                        <input
                                            type="text"
                                            className="form-control"
                                            name="artista"
                                            value={artista}
                                            placeholder="Nombre artista"
                                            onChange={actualizarState}
                                        />
                                    </div>

                                </div>

                                <div className="col-md-6">
                                    <div className="form-group">
                                        <label>Canción:</label>
                                        <input
                                            type="text"
                                            className="form-control"
                                            name="cancion"
                                            value={cancion}
                                            placeholder="Nombre canción"
                                            onChange={actualizarState}
                                        />
                                    </div>

                                </div>
                            </div>

                            <button 
                                type="submit"
                                className="btn btn-primary float-right"
                            >Buscar</button>
                        </fieldset>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Formulario
