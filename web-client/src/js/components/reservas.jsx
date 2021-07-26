import * as React from "react";

export const Reservas = () => {

    

    return (
        <form>
            <label>Actividades</label>
            <br/>
            <select>
                <option value="montanya">Montaña</option>
                <option value="playa">Playa</option>
                <option value="ciudad">Ciudad</option>
            </select>
            <br/>
            <label>Fecha</label>
            <br/>
            <input type="text"/>
            <br/>
            <label>Nombre y Apellidos</label>
            <br/>
            <input type="text"/>
            <br/>
            <label>Personas</label>
            <br/>
            <input type="text"/>
            <br/>
            <label>Teléfono de contacto</label>
            <br/>
            <input type="text"/>
            <br/>
            <label>Email</label>
            <br/>
            <input type="text"/>
            <br/>
            <button type="submit">Reserva</button>

        </form>
    )

}