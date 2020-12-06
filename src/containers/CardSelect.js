import React, {Component} from 'react';
import GameBoard from "./GameBoard";
import CardDeck from "../components/CardDeck";

class CardSelect extends Component {
  state = {
    //personas: ["coursePlanning", "academics", "supplies", "financialEnv", "tip"],
    currentCardSelect: 1,
    cards: []
  };

  render() {
    return (
        <div className="card-deck">
            /*
        {this.state.cards.map((card) => (
            <div key={card.number} className="mycard">
            <h3>
                Card {card.number} :
                {card.persona === "coursePlanning" ? (
                <p>
                    Course Planning
                </p>
                ) : (
                <p></p>
                )}
                {card.persona === "academics" ? (
                <p>
                    Academics
                </p>
                ) : (
                <p></p>
                )}
            </h3>
            </div>
        ))}
        
    </div>

       
    );
  }
}

export default CardSelect;