import React, { Component } from 'react';
import { connect } from 'react-redux';

class History extends Component {
  render() {
    return (
      <div className="history">
        {this.props.history.reverse().map((calcul, i) => (
          <ul key={i}>
            <li><p>{calcul.operation}</p></li>
            <li>=</li>
            <li><p>{calcul.result}</p></li>
          </ul>
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