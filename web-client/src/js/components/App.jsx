import * as React from 'react';
import {NavBar} from "./NavBar";
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import {About} from "./about";
import {Experiencias} from "./Experiencias";
import {Reservas} from "./reservas";
import {Inicio} from "./Inicio";



export const App = () => {

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
                <Experiencias/>
            </Route>
            <Route path="/reservas">
                <Reservas/>
            </Route>

        </Switch>

    </Router>

}