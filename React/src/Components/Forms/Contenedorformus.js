import React, { Component } from "react";
import Formulario1 from "../Forms/Form1/Formulario1";
import Listados from "../Forms/DatList/Listadatos";
class Contenedorformus extends Component {
  render() {
    return (
      <div className="formcontainer">
        <Formulario1 />
        <Listados />
      </div>
    );
  }
}

export default Contenedorformus;
