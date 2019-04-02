import React, {Component} from 'react';

export default class Palindrome extends Component {
	constructor(){
		super()

		this.state = {
			userInput: "",
			palindrome: ""
		}
	}
	
	inputHandler = (e) => {
		this.setState({
			userInput: e.target.value.toLowerCase()
		})
	}

	check = () => {
		let str = this.state.userInput;
		let pal = "";
		if (str === str.split('').reverse().join(""))   pal = "true" 
			else  pal = "false"
		
		this.setState({
			palindrome: pal
		})
		console.log(this.state.palindrome)
	}
	
	render(){
		return (
			<div className="puzzleBox filterStringPB">
				<h4>Palindrome</h4>
				<input onChange={this.inputHandler} className="inputLine"></input>
				<button onClick={this.check} className="confirmationButton">Check</button>
				<span className="resultsBox">Palindrome: {this.state.palindrome}</span>

			</div>
		);
	}
	
}