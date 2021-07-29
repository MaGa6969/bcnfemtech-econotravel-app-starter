import * as React from 'react';


export function Card({imgSrc, title, descripcion, precio, duracion, accesibilidad, etiquetas}) {
    return (
        <div className="card">
            <img src={imgSrc} alt=""/>
            <div className="card__body">
                <h1 className="card__title">{title}</h1>
                <p className="card__descripcion">{descripcion}</p>
                <h2 className="card__precio">{precio}</h2>
                <h2 className="card__duracion">{duracion}</h2>
                <h3 className="card__accesibilidad">{accesibilidad}</h3>
                <p className="card__etiquetas">{etiquetas}</p>
            </div>
            {/*   <IconButton
                className={clsx(classes.expand, {
                    [classes.expandOpen]: expanded,
                })}
                onClick={handleExpandClick}
                aria-expanded={expanded}
                aria-label="show more"
            >
                <ExpandMoreIcon />
            </IconButton> */}
        </div>
    )
}