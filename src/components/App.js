import React, { Component } from 'react';
import Header from './Header/index.js';
import Formulario from './Formulario/index.js'

class App extends Component {
  state = {
    nCotizados: 0
  }

  getDataCotizacion = (data) => {
      const { marca, plan, year } = this.data;
      let { nCotizados } = this.state;

      //Agregar una base de 2000
      let resultado = 2000;

      //Obtener la diferencia de años, por cada año restar el 3% al valor del seguro

      /** Aumentos segun el tipo de auto
       * Americano: 15%
       * Asiatic: 5%
       * Europeo 30%
       */

      






      this.setState({nCotizados: nCotizados + 1});
  } // end getDataCotización

  render() {
    return (
      <div className="contenedor">
          <Header title="Cotizador Seguro de Auto" cotizados={this.state.nCotizados}/>
          <div className="contenedor-formulario">
            <Formulario cotizarSeguro={this.getDataCotizacion}/>
          </div>
      </div>/* .contenedor */
    );
  }//end render
}

export default App;
