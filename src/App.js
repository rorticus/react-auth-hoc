import React, {Component} from 'react';
import './App.css';
import './pages/Homepage';
import Homepage from "./pages/Homepage";
import {Link, Route} from 'react-router-dom'
import Account from "./pages/Account";
import Schedule from "./pages/Schedule";

class App extends Component {
    render() {
        return (
            <div className="App">
                <header className="header">
                    <Link className="headerLink" to="/">1-800-llamas.com</Link>
                    <nav>
                        <Link className="link" to="/account">My Account</Link>
                        &nbsp;|&nbsp;
                        <Link className="link" to="/schedule">My Schedule</Link>
                    </nav>
                </header>
                <section className="content">
                    <Route path="/" exact component={Homepage}/>
                    <Route path="/schedule" component={Schedule}/>
                    <Route path="/account" component={Account}/>
                </section>
            </div>
        );
    }
}

export default App;
