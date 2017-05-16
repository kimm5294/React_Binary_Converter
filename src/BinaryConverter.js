import React, { Component } from 'react';
import './Translator.js'

class BinaryConverter extends Component {
  constructor(args) {
    super(args);

    this.localBinaryConverter = this.localBinaryConverter.bind(this);

  }

  localBinaryConverter(e) {
    this.props.binaryConverter();
  }

  render() {
    return(
      <div className="binary-conversion">

      </div>
    );
  }

}

export default BinaryConverter
