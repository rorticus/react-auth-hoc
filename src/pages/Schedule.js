import React, {Component} from 'react';
import LogIn from '../components/LogIn';
import auth from '../utils/auth';

export default class Schedule extends Component {
    render() {
        if (auth.isAuthenticated()) {
            return (
                <div>
                    <h2>View Your Schedule</h2>
                </div>
            );
        } else {
            return <LogIn/>;
        }
    }
}