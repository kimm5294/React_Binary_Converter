import React, { Component } from 'react';
import './App.css';
import './Translator.js'

class App extends Component {
  render() {
    return (
      <section>
        <div className="App">
          <h1>Number Converter</h1>
          <input type="number" id="number-input" />
          <input type="submit" id="submit-button" value="Convert" />
        </div>

        <div className="Conversions">
          <Translator />
        </div>
      </section>
    );
  }
}

export default App;
