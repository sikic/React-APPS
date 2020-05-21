import React, { Fragment ,useEffect} from 'react'
import Producto from './Producto'
//Redux
import {useSelector,useDispatch} from 'react-redux';
import {descargarProductos} from '../actions/productoActions'
const Productos = () => {

    const dispacth = useDispatch();

    useEffect(() => {
        //consultar api
        const cargarProductos = () => dispacth( descargarProductos() );
        cargarProductos(); 
    }, []);

    //obtener state
    const productos = useSelector(state => state.productos.productos);
    const error = useSelector(state => state.productos.error);
    const cargando = useSelector(state => state.productos.loading);

    return (
        <Fragment>
            <h2 className="text-center my-5">
                Listado de Productos
            </h2>
            {
                error ? <p className="font-weigth-bold alert alert-danger text-center mt-4"> Hubo un error</p>
                :  null
            }

            {
                cargando ? <p className="text-center">Cargando...</p> : null
            }
            <table className="table table-striped">
                    <thead className="bg-primary table-dark">
                        <tr>
                            <th scope="col">Nombre</th>
                            <th scope="col">Precio</th>
                            <th scope="col">Acciones</th>
                        </tr>
                    </thead>

                    <tbody>
                        {productos.length === 0 ? 'No hay Productos' :
                        (productos.map(p=>{
                            return(
                            <Producto
                                key={p.id}
                                p={p}
                            />)

                        }
                        ))
                        }
                    </tbody>
            </table>
        </Fragment>
    )
}

export default Productos