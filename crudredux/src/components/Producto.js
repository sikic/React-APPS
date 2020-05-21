import React from 'react'
import { Link } from 'react-router-dom'
//Redux
import { useDispatch } from 'react-redux';
import { borrarProducto } from '../actions/productoActions'
import Swal from 'sweetalert2'

const Producto = ({ p }) => {

    const { nombre, precio, id } = p;

    const dispatch = useDispatch();

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

        return (
            <tr>
                <td>{nombre}</td>
                <td><span className="font-weigth-bold">{precio} $</span></td>
                <td className="acciones">
                    <Link to={`/productos/editar/${id}`} className="btn btn-primary mr-2">
                        Editar
                </Link>
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
