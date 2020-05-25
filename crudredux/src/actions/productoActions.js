import {
    AGREGAR_PRODUCTO,
    AGREGAR_PRODUCTO_EXITO,
    AGREGAR_PRODUCTO_ERROR,
    COMENZAR_DESCARGA_PRODUCTOS,
    DESCARGA_PRODUCTOS_ERROR,
    DESCARGA_PRODUCTOS_EXITO,
    OBTENER_PRODUCTO_ELIMINAR,
    PRODUCTO_ELIMINADO_ERROR,
    PRODUCTO_ELIMINADO_EXITO,
    OBTENER_PRODUCTO_EDITAR,
    COMENZAR_EDICION_PRODUCTO,
    PRODUCTO_EDITADO_EXITO,
    PRODUCTO_EDITADO_ERROR
} from '../types'
import clienteAxios from '../config/Axios'
import Swal from 'sweetalert2'

// Crear nuevos productos
export function crearNuevoProductoAction(producto) {
    return async (dispacth) => {
        dispacth(agregarProducto());

        try {
            //insertar en la API
            const resultado = await clienteAxios.post('/productos', producto);
            //si todo ok, actualizar estate si no lanzar el error
            dispacth(agregarProductoExito(resultado.data));
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
                title: 'Hubo un error',
                text: 'Hubo un error, inténtelo de nuevo.'
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

export function descargarProductos() {
    return async (dispatch) => {
        dispatch(descargarProductosinicio());

        try {
            setTimeout(async () => {
                const productos = await clienteAxios.get('/productos');
                dispatch(descargaExito(productos.data));
            }, 1000);
        } catch (error) {
            dispatch(descargaError());
        }
    }
}

const descargarProductosinicio = () => ({
    type: COMENZAR_DESCARGA_PRODUCTOS,
    payload: true
})

const descargaExito = (productos) => ({
    type: DESCARGA_PRODUCTOS_EXITO,
    payload: productos
})

const descargaError = () => ({
    type: DESCARGA_PRODUCTOS_ERROR,
    payload: true
})

//Seleccion y elimina el producto
export function borrarProducto(id) {
    return async (dispacth) => {
        dispacth(obtenerProductoEliminar(id));

        try {
            const eliminado = await clienteAxios.delete(`/productos/${id}`);
            dispacth(eliminarProductoExito());
            Swal.fire(
                'Alehop!! Eliminado',
                'El articulo se ha eliminado correctamente',
                'success'
            )
        } catch (error) {
            console.log(error)
            dispacth(eliminarProductoError());
        }
    }
}

const obtenerProductoEliminar = (id) => ({
    type: OBTENER_PRODUCTO_ELIMINAR,
    payload: id
})

const eliminarProductoExito = () => ({
    type: PRODUCTO_ELIMINADO_EXITO
})

const eliminarProductoError = () => ({
    type: PRODUCTO_ELIMINADO_ERROR,
    payload: true
})

//colocar producto en edicion

export function obtenerProductoEditar(producto) {
    return (dispacth) => {
        dispacth(obtenerProducto(producto));
    }
}

const obtenerProducto = producto => ({
    type: OBTENER_PRODUCTO_EDITAR,
    payload: producto
})

export function editarProducto(producto) {
    return async dispacth => {
        dispacth(comienzoEditarProducto());
        try {
            await clienteAxios.put(`/productos/${producto.id}`,producto);
            dispacth(editadoExito(producto));
        } catch (error) {
            dispacth(editadoError());
        }
    }
}

const comienzoEditarProducto = producto => ({
    type: COMENZAR_EDICION_PRODUCTO
})

const editadoExito = (producto) => ({
    type: PRODUCTO_EDITADO_EXITO,
    payload: producto
})

const editadoError = producto => ({
    type: PRODUCTO_EDITADO_ERROR,
    payload: true
})