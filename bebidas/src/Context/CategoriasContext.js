import React,{createContext,useState,useEffect} from 'react'
import Axios from 'axios';

//creamos el context
export const CategoriasContext = createContext();

//crear provider que es donde estan las funciones y state
const CategoriasProvider = (props)=>{

    //crear el ste del context
    const [categorias, setcategorias] = useState([]);

    //Llamado a la api
    useEffect(() => {
        const obtenerCategorias = async () => {
            const url='https://www.thecocktaildb.com/api/json/v1/1/list.php?c=list';
            const categorias = await Axios.get(url);
            setcategorias(categorias.data.drinks);
        }

        obtenerCategorias();
    }, [])

    return(
        <CategoriasContext.Provider
            value={{
                categorias
            }}
        >
            {props.children}
        </CategoriasContext.Provider>
    )
}

export default CategoriasProvider;

