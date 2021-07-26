import * as React from "react";
import {useState} from "react";

export const Reservas = () => {

    const [datos, setDatos] = useState({
        actividades: '',
        fecha: '',
        nombre: '',
        personas: '',
        telefono: '',
        email: ''
    })

    const inputChange = (event) => {
        setDatos({
            ...datos,
            [event.target.name]: event.target.value
        })
    }

    return (
        <form>
            <label>Actividades</label>
            <br/>
            <select onChange={inputChange}
                    name="actividades">
                <option value="montanya">Montaña</option>
                <option value="playa">Playa</option>
                <option value="ciudad">Ciudad</option>
            </select>
            <br/>
            <label>Fecha</label>
            <br/>
            <input
                type="text"
                name="fecha"
                onChange={inputChange}
            />
            <br/>
            <label>Nombre y Apellidos</label>
            <br/>
            <input
                type="text"
                name="nombre"
                onChange={inputChange}
            />
            <br/>
            <label>Personas</label>
            <br/>
            <input
                type="text"
                name="personas"
                onChange={inputChange}
            />
            <br/>
            <label>Teléfono de contacto</label>
            <br/>
            <input
                type="text"
                name="telefono"
                onChange={inputChange}
            />
            <br/>
            <label>Email</label>
            <br/>
            <input
                type="text"
                name="email"
                onChange={inputChange}
            />
            <br/>
            <button type="submit">Reserva</button>

        </form>
    )

}