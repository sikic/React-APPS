import React,{Fragment} from 'react';

import styled from "@emotion/styled";

const CustomResumen = styled.div`
    padding:1rem;
    padding-left:0;
    text-align:center;
    background-color:#00838F;
    color:#FFFFFF;
    margin-top:1rem;

`;

 const CustomUl = styled.ul`
   
 `;
 const Customli = styled.li`
    border:1px solid white;
    padding:0.5rem;
    padding-left:0;
    text-align:center;
 `;
// const Custom = style.`

// `;
const Resumen = ({resumen}) => {

    const {plan,anio,marca} = resumen.datos;

    if(marca === '' || plan === '' || anio === '')
        return null;

    return ( 
        <CustomResumen>
            <h2>
                Resumen de cotizacion
            </h2>

            <CustomUl>
                <Customli>Marca: {marca}</Customli>
                <Customli>Plan: {plan}</Customli>
                <Customli>Año: {anio}</Customli>

            </CustomUl>
        </CustomResumen>
     );
}
 
export default Resumen;