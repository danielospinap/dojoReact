import React, { Component } from 'react';
import './Visualizador.css';
import ToggleButton from 'react-toggle-button'

class Visualizador extends Component {
  constructor() {
    super();
    this.state = {
      titulo: '',
      cuerpo: '',
      referencias: '',
      url: '',
      movil: false,
      fuente: 'Georgia, serif'
    }
  }
  render() {
    return (
      <div className="App">
        <div className={this.state.movil == false ? 'web':'movil'}>
          Vista móvil
          <div class="toggle">
            <ToggleButton
            value={ this.state.movil || false }
            onToggle={(value) => {
              this.setState({
                movil: !value
              })
            }} />
          </div>

            <div className="titulo">{this.props.titulo=='' ? 'Titulo': this.props.titulo}</div>
            <img src={this.props.url==''
             ? 'https://www.myrenova.com/Plugins/Renova.Personalization/Content/Images/Configurador/empty.png'
              : this.props.url} className="imagen"></img>
            <div className="cuerpo">{this.props.cuerpo== '' ? 'Cuerpo del Articulo' : this.props.cuerpo}</div>
            <a padding className="referencias" href={this.props.referencias}>{this.props.referencias}</a>
        </div>
      </div>
    );
  }
}

export default Visualizador;
