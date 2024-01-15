import React from "react";
import CardGrid from "./CardGrid";
import "./styles.css";
import SelectedCards from "./SelectedCards";
import { useState } from "react";

export default function App() {
  const [selectedCards, setSelectedCards] = useState([null, null, null]);

  function handleCardSelection(card) {
    const emptyIndex = selectedCards.findIndex(
      (selectedCard) => selectedCard === null
    );

    if (emptyIndex !== -1) {
      const newSelectedCards = [...selectedCards];
      newSelectedCards[emptyIndex] = card;
      setSelectedCards(newSelectedCards);
    }
  }

  function handleCardRemove(index) {
    const newSelectedCards = [...selectedCards];
    newSelectedCards[index] = null;
    setSelectedCards(newSelectedCards);
  }

  return (
    <>
      <header>
        <h2 className="Heading">Select your cards</h2>
        <p className="Heading-Info">
          This app accurately simulates your first fight in Hearthstone
          Battlegrounds, providing probabilities of winning, losing, or drawing
          with each card you have chosen.
        </p>
        <p>
          <b>Select</b> a card by clicking on it in the overview of all cards.
        </p>
        <p>
          <b>Deselect</b> a card by clicking on it in the selection.
        </p>
      </header>
      <main>
        <SelectedCards
          selectedCards={selectedCards}
          handleCardRemove={handleCardRemove}
        />

        <CardGrid
          handleCardSelection={handleCardSelection}
          selectedCards={selectedCards}
        />
      </main>
    </>
  );
}
