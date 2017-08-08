import React, { Component } from 'react';

export default class LogIn extends Component {
    render() {
        return (
            <div className="login">
                <h3>Login</h3>
                <form>
                    <div className="fieldset">
                        <input type="text" placeholder="Email Address" />
                    </div>
                    <div className="fieldset">
                        <input type="password" placeholder="Password" />
                    </div>
                    <button className="cta">Log In</button>
                </form>
            </div>
        );
    }
}