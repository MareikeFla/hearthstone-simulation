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
    <main>
      <h2 className="Heading">Select your cards</h2>

      <SelectedCards
        selectedCards={selectedCards}
        handleCardRemove={handleCardRemove}
      />

      <CardGrid
        handleCardSelection={handleCardSelection}
        selectedCards={selectedCards}
      />
    </main>
  );
}
