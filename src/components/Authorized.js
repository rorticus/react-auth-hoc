import React, {Component} from 'react';
import auth from '../utils/auth';
import LogIn from './LogIn';

export default function Authorized(WrappedComponent) {
    return class extends Component {
        render() {
            if (auth.isAuthenticated()) {
                return <WrappedComponent {...this.props} />;
            } else {
                return <LogIn/>;
            }
        }
    };
}