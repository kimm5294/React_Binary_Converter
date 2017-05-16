import React, { Component } from 'react';

class BinaryConverter extends Component {

  convertToBinary() {
    return (this.props.number >>> 0).toString(2)
  }

  render() {
    return(
      <div className="binary-conversion">
        <p>Binary: {this.convertToBinary()}</p>
      </div>
    );
  }

}

export default BinaryConverter
