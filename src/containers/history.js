import React, { Component } from 'react';
import { connect } from 'react-redux';

class History extends Component {
  render() {
    return (
      <div>
        {this.props.history.map((calcul, i) => (
          <span key={i}>
            <p>{calcul[0]}</p> = <p>{calcul[1]}</p>
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