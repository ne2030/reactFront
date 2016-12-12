import React, {Component, PropTypes} from 'react';
import { connect } from 'react-redux';
import {increment, decrement} from '../../actions/actionCreator.js';

class Buttons extends Component {

  render() {
    return (
      <div>
        <button type="button" onClick={this.props.onIncrement}>
          +
        </button>
        <button type="button" onClick={this.props.onDecrement}>
          -
        </button>
      </div>
    );
  }
}

Buttons.propTypes = {
  onIncrement: PropTypes.func.isRequired,
  onDecrement: PropTypes.func.isRequired
};

let mapDispatchToProps = (dispatch) => {
  return {
    onIncrement: () => dispatch(increment()),
    onDecrement: () => dispatch(decrement())
  };
};

Buttons = connect(undefined, mapDispatchToProps)(Buttons);

export default Buttons;
