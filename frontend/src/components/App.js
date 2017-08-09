import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import {Modal, Button} from "react-bootstrap";
import Navbar from './Navbar.js';

class App extends Component {
    render() {
        return (
            <div className="App">
                <Navbar />
                <Modal show={this.props.isModalVisible} />
            </div>
        );
    }
}

function mapStateToProps(state) {
    console.log(state);
    return {
        isModalVisible: state.modalVisible
    }
}

export default connect(mapStateToProps, null)(App)
