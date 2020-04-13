import React,{useContext} from 'react'
import {RecetasContext} from '../Context/RecetasContext'
import Recetas from './Recetas'
const ListaRecetas = ({listado}) => {

    //extraer las recetas
    const  { recetas  } = useContext(RecetasContext);

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
