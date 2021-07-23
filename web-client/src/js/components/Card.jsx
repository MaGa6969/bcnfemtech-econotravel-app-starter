import * as React from 'react';


export function Card () {
    return (
        <div className="card">
            <img src={paseobici} alt=""/>
            <div className="card__body">
                <h2 className="card__title">My title</h2>
                <h2 className="card__descripcion">texto de prueba</h2>
                <p  className="card__precio">145€</p>
            </div>
        </div>
    )
}