import React, {Component} from 'react';

export default class Sum extends Component {
	constructor(){
		super()

		this.state = {
			number1: 0,
			number2: 0,
			sum: null
		}
	}
	
	input1 = (e) => {
		this.setState({
			number1: parseInt(e.target.value)
		})
	}
	input2 = (e) => {
		this.setState({
			number2: parseInt(e.target.value)
		})
	}
	addNums = () => {
		this.setState({
			sum: this.state.number1 + this.state.number2
		})
	}
	
	render(){
		return (
			<div className="puzzleBox sumPB">
				<h4>Sum</h4>
				<input onChange={this.input1} className="inputLine"></input>
				<input onChange={this.input2} className="inputLine"></input>
				<button onClick={this.addNums} className="confirmationButton">Add</button>
				<span className="resultsBox">Sum: {this.state.sum}</span>
			</div>
		);
	}
	
}