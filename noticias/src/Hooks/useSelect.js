import React,{useState} from 'react'

const useSelect = ({inicial,opciones}) => {

    //state custom hooks
    const [state, setstate] = useState('');
    const SelectNoticias = () =>(
        <select
            className="browser-default"
        >
            <option value ="">--Seleccione--</option>

        </select>
    )
    return[state,SelectNoticias];
}

export default useSelect
