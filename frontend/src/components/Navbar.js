import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
// import LoginModal from './LoginModal';
import ModalAction from '../actions/ModalAction';

class Navbar extends Component {
    constructor(props){
        super(props);
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick() {
        this.props.dispatchModal({
            showModal: true
        })
    }

    render() {
        return(
            <div className="App-header">
                <div className="inner-header margin-auto">
                    <div className="brand">
                        <span id="l">L</span>
                    </div>
                    <div className="login" onClick={this.handleClick}>
                        <span>Login | Sign up</span>
                    </div>
                </div>
            </div>
        );
    }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({
        dispatchModal: ModalAction
    }, dispatch)
}

export default connect(null, mapDispatchToProps)(Navbar);
