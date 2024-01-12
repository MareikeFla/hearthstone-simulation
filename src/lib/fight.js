import CardDefinitions from "../Components/CardDefinitions";

function fight(card1, card2) {
  const card1Copy = structuredClone(card1);
  const myCardArray = [card1Copy, ...card1Copy.minions];
  const card2Copy = structuredClone(card2);
  const opponentsArray = [card2Copy, ...card2Copy.minions];
  let myMinionHasDivineShield =
    myCardArray[0].keywords.includes("Divine Shield");
  let opponentMinionHasDivineShield =
    opponentsArray[0].keywords.includes("Divine Shield");

  while (myCardArray.length !== 0 && opponentsArray.length !== 0) {
    while (myCardArray[0].health > 0 && opponentsArray[0].health > 0) {
      if (myCardArray[0].attack === 0 && opponentsArray[0].attack === 0) {
        return ["draw", card2];
      }

      if (!myMinionHasDivineShield) {
        myCardArray[0].health =
          myCardArray[0].health - opponentsArray[0].attack;
      } else if (myMinionHasDivineShield && opponentsArray[0].attack > 0) {
        myMinionHasDivineShield = false;
      }

      if (!opponentMinionHasDivineShield) {
        opponentsArray[0].health =
          opponentsArray[0].health - myCardArray[0].attack;
      } else if (opponentMinionHasDivineShield && myCardArray[0].attack > 0) {
        opponentMinionHasDivineShield = false;
      }
    }
    if (myCardArray[0].health < 1) {
      myCardArray.shift();
    }
    if (opponentsArray[0].health < 1) {
      opponentsArray.shift();
    }
  }

  if (myCardArray.length === 0 && opponentsArray.length === 0) {
    return ["draw", card2];
  }
  if (myCardArray.length === 0) {
    return ["loose", card2];
  }
  if (opponentsArray.length === 0) {
    return ["win", card2];
  }
}

export function fightAll(myCard) {
  let results = CardDefinitions.map((opponent) => {
    return fight(myCard, opponent);
  });
  return results;
}
