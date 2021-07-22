import * as React from "react";


export const ExperienceCard = (props) =>
    <div className="experiencia">
        <div>{props.experiencia.image}</div>
        <div>{props.experiencia.descripcion}</div>
        <div>{props.experiencia.precio}</div>
        <div>{props.experiencia.duracion}</div>
        <div>{props.experiencia.accesibilidad}</div>
        <div>{props.experiencia.etiqueta}</div>

    </div>
/*
function Card(props){
        return(
            <div className="card">
            <div className="card__body">
                <img src={props.img} />
                <h2 className="card__name">{props.name}</h2>
                <h2 className="card__descripcion">{props.descripcion}</h2>
                <p  className="card__duracion">{props.precio}</p>
                <p  className="card__precio">{props.duracion}</p>
                <h2 className="card__accesibilidad">{props.accesibilidad}</h2>
                <p  className="card__etiqueta">{props.etiqueta}</p>
        </div>
        )
})*/
