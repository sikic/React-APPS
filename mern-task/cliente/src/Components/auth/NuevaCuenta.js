import React, { useState } from 'react'
import { Link } from 'react-router-dom'

const NuevaCuenta = () => {


    //state incio sesion

    const [credenciales, setcredenciales] = useState({
        email: '',
        password: '',
        nombre:'',
        passwordconfirm:''
    });

    //extraer valores

    const { email, password,nombre,passwordconfirm } = credenciales;

    const iniciar = (e) => {
        setcredenciales({
            ...credenciales,
            [e.target.name]: e.target.value
        })
    }

    const crear = (e) => {
        e.preventDefault();

        //validar que no hay acampos vacios


        //password min de 6 digitos

        //mirar que las contraseñas coincidan
    }
    return (

        <div className="form-usuario">
            <div className="contenedor-form sombra-dark">
                <h1>Formulario</h1>

                <form
                    onSubmit={crear}
                >
                    <div className="campo-form">
                        <label htmlFor="nombre">Nombre</label>
                        <input
                            type="nombre"
                            id="nombre"
                            value={nombre}
                            name="nombre"
                            placeholder="tu nombre"
                            onChange={iniciar}
                        />
                    </div>

                    <div className="campo-form">
                        <label htmlFor="email">email</label>
                        <input
                            type="email"
                            id="email"
                            value={email}
                            name="email"
                            placeholder="tu email"
                            onChange={iniciar}
                        />
                    </div>

                    <div className="campo-form">
                        <label htmlFor="password">Password</label>
                        <input
                            type="password"
                            id="password"
                            name="password"
                            value={password}
                            placeholder="tu password"
                            onChange={iniciar}
                        />
                    </div>

                    <div className="campo-form">
                        <label htmlFor="passwordconfirm">Repita</label>
                        <input
                            type="password"
                            id="passwordconfirm"
                            name="passwordconfirm"
                            value={passwordconfirm}
                            placeholder="confirma tu password"
                            onChange={iniciar}
                        />
                    </div>

                    <div className="form-form">
                        <input
                            type="submit"
                            className="btn btn-primario btn-block"
                            value="Registrarse"
                        />
                    </div>
                </form>
                <Link to={'/'} className="enlace-cuenta">Volver a iniciar sesión</Link>
            </div>
        </div>    
    )
}

export default NuevaCuenta
