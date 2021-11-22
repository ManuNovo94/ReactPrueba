import React, { Component } from "react";

class EtiquetaTexto extends Component {
  prevent = (event) => {
    if (event.key === "Enter") {
      console.log("correcto");
    }
  };

  render() {
    return (
      <div className="divlabtext">
        <div id="etdivlabt">
          <label id="labeltext">{this.props.datoset}</label>
        </div>

        <div id="etdivinpu">
          <input
            id="textboxinputT"
            type="text"
            placeholder="Introduce un texto"
            required
            pattern="[A-Za-z0-9]+"
            onKeyDown={this.prevent}
          />
        </div>
      </div>
    );
  }
}

export default EtiquetaTexto;
