import React from 'react'

const Cotizacion = ({resultado}) => {

    if(Object.keys(resultado).length ===0) return null;
    return (
        <div>
            <p>El precio es : <span>{resultado.PRICE}</span></p>
            <p>El precio más alto del dia fue : <span>{resultado.HIGHDAY}</span></p>
            <p>El precio más bajo del dia fue : <span>{resultado.LOWDAY}</span></p>
            <p>Variación en las últimas 24 horas : <span>{resultado.PRICE}</span></p>
            <p>El precio es : <span>{resultado.PRICE}</span></p>

        </div>
    )
}

export default Cotizacion
