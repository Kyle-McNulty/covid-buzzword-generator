import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

const ADJECTIVES = ["new", "unprecedented", "modern", "challenging"]
const NOUNS = ["reality", "future", "era", "time"]

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      phrase: ""
    };
    this.generatePhrase = this.generatePhrase.bind(this);
    this.getRandomIntInclusive = this.getRandomIntInclusive.bind(this);
  }

  getRandomIntInclusive(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min; //The maximum is inclusive and the minimum is inclusive 
  }

  generatePhrase(event) {
    event.preventDefault();
    const adjective = ADJECTIVES[this.getRandomIntInclusive(0, ADJECTIVES.length - 1)];
    const noun = NOUNS[this.getRandomIntInclusive(0, NOUNS.length - 1)];
    const newPhrase = adjective + " " + noun;
    this.setState({
      phrase: newPhrase
    })
  }
  
  render() {
    return (<div className="App">
      <header className="App-header">
        <p>
          Click the button to randomly generate some fun COVID-19 buzz-phrases for your marketing needs!
        </p>
        <button onClick={this.generatePhrase}>
          Start my mindless marketing!
        </button>
        <h1>Your Phrase:</h1>
        <p>{this.state.phrase}</p>
      </header>
    </div>);
  }
}



export default App;
