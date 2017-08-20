import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import Navbar from './Navbar.js';
import LoginModal from './LoginModal.js';
import ModalAction from '../actions/ModalAction';
class App extends Component {

    handleModalClose() {
        this.props.dispatchModal(false);
    }

    render() {
        return (
            <div className="App">
                <LoginModal show={this.props.showModal} />
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
        dispatchModal: ModalAction
    }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(App)
