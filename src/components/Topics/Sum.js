import React, { Component } from 'react';

export default class Sum extends Component {
    constructor(){
        super();
        this.state = {
            number1: 0,
            number2: 0,
            sum: null
        }
    }

    handleChange(val){
        this.setState({number1: val});
    }
    handleChangeTwo(val){
        this.setState({number2: val});
    }
    add(num1, num2){
        this.setState({sum: num1 + num2});
      }

    render(){
        return (
            <div className="puzzleBox sumPB">
                <h4>Sum</h4>
                <input 
                    className="inputLine" 
                    onChange={(e) => this.handleChange(e.target.value)}
                />
                <input 
                    className="inputLine" 
                    onChange={(e) => this.handleChangeTwo(e.target.value)}
                />
                <button 
                    className="confirmationButton"
                    onClick={() => this.add(this.state.number1, this.state.number2)}>
                    Add
                </button>
                <span className="resultsBox">Sum: {this.state.sum}</span>
            </div>
        )
    }
}