import React, { useState } from 'react';
import { crearNuevoProductoAction } from '../actions/productoActions'
import { useDispatch, useSelector } from 'react-redux'
import { mostrarAlerta,ocultarAlerta } from '../actions/alertaActions'

const NuevoProducto = ({history}) => {
    const [nombre, setnombre] = useState('');
    const [precio, setprecio] = useState('');


    //utilizar use Dipsacth y crea una funcion
    const dispacth = useDispatch();
    //mandar llamar el action de production Action
    const agregarProducto = (producto) => dispacth(crearNuevoProductoAction(producto))
    
    //acceder al state del stroe
    const cargando = useSelector(state => state.productos.loading);
    const error = useSelector(state => state.productos.error);
    const alerta = useSelector(state=> state.alerta.alerta);

    const submitNuevoProducto = e => {
        e.preventDefault();

        // validar formulario
        if (nombre.trim() === '' || precio <= 0){
            const alerta = {
                msg:'Ambos campos son obligatorios',
                clases: 'alert alert-danger text-center text-uppercase p3'
            }
            dispacth(mostrarAlerta(alerta));
            return;
        }
        // sin errores
        dispacth(ocultarAlerta());

        // crear nuevo producto
        agregarProducto({
            nombre,
            precio
        });

        //redireccionar al inicio
        history.push('/'); 
    }

    return (
        <div className="row justify-content-center">
            <div className="col-md-8">
                <div className="card">
                    <div className="card-body">
                        <h2 className="text-center mb-4 font-wight-bold">
                            Agregar nuevo producto
                       </h2>
                        {
                            alerta ? <p className={alerta.clases}>{alerta.msg}</p>: null
                        }
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
                                    onChange={e => setprecio(Number(e.target.value))}
                                />
                            </div>

                            <button
                                type="submit"
                                className="btn btn-primary font-weight-bold text-uppercase d-block w-100"
                            >Agregar</button>
                        </form>
                        {cargando ? <p>Cargando...</p> : null }
                        {error ? <p className="alert alert-danger p2 mt-4 text-center">Hubo un error</p> : null }
                    </div>
                </div>
            </div>
        </div>
    )
}

export default NuevoProducto
