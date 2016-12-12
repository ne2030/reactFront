import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { BrowserRouter, Match, Miss} from 'react-router';
// import update from 'react-addons-update';

// react Component
import Nav from '../components/nav/nav.js';

// page routes
import Main from './main/main.js';
import Profile from './profile/profile.js';
import Page2 from './page2/page2.js';
import Login from './login/login.js';
import Calculator from './calculator/calculator.js';

const Otherwise = () => (
  <div>
    <p>
      Sorry, page not found.
      please access another source.
    </p>
  </div>
);

class App extends Component {

  render() {
    return (
      <div className="App">
        <BrowserRouter>
          <div>
            <Nav user={this.props.user}/>

            <Match exactly pattern="/" component={Main} />
            <Match pattern="/profile" component={Profile} />
            <Match pattern="/page2" component={Page2} />
            <Match pattern="/calculator" component={Calculator} />

            <Match pattern="/login" component={Login}/>

            <Miss component={Otherwise} />
          </div>
        </BrowserRouter>
      </div>
    );
  }
}

// function isLogin(props) {
//   if(!props.user) { return (<Login />);}
//   else {
//     return (<Redirect to={
//       {pathname: '/',
//       state: { from: '/login' }
//       }
//     }/>);
//   }
// }

const mapStateToProps = (state) => {
  const { jwToken, user } = state.login;
  return {
    jwToken,
    user
  };
};

App.propTypes = {
  user: PropTypes.string,
};

App = connect(mapStateToProps)(App);

export default App;
