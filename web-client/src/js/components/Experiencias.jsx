import * as React from 'react';
import {Card} from "./Card";
import paseobici from './assets/paseobici.png'

const cards = [
    {
        id: 1,
        title: "Paseo en bicicleta por el Montseny",
        image: paseobici,
        precio: "250€",
        descripcion: "Disfruta de un hermoso paseo en bicicleta por el increíble Parque Natural del Montseny. Una escapada veraniega perfecta para parejas, familias y amigos que nos permitirá conocer nuevos y sorprendentes lugares. El recorrido que os proponemos comienza con una larga subida con algunos descansos, combinando asfalto y pistas anchas, culminando en un mirador con magníficas vistas del Vallés y el mar. Desde aquí continuaremos la bajada combinando senderos, pistas y algún tramo de carretera y terreno mixto para visitar la zona de Santa Fe, donde descubriremos la Ermita y el Bosque de las Secuoyas. Para finalizar, acudiremos al restaurante María Rosa de Palautordera, donde disfrutaremos de una excelente comida casera con butifarra blanca y negra y munxetes del Montseny.",
        duracion: "5h",
        accesibilidad: "Actividad disponible para todas las edades. Disponemos de bicicletas accesibles para personas con movilidad reducida en el tren inferior así como sillines con capacidad para niños menores de 5 años (peso máximo 20kg).",
        etiquetas: "Montaña, bicicleta, excursión larga."
    }
]


export function Experiencias(){
    return (
        <div className="cardContainer">
            {
                cards.map(card => (
                    <div className="experiencia" key={card.id}>
                        <Card title={card.title} imgSrc={card.image} descripcion={card.descripcion} precio={card.precio} duracion={card.duracion} accesibilidad={card.accesibilidad} etiquetas={card.etiquetas} />
                    </div>
                ))
            }
        </div>
    )}

