import React,{Fragment} from 'react'

const Letras = ({letra}) => {

    if(Object.keys(letra).length===0) return null;
    
    return (
        <Fragment>
            <h2>Letra Canción</h2>
            <p className="letra">{letra}</p>
        </Fragment>
    )
}

export default Letras
