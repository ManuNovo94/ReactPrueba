import React from "react";
//import Etiqueta from "./Etiqueta.js";
import { connect } from "react-redux";
import { ChangeList, ResetModified } from "../../../store/Qeforms/actions";

class Listadatos extends React.Component {
  quita = (item) => {
    let lista = this.props.lista;

    let index = -1;
    let count = -1;

    lista.forEach((element) => {
      count++;
      if (element.Id === item.Id) index = count;
    });
    if (index > -1) {
      lista.splice(index, 1);
      let counter = 1;
      lista.forEach((item) => {
        item.Orden = counter;
        counter += 1;
      });

      this.props.ChangeList(lista);
    }
  };

  goUp = (item) => {

    this.props.ResetModified();

    let lista = this.props.lista;
    
    let orden = item.Orden;

    lista.forEach((elemento) => {
      if(item.Id === elemento.Id) {
        elemento.Orden = orden -1;
      } else {
        if(elemento.Orden === orden - 1) {
          elemento.Orden = orden;
        }
      }
    });

    lista.sort((a, b) => {
      return a.Orden - b.Orden;
    });

    this.props.ChangeList(lista);

  };

  goDown = (item) => {

    this.props.ResetModified();

    let lista = this.props.lista;
    
    let orden = item.Orden;

    lista.forEach((elemento) => {
      if(item.Id === elemento.Id) {
        elemento.Orden = orden +1;
      } else {
        if(elemento.Orden === orden + 1) {
          elemento.Orden = orden;
        }
      }
    });

    lista.sort((a, b) => {
      return a.Orden - b.Orden;
    });

    this.props.ChangeList(lista);


  };

  render() {
    if (this.props.modified === 0) return "";
    let listacampos = this.props.lista;
    return (
      <ul className="listadatos">
        <h3 id="titulodatos"> Datos del Formulario </h3>

        {listacampos.map((field) => (
          <li className="listli" key={field.Id}>
            {field.Datos}
            <div id="dbotonldiv">
              <button
                id="botonlistdat"
                onClick={() => {
                  this.quita(field);
                }}
              >
                Eliminar
              </button>
            </div>
            <div id="dsubirldiv">
              <button
                id="botonlistdat"
                onClick={() => {
                  this.goUp(field);
                }}
              >
                Subir
              </button>
            </div>
            <div id="dbajarldiv">
              {" "}
              <button
                id="botonlistdat"
                onClick={() => {
                  this.goDown(field);
                }}
              >
                Bajar
              </button>
            </div>
          </li>
        ))}
      </ul>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    lista: state.form1reducer.lista,
    modified: state.form1reducer.modified,
  };
};
const mapDispatchToProps = {
  ChangeList,
  ResetModified,
};

export default connect(mapStateToProps, mapDispatchToProps)(Listadatos);
