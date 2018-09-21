import React, { Component } from 'react';
import { connect } from 'react-redux';

class Operation extends Component {
  render() {
    return (
      <div className="operation">
        {this.props.operation}{this.props.result}
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    operation: state.operation,
    result: state.result
  };
}

export default connect(mapStateToProps)(Operation);