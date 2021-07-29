// Al incluír aquí el SCSS hacemos que webpack genere
// un archivo bundle.js que contiene tanto el javascript
// como el CSS
import '../scss/main.scss'
import '../scss/reservas.scss'
import '../scss/card.scss'
import '../scss/about.scss'
import React from 'react'
import ReactDOM from 'react-dom'
import {App} from './components/App'
import 'react-datepicker/dist/react-datepicker.css';


ReactDOM.render(
    React.createElement(App),
    document.getElementById("app")
)