import React,{Fragment} from 'react'

const Noticias = ({noticia}) => {
    //extraer los datos

    const { urlToImage,url,title,description,source} = noticia;

    //si no hay imagen 
    const imagen = (urlToImage) ?
    <div className="card-image">
        <img src={urlToImage} alt ={title}/>
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
                    <a href={source}> Ver más</a>
                </div>
           </div>
        </div>
    )
}

export default Noticias
