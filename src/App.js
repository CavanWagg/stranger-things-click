import React, { Component } from "react";
import "./App.css";
import Header from "./components/Header";
import Wrapper from "./components/Wrapper";
import Card from "./components/Card";
import characters from "./characters.json"
class App extends Component {
  state = {
    highScore: 0,
    currentScore: 0,
    clicked: [],
 
  };
  // handleClick = () => {
  //   this.setState({
  //     cards
  //   })
  // }

  // shuffle image cards randomly
  shuffleArray = arr => {
    const newCharacters = arr.sort(() => Math.random() - 0.5);
    this.setState({ characters: newCharacters });
  };

  // Add id to the clicked array
  clicked = card => {
    this.shuffleArray(characters);
  };

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
            hasBeenClicked={this.hasBeenClicked}
          />
        ))}
      </Wrapper>
    );
  }
}

export default App;
