import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import LoginModalAction from '../actions/LoginModalAction';
import LogoutAction from '../actions/LogoutAction';
import RegisterModalAction from '../actions/RegisterModalAction';

class Authorization extends Component {
    constructor(props){
        super(props);
        this.handleLoginClick = this.handleLoginClick.bind(this);
        this.handleRegisterClick = this.handleRegisterClick.bind(this);
        this.handleLogoutClick = this.handleLogoutClick.bind(this);
    }

    handleLogoutClick() {
        this.props.dispatchLogout({login:false});
    }

    handleLoginClick() {
        this.props.dispatchLoginModal(true);
    }

    handleRegisterClick() {
        this.props.dispatchRegisterModal(true);
    }

    render() {
        let isLoggedIn = this.props.loginResponse.login;
        if (isLoggedIn) {
            const user = this.props.loginResponse.name
            return(
                <div className="authorized">
                    <ul>
                        <li className="user">
                            <span>{user}</span>
                        </li>
                        <li><span> | </span></li>
                        <li className="logout" onClick={this.handleLogoutClick}>
                            <span>logout</span>
                        </li>
                    </ul>
                </div>
            )
        } else {
            return(
                <div className="login-register">
                    <ul>
                        <li className="login" onClick={this.handleLoginClick}>
                            <span>Login</span>
                        </li>
                        <li><span> | </span></li>
                        <li className="register" onClick={this.handleRegisterClick}>
                            <span>Register</span>
                        </li>
                    </ul>
                </div>
            )
        }
    }
}

function mapStateToProps(state) {
    return {
        loginResponse: state.loginResponse
    }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({
        dispatchLoginModal: LoginModalAction,
        dispatchRegisterModal: RegisterModalAction,
        dispatchLogout: LogoutAction
    }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(Authorization);
