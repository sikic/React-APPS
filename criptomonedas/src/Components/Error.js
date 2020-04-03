import React from 'react'
import styled from '@emotion/styled'

const MensajeError = styled.p`
    background-color:#b7322c;
    color:#FFF;
    font-weight:bold;
    font-family:'Bebas Neue',cursive;
    text-transform:uppercase;
    text-align:center;
    padding:1rem;
    font-size:30px;
`;
const Error = ({mensaje}) => {
    return (
       <MensajeError>
           {mensaje}
       </MensajeError>
    )
}

export default Error
