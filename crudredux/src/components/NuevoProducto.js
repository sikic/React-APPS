import React,{useState} from 'react';
import { crearNuevoProductoAction } from '../actions/productoActions'
import { useDispatch, useSelector } from 'react-redux'

const NuevoProducto = () => {
    const [nombre, setnombre] = useState('');
    const [precio , setprecio ] = useState('');


    //utilizar use Dipsacth y crea una funcion
    const dispacth = useDispatch();
    //mandar llamar el action de production Action
    const agregarProducto = (producto) => dispacth( crearNuevoProductoAction(producto) )


    const submitNuevoProducto = e => {
        e.preventDefault();

        // validar formulario
        if(nombre.trim() === '' || precio <= 0 )
            return;
        // errores

        // crear nuevo producto
        agregarProducto({
            nombre,
            precio
        });
    }

        return (
            <div className="row justify-content-center">
                <div className="col-md-8">
                    <div className="card">
                        <div className="card-body">
                            <h2 className="text-center mb-4 font-wight-bold">
                                Agregar nuevo producto
                       </h2>

                            <form
                                onSubmit={submitNuevoProducto}
                            >
                                <div className="form-group">
                                    <label>Nombre Producto</label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        placeholder="Nombre Producto"
                                        name="nombre"
                                        value={nombre}
                                        onChange={e => setnombre(e.target.value)}
                                    />
                                </div>

                                <div className="form-group">
                                    <label>Precio Producto</label>
                                    <input
                                        type="number"
                                        className="form-control"
                                        placeholder="Precio Producto"
                                        name="precio"
                                        value={precio}
                                        onChange={e => setprecio(Number (e.target.value))}
                                    />
                                </div>

                                <button
                                    type="submit"
                                    className="btn btn-primary font-weight-bold text-uppercase d-block w-100"
                                >Agregar</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        )
    }

    export default NuevoProducto
