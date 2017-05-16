import React, { Component } from 'react';
import BinaryConverter from './BinaryConverter.js'
import OctalConverter from './OctalConverter.js'
import HexaConverter from './HexaConverter.js'


class Translator extends Component {

  constructor(args) {
    super(args);

    this.state = {
      numberToConvert: 0

    };
    this.handleClick = this.handleClick.bind(this)

  }

  handleClick() {
    this.setState((prevState, props) => ({
      numberToConvert: this.refs.input.value
    }))
  }

  render() {
    return(
      <section>
        <div className="App">
          <h1>Number Converter</h1>
          <input type="number" id="number-input" ref="input" />
          <input type="submit" id="submit-button" value="Convert" onClick={this.handleClick} />
        </div>

        <div className="Conversions">
          <div className="all-conversions">
            <BinaryConverter number={this.state.numberToConvert} />

            <OctalConverter number={this.state.numberToConvert} />

            <HexaConverter number={this.state.numberToConvert} />
          </div>
        </div>
      </section>
    );
  }

}

export default Translator
