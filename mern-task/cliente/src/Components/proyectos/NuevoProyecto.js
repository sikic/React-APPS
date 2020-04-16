import React,{Fragment,useState} from 'react'

const NuevoProyecto = () => {

    //state para proyecto
    const [proyecto, setproyecto] = useState({
        nombre:''
    });
    
    //state para el error
    const [error, seterror] = useState(false);

    const onchange=(e)=>{
        setproyecto({
            ...proyecto,
            [e.target.name]:e.target.value
        }) 
    }
    
    const {nombre} = proyecto;
    

    const hadleonsubmit=(e)=>{
        e.preventDefault();


        //validar el nombre
        if(nombre.trim() ==='')
            return seterror(true);

        seterror(false);
        //agregar al state 
        setproyecto(nombre);
        //reiniciar el form
        
    }
    return (
        <Fragment>
            <button 
            type="button"
            className="btn btn-block btn-primario"
            
            >
                Nuevo Proyecto
            </button>
    
            <form
                className="formulario-nuevo-proyecto"
                onSubmit={hadleonsubmit}
            >
                <input
                    type="text"
                    className="input-text"
                    placeholder="Nombre Proyecto"
                    nanme="nombre"
                    value={nombre}
                    onChange={onchange}
                />

                <input
                    type="submit"
                    className="btn btn-primario btn-block"
                    value="Agregar proyecto"
                />
                
            </form>

        </Fragment>
    )
}

export default NuevoProyecto
