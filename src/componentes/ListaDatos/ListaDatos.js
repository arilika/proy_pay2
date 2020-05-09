import React from 'react';
import './ListaDatos.css';

function Dato(props) {
  return <li>{props.valor}</li>;
}

function ListaDatos(props) {
  const datos = props.datos;
  //if (this.props.estaAutenticado) {
  return (
    <ul>
      {datos.map((dato) =>
        <Dato key={dato.toString()}
          valor={dato} />)}
    </ul>
  );
  //} return <h2>Inicie sesion para ver la informacion.</h2>


  // return <li>Elemento {props.valor}</li>;
}

export default ListaDatos;