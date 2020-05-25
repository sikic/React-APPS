import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { editarProducto } from '../actions/productoActions'
import {useHistory} from 'react-router-dom'
const EditarProducto = () => {
    const history= useHistory();
    const dispatch = useDispatch();
    //nuevo state de producto
    const [producto, setproducto] = useState({
        nombre: "",
        precio: ""
    });
    //producto a editar 
    const productoEditar = useSelector(state => state.productos.productoEditar);
    useEffect(() => {
        setproducto(productoEditar);
    }, [productoEditar]);
    
    const { nombre, precio } = producto;
    
    //Leer datos del formulario
    const onChangeFormulario = e => {
        setproducto({
            ...producto,
            [e.target.name]: e.target.value
        });
    }

    const submitEditar = e => {
        e.preventDefault();
        dispatch(editarProducto(producto));
        history.push('/');
    }

    return (
        <div className="row justify-content-center">
            <div className="col-md-8">
                <div className="card">
                    <div className="card-body">
                        <h2 className="text-center mb-4 font-wight-bold">
                            Editar producto
                   </h2>

                        <form
                            onSubmit={submitEditar}
                        >
                            <div className="form-group">
                                <label>Nombre Producto</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    name="nombre"
                                    value={nombre}
                                    onChange={onChangeFormulario}
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
                                    onChange={onChangeFormulario}
                                />
                            </div>

                            <button
                                type="submit"
                                className="btn btn-primary font-weight-bold text-uppercase d-block w-100"
                            >GuardarCambios</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default EditarProducto
