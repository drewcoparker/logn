import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import Navbar from './Navbar.js';
import LoginModal from './LoginModal.js';
import RegisterModal from './RegisterModal.js';
import LoginModalAction from '../actions/LoginModalAction';
import RegisterModalAction from '../actions/RegisterModalAction';

class App extends Component {

    handleModalClose() {
        this.props.dispatchLoginModal(false);
    }

    render() {
        return (
            <div className="App">
                <LoginModal show={this.props.showModal} />
                <RegisterModal show={this.props.showModal} />
                <Navbar />
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {
        showModal: state.modalVisible
    }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({
        dispatchLoginModal: LoginModalAction,
        dispatchRegisterModal: RegisterModalAction
    }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(App)
