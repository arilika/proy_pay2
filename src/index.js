import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import FechaActual from './componentes/FechaActual/FechaActual';
import Event from './componentes/Event/Event';
import Bienvenido from './componentes/Bienvenido/Bienvenido';
import Autenticacion from './componentes/Autenticacion/Autenticacion';
import * as serviceWorker from './serviceWorker';

// Se importa el "store"
import storeF from './redux/store';

// Para conectar Redux con React se importa el siguiente paquete
import { Provider } from 'react-redux';

const store = storeF();

ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById('root'));
//ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();