import React, { Component } from "react";
import { connect } from "react-redux";
class EtiquetaBolean extends Component {
  render() {
    return (
      <div className='etbool'>
        <label>
          <input type="checkbox" />
          {this.props.datoset}
        </label>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    lista: state.form1reducer.lista,
  };
};

export default connect(mapStateToProps)(EtiquetaBolean);
