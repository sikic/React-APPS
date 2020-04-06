import React,{Fragment} from 'react'
import './Noticias.css'

const Noticias = ({noticia}) => {
    //extraer los datos

    const { urlToImage,url,title,description,source} = noticia;

    //si no hay imagen 
    const imagen = (urlToImage) ?
    <div className="card-image">
        <img src={urlToImage} alt ={title} className="imagenFija"/>
        <span className="card-title">{source.name}</span>
    </div>
    :null;

    return (
        <div className="col s12 m6 l4">
           <div className="card">
               {imagen}

                <div className="card-content">
                     <h3>{title}</h3>
                    <p>{description}</p>
                </div>

                <div className="card-action">
                    <a href={url}> Ver más</a>
                </div>
           </div>
        </div>
    )
}

export default Noticias
