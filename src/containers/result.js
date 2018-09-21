import React, { Component } from 'react';
import { connect } from 'react-redux';

class Result extends Component {
  render() {
    return (
      <div>
        Result:
        {this.props.result}
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    result: state.result
  };
}

export default connect(mapStateToProps)(Result);