import React from 'react'

const Players = ({players}) => {

    <div className="players">
        {players.map((player) => (
            <div key={player.number} className="player">
            <h3>
                Player {player.number} :
                {player.persona === "firstgen" ||
                player.persona === "firstgen2" ? (
                <p>
                    First-generation <br></br> college student
                </p>
                ) : (
                <p></p>
                )}
                {player.persona === "legacy" ||
                player.persona === "legacy2" ? (
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
   
};

export default Players;