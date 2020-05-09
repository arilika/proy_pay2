import React from 'react';
import logo from './logo.png';
import './App.css';
import Article from './Article/Article';
import FechaActual from './componentes/FechaActual/FechaActual';
import Event from './componentes/Event/Event';
import Bienvenido from './componentes/Bienvenido/Bienvenido';
import Autenticacion from './componentes/Autenticacion/Autenticacion';
import ListaDatos from './componentes/ListaDatos/ListaDatos';
import Formulario from './componentes/Formulario/Formulario';
import Clientes from './componentes/Clientes/Clientes';
import Navegacion from './componentes/Navegacion/Navegacion';
import landing from './landing.png';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useRouteMatch,
  useLocation,
  useParams
} from "react-router-dom";

const slogan = "Easy, Fast & Safe";
var nombre = "Ariela"
const movimientos = ["28/10/2018", "28/11/2019", "28/12/2019", "28/01/2020", "28/02/2020", "28/03/2020"];
const montos = ["1000", "1400", "2000", "900", "970", "300"];
let ultimoUsuario = 5;
/*function Bienvenida(props) {
  return <h3>Bienvenida {props.nombre}</h3>
}*/

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div className="logo">
          <img src={logo} className="App-logo" alt="logo" />
          <div className="slogan"><h3>{slogan}</h3></div>
        </div>

        <div className="bienvenida">
          <Autenticacion nombre={nombre} />
        </div>
      </header>
      <nav>
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
      </nav>







    </div>
  );

}
function Categoria() {
  let categoriaId = useParams().categoriaId, subCategoríaId = useParams().subcategoriaId;
  return <h3>Opcion Seleccionada: {categoriaId}, SubCategoría: {subCategoríaId}</h3>;
}
function Inicio() {
  return <div className="landing">
    <img src={landing} className="landing-img" alt="landing" />
  </div>;
}
function RealizarPago() {
  return <div className="container">
    <div className="form-container">
      <Formulario />
    </div>
    <div className="mov-container">
      <div>
        <h2>&Uacute;ltimo Pago realizado:</h2>
        <div className="container-ultimos"><Clientes id={ultimoUsuario} /></div>

      </div>
      <div>
        <h2>&Uacute;ltimos Movimientos</h2>
        <ListaDatos datos={movimientos} />
      </div>

    </div>

  </div>;
}
function MiPerfil() {
  let match = useRouteMatch();

  return (
    <div>
      <h2>MI PERFIL</h2>
      <p>Informacion de mi perfil</p>
      <div><p>Hola {nombre} </p></div>
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
function PaginaNoEncontrada() {
  let direccion = useLocation();
  return <div><h2>Página No Encontrada</h2><p>No se encontró la página indicada
    <code>{direccion.pathname}</code></p></div>;
}

export default App;
