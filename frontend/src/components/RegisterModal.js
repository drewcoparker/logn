import React, {Component} from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import RegisterModalAction from '../actions/RegisterModalAction';
import RegisterAction from '../actions/RegisterAction';

const inputStyle = {

}

class RegisterModal extends Component {
    constructor(props) {
        super(props);
        this.state = {
            msg: '',
            emailMsg: '',
            focused: false
        }

        this.closeModal = this.closeModal.bind(this);
        this.handleRegisterSubmit = this.handleRegisterSubmit.bind(this);
        this.handleEmailValidation = this.handleEmailValidation.bind(this);
    }

    closeModal() {
        this.props.dispatchModal(false);
    }

    handleEmailValidation(event) {
        var email = event.target.value;
        var validEmail = /^([\w_\.\-\+])+\@([\w\-]+\.)+([\w]{2,10})+$/.test(email);
        if (!validEmail) {
            this.setState({emailMsg: 'Invalid email'});
        } else {
            this.setState({emailMsg: ''});
        }
    }

    handleRegisterSubmit(event){
        event.preventDefault();
        var firstName = event.target[0].value,
            lastName = event.target[1].value,
            username = event.target[2].value,
            email = event.target[3].value,
            password = event.target[4].value;

        this.props.registerSubmit({
            firstName: firstName,
            lastName: lastName,
            username: username,
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
                                <input name="firstName"
                                       onFocus={this.focused}
                                       className="modal-input"
                                       placeholder="First name"
                                       type="text" />
                                <input name="lastName"
                                       onFocus={this.focused}
                                       className="modal-input"
                                       placeholder="Last name"
                                       type="text" />
                                <input name="username"
                                       onFocus={this.focused}
                                       className="modal-input"
                                       placeholder="Username"
                                       type="text" />
                                <div className="invalid">{this.state.emailMsg}</div>
                                <input name="email"
                                       onFocus={this.focused}
                                       className="modal-input"
                                       placeholder="Email Address"
                                       onBlur={this.handleEmailValidation}
                                       type="text" />
                                <input name="password"
                                       onFocus={this.focused}
                                       className="modal-input"
                                       placeholder="Password (case sensitive)"
                                       type="password" />
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
        registerResponse: state.registerResponse
    }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({
        dispatchModal: RegisterModalAction,
        registerSubmit: RegisterAction
    }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(RegisterModal);
