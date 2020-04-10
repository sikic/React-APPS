import React,{useContext} from 'react'
import {CategoriasContext} from '../Context/CategoriasContext'

const Formulario = () => {

    const { categorias } = useContext(CategoriasContext);
    console.log(categorias)
    return (
        <form
            className="col-12"
        
        >
            <fieldset className="text-center">
                <legend>Busca bebidas por categoria o ingrediente</legend>
            </fieldset>

            <div className="row mt-4">
                <div className="col-md-4">
                    <input
                        name="nombre"
                        type="text"
                        className="form-control"
                        onChange={console.log("object")}
                        placeholder="Busca por ingrediente"
                    />
                </div>
                
                <div className="col-md-4">
                    <select
                        className="form-control"
                        name="categoria"
                    >
                        <option value ="">--Selecciona categoria--</option>
                        {categorias.map((cat) => {
                            return (
                                <option 
                                    key = {cat.strCategory}
                                    value = {cat.strCategory}
                                >{cat.strCategory}</option>
                            )
                        }
                        )}
                    </select>
                </div>

                <div className="col-md-4">
                    <input
                        type="submit" 
                        className="btn btn-block btn-primary"
                        value="Buscar bebidas"
                    />
                </div>
            </div>
        </form>
    )
}

export default Formulario
