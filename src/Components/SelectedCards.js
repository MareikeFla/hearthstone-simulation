import { fightAll } from "../lib/fight";
import { useState } from "react";

export default function SelectedCards({ selectedCards, handleCardRemove }) {
  return (
    <div className="SelectedCardsGrid">
      {selectedCards.map((selectedCard, i) => {
        if (selectedCard) {
          const statistics = fightAll(selectedCard);
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
              <div>
                <h2>{selectedCard.name}</h2>
                <p>
                  win:{" "}
                  {statistics.filter((result) => result[0] === "win").length}
                </p>
                <p>
                  loose:{" "}
                  {statistics.filter((result) => result[0] === "loose").length}
                </p>
                <p>
                  draw:{" "}
                  {statistics.filter((result) => result[0] === "draw").length}
                </p>
              </div>
            </div>
          );
        }
        return (
          <div className="SelectedCard SelectedCard--empty" key={i}>
            <img src="/pics/emptybg.png" className="SelectedCard-Image"></img>
            <div>
              <p>Empty</p>
              <p>win: </p>
              <p>loose: </p>
              <p>draw: </p>
            </div>
          </div>
        );
      })}
    </div>
  );
}
