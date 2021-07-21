import * as React from "react";
import {Link} from "react-router-dom";
import logo from "./assets/logo.png";

export const NavBar = () => (
    <nav className={"navBar"}>
        <img className={"logo"} src={logo}/>
        <Link to={"/inicio"}>Inicio</Link>
        <Link to={"/about"}>Quiénes somos</Link>
        <Link to={"/experiencias"}>Experiencias</Link>
        <Link to={"/reservas"}>Reservas</Link>

    </nav>
)