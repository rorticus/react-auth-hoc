import React, {Component} from 'react';
import './App.css';
import './pages/Homepage';
import Homepage from "./pages/Homepage";
import {Link, Route} from 'react-router-dom'
import Checkout from "./pages/Checkout";
import Account from "./pages/Account";

class App extends Component {
    render() {
        return (
            <div className="App">
                <header className="header">
                    <Link className="headerLink" to="/">1-800-llamas.com</Link>
                    <nav>
                        <Link className="link" to="/account">My Account</Link>
                    </nav>
                </header>
                <section className="content">
                    <Route path="/" exact component={Homepage}/>
                    <Route path="/checkout" component={Checkout}/>
                    <Route path="/account" component={Account}/>
                </section>
            </div>
        );
    }
}

export default App;
