import React, { Component } from 'react';

export default class Checkout extends Component {
    render() {
        return (
            <div>
                <h1>You are only a few clicks away from your llamas!</h1>
                <form>
                    <div className="fieldset">
                        <input type="text" placeholder="Name" />
                    </div>
                    <div className="fieldset">
                        <input type="text" placeholder="Address" />
                    </div>
                    <div className="fieldset">
                        <input type="text" placeholder="Payment Info" />
                    </div>
                    <div className="fieldset">
                        <button className="cta">Rent</button>
                    </div>
                </form>
            </div>
        );
    }
}