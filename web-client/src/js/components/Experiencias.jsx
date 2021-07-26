import * as React from 'react';
import {Card} from "./Card";
import paseobici from './assets/paseobici.png';
import paseobarco from './assets/paseobarco.png';
import BCNmodernista from './assets/BCNmodernista.png'

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
    },
    {
        id: 2,
        title:"Descubre la costa en barco de vela",
        image: paseobarco,
        precio:"280€",
        descripcion:"Disfruta de un hermoso paseo acuático en barco de vela por la increíble costa de Barcelona. Una escapada veraniega apta incluso para los días más calurosos del año. Descubre los encantadores alrededores de la ciudad de Barcelona y visita desde el mar sus más impresionantes playas y calas. " +
            "Comenzaremos la excursión en el Puerto de Barcelona, desde donde partiremos hacia el norte para visitar playas como la Mar Bella, la Playa de la Mora y la Playa de los Pescadores." +
            "A bordo de la embarcación podremos disfrutar de una selección de quesos y embutidos catalanes acompañada de cava brut y zumos de frutas. Asimismo, pararemos cerca de la Playa de Montgat para realizar una actividad de buceo de superficie que nos permitirá apreciar la diversidad de la fauna marítima local y su ecosistema. Finalizaremos la excursión en el mismo puerto del que partimos.",
        duracion:"4h",
        accesibilidad:"Actividad disponible para todas las edades. Pasarela para silla de ruedas disponible bajo reserva.",
        etiquetas:"Playa, barco, excursión larga."
    },
    {
        id: 3,
        title: "Descubre la Barcelona Modernista de noche",
        image: BCNmodernista,
        precio:"200€",
        descripcion: "Desplazarse a pie es una de las mejores formas de descubrir las maravillas modernistas que se esconden en el barcelonés distrito del Eixample, ubicado en el centro de la ciudad. En esta excursión de cuatro horas, descubriremos los principales emblemas del modernismo y visitaremos los templos y edificios más célebres del arquitecto Gaudí. " +
            "El tour incluye visita guiada al interior de la Casa Batlló y la Sagrada Familia, así como parada para cenar en el restaurante típico catalán Can Masiá, donde disfrutaremos de las mejores carnes de la región acompañadas de vinos de las tierras del Baix Empordá. El restaurante también ofrece opciones vegetarianas y veganas así como menú para niños. Cava aparte.",
        duracion: "4h",
        accesibilidad: "Actividad disponible para todas las edades. Accesibilidad garantizada para sillas de ruedas.",
        etiquetas: "Ciudad, a pie, excursión larga."

    },

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

