import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import Navbar from './Navbar.js';
import LoginModal from './LoginModal';
import ModalAction from '../actions/ModalAction';

class App extends Component {
    render() {
        return (
            <div className="App">
                <Navbar />
                <LoginModal show={this.props.modalVisible} />
            </div>
        );
    }
}

function mapStateToProps(state) {
    console.log(state);
    return {
        modalVisible: state.modalVisible
    }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({
        dispatchModal: ModalAction
    }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(App)
