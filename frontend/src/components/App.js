import React, { Component } from 'react';
import { connect } from 'react-redux';
import Navbar from './Navbar.js';
import LoginModal from './LoginModal.js';
import RegisterModal from './RegisterModal.js';

class App extends Component {

    render() {
        return (
            <div className="App">
                <LoginModal show={this.props.showLoginModal} />
                <RegisterModal show={this.props.showRegisterModal} />
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
