import React from 'react'
import Noticias from './Noticias'
const ListadoNoticias = ({noticias}) => {
    return (
        <div className="row">
            {noticias.map(n =>(
                <Noticias
                    key={n.url}
                    noticia={n}
                />
            ))}
        </div>
    )
}

export default ListadoNoticias
