import React, { Component } from 'react';

class HexaConverter extends Component {

  convertToHexa() {
    return (this.props.number >>> 0).toString(16)
  }

  render() {
    return(
      <div className="hexa-conversion">
        <p>Hexa: {this.convertToHexa()}</p>
      </div>
    );
  }

}

export default HexaConverter
