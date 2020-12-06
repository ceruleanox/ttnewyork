import React, { Component } from "react";
import './App.css';

import Players from './components/Players';
import PlayerSelect from './containers/PlayerSelect';
import GameBoard from "./containers/GameBoard";
import CardSelect from './containers/CardSelect';

class App extends Component {
  state = {
    players: [],
    gameStarted: false,
    currentPlayer: 1,
    gameEnded: false
  };

  startGame = (players) => {
    this.setState({
      players: players.map(player => ({
        ...player,
        location: 0,
        yearsLeft: 4,
        score: 0
      })),
      gameStarted: true,
    });
  }

  movePlayer = (number, squares) => {
    console.log(this.state.players);
      this.setState((prevState) => {
        let currentPlayer = prevState.players.find(player => player.number === prevState.currentPlayer);
        const location = currentPlayer.location + number;
        const landingSquare = squares[location % squares.length];
        const increaseScore = landingSquare.type === currentPlayer.persona ? 1 : -1;
        console.log(currentPlayer);
        console.log("location: " + location);
        console.log("currentPlayer.location: " + currentPlayer.location);
        console.log(number);
        currentPlayer = {
          ...currentPlayer,
          location: currentPlayer.location + number,
          yearsLeft: Math.max(0,  currentPlayer.yearsLeft--),
          score: Math.max(0,  currentPlayer.score + increaseScore)
        }

        const square = {
          player: currentPlayer.number,
          type: landingSquare.type,
          points: (increaseScore > 0 ? '+' : '') + increaseScore
        };

        return {
          square,
          players: prevState.players.map(player => {
            if (player.number === prevState.currentPlayer) {
              return currentPlayer;
            }
            return player;
          }),
          currentPlayer: prevState.currentPlayer === 1 ? 2 : 1,
          gameEnded: currentPlayer.location > 80 ? true : false,
      };
    }); // end setState
  }

  render() {
    return (
      <div className="App">
        <h2>The Game of College Life</h2>
        <Players players={this.state.players} />
        {this.state.gameStarted ?
          <GameBoard 
            square={this.state.square}
            movePlayer={this.movePlayer}
            currentPlayer={this.state.currentPlayer} 
            players={this.state.players}
            />
         :
          <PlayerSelect startGame={this.startGame} />
        }
        {this.state.gameEnded ? "Ended!" : "" }
      </div>
    );
  }
}

export default App;
