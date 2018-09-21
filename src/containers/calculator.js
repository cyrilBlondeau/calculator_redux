import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { addNumber, deleteNumber, result, addHistory, reset, resetAll } from '../actions/index';

class Calculator extends Component {
  renderNumbers() {
    return this.props.numbers.map((number) => {
      return (
        <li
        className="calculator-pad"
        key={number}
        onClick={() => this.props.addNumber(number)}
        className="calculator-pad">
          {number}
        </li>
      )
    })
  }

  render() {
    const operation = (this.props.operation)
    return (
      <div className="calculator">
        <ul>
          {this.renderNumbers()}
          <li className="calculator-pad" onClick={() => this.props.deleteNumber()}> del </li>
          <li className="calculator-pad" onClick={() => this.props.reset()}> C </li>
          <li className="calculator-pad" onClick={() => this.props.resetAll()}> CE </li>
          <li className="calculator-pad-egal" onClick={() => {this.props.result(operation); this.props.addHistory(operation)}}> = </li>
        </ul>
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    numbers: state.numbers,
    operation: state.operation,
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ addNumber, deleteNumber, result, addHistory, reset, resetAll }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Calculator);