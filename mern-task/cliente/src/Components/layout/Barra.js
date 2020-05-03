import React from 'react'
import './Barra.css'
const Barra = () => {
    return (
        <header className="app-header">
            <p className = "nombre-usuario mover">Hola<span>Luis</span></p>

            <nav className="nav-principal">
                <a href="#!">Cerrar Sesión</a>
            </nav>
        </header>
    )
}

export default Barra
