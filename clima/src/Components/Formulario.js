import React,{useState} from 'react'
import Error from './Error'

const Formulario = ({busqueda,setbusqueda,setconsultar}) => {

  const {ciudad,pais} = busqueda;

  //funcion que coloca los elementos en el state 
  const handleChange = e =>{
    //actualizar el state
    setbusqueda({
      ...busqueda,
      [e.target.name] :e.target.value
    })
  }

  //state del error
  const [error, seterror] = useState(false);
  //submit del form
  const handleSubmit = e =>{
    e.preventDefault();

    //validar 
    if(ciudad.trim() ===  '' || pais.trim() === '')
      return seterror(true);

    seterror(false);
    //para que use effect sepa cuando tiene que hacer la llamada
    setconsultar(true);
  }
    return (
        <form
          onSubmit={handleSubmit}
        >
          {error ? <Error mensaje ="todos los campos son obligatorios"/> : null}
           <div className="input-field col s12">
              <input
                type="text"
                name="ciudad"
                id="ciudad"
                value={ciudad}
                onChange={handleChange}
              />
                <label htmlFor="ciudad">Ciudad: </label>
            </div>     

            <div className="input-field col s12">
              <select
                name="pais"
                id="pais"
                value={pais}
                onChange={handleChange}

              >
                  <option value=""> -- Seleccione un pais --</option>
                  <option value="US">Estados Unidos</option>
                  <option value="MX">México</option>
                  <option value="AR">Argentina</option>
                  <option value="CO">Colombia</option>
                  <option value="CR">Costa Rica</option>
                  <option value="ES">España</option>
                  <option value="PE">Perú</option>
              </select>
                <label htmlFor="ciudad">Ciudad: </label>
            </div>   

            <div className="input-field col s12">

            <input
             type="submit"
             value="Buscar"
             className="waves-effect waves-ligth btn-large btn-block yellow accent-4"
             /> 
            </div>
        </form>
    )
}

export default Formulario
