import React from 'react';
import styled from "@emotion/styled"
import {TransitionGroup,CSSTransition } from "react-transition-group";

 const Custom = styled.div`
    color:white;
    background-color:#00838F;
    padding:1rem;
    margin-top:1rem;
    text-align:center;
 `;
const Resultado = ({resultado}) => {

    if(resultado === 0) return null;
    return ( 

        <TransitionGroup
            component="div"
            className="resultado"
        >
                <CSSTransition
                    classNames="resultado"
                    key={resultado}
                    timeou={{enter:500,exit:500}}
                >
                     <Custom>
                        <h1>
                            El resultado de su cotización es : {resultado}
                        </h1>
                    </Custom>
                </CSSTransition>
            </TransitionGroup>
    );
}
 
export default Resultado;