import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { addNumber, result, reset } from '../actions/index';

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
    const result = (this.props.result)
    return (
      <div>
        <ul>
          {this.renderNumbers()}
        </ul>
        <span onClick={() => this.props.result(operation)}>=</span>
        <span onClick={() => this.props.reset(result)}>C</span>
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    numbers: state.numbers,
    operation: state.operation,
    result: state.result
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ addNumber, result, reset }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Calculator);