import React from 'react'
import Link from 'next/link'

const Navegacion = () => {
    return (
        <nav>
            <Link href="/">Inicio</Link>
            <Link href="/populares">Populares</Link>
            <Link href="/nuevos">Nuevo Producto</Link>
        </nav>
    )
}

export default Navegacion
