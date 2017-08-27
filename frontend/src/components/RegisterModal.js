import React, {Component} from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import RegisterModalAction from '../actions/RegisterModalAction';

class RegisterModal extends Component {
    constructor(props) {
        super(props);
        this.state = {
            msg: ''
        }
        this.closeModal = this.closeModal.bind(this);
    }

    closeModal() {
        this.props.dispatchModal(false);
    }

    render() {
        if (!this.props.show) {
            console.log('register modal null')
            return null;
        }
        console.log('register modal true')
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
                            <form>
                                <input id="email-input" placeholder="Email Address" type="text" />
                                <input id="password-input" placeholder="Password (case sensitive)" type="password" />
                                <button className="login-submit-btn" type="submit">Submit</button>
                            </form>
                            <div className="login-info">
                                <div className="login-info-header"><span>Response:</span></div>
                                <div className="login-info-body">
                                    <span></span>
                                </div>
                            </div>
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
        // registerSubmit: RegisterAction
    }, dispatch)
}

export default connect(null, mapDispatchToProps)(RegisterModal);
