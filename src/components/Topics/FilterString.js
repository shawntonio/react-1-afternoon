import React, {Component} from 'react';

export default class FilterString extends Component {
	constructor(){
		super()

		this.state = {
			unFilteredArray: ['James', 'Jessica', 'Melody', 'Tyler', 'Blake', 'Jennifer', 'Mark', 'Maddy'],
			userInput: "",
			filteredArray: []
		}
	}

	inputHandler = (e) => {
		this.setState({
			userInput: e.target.value
		})
	}

	filter = () => {
		this.setState({
			filteredArray: this.state.unFilteredArray.filter(name => name.includes(this.state.userInput))
		})
	}
	
	render(){
		return (
			<div className="puzzleBox filterStringPB">
				<h4>Filter String</h4>
				<span className="puzzleText">Names: {JSON.stringify(this.state.unFilteredArray)}</span>
				<input onChange={this.inputHandler} className="inputLine"></input>
				<button onClick={this.filter} className="confirmationButton">Filter</button>
				<span className="resultsBox filterStringRB">Filtered: {JSON.stringify(this.state.filteredArray)}</span>
			</div>
		);
	}
	
}