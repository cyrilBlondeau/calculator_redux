import React, { Component } from 'react';
import { Container } from 'reactstrap';
import Calculator from '../containers/calculator';
import Operation from '../containers/operation';
import History from '../containers/history';
import '../index.css';

class App extends Component {
  render() {
    return (
      <div className="calculatorApp">
        <Container>
            <History />
            <Operation />
            <Calculator />
        </Container>
      </div>
    );
  }
}

export default App;