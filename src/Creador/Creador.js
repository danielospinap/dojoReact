import React, { Component } from 'react';
import './Creador.css';


const porClave = (nombreKey, valor) => ({
  [nombreKey]: valor
});

class Creador extends Component {
  constructor() {
    super();
    this.state = {
      titulo: '',
      cuerpo: '',
      referencias: '',
      url: '',
      fuente: 'Arial'
    }
  }

  manejador(clave, valor) {
    this.setState(
      porClave(clave, valor)
    );
    this.props.sendData(this.state.titulo, this.state.cuerpo, this.state.referencias, this.state.url, this.state.fuente);
  }

  render() {
    return (
      <div className="App">
        <table>
          <tbody>
            <tr>
              <td>
                <div className="texto">Título del articulo:</div>
              </td>
              <td>
                <input className="campoForm" type="text" placeholder="Titulo" onChange={event => this.manejador('titulo', event.target.value)}/>
              </td>
            </tr>
            <tr>
              <div className="texto">imágen del articulo:</div>
              <td>
                <input className="campoForm" type="text" placeholder="Url" onChange={event => this.manejador('url', event.target.value)}/>
              </td>
            </tr>
            <tr>
              <div className="texto">Cuerpo del articulo:</div>
              <td>
                <textarea className="campoArea" rows="10" cols="50" type="text" onChange={event => this.manejador('cuerpo', event.target.value)}></textarea>
              </td>
            </tr>
            <tr>
              <div className="texto">Referencias del articulo:</div>
              <td>
                <textarea className="campoArea" rows="10" cols="50" type="text" onChange={event => this.manejador('referencias', event.target.value)}></textarea>
              </td>
            </tr>
            <tr>
              <td>
                <div className="texto">Tipo de fuente:</div>
              </td>
              <td>
                <select className="campoForm" onChange={event => this.manejador('fuente', event.target.value)}>
                 <option value="Georgia">Times New Roman</option>
                 <option value="Arial">Arial</option>
                 <option value="Courier New">Courier New</option>
                </select>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    );
  }
}

export default Creador;
