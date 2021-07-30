import * as React from 'react';
import owner from "./assets/Owner.jpg";
import bicis from "./assets/Bicis.jpg";
import logoconfondo from "./assets/logoconfondo.png";

export const About = () => <section className={"aboutSection"}>

    <div className="fondo">
        <img className={"bicis"} src={bicis}/>
    </div>

    <div className="ownerImg">
        <div className="imagenes">
            <img className={"owner"} src={owner}/>
            <img className={"logoconfondo"} src={logoconfondo}/>
        </div>
        <p className="aboutUs">
            Nuestra empresa se fundó a raíz de un viaje que nuestra fundadora, <em>Marina Herrán</em>, realizó en bicicleta por
            Cataluña en el verano de 2001. Durante ese periodo, descubrió que las opciones turísticas que ofrecían ciudades
            como Barcelona, Girona y Reus dependían de transportes contaminantes y actividades poco respetuosas con la
            naturaleza y el entorno, algo que causaba un progresivo deterioro de los increíbles parajes naturales de
            Cataluña.<br/><br/><br/><br/>

            Preocupada por la falta de alternativas eco-friendly, Marina se propuso fundar una <em>agencia de experiencias
            turísticas donde el respeto por la naturaleza fuera la principal prioridad</em>. Así nació Econotravel Barcelona.
        </p>

    </div>



</section>