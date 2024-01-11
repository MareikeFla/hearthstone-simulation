import { fightAll } from "../lib/fight";
import { useState } from "react";

export default function SelectedCards({ selectedCards, handleCardRemove }) {
  return (
    <div className="SelectedCardsGrid">
      {selectedCards.map((selectedCard, i) => {
        if (selectedCard) {
          // const statistics = fightAll(selectedCard);
          return (
            <div
              className="SelectedCard"
              key={selectedCard.name + i}
              onClick={() => {
                handleCardRemove(i);
              }}
            >
              <img
                className="SelectedCard-Image"
                src={selectedCard.picture}
              ></img>
              <p>{selectedCard.name}</p>
              {/* <p>win: {statistics.win}</p>
              <p>loose: {statistics.loose}</p>
              <p>draw: {statistics.draw}</p> */}
            </div>
          );
        }
        return (
          <div className="SelectedCard SelectedCard--empty" key={i}>
            <img src="/pics/empty.png" className="SelectedCard-Image"></img>
            <p>Empty</p>
            <p>win: </p>
            <p>loose: </p>
            <p>draw: </p>
          </div>
        );
      })}
    </div>
  );
}
