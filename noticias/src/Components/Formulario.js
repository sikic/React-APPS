import React from 'react'
import styles from './Formulario.module.css'
import useSelect from '../Hooks/useSelect'

const Formulario = () => {

    //utlizar custom hoook
    const [categoria,SelecNoticias] = useSelect('','');
    return (

        <div className={`row ${styles.buscador}`}>
            <div className="col s12 m8 offset-m2"> 
                <form>
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
