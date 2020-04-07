import React,{useState} from 'react'
import Error from './Error'
const Formulario = ({setbusqueda}) => {

    const [termino, settermino] = useState('');
    const [error, seterror] = useState(false);

    const buscarImagenes= e =>{
        e.preventDefault();
        //validar
        if(termino.trim() === '')
        return seterror(true);
        seterror(false);
        //enviar el termino a hacia el app.js
        setbusqueda(termino);
    }

    return (
        <form
            onSubmit={buscarImagenes}
        >
            <div className="row">
                <div className="form-group col-md-8">
                    <input
                        type="text"
                        className="form-control form-control-lg"
                        placeholder="Busca una imagen , ejemplo: fútbol o café"
                        onChange={e => settermino(e.target.value)}
                    />
                </div>
            </div>

            <div className="form-group col-md-4">
                    <input
                        type="submit"
                        className="btn btn-lg btn-danger btn-block"
                        value="Buscar"
                    />
                </div>
            { error ? <Error mensaje="Agrega un término de búsqueda"/> : null}
        </form>
    )
}

export default Formulario
