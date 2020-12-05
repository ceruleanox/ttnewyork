import { findAllByPlaceholderText } from '@testing-library/react';
import React, {Component} from 'react';

class PlayerSelect extends Component {
  state = {
    personas: ["firstgen", "firstgen2", "legacy", "legacy2"],
    currentPlayerSelect: 1,
    players: [],
    totalYears: [],
    readyToStart: false,
    gameFinished: false
  };

  setPlayer = (persona) => {
    this.setState((prevState) => ({
      currentPlayerSelect: prevState.currentPlayerSelect + 1,
      players: [
        ...prevState.players,
        {
          number: prevState.currentPlayerSelect,
          persona,
        },
      ],
      readyToStart: prevState.currentPlayerSelect === 2 ? true : false,
    }));
  };

  render() {
    return (
      <div>
        <div className="players">
          {this.state.players.map((player) => (
            <div key={player.number} className="player">
              <h3>
                Player {player.number} :
                {player.persona === "firstgen" ? (
                  <p>
                    First-generation <br></br> college student
                  </p>
                ) : (
                  <p></p>
                )}
                {player.persona === "firstgen2" ? (
                  <p>
                    First-generation <br></br> college student
                  </p>
                ) : (
                  <p></p>
                )}
                {player.persona === "legacy" ? (
                  <p>
                    Legacy <br></br> college student
                  </p>
                ) : (
                  <p></p>
                )}
                {player.persona === "legacy2" ? (
                  <p>
                    Legacy <br></br> college student
                  </p>
                ) : (
                  <p></p>
                )}
              </h3>
              <img
                className="player-persona"
                alt={player.persona}
                src={`./personas/${player.persona}-persona.png`}
              />
            </div>
          ))}
        </div>

        {this.state.readyToStart ? (
          // if true, display following
          <React.Fragment>
            <h1>Click start to begin!</h1>
            <button className="start-button">Start</button>
          </React.Fragment>
        ) : (
          // if false, display following
          <React.Fragment>
            <h2>
              Player {this.state.currentPlayerSelect}, select your persona
            </h2>
            <table className="personaLabel">
              <tr>
                <th>First-generation college student</th>
                <th>Legacy college student</th>
              </tr>
            </table>
            {this.state.personas.map((persona) => (
              <img
                onClick={() => this.setPlayer(persona)}
                key={persona}
                className="persona"
                alt={persona}
                src={`./personas/${persona}-persona.png`}
              />
            ))}
          </React.Fragment>
        )}
      </div>
    );
  }
}

export default PlayerSelect;