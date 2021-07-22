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