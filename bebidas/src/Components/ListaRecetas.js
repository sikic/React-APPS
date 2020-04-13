import React,{useContext} from 'react'
import {RecetasContext} from '../Context/RecetasContext'
import Recetas from './Recetas'
const ListaRecetas = ({listado}) => {

    //extraer las recetas
    const  { recetas,resultados} = useContext(RecetasContext);

    if(!resultados)
        return (<p className="alert alert-danger mt-5"> No ha sido posible encontrar ninguna bebida con ese ingrediente</p>);

    return (
        <div className="row mt-5">
            {recetas.map(elm=>{
                return (
                    <Recetas
                        item = {elm}
                        key={elm.idDrink}
                    />
                )
            })}
        </div>
    )
}

export default ListaRecetas
