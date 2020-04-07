import React from 'react'
import Imagenes from './Imagenes'

const ListadoImagenes = ({lista}) => {
    return (
        <div className ="col-12 p-5 row">
            {lista.map(img=>(
                <Imagenes 
                    key={img.id}
                    actual = {img}
                />
            ))}
        </div>
    )
}

export default ListadoImagenes
