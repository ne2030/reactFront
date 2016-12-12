import React, {Component, PropTypes} from 'react';
import {Match, Link} from 'react-router';
import List from './list/list';


class Page2 extends Component {

  render() {
    return (
      <section id="page2">
        <h1 className="title">Page 2</h1>
        <hr/>
        <Link to={`${this.props.pathname}/list`}>Show List</Link>
        <div className="page2" >
          <Match pattern={`${this.props.pathname}/list`} component={List} />
        </div>
      </section>
    );
  }
}

Page2.propTypes = {
  pathname: PropTypes.string
};

export default Page2;
