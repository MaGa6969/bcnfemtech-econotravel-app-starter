import * as React from "react";
import {Link} from "react-router-dom";

export const NavBar = () => (
    <nav className={navBar}>
        <Link to = {"/inicio"}>Inicio</Link>
        <Link to = {"/about"}>Quiénes somos</Link>
        <Link to = {"/experiencias"}>Experiencias</Link>
        <Link to = {"/reservas"}>Reservas</Link>
    </nav>
)


