import React,{useState} from 'react';

import styled from "@emotion/styled";
import { diferenciaAnios,varianteMarca,variantePlan} from '../helper'

const CustomDivs = styled.div`
    display:flex;
    margin-bottom: 1rem;
    align-items:center;
    
`;

const CustomLabel = styled.label`
    flex: 0 0 100px;
    margin-right: 5px;
    padding:1rem;
    text-align:center;
    border: 1px solid black;
`;

const CustomSelect=styled.select`
    display:block;
    width:100%;
    padding:1rem;
    border: 1px solid #e1e1e1;
    -webkit-appearance:none;
`;

const CustomRadio=styled.input`
   margin:0 1rem;
`;

const CustomButton=styled.button`
    background-color: #00838F;
    font-size:16px;
    width:100%;
    padding:1rem;
    color:#ffffff;
    text-transform:uppercase;
    font-weight:bold;
    border:none;
    transition:background-color 1s ease;
    margin-top:1rem;

    &:hover{
        cursor:pointer;
        background-color:greenyellow;
    }
`;

const Error = styled.div`
    background-color:red;
    color:white;
    padding:0.5rem;
    margin-bottom:0.5rem;
    text-align:center;
`;
const Formulario = ({setResumen,setSpinner}) => {

    const [datos, setDatos] = useState({
        marca:'',
        anio:'',
        plan:''
    });


    //extraer los valores del state
    const {marca,anio,plan} = datos;
    //state error
    const [error, setError] = useState(false);

    //leer datos del formulario

    const obtenerInfo = e =>{
        setDatos({
            ...datos,
            [e.target.name]: e.target.value
        });
    }


    //cuando se envia el formulario
    const cotizarSeguro = e =>{
        e.preventDefault();

        if(marca.trim() === '' || anio.trim() === '' || plan.trim() == ''){
            return setError(true);
        }

        setError(false);

        //base inicial
        const base = 2000;
        let total = 2000;
        //obtener la diferencia de años con el actual
        const diferencia = diferenciaAnios(parseInt(anio));

        //por cada año hay que restar un 3%
        total -= (0.03* base) * diferencia;

        //americano +15%, asiatico +5% ,europeo +30%
        total += varianteMarca(marca)*base;
       
        //basico +20%,completo +50%
        total += variantePlan(plan)*base;
        //redondeamos a 2 decimales
        total = parseFloat(total).toFixed(2);

        //cargamos el spinner antes de que se muestre el resultado
        setSpinner(true);
         //y para que la animacion tenga mas sentido esperamos 3 segundos para actualizar el resumen
         setTimeout(()=>{
            setSpinner(false);

             //total
             setResumen({
                 cotizacion : total,
                 datos
             });
         },1500)
    } 

    return ( 

        <form
            onSubmit={cotizarSeguro}
        >

            {error ?
            
            <Error>
                <p>Todos los campos son obligatorios</p>
            </Error>
            : null}
            <CustomDivs>
                <CustomLabel>Marca </CustomLabel>
                <CustomSelect
                    name="marca"
                    value={marca}
                    onChange={obtenerInfo}
                >
                    <option value="">-- Seleccione una --</option>
                    <option value="Americano">Americano</option>
                    <option value="Europeo">Europeo</option>
                    <option value="Asiático">Asiático</option>

                </CustomSelect>
            </CustomDivs>

            <CustomDivs>
                <CustomLabel>Año </CustomLabel>
                <CustomSelect
                    name="anio"
                    value={anio}
                    onChange={obtenerInfo}

                >
                    <option value="">-- Seleccione uno --</option>
                    <option value="2021">2021</option>
                    <option value="2020">2020</option>
                    <option value="2019">2019</option>
                    <option value="2018">2018</option>
                    <option value="2017">2017</option>
                    <option value="2016">2016</option>
                    <option value="2015">2015</option>
                    <option value="2014">2014</option>
                    <option value="2013">2013</option>
                    <option value="2012">2012</option>

                </CustomSelect>
            </CustomDivs>

            <CustomDivs>
                <CustomLabel>Plan: </CustomLabel>
                <CustomRadio
                    type="radio"
                    name="plan"
                    value="basico"
                    checked ={plan === "basico"}
                    onChange={obtenerInfo}
                />Básico  
                 <CustomRadio
                    type="radio"
                    name="plan"
                    value="completo"
                    checked ={plan === "completo"}
                    onChange={obtenerInfo}
                />Completo
                
            </CustomDivs>

            <CustomButton
                type="submit"
            >Cotizar</CustomButton>
        </form>
     );
}
 
export default Formulario;