import React, {Component} from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import RegisterModalAction from '../actions/RegisterModalAction';
import RegisterAction from '../actions/RegisterAction';

class RegisterModal extends Component {
    constructor(props) {
        super(props);
        this.state = {
            msg: '',

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
            username = event.target[2].value,
            email = event.target[3].value,
            password = event.target[4].value;

        // var eventObj = {
        //     firstName : event.target[0].value,
        //     lastName : event.target[1].value,
        //     username : event.target[2].value,
        //     email : event.target[3].value,
        //     password : event.target[4].value
        // }
        //
        // for (value in eventObj) {
        //     if (!value) {
        //
        //     }
        // }

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
                                <input name="firstName" className="modal-input" placeholder="First name" type="text" />
                                <input name="lastName" className="modal-input" placeholder="Last name" type="text" />
                                <input name="username" className="modal-input" placeholder="Username" type="text" />
                                <input name="email" className="modal-input" placeholder="Email Address" type="text" />
                                <input name="password" className="modal-input" placeholder="Password (case sensitive)" type="password" />
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
