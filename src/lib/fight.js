import CardDefinitions from "../Components/CardDefinitions";

function fight(card1, card2) {
  let myCardArray = [card1, ...card1.minions];
  let opponentsArray = [card2, ...card2.minions];
  let myMinionHasDivineShield =
    myCardArray[0].keywords.includes("Divine Shield");
  let opponentMinionHasDivineShield =
    opponentsArray[0].keywords.includes("Divine Shield");

  while (myCardArray.length !== 0 && opponentsArray.length !== 0) {
    while (myCardArray[0].health > 0 && opponentsArray[0].health > 0) {
      if (myCardArray[0].attack === 0 && opponentsArray[0].attack === 0) {
        myCardArray = [card1, ...card1.minions];
        myMinionHasDivineShield =
          myCardArray[0].keywords.includes("Divine Shield");
        return ["draw", card2];
      }
      if (myMinionHasDivineShield && opponentMinionHasDivineShield) {
        myMinionHasDivineShield = false;
        opponentMinionHasDivineShield = false;
        console.log("Removed Devine Shield from both cards");
      }
      if (myMinionHasDivineShield) {
        opponentsArray[0].health =
          opponentsArray[0].health - myCardArray[0].attack;
        myMinionHasDivineShield = false;
        console.log("Removed Devine Shield from my card");
      }
      if (opponentMinionHasDivineShield) {
        myCardArray[0].health =
          myCardArray[0].health - opponentsArray[0].attack;
        opponentMinionHasDivineShield = false;
        console.log("Removed Devine Shield from opponent");
      }

      myCardArray[0].health = myCardArray[0].health - opponentsArray[0].attack;
      opponentsArray[0].health =
        opponentsArray[0].health - myCardArray[0].attack;
    }
    if (myCardArray[0].health < 1) {
      myCardArray.shift();
    }
    if (opponentsArray[0].health < 1) {
      opponentsArray.shift();
    }
  }
  if (myCardArray.length === 0 && opponentsArray.length === 0) {
    myCardArray = [card1, ...card1.minions];
    myMinionHasDivineShield = myCardArray[0].keywords.includes("Divine Shield");
    return ["draw", card2];
  }
  if (myCardArray.length === 0) {
    myCardArray = [card1, ...card1.minions];
    myMinionHasDivineShield = myCardArray[0].keywords.includes("Divine Shield");

    return ["loose", card2];
  }
  if (opponentsArray.length === 0) {
    myCardArray = [card1, ...card1.minions];
    myMinionHasDivineShield = myCardArray[0].keywords.includes("Divine Shield");
    return ["win", card2];
  }
  // let myCard = { ...card1 };
  // let opponent = { ...card2 };
  // let result = null;
  // let myCardHasDevineShield = myCard.keywords.includes("Divine Shield");
  // let opponentHasDevineShield = opponent.keywords.includes("Divine Shield");

  // // Prevent endless loop when both have 0 attack
  // if (myCard.attack === 0 && opponent.attack === 0) {
  //   return "draw";
  // }

  // // Check if both have Divine Shield and remove it if so
  // if (myCardHasDevineShield && opponentHasDevineShield) {
  //   myCardHasDevineShield = false;
  //   opponentHasDevineShield = false;
  // }
  // // Check for Divine Shield and simulate the first attack without getting damaged, remove Devine Shield

  // if (myCardHasDevineShield && opponent.attack > 0) {
  //   opponent.health = opponent.health - myCard.attack;
  //   myCardHasDevineShield = false;
  // }
  // if (opponentHasDevineShield && myCard.attack > 0) {
  //   myCard.health = myCard.health - opponent.attack;
  //   opponentHasDevineShield = false;
  // }

  // // Simulate the fight until one card has <1 health
  // while (myCard.health > 0 && opponent.health > 0) {
  //   myCard.health = myCard.health - opponent.attack;
  //   opponent.health = opponent.health - myCard.attack;
  // }

  // // Set result
  // if (myCard.health > 0) {
  //   result = "win";
  // } else if (opponent.health > 0) {
  //   result = "loose";
  // } else {
  //   result = "draw";
  // }

  // // Return result
  // return result;
}

export function fightAll(myCard) {
  let results = CardDefinitions.map((opponent) => {
    return fight(myCard, opponent);
  });
  return results;

  // return {
  //   win: results.filter((result) => result[0] === "win").length,
  //   loose: results.filter((result) => result[0] === "loose").length,
  //   draw: results.filter((result) => result[0] === "draw").length,
  // };
}

const foo = fight(CardDefinitions[0], CardDefinitions[6]);
console.log(foo);

const foo2 = fightAll(CardDefinitions[0]);
console.log(foo2);
