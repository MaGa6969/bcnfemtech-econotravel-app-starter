import * as React from 'react';
import {NavBar} from "./NavBar";
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import {About} from "./About";
import {Experiencias} from "./Experiencias";
import {Reservas} from "./Reservas";
import {Inicio} from "./Inicio";


export const App = () => {

    return <Router>
        <NavBar/>

        <Switch>
            <Route exact path="/">
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