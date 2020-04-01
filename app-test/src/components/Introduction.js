import React, { Component } from 'react';

class Introduction extends Component {
    constructor(props) {
        super(props);

        this.state = {
            message: 'Hey there!!',
            userInput: '',
        }

        this.handleInput = this.handleInput.bind(this);
    }


    handleInput = (e) => {
        const{ value } = e.target;

        this.setState({userInput: value});
    };

    render() {
        return (
            <div>
                <input value={this.state.userInput} onChange={this.handleInput}/>
                <h1>{this.state.userInput}</h1>
            </div>
        )
    }
}

export default Introduction;