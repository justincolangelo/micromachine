import React, { Component } from 'react';

export class App extends Component {
    state = {
        hello: 'Micro Explore Devices'
    };

    render() {
        return (
            <div>
                <h3>{this.props.title}</h3>
                <p>{this.state.hello}</p>
            </div>
        )
    }
}
