import React, { Component } from 'react';

export class App extends Component {
    state = {
        hello: 'Micro Murray'
    };

    render() {
        return (
            <div>
                <h3>{this.props.title}</h3>
                <p>{this.state.hello}</p>
                <img src="//www.fillmurray.com/400/400" />
            </div>
        )
    }
}
