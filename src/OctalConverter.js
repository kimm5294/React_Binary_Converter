import React, { Component } from 'react';
import './Translator.js'

class OctalConverter extends Component {
  constructor(args) {
    super(args);

    this.localOctalConverter = this.localOctalConverter.bind(this);

  }

  localOctalConverter(e) {
    this.props.octalConverter();
  }

  render() {
    return(
      <div className="octal-conversion">

      </div>
    );
  }

}

export default OctalConverter
