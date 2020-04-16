import React,{useState} from 'react'
import {Link} from 'react-router-dom'

const Login = () => {
    
    //state incio sesion

    const [credenciales, setcredenciales] = useState({
        email:'',
        password:''
    });

    //extraer valores

    const { email ,password}=credenciales;

    const iniciar=(e)=>{
        setcredenciales({
            ...credenciales,
            [e.target.name]:e.target.value
        })
    }

    const logearse =(e)=>{  
        e.preventDefault();

        //validar que no hay acampos vacios
    }

    return (
        <div className ="form-usuario">
            <div className="contenedor-form sombra-dark">
                <h1>Iniciar sesión</h1>

                <form
                    onSubmit={logearse}
                >
                    <div className="campo-form">
                        <label htmlFor="email">Email</label>
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

                    <div className="form-form">
                        <input
                            type="submit"
                            className="btn btn-primario btn-block"
                            value="Iniciar Sesion"
                        />
                    </div>
                </form>
                <Link to={'/nueva-cuenta'} className="enlace-cuenta">Registrarse</Link>
            </div>
        </div>
    )
}

export default Login
