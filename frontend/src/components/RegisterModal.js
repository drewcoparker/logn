import React, {Component} from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import RegisterModalAction from '../actions/RegisterModalAction';
import RegisterAction from '../actions/RegisterAction';

class RegisterModal extends Component {
    constructor(props) {
        super(props);
        this.state = {
            msg: ''
        }
        this.closeModal = this.closeModal.bind(this);
        this.handleRegisterSubmit = this.handleRegisterSubmit.bind(this);
    }

    closeModal() {
        this.props.dispatchModal(false);
    }

    handleRegisterSubmit(event){
        event.preventDefault();
        var firstName = event.target[0].value,
            lastName = event.target[1].value,
            email = event.target[2].value,
            password = event.target[3].value;

        this.props.registerSubmit({
            firstName: firstName,
            lastName: lastName,
            email: email,
            password: password
        });
    }

    render() {
        if (!this.props.show) {
            return null;
        }

        return(
            <div className="modal-state">
                <div className="modal">
                    <div className="modal-wrapper">
                        <div className="button-wrapper" onClick={this.closeModal}>
                            <div className="close-modal-button"></div>
                        </div>
                        <div className="modal-header">
                            <h1>Register</h1>
                        </div>
                        <div className="modal-body">
                            <form onSubmit={this.handleRegisterSubmit}>
                                <input id="first-name-input" placeholder="First name" type="text" />
                                <input id="last-name-input" placeholder="Last name" type="text" />
                                <input id="email-input" placeholder="Email Address" type="text" />
                                <input id="password-input" placeholder="Password (case sensitive)" type="password" />
                                <button className="login-submit-btn" type="submit">Submit</button>
                            </form>
                        </div>
                    </div>
                </div>
                <div className="overlay" onClick={this.closeModal}></div>
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {
        loginResponse: state.loginResponse
    }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({
        dispatchModal: RegisterModalAction,
        registerSubmit: RegisterAction
    }, dispatch)
}

export default connect(null, mapDispatchToProps)(RegisterModal);
