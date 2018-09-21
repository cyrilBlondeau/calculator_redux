import React, { Component } from 'react';
import Calculator from '../containers/calculator';
import Operation from '../containers/operation';
import Result from '../containers/result';
import History from '../containers/history';

class App extends Component {
  render() {
    return (
      <div>
        <Calculator />
        <Operation />
        <Result />
        <History />
      </div>
    );
  }
}

export default App;