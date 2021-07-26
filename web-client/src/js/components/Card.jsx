import * as React from 'react';


export function Card ({imgSrc, title, descripcion, precio}) {
    return (
        <div className="card">
            <img src={imgSrc} alt=""/>
            <div className="card__body">
                <h2 className="card__title">{title}</h2>
                <p className="card__descripcion">{descripcion}</p>
                <h3 className="card__precio">{precio}</h3>
            </div>
        </div>
    )
}