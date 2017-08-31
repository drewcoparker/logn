import React, { Component } from 'react';
import Authorization from './Authorization.js';

class Navbar extends Component {

    render() {
        return(
            <div className="App-header">
                <div className="inner-header margin-auto">
                    <div className="brand">
                        <span id="l">L</span>
                    </div>
                    <Authorization />
                </div>
            </div>
        );
    }
}

export default Navbar;
