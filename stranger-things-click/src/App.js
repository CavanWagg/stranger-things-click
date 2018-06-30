import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Card from './Card'
class App extends Component {

  state = {
    score: [],
    cards: [
      {
        name: 'Rick',
        hasBeenClicked: false,
      },
      {
        name: 'Will',
        hasBeenClicked: true,
      }
    ]
  }
  // handleClick = () => {
  //   this.setState({
  //     cards
  //   })
  // }
    
  

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Stranger Things Click; </h1>
        </header>
        { this.state.cards.map( card => {
          return (
            <div>
              <Card 
  
              name={ card.name } 
              hasBeenClicked={ card.hasBeenClicked } 
              handleClick={ this.handleClick }
              />
             </div> 
          )
        })}
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    );
  }
}

export default App;
