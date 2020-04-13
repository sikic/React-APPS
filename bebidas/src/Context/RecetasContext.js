import React,{createContext,useState,useEffect} from 'react'
import Axios from 'axios';


export const RecetasContext=createContext();

const RecetasProvider = (props) => {

    const [recetas, setrecetas] = useState([]);

    const [busqueda, setbusqueda] = useState({
        nombre:'',
        categoria:''
    })

    const [consultar, setconsultar] = useState(false);

    useEffect(() => {
        if(consultar){
            const consultarApi= async () =>{
            const url = `https://thecocktaildb.com/api/json/v1/1/filter.php?i=${busqueda.nombre}&c=${busqueda.categoria}`;
            const response =  await Axios.get(url);
            setrecetas(response.data.drinks);
        }
        consultarApi();
       }

    }, [busqueda])
    return (
        <RecetasContext.Provider
        value={{
            recetas,
            setbusqueda,
            setconsultar
        }}>
            {props.children}
        </RecetasContext.Provider>
    )
}

export default RecetasProvider
