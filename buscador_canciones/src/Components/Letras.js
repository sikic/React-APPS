import React,{Fragment} from 'react'

const Letras = ({letra}) => {

    if(letra === undefined) return null;
    
    return (
        <Fragment>
            <h2>Letra Canción</h2>
            <p className="letra">{letra}</p>
        </Fragment>
    )
}

export default Letras
