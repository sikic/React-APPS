import React from 'react'

const Imagenes = ({actual}) => {

    const {largeImageURL,previewURL,likes,tags,views} = actual;
    return (
        <div className="col-12 col-sm-6 col-md-4 col-lg-3 mb-4">
            <div className="card">
                 <img src={previewURL} alt ={tags} className="card-img-top" />

                <div className="card-body">
                    <p className="card-text">
                        {likes} me gusta
                    </p>

                    <p className="card-text">
                        {views} visitas
                    </p>
                </div>

                <div className="card-footer">
                    <a href={largeImageURL} className="btn btn-primary btn-block"> ver imagen</a>
                </div>
            </div>
        </div>
    )
}

export default Imagenes
