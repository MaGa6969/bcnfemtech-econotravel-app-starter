import * as React from 'react';
import owner from "./assets/Owner.jpg";
import bicis from "./assets/Bicis.jpg";

export const About = () => <section className={"aboutSection"}>

    <div className="fondo">
        <img className={"bicis"} src={bicis}/>
    </div>

    <div className="ownerImg">
        <img className={"owner"} src={owner}/>
        <p>
            Nuestra empresa se fundó a raíz de un viaje que nuestra fundadora, Marina Herrán, realizó en bicicleta por
            Cataluña en el verano de 2001. Durante ese periodo, descubrió que las opciones turísticas que ofrecían ciudades
            como Barcelona, Girona y Reus dependían de transportes contaminantes y actividades poco respetuosas con la
            naturaleza y el entorno, algo que causaba un progresivo deterioro de los increíbles parajes naturales de
            Cataluña.<br/><br/>

            Preocupada por la falta de alternativas eco-friendly, Marina se propuso fundar una agencia de experiencias
            turísticas donde el respeto por la naturaleza fuera la principal prioridad. Así nació Econotravel Barcelona.

        </p>
    </div>



</section>