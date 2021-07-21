import * as React from 'react';
import {NavBar} from "./navBar";
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import {About} from "./about";
import {Experiencias} from "./experiencias";
import {Reservas} from "./reservas";
import {Inicio} from "./inicio";

export const App = () => {
    return <Router>
                <NavBar />
                <Switch>
                    <Route path="/inicio">
                        <Inicio />
                    </Route>
                    <Route path="/about">
                        <About />
                    </Route>
                    <Route path="/experiencias">
                        <Experiencias />
                    </Route>
                    <Route path="/reservas">
                        <Reservas />
                    </Route>

                </Switch>

            </Router>
}