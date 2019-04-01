import React, {Component} from 'react';

export default class FilterObject extends Component {
	constructor(){
		super()
		this.state = {
			unFilteredArray: [
        {
          name: 'Jimmy Joe',
          title: 'Hack0r',
          age: 12,
        },
        {
          name: 'Jeremy Schrader',
          age: 24,
          hairColor: 'brown'
        },
        {
          name: 'Carly Armstrong',
          title: 'CEO',
        }
      ],
			userInput: "",
			filteredArray: []
		}
	}

	inputHandler = (e) => {
		this.setState({
			userInput: e.target.value
		})
	}

	filterArray = () => { 
		this.setState({
			filteredArray: this.state.unFilteredArray.filter(obj => obj[this.state.userInput])
		})
	}
	
	render(){
		return (
			<div className="puzzleBox filterObjectPB">
				<h4>Filter Object</h4>
				<span className="puzzleText">Original: {JSON.stringify(this.state.unFilteredArray)}</span>
				<input onChange={this.inputHandler} className="inputLine"></input>
				<button onClick={this.filterArray} className="confirmationButton">Filter</button>
				<span className="resultsBox filterObjectRB">Filtered: {JSON.stringify(this.state.filteredArray)}</span>
			</div>
		);
	}
	
}