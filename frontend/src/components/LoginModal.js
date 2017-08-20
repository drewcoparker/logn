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

        let modalStyle = {
            position: 'absolute',
            top: '50%',
            left: '50%',
            width: '410px',
            maxWidth: '100%',
            height: '450px',
            maxHeight: '100%',
            transform: 'translate(-50%, -50%)',
            zIndex: '9999',
            animationName: 'slideUpLarge',
            animationFillMode: 'forwards',
            animationDelay: '.5s',
            animationTimingFunction: 'cubic-bezier(0.165, 0.840, 0.440, 1.000)',
            background: '#fff'
        }

        let backdropStyle = {
            position: 'absolute',
            width: '100%',
            height: '100%',
            top: '0px',
            left: '0px',
            zIndex: '9998',
            background: 'rgba(0, 0, 0, 0.3)'
        }

        return (
            <div className="modal-state">
                <div style={modalStyle}></div>
                <div style={backdropStyle} onClick={this.closeModal}></div>
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
