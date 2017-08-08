import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class Homepage extends Component {
    render() {
        return <div>
            <p>
                This is just a simple homepage to implore you to rent my llamas!
            </p>
            <p>
                Why rent my llamas?
            </p>
            <ul>
                <li>It's fast!</li>
                <li>It's easy!</li>
                <li>It's safe!</li>
            </ul>
            <p>
                Why purchase your own llamas when you can rent mine for a <em>fraction</em> of the cost?
            </p>
            <div>
                <Link to="/checkout" className="cta">Rent now!</Link>
            </div>
        </div>
    }

}