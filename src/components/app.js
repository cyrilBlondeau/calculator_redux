import React, { Component } from 'react';
import Calculator from '../containers/calculator';
import Operation from '../containers/operation';
import History from '../containers/history';
import Result from '../containers/result';

class App extends Component {
  render() {
    return (
      <div>
        <Calculator />
        <Operation />
        <History />
        <Result />
      </div>
    );
  }
}

export default App;