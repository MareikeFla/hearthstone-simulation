import { useState } from "react";
import "./styles.css";
import cards from "./CardDefinitions.js";

export default function CardGrid({ selectedCards, handleCardSelection }) {
  const [minions, setMinions] = useState(cards);
  return (
    <div className="CardGrid">
      {minions.map((card, i) => (
        <div
          onClick={() => {
            handleCardSelection(card);
          }}
          className={
            selectedCards.includes(card) ? "Card--selected Card" : "Card"
          }
          key={card.name}
        >
          <img className="Card-Image" src={card.picture}></img>
        </div>
      ))}
    </div>
  );
}
