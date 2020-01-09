import React, { Component } from 'react';

export class App extends Component {
    state = {
        hello: 'Micro Cats'
    };

    render() {
        return (
            <div>
                <h3>{this.props.title}</h3>
                <p>{this.state.hello}</p>
                <img src="//www.placekitten.com/g/400/400" />
            </div>
        )
    }
}
