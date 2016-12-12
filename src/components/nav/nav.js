import React, { PropTypes, Component } from 'react';
import {Link} from 'react-router';
import { connect } from 'react-redux';
import { logOut } from '../../actions/actionCreator';
import Dropdown from './dropdown/dropdown';
import './nav.css';

class Nav extends Component {
  render() {
    const contents = ['Action', 'Another action', 'Something else here', 'divider', 'Nav header', 'Seperated link', 'One more seperated link'];
    return (
        <nav className="navbar navbar-default navbar-fixed-top">
            <div className="container-fluid">
                <div className="navbar-header">
                    <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#navbar_dropdown">
                      <span className="sr-only">Toggle navigation</span>
                      <span className="icon-bar"></span>
                      <span className="icon-bar"></span>
                      <span className="icon-bar"></span>
                    </button>
                    <Link className="navbar-brand" to="/">Main</Link>
                </div>

                <div className="collapse navbar-collapse" id="navbar_dropdown">
                    <ul className="nav navbar-nav">
                        <li><Link to="/profile"> Profile </Link></li>
                        <li><Link to="/page2"> Page2 </Link></li>
                        <li><Link to="/calculator"> Calculator </Link></li>
                        <Dropdown contents={contents} />
                    </ul>
                    <ul className="nav navbar-nav navbar-right">
                          <li className={this.props.user ? "hidden" : ""}> <Link to="/login" >Log in</Link> </li>
                          <li className={this.props.user ? "" : "hidden"}> <a className="clickable" onClick={this.props.onLogOut}> Log out</a> </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onLogOut: () => dispatch(logOut())
  };
};

Nav.propTypes = {
  onLogOut: PropTypes.func.isRequired,
  user: PropTypes.string
};

Nav = connect(undefined, mapDispatchToProps)(Nav);

export default Nav;
