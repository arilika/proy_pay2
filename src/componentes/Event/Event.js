import React from 'react';
import './Event.css';

function confirmarSalida(e) {
  e.preventDefault();
  alert('Desea salir del sistema de PAY2?');
}

class Event extends React.Component {

  render() {
    return (
      <div>
        <button className="btnSalir" onClick={confirmarSalida}>Salir</button>
      </div>
    );
  }
}
export default Event;
