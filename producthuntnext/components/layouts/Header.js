import React from 'react'
import Link from 'next/link'
import styled from '@emotion/styled'
import { css } from '@emotion/core'
import { Buscar } from '../UI/Buscar'
import Navegacion from './Navegacion'
import Boton from '../UI/Boton'

const ContenedorHeader = styled.div`
    max-width:1200px;
    width:95%;
    margin: 0 auto;
    @media(min-width: 768px){
        display:flex;
        justify-content:space-between;
    }
`;

const Logo = styled.p`
    color: var(--naranja);
    font-size: 4rem;
    line-height:0;
    font-weight: 700;
    font-family: 'Roboto Slab', serif;
    margin-right: 2rem;

    &:hover{
        cursor:pointer;
    }
`;

const Header = () => {

    const usuario = true;
    return (
        <header
            css={css`
                    border-bottom: solid gray 2px;
                    padding: 1rem 0;`
            }
        >
            <ContenedorHeader>
                <div
                    css={css`
                        display:flex;
                        align-items:center;`
                    }
                >
                    <Link href="/">
                        <Logo>P</Logo>
                    </Link>

                    <Buscar />
                    <Navegacion />
                </div>

                <div
                    css={css`
                        display:flex;
                        align-items: center;`
                    }
                >


                    {usuario ? (
                        <>
                            <p
                                css={css`
                                        margin-right:1rem;`
                                }>
                                Hola :Juan
                            </p>
                            <Boton >Cerrar Sesión</Boton>
                        </>)
                        : (
                            <>
                                <Link href="/login">
                                    <Boton
                                        bgColor="true"
                                    >
                                        Login
                            </Boton>
                                </Link>

                                <Link href="/crear-cuenta">
                                    <Boton
                                        bgColor="true"
                                    >
                                        Crear cuenta
                            </Boton>
                                </Link>
                            </>)
                    }
                </div>
            </ContenedorHeader>
        </header>
    )
}

export default Header
