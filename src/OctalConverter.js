import React, { Component } from 'react';

class OctalConverter extends Component {

  convertToOctal() {
    return (this.props.number >>> 0).toString(8)
  }

  render() {
    return(
      <div className="octal-conversion">
        <p>Octal: {this.convertToOctal()}</p>
      </div>
    );
  }

}

export default OctalConverter
