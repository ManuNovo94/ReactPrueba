import React, { Component } from "react";

class EtiquetaDate extends Component {
  render() {
    return (
      <div className="etdate">
        <div id="etdatlabdiv"><label id="labeldat">{this.props.datoset}</label></div>
        <div id="etdatinpdiv"><input id="calend" type="date" /></div>
        

        

        
        
      </div>
    );
  }
}

export default EtiquetaDate;
