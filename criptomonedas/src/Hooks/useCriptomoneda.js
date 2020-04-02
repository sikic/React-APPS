import React,{Fragment,useState} from 'react'
import styled from '@emotion/styled';

const useCriptomoneda = (label,stateInicial,opciones) =>{

const Label = styled.label`
    font-family:'Bebas Neue',cursive;
    color:#FFF;
    text-transform:uppercase;
    font-weight:bold;
    font-size:2.4rem;
    margin-top:2rem;
    display:block;
`;

const Select = styled.select`
width:100%;
display:block;
padding:1rem;
-webkit-appearance:none;
border-radius:10px;
border:none;
font-size:1.2rem;
`;

    //sate de nuestro custom hoook
const [state, setstate] = useState(stateInicial);
    const SeleccionarCripto  = () => (
        <Fragment>
            <Label>{label}</Label>
            <Select
                onChange={e => setstate(e.target.value)}
                value={state}
            >
                <option value="">--Seleccione--</option>
                {opciones.map((opcion)=>(
                    <option
                     key={opcion.CoinInfo.Id}
                     value={opcion.CoinInfo.Name}
                >{opcion.CoinInfo.FullName}</option>
                ))}
            </Select>
        </Fragment>
    ); 

    //retornas state, intefaz y funcion que modifica el sate
    return [state,SeleccionarCripto,setstate]
}

export default useCriptomoneda;