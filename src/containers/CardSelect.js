import React, {Component} from 'react';
import data from "../components/data";
import GameBoard from "./GameBoard";
import CardDeck from "../components/CardDeck";

class CardSelect extends Component {
  state = {
    cards: [],
    player: 0,
    categories: ['academics']
  };

  render() {
    let text;
    if (this.props.type == "academics")
      text = <p>You applied to an environmental science fellowship competition and won! You recieve a small stipend that can cover your tuition for a semester. That is amazing, congratulation!,-$300</p>;
    else if (this.props.type == "financialenv")
      text = <p>Unfortunately you need to work this school year to help pay off your loans., +$3000</p>
    else if (this.props.type == "supplies")
      text = <p>You decided to fully immerse into adulthood and invest in cooking at home. Your friends wonder at your sick cooking skills and you seem better adjusted. Maybe adulthood isn't that bad? Now you can use the money you saved from not getting takeout to treat yourself! With maybe takeout..., +$500</p>
    else if (this.props.type == "courseplanning")
      text = <p>You have been in good academic standing and took extra credits, you can drop a course this semester and enjoy a lighter course load!, +$300</p>
    else
      text = <a href="https://game-of-college-life.glitch.me/index.html">Here are some tips to help you learn more about managing finances!</a>
      return (
      <div className="card-deck">
        {text}
      </div>
    );
}
}

export default CardSelect;
