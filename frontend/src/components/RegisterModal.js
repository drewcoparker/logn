import React, {Component} from 'react';

class RegisterModal extends Component {
    constructor(props) {
        super(props);
        this.state = {
            msg: ''
        }
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
                        <div className="button-wrapper">
                            <div className="close-modal-button"></div>
                        </div>
                        <div className="modal-header">
                            <h1>Login</h1>
                        </div>
                        <div className="modal-body">
                            <form>
                                <input id="email-input" placeholder="Email Address" type="text" />
                                <input id="password-input" placeholder="Password (case sensitive)" type="password" />
                                <button className="login-submit-btn" type="submit">Login</button>
                            </form>
                            <div className="login-info">
                                <div className="login-info-header"><span>Login Response:</span></div>
                                <div className="login-info-body">
                                    <span></span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="overlay"></div>
            </div>
        );
    }
}

export default RegisterModal
