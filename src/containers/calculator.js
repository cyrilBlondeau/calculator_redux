import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { addNumber, result, addHistory, reset, resetAll } from '../actions/index';

class Calculator extends Component {
  renderNumbers() {
    return this.props.numbers.map((number) => {
      return (
        <li 
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
      <div>
        <ul>
          {this.renderNumbers()}
        </ul>
        <span onClick={() => {this.props.result(operation); this.props.addHistory(operation)}}> = </span>
        <span onClick={() => this.props.reset()}> C </span>
        <span onClick={() => this.props.resetAll()}> CE </span>
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
  return bindActionCreators({ addNumber, result, addHistory, reset, resetAll }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Calculator);