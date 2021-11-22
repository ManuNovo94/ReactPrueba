import React, { Component } from "react";
import { connect } from "react-redux";
//import { ChangeList } from "../store/actions/actions";
import Etiquetanumero from "../../Labels/Etiquetanumber";
import EtiquetaBolean from "../../Labels/EtiquetaBoolean";
import EtiquetaDate from "../../Labels/EtiquetaDate";
import EtiquetaText from "../../Labels/EtiquetaTexto";
class Formulario2 extends Component {
  renderizado(item) {
    if (item.Tipo === "Boolean") {
      return <EtiquetaBolean datoset={item.Datos} />;
    }
    if (item.Tipo === "Numeric") {
      return <Etiquetanumero datoset={item.Datos} />;
    }
    if (item.Tipo === "Date") {
      return <EtiquetaDate datoset={item.Datos} />;
    }
    if (item.Tipo === "Text") {
      return <EtiquetaText datoset={item.Datos} />;
    }
  }

  render() {
    if (this.props.modified === 0) return "";
    let list = this.props.lista;

    return (
      <form className="formulario2">
        <h3 id="tituloform2">Resultado</h3>
        <ul className="listadatos">
          {list.map((item) => (
            <div>{this.renderizado(item)}</div>
          ))}
        </ul>
      </form>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    lista: state.form1reducer.lista,
    modified: state.form1reducer.modified,
    tipo: state.form1reducer.tipo,
  };
};
export default connect(mapStateToProps)(Formulario2);
