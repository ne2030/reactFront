import React, {PropTypes, Componen} from 'react';
import './login.css';

import {connect} from 'react-redux';
import {_login} from '../../actions/actionCreator.js';
import {Redirect} from 'react-router';

class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            id: '',
            password: ''
        };
        this.login = this.login.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(event) {
        if (event.target.type === 'text') {
            this.setState({id: event.target.value});
        } else {
            this.setState({password: event.target.value});
        }
    }

    enterSubmit(e) {
        if (e.keyCode === 13)
            this.login();
        }

    login() {
        let id = this.state.id,
            pw = this.state.password;
        if (id && pw)
            this.props.dispatch(_login(id, pw));
        else
            alert('please write id and password');
        }

    render() {
        const redirect = this.props.user ? (< Redirect to = '/' / >) : '';

        return (
            <section id="login" className="login">
                {redirect}
                <div className="login_container">
                    <p>
                        이메일로 로그인
                    </p>
                    <ul className="login_form list-unstyled">
                        <li>
                            <input className="inputbox form-control" type="text"
                                value={this.state.id}
                                onChange={this.handleChange}
                                onKeyDown= { e => this.enterSubmit(e) }
                                placeholder="example@star.com"/>
                        </li>
                        <li >
                            <input className="inputbox form-control" type="password"
                                value={this.state.password}
                                onChange={this.handleChange}
                                onKeyDown= { e => this.enterSubmit(e) }
                                placeholder="비밀번호 (6자 이상)"/>
                        </li>
                    </ul>
                    <div className="login_btn_span">
                        <button className="btn login_btn" onClick={this.getLogin}>
                            Log In
                        </button>
                    </div>
                </div>
            </section>
        );
    }
}

Login.propTypes = {
    dispatch: PropTypes.func.isRequired,
    user: PropTypes.string
};

const mapStateToProps = (state) => {
    const {user, err} = state.login;
    if (err)
        alert(err);
    return {user};
};

Login = connect(mapStateToProps)(Login); //eslint-disable-line

export default Login;
