import React from 'react';
import logo from './logo.png';
import './App.css';
import Article from './Article/Article';
import FechaActual from './componentes/FechaActual/FechaActual';
import Event from './componentes/Event/Event';


const slogan = "Easy, Fast & Safe";
var nombre = ""

function Bienvenida(props) {
  return <h3>Bienvenida {props.nombre}</h3>
}

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div className="logo">
          <img src={logo} className="App-logo" alt="logo" />
          <div className="slogan"><h2>{slogan}</h2></div>
        </div>
        <div className="bienvenida">
          <div><Bienvenida nombre="Ariela" /></div>
          <div className="fecha"><FechaActual /></div>
          <div><Event /></div>
        </div>
      </header>
      <div className="container">

      </div>

    </div>
  );
}

export default App;
