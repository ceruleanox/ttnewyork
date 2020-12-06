import React, {Component} from 'react';
import GameBoard from "./GameBoard";
import CardDeck from "../components/CardDeck";

class CardSelect extends Component {
  state = {
    cards: [],
    player: 0,
    type: []
  };

  render() {
    return (
        <div className="card-deck">
            {this.state.type}
    </div>
    );
  }
}

export default CardSelect;
