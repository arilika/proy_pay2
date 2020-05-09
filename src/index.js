import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import FechaActual from './componentes/FechaActual/FechaActual';
import Event from './componentes/Event/Event';
import Bienvenido from './componentes/Bienvenido/Bienvenido';
import Autenticacion from './componentes/Autenticacion/Autenticacion';



import * as serviceWorker from './serviceWorker';




ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
