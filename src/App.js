import React, { Component } from "react";
import './App.css';

import PlayerSelect from './containers/PlayerSelect';
import GameBoard from "./containers/GameBoard";
import CardSelect from './containers/CardSelect';
class App extends Component {
  state = {
    players: [],
    gameStarted: false,
    currentPlayer: 1,
    cards: []
  };

  startGame = (players) => {
    this.setState({
      players: players.map(player => ({
        ...player,
        location: 0,
        yearsLeft: 4,
        finances: 0
      })
      ),
      gameStarted: true
    });
  }

  movePlayer = (number, squares) => {
    console.log(this.state.players);
      this.setState((prevState) => {
        let currentPlayer = prevState.players.find(player => player.number === prevState.currentPlayer);
        const location = currentPlayer.location + number;
        const landingSquare = squares[location % squares.length];
        console.log(currentPlayer);
        console.log("location: " + location);
        console.log("currentPlayer.location: " + currentPlayer.location);
        console.log(number);
        currentPlayer = {
          ...currentPlayer,
          location: currentPlayer.location + number,
          yearsLeft: Math.max(0,  currentPlayer.yearsLeft--)
        }

      const square = {
        player: currentPlayer.number,
        type: landingSquare.type
      };

        return {
          square,
          players: prevState.players.map((player) => {
            if (player.number === prevState.currentPlayer) {
              return currentPlayer;
            }
            return player;
          }),
          currentPlayer: prevState.currentPlayer === 1 ? 2 : 1,
        };
      }); // end setState
  }

  render() {
    return (
      <div className="App">
        {this.state.gameStarted ? (
          <GameBoard 
            square={this.state.square}
            movePlayer={this.movePlayer}
            currentPlayer={this.state.currentPlayer} 
            players={this.state.players}
            
            />
        ) : (
          <PlayerSelect startGame={this.startGame} />
        )}
      </div>
    );
  }
}

export default App;
