import React from 'react';
import './FechaActual.css';

class FechaActual extends React.Component {
  constructor(props) {

    super(props);
    this.state = { date: new Date() };

  }

  componentDidMount() {
    this.timerID = setInterval(
      () => this.iteración(),
      1000
    );
  }

  componentWillUnmount() {
    clearInterval(this.timerID);
  }

  iteración() {
    this.setState({
      date: new Date()
    });
  }

  render() {
    return (
      <h3>{this.state.date.toLocaleDateString()}, { this.state.date.toLocaleTimeString()}</h3>
    );
  }
}

export default FechaActual;