import "./App.css";
//import Listadatos from "./Components/Forms/DatList/Listadatos";
import Contenedorformu from "./Components/Forms/Contenedorformus";
import Imagen from "./Components/Logo/Imagen";
import Title from "./Components/Tittle/MyTitle";
import Formulario2 from "./Components/Forms/Form2/Formulario2";
import React from "react";
import { GetForms } from "./Api/Forms";
import { connect } from "react-redux";
import { ChangeList, UpdateTypeBoolean } from "./store/Qeforms/actions";
import Formulario1 from "./Components/Forms/FormOfForms/Index";

class App extends React.Component {
  render() {
    return (
      <div>
        <style>@import'css/App.css;'</style>

        <div className="head">
          <Imagen />
          <Title />
        </div>
        <div className="formapi">
          <Formulario1 />
        </div>

        <Contenedorformu />
        <Formulario2 />
      </div>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    lista: state.form1reducer.lista,
    tipo: state.form1reducer.tipo,
  };
};

const mapDispatchToProps = {
  ChangeList,
  UpdateTypeBoolean,
};
export default connect(mapStateToProps, mapDispatchToProps)(App);
