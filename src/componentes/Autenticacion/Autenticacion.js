import React from 'react';
//import Saludo from '../Saludo/Saludo';

import Bienvenido from '../Bienvenido/Bienvenido';
import FechaActual from '../FechaActual/FechaActual';
import './Autenticacion.css';

function BotonInicio(props) {
  return (
    <button className="btn" onClick={props.onClick}>
      Ingresar
    </button>
  );
}

function BotonCierreSesion(props) {
  return (
    <button className="btn" onClick={props.onClick}>
      Salir
    </button>
  );
}

function confirmarSalida(e) {
  e.preventDefault();
  alert('Desea salir del sistema de PAY2?');
}

class Autenticacion extends React.Component {
  constructor(props) {
    super(props);
    this.ejecutarInicioClick = this.ejecutarInicioClick.bind(this);
    this.ejecutarCierreSesiónClick = this.ejecutarCierreSesiónClick.bind(this);
    this.state = { estaAutenticado: false };
  }
  ejecutarInicioClick() {
    this.setState({ estaAutenticado: true });
  }
  ejecutarCierreSesiónClick() {
    //confirmarSalida();
    this.setState({ estaAutenticado: false });
  }
  render() {
    const estaAutenticado = this.state.estaAutenticado;
    let boton;
    if (estaAutenticado) {
      boton = <BotonCierreSesion onClick={this.ejecutarCierreSesiónClick} />;
    } else {
      boton = <BotonInicio onClick={this.ejecutarInicioClick} />;
    }
    return (
      <div>
        <Bienvenido estaAutenticado={estaAutenticado} nombre={this.props.nombre} />
        {boton}

      </div>

    );
  }
}

export default Autenticacion;