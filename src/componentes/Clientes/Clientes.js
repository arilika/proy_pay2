import React from 'react';
import './Clientes.css';

class Clientes extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            error: null,
            estaCargado: false,
            elementos: [],
            id: props.id
        };
        //this.id = null;
    }

    componentDidMount() {

        let consultaId = this.state.id;
        //consultaId = 1;

        if (consultaId) {
            //alert("Id de consulta:" + consultaId);
            fetch("http://jsonplaceholder.typicode.com/users" + "/" + consultaId)
                .then(respuesta => respuesta.json())
                .then(
                    (resultado) => {

                        var nuevalista = [];
                        nuevalista.push(resultado);

                        this.setState({
                            error: null,
                            estaCargado: true,
                            elementos: nuevalista
                        });
                    },
                    // Manejo de errores
                    (errores) => {
                        this.setState({
                            error: errores,
                            estaCargado: true,
                            elementos: []
                        });
                    }
                )

        }


    }

    render() {
        const { error, estaCargado, elementos } = this.state;
        if (error) {
            return <div>Se encontró el siguiente error: {error.message}</div>;
        } else if (!estaCargado) {
            return <div>Cargando los datos...</div>;
        } else {
            return (
                <ul className="lista">
                    {elementos.map(elemento => (
                        <li key={elemento.id}>
                            ID:{elemento.id}
                        </li>

                    ))}
                    {elementos.map(elemento => (
                        <li key={elemento.id}>
                            Nombre={elemento.name}
                        </li>

                    ))}
                    {elementos.map(elemento => (
                        <li key={elemento.id}>
                            Correo:{elemento.email}
                        </li>

                    ))}
                </ul>
            );
        }
    }
}

export default Clientes;
