import React, { Component } from 'react';
import { connect } from 'react-redux';

class Operation extends Component {
  render() {
    return (
      <div>
        Operation: 
        {this.props.operation}
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    operation: state.operation
  };
}


export default connect(mapStateToProps)(Operation);