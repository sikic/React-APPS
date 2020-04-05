import React from 'react';
import styles from './Formulario.module.css';
import useSelect from '../Hooks/useSelect';

const Formulario = ({setcategoria}) => {

    //opciones de noticias
    const OPCIONES=[
        { value :'general',label:'General'},
        { value :'business',label:'Negocio'},
        { value :'entertainment',label:'Entretenimiento'},
        { value :'health',label:'Salud'},
        { value :'science',label:'Ciencia'},
        { value :'sport',label:'Deportes'},
        { value :'technology',label:'Tecnología'}
    ];
    //utlizar custom hoook
    const [categoria,SelecNoticias] = useSelect('general',OPCIONES);
    
    //submit del from
    const buscarNoticias = e =>{
        e.preventDefault();
        setcategoria(categoria);
    }
    return (

        <div className={`row ${styles.buscador}`}>
            <div className="col s12 m8 offset-m2"> 
                <form
                    onSubmit={buscarNoticias}
                >
                    <h2 className={styles.heading}>Encuentra tus noticias por categoria</h2>

                    <SelecNoticias/>

                    <div className="input-field col s12">
                        <input
                            type="submit"
                            className={`btn-large amber darken-2 ${styles.btnblock}`}
                            value="Buscar"
                        />
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Formulario
