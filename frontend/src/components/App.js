import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import Navbar from './Navbar.js';
import LoginModal from './LoginModal.js';
import RegisterModal from './RegisterModal.js';
import LoginModalAction from '../actions/LoginModalAction';
import RegisterModalAction from '../actions/RegisterModalAction';

class App extends Component {

    render() {
        return (
            <div className="App">
                <LoginModal show={this.props.showLoginModal} />
                <RegisterModal show={this.props.registerModalVisible} />
                <Navbar />
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {
        showLoginModal: state.loginModalVisible,
        showRegisterModal: state.registerModalVisible
    }
}

export default connect(mapStateToProps, null)(App)
