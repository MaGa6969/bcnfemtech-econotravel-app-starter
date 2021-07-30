import * as React from "react";
import {useState} from "react";
import DatePicker from "react-datepicker";







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
        alert('¡Muchas Gracias! ¡La reserva ha sido creada correctamente! Revise su correo electrónico para confirmar.');
        event.preventDefault();

    }

    const [selectedDate, setSelectedDate] = useState(new Date());


    return (
        <div className="pageContainer">
            <h1>FORMULARIO DE RESERVA</h1>
            <form onSubmit={enviarDatos}>
                <div className="leftContainer">
                    <label>Actividades</label>
                    <br/>
                    <select onChange={inputChange}
                            name="actividades">

                        <option value="montseny">Bici por Montseny</option>
                        <option value="barco">Barco Vela</option>
                        <option value="barcelona">BCN Noche</option>
                        <option value="huerto">Huerto Urbano</option>
                        <option value="montserrat">Arte en Monserrat</option>
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

                        <button className="reserva" type="submit">Reserva</button>
                </div>
            </form>

        </div>

    )

}