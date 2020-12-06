import React from 'react'

const CardDeck = ({cards}) => {
<div className="card-deck">
        {cards.map((card) => (
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
};

export default CardDeck;