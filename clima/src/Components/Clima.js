import React from 'react'

export const Clima = ({informacion}) => {

    const {name,main,weather}=informacion;
    if(!name) return null;
    //para mostrar el icono
    const aux = weather[0].icon;
    const icono = `https://openweathermap.org/img/w/${aux}.png`;
    //Grados kelvin 
    const kelvin = 273.15;
    return (
        <div className="card-panel white col s12">
            <div className="black-text">
                <h2>El clima de {name} es :</h2>
                <p className="temperatura">
                    {parseFloat(main.temp -kelvin).toFixed(1)}º
                    { <img src={icono}/>}
                </p>
                <p>
                    Temperatura Máxima:
                    {parseFloat(main.temp_max -kelvin).toFixed(1)}º
                </p>
                <p>
                    Temperatura Minima:
                    {parseFloat(main.temp_min -kelvin).toFixed(1)}º
                </p>
            </div>
           
        </div>
    )
}
