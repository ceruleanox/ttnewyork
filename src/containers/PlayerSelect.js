import React, {Component} from 'react';

class PlayerSelect extends Component {
    
  state = {
    personas: ['first-gen','legacy'],
    currentPlayerSelect: 1,
    players: [],
    totalYears: []
  };
  
  render() {
    return (
      <div>
        <h1>Player {this.state.currentPlayerSelect}, select your persona</h1>
        {this.state.personas.map((persona) => (
          <img src={`./personas/`}></img>
        ))}
      </div>
    );
  }
}

export default PlayerSelect;