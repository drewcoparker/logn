import React, {Component} from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import ModalAction from '../actions/ModalAction';

class LoginModal extends Component {
    constructor(props) {
        super(props);
        this.closeModal = this.closeModal.bind(this);
    }

    closeModal() {
        this.props.dispatchModal(false);
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
                            <form>
                                <input id="email-input" placeholder="Email address" type="text" />
                                <input id="password-input" placeholder="Password" type="text" />
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
        dispatchModal: ModalAction
    }, dispatch)
}

export default connect(null, mapDispatchToProps)(LoginModal);
