import * as React from "react";
import {useState} from "react";
import DatePicker from "react-datepicker";
import {Card} from "./Card";



export const Reservas = () => {
    document.body.style.background= '#e3bb99';
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
        <div className="pageContainer">

        <form onSubmit={enviarDatos}>
            <div className="leftContainer">
            <label>Actividades</label>
            <br/>
            <select onChange={inputChange}
                    name="actividades">
                <option value={Card.id}>{Card.title}</option>
                {/*<option value="playa">Playa</option>
                <option value="ciudad">Ciudad</option>*/}
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
                        inline
                        minDate={new Date()}
            />
            </div>
            <div className="rightContainer">
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
                <button  className="reserva" type="submit">Reserva</button>
            </div>
        </form>
        </div>

    )

}