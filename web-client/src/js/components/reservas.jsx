import * as React from "react";
import {useState} from "react";
import DatePicker from "react-datepicker";
import 'react-datepicker/dist/react-datepicker-cssmodules.css';






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

    const enviarDatos = (event) => {
        event.preventDefault();

    }

    const [selectedDate, setSelectedDate] = useState(new Date());

    return (
        <form onSubmit={enviarDatos}>
            <label>Actividades</label>
            <br/>
            <select onChange={inputChange}
                    name="actividades">
                <option value="montanya">Montaña</option>
                <option value="playa">Playa</option>
                <option value="ciudad">Ciudad</option>
            </select>
            <br/>
            <br/>
            <label>Fecha</label>
            <DatePicker
                selected={selectedDate}
                onChange={date => setSelectedDate(date)}
                dateFormat='dd/MM/yyyy'
                isClearable
                showYearDropdown
                scrollableMonthYearDropdown
                minDate={new Date()}
            />
            <br/>
            <br/>
            <label>Nombre y Apellidos</label>
            <br/>
            <input
                type="text"
                name="nombre"
                onChange={inputChange}
            />
            <br/>
            <br/>
            <label>Personas</label>
            <br/>
            <input
                type="text"
                name="personas"
                onChange={inputChange}
            />
            <br/>
            <br/>
            <label>Teléfono de contacto</label>
            <br/>
            <input
                type="text"
                name="telefono"
                onChange={inputChange}
            />
            <br/>
            <br/>
            <label>Email</label>
            <br/>
            <input
                type="text"
                name="email"
                onChange={inputChange}
            />
            <br/>
            <br/>
            <button type="submit">Reserva</button>

        </form>
    )

}