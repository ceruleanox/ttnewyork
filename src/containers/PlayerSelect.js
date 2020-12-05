import React, {Component} from 'react';

import Players from "../components/Players";

class PlayerSelect extends Component {
  state = {
    personas: ["firstgen", "firstgen2", "legacy", "legacy2"],
    currentPlayerSelect: 1,
    players: [],
    totalYears: [],
    readyToStart: false,
    gameFinished: false,
  };

  setPlayer = (persona) => {
    if (this.state.players.find((player) => player.persona === persona)) {
      // prohibit choosing same player
      alert(
        "Looks like you chose the same persona as player 1 — please select a different one"
      );
    } else {
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
    }
  };

  startGame = () => {
    this.props.startGame(this.state.players);
  };

  render() {
    return (
      <div>
        <div className="players">
          {this.state.players.map((player) => (
            <div key={player.number} className="player">
              <h3>
                Player {player.number} :
                {(player.persona === "firstgen" || player.persona === "firstgen2") ? (
                  <p>
                    First-generation <br></br> college student
                  </p>
                ) : (
                  <p></p>
                )}
                {(player.persona === "legacy" || player.persona === "legacy2") ? (
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
            <button onClick={this.startGame} className="start-button">
              Start
            </button>
          </React.Fragment>
        ) : (
          // if false, display following
          <React.Fragment>
            <h2>
              Player {this.state.currentPlayerSelect}, select your persona
            </h2>
            <table className="personaLabel">
              <tbody>
                <tr>
                  <th>First-generation college student</th>
                  <th>Legacy college student</th>
                </tr>
              </tbody>
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