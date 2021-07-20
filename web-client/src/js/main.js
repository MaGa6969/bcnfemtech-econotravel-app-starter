// Al incluír aquí el SCSS hacemos que webpack genere
// un archivo bundle.js que contiene tanto el javascript
// como el CSS
import '../scss/main.scss'
import React from 'react'
import ReactDOM from 'react-dom'
import {App} from './components/App'
import {ExperiencePanel} from './components/ExperiencePanel'

ReactDOM.render(
    <App />,
//*    React.createElement(ExperiencePanel),*/
    document.getElementById("app")
)