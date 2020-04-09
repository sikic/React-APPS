import React, { Fragment } from 'react'

const Biografia = ({ info }) => {

    if (Object.keys(info).length === 0) return null;

    const { strArtistThumb, strGenre, strBiographyES } = info;

    return (
        <div className="card border-ligth">
            <div className="card-header bg-primary text-ligth font-weigth-bold">
                Informacion Artista
         </div>

            <div className="card-body">
                <img src={strArtistThumb} alt="Logo Artista" />
                <p className="card-text">Género: {strGenre}</p>
                <h2 className="card-text"> Biografia:</h2>
                <p className="card-text">{strBiographyES}</p>
            <a href={`https://${info.strFacebook}`} target="_blank" rel="noopener noreferrer">
                <i className="fab fa-facebook"></i>
            </a>
            <a href={`https://${info.strTwitter}`} target="_blank" rel="noopener noreferrer">
                <i className="fab fa-twitter"></i>
            </a>
            <a href={`${info.strLastFMChart}`} target="_blank" rel="noopener noreferrer">
                <i className="fab fa-lastfm"></i>
            </a>
            </div>
        </div>
    )
}

export default Biografia
