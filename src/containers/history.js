import React, { Component } from 'react';
import { connect } from 'react-redux';

class History extends Component {
  render() {
    return (
      <div>
        {this.props.history.map((calcul, i) => (
          <span key={i}>
            <p>{calcul.operation}</p> = <p>{calcul.result}</p>
          </span>
        ))}
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    history: state.history
  };
}

export default connect(mapStateToProps)(History);