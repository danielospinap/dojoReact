import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Creador from './Creador/Creador.js'
import Visualizador from './Visualizador/Visualizador.js'


class App extends Component {
  constructor() {
    super();
    this.state = {
      tituloArticulo: '',
      cuerpoArticulo: '',
      referenciasArticulo: '',
      urlArticulo: '',
      fuenteArticulo: ''
    }

    this.getData = this.getData.bind(this);
  }

  getData(tituloR, cuerpoR, refR, urlR, fuenteR) {
    this.setState({
      tituloArticulo: tituloR,
      cuerpoArticulo: cuerpoR,
      referenciasArticulo: refR,
      urlArticulo: urlR,
      fuenteArticulo: fuenteR
    });
  }


  render() {
    const {
      tituloArticulo,
      cuerpoArticulo,
      referenciasArticulo,
      urlArticulo,
      fuenteArticulo
    } = this.state;
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <table className = "tabla">
          <tbody>
            <tr>
              <th>Publicador</th>
              <th>Visualizador</th>
            </tr>
            <tr>
              <td>
                <Creador sendData={this.getData}/>
              </td>
              <td>
                <Visualizador titulo = {tituloArticulo}
                  cuerpo = {cuerpoArticulo}
                  referencias = {referenciasArticulo}
                  url = {urlArticulo}
                  fuente = {fuenteArticulo} />
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    );
  }
}

export default App;
