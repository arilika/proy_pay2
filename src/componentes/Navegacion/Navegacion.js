import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useRouteMatch,
  useLocation,
  useParams
} from "react-router-dom";
import './Navegacion.css';

export default function Navegacion() {
  return (
    <Router>
      <div>
        <ul>
          <li>
            <Link to="/">Inicio</Link>
          </li>
          <li>
            <Link to="/realizarPago">Realizar Pago</Link>
          </li>
          <li>
            <Link to="/perfil">Mi Perfil</Link>
          </li>
        </ul>

        <Switch>
          <Route path="/realizarPago">
            <RealizarPago />
          </Route>
          <Route path="/perfil">
            <MiPerfil />
          </Route>
          <Route path="/">
            <Inicio />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

function Categoria() {
  let categoriaId = useParams().categoriaId, subCategoríaId = useParams().subcategoriaId;
  return <h3>Opcion Seleccionada: {categoriaId}, SubCategoría: {subCategoríaId}</h3>;
}
function Inicio() {
  return <div><h2>Inicio</h2><p>Página de Inicio</p></div>;
}
function RealizarPago() {
  return <div><h2>Quienes Somos</h2><p>Página de Presentación</p></div>;
}
function MiPerfil() {
  let match = useRouteMatch();

  return (
    <div>
      <h2>Productos</h2>
      <p>Página con Información de las Categorías de Productos</p>
      <ul className="nav">
        <li>
          <Link to={`${match.url}/seguridad`}>Seguridad</Link>
        </li>
        <li>
          <Link to={`${match.url}/foto`}>
            Mi Foto
          </Link>
        </li>
        <li>
          <Link to={`${match.url}/eliminar`}>
            Eliminar
          </Link>
        </li>
      </ul>
      <Switch>
        <Route path={`${match.path}/:categoriaId/:subcategoriaId`}>
          <Categoria />
        </Route>
        <Route path={match.path}>
          <h3>Por favor seleccione una categoría de productos.</h3>
        </Route>
      </Switch>
    </div>
  );
}
