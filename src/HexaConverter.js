import React, { Component } from 'react';
import './Translator.js'

class HexaConverter extends Component {
  constructor(args) {
    super(args);

    this.localHexaConverter = this.localHexaConverter.bind(this);

  }

  localHexaConverter(e) {
    this.props.hexaConverter();
  }

  render() {
    return(
      <div className="hexa-conversion">

      </div>
    );
  }

}

export default HexaConverter
