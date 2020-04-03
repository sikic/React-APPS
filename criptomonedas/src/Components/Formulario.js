import React,{useEffect,useState} from 'react'
import styled from '@emotion/styled';
import Error from './Error'
import useMoneda from '../Hooks/useMoneda'
import useCriptomoneda from '../Hooks/useCriptomoneda'
import Axios from 'axios';

const Boton = styled.input`
 margin-top:20px;
 font-weight:bold;
 font-size:20px;
 padding:10px;
 background-color:#66a2fe;
 border:none;
 width:100%;
border-radius:10px;
color:#FFF;
transition:background-color .8s ease;

&:hover{
    background-color:#326AC0;
    cursor:pointer;
}
 `;

const Formulario = ({setmoneda,setcriptomoneda}) => {
    //state listado de criptomonedas
    const [listacripto, setlistacripto] = useState([]);

    const MONEDAS = [
        { codigo:'USD',nombre:'Dolar Americano' },
        { codigo:'MXN',nombre:'Peso Mexicano' },
        { codigo:'EUR',nombre:'Euro' },
        { codigo:'GBP',nombre:'Libra Esterlina' },

    ];

    

    //uilixamos el hook custom
    const[moneda,SelectMonedas] = useMoneda('Elige tu moneda','',MONEDAS);

    //usamos el useCriptomoneda
    const[criptomoneda,SelectCripto] = useCriptomoneda('Elige tu criptomoneda','',listacripto);

    //state de error
    const [error, seterror] = useState(false);

    //funcion del submit
    const cotizarMoneda = (e) =>{
        e.preventDefault();
        //comprobar que la moneda y la cripto no estan vacia
        if(criptomoneda.trim() === '' || moneda.trim() === '')
            return seterror(true);
        
        //No hay error 
        seterror(false);

        //pasar datos a App-js
        setmoneda(moneda);
        setcriptomoneda(criptomoneda);
    }
    //ejecutar llamado a la api
    useEffect(() => {
        const consultarApi = async () =>{
            const url='https://min-api.cryptocompare.com/data/top/mktcapfull?limit=10&tsym=USD';

            const resultado = await Axios.get(url);
            setlistacripto(resultado.data.Data);
        }
       consultarApi();
    }, [])
    return (
        <form
            onSubmit={cotizarMoneda}
        >
            {error ? <Error mensaje='Todos los campos son obligatorios'/> : null}
            <SelectMonedas />
            <SelectCripto />
            <Boton
                type="submit"
                value="Calcular"
            />
            
        </form>
    )
}

export default Formulario
