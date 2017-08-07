import React, { Component } from 'react';


class Navbar extends Component {

    handleClick(event) {
        event.preventDefault();
        console.log(event);
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

export default Navbar;
