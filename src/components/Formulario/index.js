import React, { Component } from 'react';
import {getYearsAll, getMarcas} from '../../settings/information.js';

/**
* Component
* @param (array) markCollection
**/
const _createOptionSelect = (markCollection) => {
    if(markCollection){
      return markCollection.map((item, i) => <option key={i}  value={item.toLocaleLowerCase()}>{item}</option>);
    }
}

class Formulario extends Component {
  //Recomendable usar  ref() en formularios
  componentDidMount() {

      const marcas = getMarcas();
      const years = getYearsAll();
      this.setState({marcas, anios: years});
  }

  //Create refs
  marcaRef = React.createRef();
  anioRef = React.createRef();
  planBasicoRef = React.createRef();
  planCompletoRef = React.createRef();

  state = {
      marcas: [],
      anios: []
  }

  cotizarSeguro = (e) => {
      e.preventDefault();
      const plan = this.planBasicoRef.current.checked ? this.planBasicoRef.current.value : this.planCompletoRef.current.value;
      //Obtener los datos y crear el objeto
      const informationAuto = {
          marca: this.marcaRef.current.value,
          year: this.anioRef.current.value,
          plan: plan
      }
      this.props.cotizarSeguro(informationAuto); //enviar al padre

      //Limpiar el Formulario
      e.currentTarget.reset();
  }//end cotizarSeguro

  render(){
    return (
      <form className="cotizar-auto" onSubmit={this.cotizarSeguro}>
          <div className="campo">
              <label >Marca: </label>
              <select name="marca" ref={this.marcaRef} className="select">
                  {_createOptionSelect(this.state.marcas)}
              </select>
          </div> {/* .campo Marca*/}

          <div className="campo">
            <label>Año: </label>
            <select ref={this.anioRef} className="select">
              {_createOptionSelect(this.state.anios)}
            </select>
          </div> { /* .campo Año */}

          <div className="campo">
              <label>Plan: </label>
              <input type="radio" name="plan" value="basico" ref={this.planBasicoRef}/>Básico
              <input type="radio" name="plan" value="completo" ref={this.planCompletoRef}/>Completo
          </div> { /* .campo Plan */}
          <button type="submit" className="boton">Cotizar</button>
      </form>
    ); // return
  } // render
}// end class

export default Formulario;
