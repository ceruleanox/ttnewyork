import { findAllByPlaceholderText } from '@testing-library/react';
import React, {Component} from 'react';

class PlayerSelect extends Component {
    
  state = {
    personas: ['firstgen','legacy'],
    currentPlayerSelect: 1,
    players: [],
    totalYears: []
  };

  setPlayer = (persona) => {
    this.setState((prevState) => ({
      currentPlayerSelect: prevState.currentPlayerSelect + 1,
      players: [
        ...prevState.players, {
          number:prevState.currentPlayerSelect,
          persona
        }
      ]
    }), ()=> {
      // we know state has been updated recently
      if (this.state.players.length === 2) {

        // immediately starts game after two players are selected
        // this.props.startGame(this.state.players);
      }
    });
  }
  
  render() {
    return (
      <div>
        <div className="players">
          {
            this.state.players.map(player => (
            <div key={player.number} className="player">
              <p>Player {player.number}</p>
              <img
                className="persona"
                alt={player.persona}
                src={`./personas/${player.persona}-persona.png`} />
            </div>
            ))
          }
        </div>
        <h1>Player {this.state.currentPlayerSelect}, select your persona</h1>
        {this.state.personas.map((persona) => (
          <img
            onClick={() => this.setPlayer(persona)}
            key={persona}
            className="persona"
            alt={persona}
            src={`./personas/${persona}-persona.png`}
          ></img>
        ))}
      </div>
    );
  }
}

export default PlayerSelect;