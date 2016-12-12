import React, {Component} from 'react';

// React component
import Buttons from '../../components/cal/buttons.js';
import Counter from '../../components/cal/counter.js';
import Option from '../../components/cal/option.js';

class Calculator extends Component {

  render() {
    let style = {
      textAlign: 'center'
    };
    return (
      <section id="calculator">
        <div style={style}>
          <Counter />
          <Option />
          <Buttons />
        </div>
      </section>
    );
  }
}

export default Calculator;
