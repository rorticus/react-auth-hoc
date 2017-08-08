import React, {Component} from 'react';
import LogIn from '../components/LogIn';
import auth from '../utils/auth';

export default class Account extends Component {
    render() {
        if (auth.isAuthenticated()) {
            return (
                <div>
                    <h1>My Account</h1>
                </div>
            );
        } else {
            return <LogIn/>;
        }
    }
}