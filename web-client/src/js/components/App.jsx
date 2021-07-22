import * as React from 'react';
import {NavBar} from "./navBar";
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import {About} from "./about";
import {Experiencias} from "./experiencias";
import {Reservas} from "./reservas";
import {Inicio} from "./inicio";

export const App = () => {

    const experienceList = [
        {
            descripcion: "Disfruta de la impresionante Montaña de Montserrat donde encontraréis el Museo con las salas modernistas de Puig i Cadafalch, lugar que acoge colecciones de gran valor en el corazón de la emblemática montaña. En el Museo encontraréis pinturas del Renacimiento y del Barroco que conviven con autores de los siglos XIX y XX, objetos del Próximo Oriente y orfebrería. Además de disfrutar de un paseo guiado por la montaña y el Museo, esta actividad incluye tentempié variado acompañado de vino espumoso, cava brut o refresco.",
            precio: "125€ por persona"
        },
        {
            descripcion: "Comparte con los más pequeños las maravillas de la naturaleza. En esta excursión breve de tres horas, podréis plantar vuestras propias hortalizas y verduras en el huerto de Can Gilabert, ubicado en el corazón del Montbaig. Durante una hora y media, aprenderéis a cuidar de vuestro propio huerto, plantaréis y abonaréis vuestras propias plantas, y también recogeréis parte de los ingredientes que los expertos chefs de Can Gilabert utilizarán para preparar la posterior cena, donde disfrutaréis de la experiencia de consumir productos recién recogidos de la tierra con vuestras propias manos. Actividad ideal para familiarizar a los más pequeños de la familia con el estilo de vida rural y la agricultura sostenible. Asimismo, obtendréis como obsequio una botella de aceite virgen extra cultivado y preparado en Can Gilabert, obra de la familia Gilabert, que lleva más de 80 años cultivando olivos.",
            precio: "145€ por persona"
        }
    ]

    return <Router>
        <NavBar/>
        <Switch>
            <Route path="/inicio">
                <Inicio/>
            </Route>
            <Route path="/about">
                <About/>
            </Route>
            <Route path="/experiencias">
                <Experiencias experiencias={experienceList}/>
            </Route>
            <Route path="/reservas">
                <Reservas/>
            </Route>

        </Switch>

    </Router>
}