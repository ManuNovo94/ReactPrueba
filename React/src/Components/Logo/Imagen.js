import React, { Component } from "react";

class Imagen extends Component {
  render() {
    return (
      <img
        src={"images/foto.jpg"}
        alt="imagen"
        width="100%"
        height="100%"
        className="foto"
      />
    );
  }
}

export default Imagen;
