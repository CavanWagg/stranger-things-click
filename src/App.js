import React, { Component } from "react";
import "./App.css";
import Header from "./components/Header";
import Wrapper from "./components/Wrapper";
import Card from "./components/Card";
import characters from "./characters.json"


class App extends Component {
  state = {
    characters,
    highScore: 0,
    currentScore: 0,
    clicked: [],
 
  };

  resetGame = () => {
    this.setState({
      characters,
      currentScore: 0,
      highScore: this.state.currentScore,
      clicked: []
    })
    this.shuffleArray(characters)
  }
  // shuffle image cards randomly
  shuffleArray = arr => {
    const newCharacters = arr.sort(() => Math.random() - 0.5);
    this.setState({ characters: newCharacters });
  };

  // Add id to the clicked array
  clicked = card => {
    this.shuffleArray(characters)
  if (this.state.clicked.includes(card.target.id)) {
    this.resetGame();
  } else {
    this.increase();
    // add an id to the clicked array
    const newClicksArray = this.state.clicked.slice();
    newClicksArray.push(card.target.id)
    this.setState({ clicked: newClicksArray}) 
  }
}

increase = () => {
  const newScore = this.state.currentScore + 1;
  this.setState({currentScore : newScore})
}

  render() {
    return (
      <Wrapper>
        <Header
          currentScore={this.state.currentScore}
          highScore={this.state.highScore}
        />
         {this.state.characters.map(character => (
          <Card
              key={character.id}
              id={character.id}
              image={character.image}
              name={character.name}
              clicked={this.clicked}
              />
         ))}
      </Wrapper>
    );
  
}
}

export default App;
