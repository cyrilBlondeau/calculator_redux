import React, { Component } from 'react';
import { connect } from 'react-redux';

class History extends Component {
  renderHistory() {
    return this.props.history.map((calcul) => {
      return (
        <li key={calcul.result}>
          {calcul.operation} = {calcul.result}
        </li>
      )
    })
  }

  render() {
    console.log(this.props.history)
    return (
      <div>
        <ul>
          {this.renderHistory()}
        </ul>
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