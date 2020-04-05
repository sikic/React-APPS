import React,{useState} from 'react'

const useSelect = (inicial,opciones) => {
    //state custom hooks
    const [state, setstate] = useState(inicial);
    const SelectNoticias = () =>(
        <select
            className="browser-default"
            value={state}
            onChange={e => setstate(e.target.value)}
        >
            {opciones.map((op) =>(
                <option
                    key= {op.value}
                    value={op.value}
                >{op.label}</option>
            ))}

        </select>
    )
    return[state,SelectNoticias];
}

export default useSelect
