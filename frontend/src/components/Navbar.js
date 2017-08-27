import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import ModalAction from '../actions/ModalAction';

class Navbar extends Component {
    constructor(props){
        super(props);
        this.handleLoginClick = this.handleLoginClick.bind(this);
        this.handleRegisterClick = this.handleRegisterClick.bind(this);
    }

    handleLoginClick() {
        this.props.dispatchModal(true);
    }

    handleRegisterClick() {

    }

    render() {
        return(
            <div className="App-header">
                <div className="inner-header margin-auto">
                    <div className="brand">
                        <span id="l">L</span>
                    </div>
                    <div className="login-register">
                        <ul>
                            <li className="login" onClick={this.handleLoginClick}>
                                <span>Login</span>
                            </li>
                            <li>
                                <span> | </span>
                            </li>
                            <li className="register" onClick={this.handleRegisterClick}>
                                <span>Register</span>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        );
    }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({
        dispatchModal: ModalAction
    }, dispatch)
}

export default connect(null, mapDispatchToProps)(Navbar);
