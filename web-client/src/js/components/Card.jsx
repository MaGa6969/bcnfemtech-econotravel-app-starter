import * as React from 'react';


export function Card ({imgSrc, title, descripcion, precio, duracion, accesibilidad, etiquetas}) {
    return (
        <div className="card">
            <img src={imgSrc} alt=""/>
            <div className="card__body">
                <h2 className="card__title">{title}</h2>
                <p className="card__descripcion">{descripcion}</p>
                <h3 className="card__precio">{precio}</h3>
                <h4 className="card__duracion">{duracion}</h4>
                <h5 className="card__accesibilidad">{accesibilidad}</h5>
                <p className="card__etiquetas">{etiquetas}</p>
            </div>
        </div>
    )
}