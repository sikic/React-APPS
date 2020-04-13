import React,{useEffect,useContext,useState, createContext} from 'react'
import Axios from 'axios';

export const ModalContext = createContext();

const ModalContextProvider = (props) => {

    //state provider
    const [idReceta, setidReceta] = useState(null);

    //sate para los detalle de las bebidas
    const [detalles, setdetalles] = useState({});

    //una vez hay un id llamammos a la api

    useEffect(() => {
        const consultarApi= async () =>{
            if(idReceta !==  null){
                const url = `https://thecocktaildb.com/api/json/v1/1/lookup.php?i=${idReceta}`;
                const respuesta = await Axios.get(url);
                setdetalles(respuesta.data.drinks[0]);
            }
        }
        consultarApi();
    }, [idReceta])
    return (
        <ModalContext.Provider
            value={{
                setidReceta,
                detalles,
                setdetalles
            }}
        >
            {props.children}
        </ModalContext.Provider>
    )
}

export default ModalContextProvider
