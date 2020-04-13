import React,{useContext,useState} from 'react'
import {CategoriasContext} from '../Context/CategoriasContext'
import {RecetasContext} from '../Context/RecetasContext'

const Formulario = () => {

    const { categorias } = useContext(CategoriasContext);
    const { setbusqueda,setconsultar } = useContext(RecetasContext);

    //state para los errores
    const [error, seterror] = useState(false);
    //state para los datos del fomrulario
    const [datos, setdatos] = useState({
        nombre:'',
        categoria:''
    });

    //funcion para leer los conteniddos
    const obtenerDatos=e=>{
        setdatos({
            ...datos,
            [e.target.name] : e.target.value
        })
    }
    return (
        <form
            className="col-12"
            onSubmit={e=>{
                e.preventDefault();
                if(datos.nombre.trim() === '' || datos.categoria.trim() === '')
                    return seterror(true);

                seterror(false);
                setbusqueda(datos);
                setconsultar(true);
            }}
        >
            {error
             ? 
             <p className="alert alert-danger">Todos los campos son obligatorios</p> : null }
            <fieldset className="text-center">
                <legend>Busca bebidas por categoria o ingrediente</legend>
            </fieldset>

            <div className="row mt-4">
                <div className="col-md-4">
                    <input
                        name="nombre"
                        type="text"
                        className="form-control"
                        onChange={obtenerDatos}
                        placeholder="Busca por ingrediente"
                    />
                </div>
                
                <div className="col-md-4">
                    <select
                        className="form-control"
                        name="categoria"
                        onChange={obtenerDatos}
                    >
                        <option value ="">--Selecciona categoria--</option>
                        {categorias.map((cat) => {
                            return (
                                <option 
                                    key = {cat.strCategory}
                                    value = {cat.strCategory}
                                >{cat.strCategory}</option>
                            )
                        }
                        )}
                    </select>
                </div>

                <div className="col-md-4">
                    <input
                        type="submit" 
                        className="btn btn-block btn-primary"
                        value="Buscar bebidas"
                    />
                </div>
            </div>
        </form>
    )
}

export default Formulario
