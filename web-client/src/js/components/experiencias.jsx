import * as React from 'react';
import {Card} from "./Card";
import paseobici from './assets/paseobici.png'
const cards = [
    {
        id: 1,
        title: "paseo en bici",
        image: paseobici,
        precio: "145€",
        descripcion: "lqhertjklfghqwiprgñaSLRGHN"
    }
]


export function Experiencias(){
    return (
        <div className="cardContainer">
        {
            cards.map(card => (
                    <div className="experiencia" key={card.id}>

                        <Card  title={card.title} imgSrc={card.image} descripcion={card.descripcion} precio={card.precio}/>
                    </div>
                ))
        }

        </div>
    )}