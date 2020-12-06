import React, { Component } from "react";
//import CardDeck from "../components/CardDeck";
import Players from "../components/Players";
import CardSelect from './CardSelect';

class GameBoard extends Component {
    state = {
        squares: [],
        grid_size: 6
    };

    componentDidMount() {
        // generate board and set state once
        const squares = this.createSquares();
        this.setState({
            squares
        });
    }

createSquares() {
    const {players} = this.props;
    const [ player_1, player_2 ] = players;
    const { grid_size } = this.state;

    const squares = [{
        row: 1,
        col: 1,
        type: 'start'
    }];

    let i = 1;
    let row = 1;
    let col = 2;
    const total_squares = (grid_size * 2 + ((grid_size - 2) * 2));
    while (squares.length < total_squares) {
      const square = {
        row,
        col
      };

      // define which square spaces speak to which categories
      if (i === 1) {
        square.type = 'coursePlanning';
      } else if (i === 2 || i === 6 || i === 9 || i === 11 || i === 15) {
        square.type = 'academics';
      } else if (i === 4 || i === 7 || i === 14) {
        square.type = 'supplies';
      } else if (i === 3 || i === 8 || i === 10 || i === 13) {
        square.type = "financialEnv";
      } else {
        square.type = "tip";
      }

      squares.push(square);
      i++;

      if(i < grid_size) {
          col++;
      } else if (i < 2 * grid_size - 1) {
          row++;
      } else if (i < 3 * grid_size - 2) {
          col--;
      } else {
          row--;
      }
    }
      return squares;
}
/*
setCard {
  this.state.cards = square.type;
}
*/
rollDie = () => {
    const dice = ['⚀', '⚁', '⚂', '⚃', '⚄', '⚅'];
    const index = Math.floor(dice.length * Math.random());
    const rolledNumber = dice[index];
    this.setState({
      rolledNumber
    });

    this.props.movePlayer(index + 1, this.state.squares);
} 

    render() {
        const { grid_size } = this.state;
        let playerLocations = [];
        if (this.state.squares.length > 0) {
            playerLocations = this.props.players.map(player =>
                this.state.squares[player.location % this.state.squares.length]);
        }
        return (
          <div className="game-area">
          <div
            className="game-board"
            style={{
              gridTemplate: `repeat(${grid_size}, 1fr) /repeat(${grid_size}, 1fr)`,
            }}
          >
            {this.state.squares.map((square, i) => (
              <div
                style={{
                  gridRow: square.row,
                  gridColumn: square.col,
                }}
                key={i}
                className="game-square"
              >
                {square.type !== "start" ? (
                  <img alt={square.type} src={`./images/${square.type}.png`} />
                ) : (
                  <p>START of the year</p>
                )}
              </div>
            ))}
            {playerLocations.map((location, i) => {
              const player = this.props.players[i];
              return (
                <div
                  key={player.number}
                  style={{
                    gridRow: location.row,
                    gridColumn: location.col,
                  }}
                  className="player-avatar"
                >
                  <img
                    className="persona"
                    alt={player.number}
                    src={`./personas/${player.persona}-persona.png`}
                  />
                </div>
              );
            })}
            <div className="board-center-inside-square">
              <h4>Player {this.props.currentPlayer}, roll the die!</h4>
              <p className="rolled-die">{this.state.rolledNumber}</p>
              <button onClick={this.rollDie} className="button">Roll</button>
            </div>
          </div>
          {
            this.props.square ?
            <CardSelect className="card-deck" player={this.props.square.player} type={this.props.square.type}/> :
            <img className="card-deck" src={`./images/logo.png`}/>
          }
          </div>
        );
    }
}

export default GameBoard;