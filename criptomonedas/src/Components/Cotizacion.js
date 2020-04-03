import React from 'react'
import styled from '@emotion/styled'


const Resultado = styled.div`
    background-color:#FFF;
    margin-top:1rem;
    border-radius:20px;
    padding:2rem;
    padding-top:0.75rem;
    font-family:Arial, Helvetica, sans-serif;
`;

const Info = styled.p`
font-size:18px;
border:1px solid black;
padding:0.5rem
span{
    font-weight:30px;
    font-family:Arial, Helvetica, sans-serif;
}
`; 

const Precio = styled.p`
    font-size:30px;
`;
const Cotizacion = ({resultado}) => {

    if(Object.keys(resultado).length ===0) return null;
    return (
        <Resultado>
            <Precio>El precio es : <span>{resultado.PRICE}</span></Precio>
            <Info>El precio más alto del dia fue : <span>{resultado.HIGHDAY}</span></Info>
            <Info>El precio más bajo del dia fue : <span>{resultado.LOWDAY}</span></Info>
            <Info>Variación en las últimas 24 horas : <span>{resultado.CHANGEPCT24HOUR}</span> </Info>
            <Info>Ultima actualizacion : <span>{resultado.LASTUPDATE}</span></Info>

        </Resultado>
    )
}

export default Cotizacion
