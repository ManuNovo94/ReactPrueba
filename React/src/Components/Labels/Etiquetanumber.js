import React, { Component } from "react";
import { connect } from "react-redux";
class EtiquetaNumerica extends Component {
  prevent = (event) => {
    if (event.key === "Enter") {
      console.log("correcto");
    }
  };

  render() {
    return (
      <div className="etnumb">
        <div id="etnuladiv"><label id="etnumlab">{this.props.datoset}</label></div>
        <div id="etnumindiv"> <input
          type="text"
          ref={(input) => {
            this.caracterentrada = input;
          }}
          id="textboxinputN"
          placeholder="Introduce un Número"
          required
          pattern={"[0-9]*"}
          onKeyDown={this.prevent}
        />
      </div></div>
       
    );
  }
}

const mapStateToProps = (state) => {
  return {
    lista: state.form1reducer.lista,
  };
};

export default connect(mapStateToProps)(EtiquetaNumerica);
