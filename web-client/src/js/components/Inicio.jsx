import * as React from 'react';

import eco from "./assets/eco.jpg";
import Bici from "./assets/Bici.jpg";
import Barco from "./assets/Barco.jpg";
import Modernista from "./assets/Modernista.jpg";
import Huerto from "./assets/Huerto.jpg";
import Montserrat from "./assets/Montserrat.png";
import {Link} from "react-router-dom";

export const Inicio = () => (
    <div>
        <div className="heroImg">
            <img className={"eco"} src={eco}/>
                <Link to={"/reservas"}  className="reservaAhora">RESERVA <br />tu aventura hoy<br /> </Link>
        </div>
        <div className="tarjetas">
            <div className="tarjeta">
                <img className={"tarjetaImg"} src={Bici}/>
                <h2 className="tarjetaTitle">Paseo en bicicleta por el Montseny</h2>
                <p className="tarjetaP">Disfruta de un hermoso paseo en bicicleta por el increíble
                    Parque Natural del Montseny.</p>
                <h2 className="precioTarjeta">250€</h2>
                <h2 className="tarjetaD">Duración: 5h</h2>
            </div>
            <div className="tarjeta">
                <img className={"tarjetaImg"} src={Barco}/>
                <h2 className="tarjetaTitle">Descubre la costa en barco de vela</h2>
                <p className="tarjetaP">Disfruta de un hermoso paseo acuático en barco
                    de vela por la increíble costa de Barcelona. </p>
                <h2 className="precioTarjeta">280€</h2>
                <h2 className="tarjetaD">Duración: 4h</h2>
            </div>
            <div className="tarjeta">
                <img className={"tarjetaImg"} src={Modernista}/>
                <h2 className="tarjetaTitle">Descubre la Barcelona Modernista de noche</h2>
                <p className="tarjetaP">Desplazarse a pie es una de las mejores formas de descubrir las maravillas
                    modernistas que se
                    esconden en el barcelonés distrito del Eixample</p>
                <h2 className="precioTarjeta">200€</h2>
                <h2 className="tarjetaD">Duración: 4h</h2>
            </div>
            <div className="tarjeta">
                <img className={"tarjetaImg"} src={Huerto}/>
                <h2 className="tarjetaTitle">Del huerto a la mesa</h2>
                <p className="tarjetaP">Comparte con los más pequeños las maravillas de la naturaleza y aprende
                    a cuidar de tu propio huerto.</p>
                <h2 className="precioTarjeta">145€</h2>
                <h2 className="tarjetaD">Duración: 3h</h2>
            </div>
            <div className="tarjeta">
                <img className={"tarjetaImg"} src={Montserrat}/>
                <h2 className="tarjetaTitle">Arte en la Montaña Sagrada</h2>
                <p className="tarjetaP">Disfruta de la impresionante Montaña de Montserrat.</p>
                <h2 className="precioTarjeta">125€</h2>
                <h2 className="tarjetaD">Duración: 2h</h2>
            </div>
        </div>
    </div>

);