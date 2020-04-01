import React,{Fragment,useState} from 'react'

const useMoneda = (label,stateInicial,opciones) =>{

    //sate de nuestro custom hoook
const [state, setstate] = useState(stateInicial);

    const Seleccionar  = () => (
        <Fragment>
            <label>{label}</label>
            <select>
                <option value="">--Seleccione-</option>
                {opciones.map((opcion)=>(
                    <option
                     key={opcion.codigo}
                     value={opcion.codigo}
                >{opcion.nombre}</option>
                ))}
            </select>
        </Fragment>
    ); 

    //retornas state, intefaz y funcion que modifica el sate
    return [state,Seleccionar,setstate]
}

export default useMoneda;