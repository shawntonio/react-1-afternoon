import React, {Component} from 'react';

export default class EvenAndOdd extends Component {
	constructor(){
		super();

		this.state = {
			evenArray: [],
			oddArray: [],
			userInput: ""
		}
	}

	inputHandler = (e) => {
		this.setState({
			userInput: e.target.value
		})
	}

	clickHandler = () => {
		const arr = this.state.userInput.split("")
		const evenArr = []
		const oddArr = []
		arr.forEach(num => {
			num % 2 === 0 ? evenArr.push(num) : oddArr.push(num);
		})
		this.setState({
			evenArray: evenArr,
			oddArray: oddArr
		})
	}

	render(){
		return (
			<div className="puzzleBox evenAndOddPB">
				<h4 >Evens and Odds</h4>
				<input onChange={this.inputHandler} className="inputLine"></input>
				<button onClick={this.clickHandler} className="confirmationButton"> Split</button>
				<span className="resultsBox">Evens: {this.state.evenArray}</span>
				<span className="resultsBox">Odds: {this.state.oddArray}</span>
			</div>
		);
	}
	
}