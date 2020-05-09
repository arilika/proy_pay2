import React from 'react'

export const conConmutador = (ComponenteEnvuelto) =>
  class conConmutador extends React.Component {
    constructor(props) {
      super(props)
      this.conmutadorCambios = this.conmutadorCambios.bind(this)
      this.state = {
        conmutadorEstado: this.props.conmutadorEstadoInicial,
      }
    }
    conmutadorCambios() {
      this.setState({
        conmutadorEstado: !this.state.conmutadorEstado
      })
    }
    render() {
      return (
        <ComponenteEnvuelto
          {...this.props}
          conmutadorCambios={this.conmutadorCambios}
          conmutadorEstado={this.state.conmutadorEstado}
        />
      )
    }
  }

const EditorConmutador = ({ conmutadorCambios, conmutadorEstado, texto }) => (
  <div className="container-actualizar">
    <h1>Actualizar:</h1>
    {conmutadorEstado
      ? <input type="text" defaultValue={texto} />
      : <p>{texto}</p>
    }
    <button onClick={conmutadorCambios}>
      {conmutadorEstado ? 'Cancelar' : 'Editar'}
    </button>
  </div>
)

export const EditorConmutadorHOC = conConmutador(EditorConmutador);

const AreaExpandible = ({ conmutadorCambios, conmutadorEstado, lista }) => (
  <div>


    {conmutadorEstado && (
      <ul>
        {lista.map(elemento => (
          <li key={elemento.id}>{elemento.descripcion}</li>
        ))
        }
      </ul>
    )
    }
    <button onClick={conmutadorCambios}>
      {conmutadorEstado ? 'Colapsar' : 'Expandir'}
    </button>
  </div>
)

export const AreaExpandibleHOC = conConmutador(AreaExpandible);



