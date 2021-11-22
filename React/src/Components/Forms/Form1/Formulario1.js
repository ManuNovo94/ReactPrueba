import React from "react";
import { connect } from "react-redux";
import {
  ChangeList,
  UpdateTypeBoolean,
  ChangeOrder,
} from "../../../store/Qeforms/actions";
import uniqid from "uniqid";

class Formulario1 extends React.Component {
  almacena = () => {
    console.log("ejecutando");
    //Leer datos del fomulario
    //listaAct.push()
    // listaAct.push(nuevoNombre);
    // this.props.ChangeList(listaAct);
    let palabra = this.titulotextInput.value;
    let boleano = this.selectortextInput.value;
    let orden = parseInt(this.orderinput.value, 10);
    let nuevoNombre = {
      Id: uniqid(),
      Datos: palabra,
      Tipo: boleano,
      Orden: orden,
    };

    this.ordenar(nuevoNombre);

    this.titulotextInput.value = "";
    this.selectortextInput.value = "";
    this.orderinput.value = "";
  };
  ordenar(objeto) {
    let listaordenada = this.props.lista;
    listaordenada.forEach((item) => {
      if (item.Orden >= objeto.Orden) {
        item.Orden = objeto.Orden + 1;
      }
    });
    listaordenada.push(objeto);
    listaordenada.sort((a, b) => {
      return a.Orden - b.Orden;
    });

    let contador = 1;
    listaordenada.forEach((item) => {
      item.Orden = contador;
      contador += 1;
    });

    this.props.ChangeList(listaordenada);
  }
  render() {
    console.log("Formulario1");
    console.log(this.props.lista);
    return (
      <div className="form1">
        <h3 id="tituloform1"> {this.props.tittle} </h3>
        <div className="form1line1">
          {" "}
          <label id="labelform1"> Titulo </label>
          <input
            id="textoform1"
            type="text"
            ref={(input) => {
              this.titulotextInput = input;
            }}
          />
        </div>
        <div className="form1line2">
          <label id="labelform2"> Tipo </label>
          <select
            name="elections"
            id="election"
            ref={(input) => {
              this.selectortextInput = input;
            }}
          >
            <option value="Text">Text</option>
            <option value="Numeri">Numeric</option>
            <option value="Boolean">Boolean</option>
            <option value="Date">Date</option>
          </select>
        </div>

        <div className="form1lineorder">
          <label id="labelorder">Orden</label>
          <input
            type="number"
            id="inputorder"
            ref={(input) => {
              this.orderinput = input;
            }}
          />
        </div>

        <div className="form1line3">
          <button
            id="botonform1"
            type="button"
            onClick={this.almacena.bind(this)}
          >
            Agregar
          </button>
        </div>
      </div>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    lista: state.form1reducer.lista,
    tipo: state.form1reducer.tipo,
    tittle: state.form1reducer.tittle,
    order: state.form1reducer.order,
  };
};

const mapDispatchToProps = {
  ChangeList,
  UpdateTypeBoolean,
};

export default connect(mapStateToProps, mapDispatchToProps)(Formulario1);
