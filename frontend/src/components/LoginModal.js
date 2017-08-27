import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import LoginModalAction from '../actions/LoginModalAction';
import LoginAction from '../actions/LoginAction';

class LoginModal extends Component {
    constructor(props) {
        super(props);
        this.state = {
            msg: ''
        }
        this.closeModal = this.closeModal.bind(this);
        this.handleLoginSubmit = this.handleLoginSubmit.bind(this);
    }

    componentDidMount() {
        // Not used for now
    }

    componentWillReceiveProps(nextProps) {
        if (this.props.loginResponse !== nextProps.loginResponse) {
            if (nextProps.loginResponse.name) {
                let user = nextProps.loginResponse.name;
                this.setState({
                    msg: user
                })
            } else if (nextProps.loginResponse.msg) {
                let failMsg = nextProps.loginResponse.msg;
                this.setState({
                    msg: failMsg
                })
            } else {
                this.setState({
                    msg: 'Something went wrong'
                })
            }
        }
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
        if (!this.props.show) {
            return null;
        }

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
                            <div className="login-info">
                                <div className="login-info-header"><span>Login Response:</span></div>
                                <div className="login-info-body">
                                    <span>{this.state.msg}</span>
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
        dispatchModal: LoginModalAction,
        loginSubmit: LoginAction
    }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(LoginModal);
