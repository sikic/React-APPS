import {
    AGREGAR_PRODUCTO,
    AGREGAR_PRODUCTO_EXITO,
    AGREGAR_PRODUCTO_ERROR
} from '../types'
import clienteAxios from '../config/Axios'
import Swal from 'sweetalert2'

// Crear nuevos productos
export function crearNuevoProductoAction(producto) {
    return async (dispacth) => {
        dispacth(agregarProducto());

        try {
            //insertar en la API
            await clienteAxios.post('/productos', producto);

            //si todo ok, actualizar estate si no lanzar el error
            dispacth(agregarProductoExito(producto));
            //alerta chula
            Swal.fire(
                'Correcto',
                'El producto se agregó correctamente',
                'success'
            );
        } catch (error) {
            console.log(error)
            dispacth(agregarProductoError(true));
            //alerta chula de error
            Swal.fire({
                icon: 'error',
                title:'Hubo un error',
                text:'Hubo un error, inténtelo de nuevo.'
            })

        }
    }
}

const agregarProducto = () => ({
    type: AGREGAR_PRODUCTO
})

const agregarProductoExito = (producto) => ({
    type: AGREGAR_PRODUCTO_EXITO,
    payload: producto
})

const agregarProductoError = (estadoError) => ({
    type: AGREGAR_PRODUCTO_ERROR,
    payload: estadoError
})