import React from 'react'
import {useHistory } from 'react-router-dom'
//Redux
import { useDispatch } from 'react-redux';
import { borrarProducto,obtenerProductoEditar } from '../actions/productoActions'
import Swal from 'sweetalert2'

const Producto = ({ p }) => {

    const { nombre, precio, id } = p;

    const dispatch = useDispatch();
    const history = useHistory();
    //confirmar si desea eliminarlo{
    const confirmarEliminarProducto = id => {
        //preguntar al usuario

        Swal.fire({
            title: "¿Desea eliminar el articulo?",
            text: "Una vez borrado no podrá ser recuperado",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'ok'
        }).then((result) => {
            if (result.value) {
                dispatch(borrarProducto(id));
            }
        });
    }

    //funcion que redirigue de forma programa
    const redireccion = producto =>{
        dispatch(obtenerProductoEditar(producto))
        history.push(`/productos/editar/${producto.id}`);
    }
        return (
            <tr>
                <td>{nombre}</td>
                <td><span className="font-weigth-bold">{precio} $</span></td>
                <td className="acciones">
                    <button onClick={() =>redireccion(p) } className="btn btn-primary mr-2">
                        Editar
                    </button>
                    <button type="button" className="btn btn-danger"
                        onClick={() => confirmarEliminarProducto(id)}
                    >
                        Eliminar
                </button>

                </td>
            </tr>
        )
    
}

export default Producto;
