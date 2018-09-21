import React, { Component } from 'react';
import { Container, Row, Col } from 'reactstrap';
import Calculator from '../containers/calculator';
import Operation from '../containers/operation';
import History from '../containers/history';
import '../index.css';

class App extends Component {
  render() {
    return (
      <div>
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