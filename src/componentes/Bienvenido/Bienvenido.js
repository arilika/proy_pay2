import React from 'react';
import FechaActual from '../FechaActual/FechaActual';
import './Bienvenido.css';


function SaludoAutenticado(props) {
  return <h2>Bienvenido {props.nombre}! <div className="fecha"><FechaActual /></div></h2>
}

function SaludoInvitado(props) {
  return <h2>Inicie sesión.</h2>;
}

class Bienvenido extends React.Component {
  render() {
    if (this.props.estaAutenticado) {
      return <SaludoAutenticado nombre={this.props.nombre} />;
    }
    return <SaludoInvitado />;
  }
}

export default Bienvenido;
