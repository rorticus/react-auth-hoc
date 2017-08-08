import React, { Component } from 'react';

export default class Account extends Component {
    render() {
        return (
            <div>
                <h1>My Account</h1>
                <h2>Profile</h2>
                <form>
                    <div className="fieldset">
                        <input type="text" placeholder="Name" />
                    </div>
                    <div className="fieldset">
                        <button className="cta">Update Profile</button>
                    </div>
                </form>
                <h2>Email Address</h2>
                <form>
                    <div className="fieldset">
                        <input type="text" placeholder="Email Address" />
                    </div>
                    <div className="fieldset">
                        <button className="cta">Update Email Address</button>
                    </div>
                </form>
            </div>
        );
    }
}