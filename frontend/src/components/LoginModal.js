import React, {Component} from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import ModalAction from '../actions/ModalAction';
import LoginAction from '../actions/LoginAction';

class LoginModal extends Component {
    constructor(props) {
        super(props);
        this.closeModal = this.closeModal.bind(this);
        this.handleLoginSubmit = this.handleLoginSubmit.bind(this);
    }

    closeModal() {
        this.props.dispatchModal(false);
    }

    // gets the value from the login form inputs
    handleLoginSubmit(event){
        event.preventDefault();
        var email = event.target[0].value,
            password = event.target[1].value;

        this.props.loginSubmit({
            email: email,
            password: password
        });
    }

    render() {
        if (!this.props.show)
            return null;

        return (
            <div className="modal-state">
                <div className="modal">
                    <div className="modal-wrapper">
                        <div className="button-wrapper" onClick={this.closeModal}>
                            <div className="close-modal-button"></div>
                        </div>
                        <div className="modal-header">
                            <h1>Login</h1>
                        </div>
                        <div className="modal-body">
                            <form onSubmit={this.handleLoginSubmit}>
                                <input id="email-input" placeholder="Email Address" type="text" />
                                <input id="password-input" placeholder="Password (case sensitive)" type="password" />
                                <button className="login-submit-btn" type="submit">Login</button>
                            </form>
                        </div>
                    </div>
                </div>
                <div className="overlay" onClick={this.closeModal}></div>
            </div>
        );
    }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({
        dispatchModal: ModalAction,
        loginSubmit: LoginAction
    }, dispatch)
}

export default connect(null, mapDispatchToProps)(LoginModal);
