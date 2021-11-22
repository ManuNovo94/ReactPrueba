import React, { Component } from "react";
import { connect } from "react-redux";
import {
  ChangeList,
  UpdateTypeBoolean,
  ChangeListOfList,
  ChangeTittle,
} from "../../../store/Qeforms/actions";
import { GetForms } from "../../../Api/Forms";
class Index extends Component {
  componentDidMount() {
    GetForms("hola")
      .then((data) => {
        this.props.ChangeListOfList(data);
      })
      .catch((error) => {
        console.log(error);
      });
  }

  selection(ident) {
    console.log("PULSADO");
    this.props.listoflist.map((object) => {
      if (ident === object.Codigo) {
        this.props.ChangeList(object.Campos);
        object.Campos.map((datli) => {
          this.props.ChangeTittle(datli.Datos);
        });
        console.log("guardado" + ident);
      }
    });
  }

  render() {
    return (
      <div className="formofform">
        <h3 id={"formofformtittle"}>Datos de Formularios</h3>
        <ul>
          {this.props.listoflist.map((it) => (
            <li
              id="formofformslabel"
              key={it.Codigo}
              onClick={() => {
                this.selection(it.Codigo);
              }}
            >
              {it.Titulo}
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    lista: state.form1reducer.lista,
    tipo: state.form1reducer.tipo,
    listoflist: state.form1reducer.listoflist,
    tittle: state.form1reducer.tittle,
  };
};

const mapDispatchToProps = {
  ChangeListOfList,
  ChangeList,
  UpdateTypeBoolean,
  ChangeTittle,
};
export default connect(mapStateToProps, mapDispatchToProps)(Index);
