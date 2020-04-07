import React from 'react'
import'./Imagenes.css'
const Imagenes = ({actual}) => {

    const {largeImageURL,previewURL,likes,tags,views} = actual;
    return (
        <div className="col-12 col-sm-6 col-md-4 col-lg-3 mb-4">
            <div className="card">
                <div className="content">
                 <img src={previewURL} alt ={tags} className="card-img-top" />
                </div>

                <div className="card-body">
                    <p className="card-text">
                        {likes} <i class="icono em em---1" aria-role="presentation" aria-label="THUMBS UP SIGN"></i>
                    </p>

                    <p className="card-text">
                        {views} <i class="em em-eyeglasses" aria-role="presentation" aria-label="EYEGLASSES"></i>
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
