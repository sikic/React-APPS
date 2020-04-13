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

    //state por si no encuentra resultado
    const [resultados, setresultados] = useState(true);

    useEffect(() => {
        if(consultar){
            const consultarApi= async () =>{
            const prueba = `https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=${busqueda.nombre}`;
            const response1 =  await Axios.get(prueba);
            if(response1.data === ""){
                setresultados(false);
            }
            else{
                setresultados(true);
                const url = `https://thecocktaildb.com/api/json/v1/1/filter.php?i=${busqueda.nombre}&c=${busqueda.categoria}`;
                const response =  await Axios.get(url);
                setrecetas(response.data.drinks);
            }
            
        }
        consultarApi();
       }

    }, [busqueda])
    return (
        <RecetasContext.Provider
        value={{
            recetas,
            resultados,
            setbusqueda,
            setconsultar
        }}>
            {props.children}
        </RecetasContext.Provider>
    )
}

export default RecetasProvider
