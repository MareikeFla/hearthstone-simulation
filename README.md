card1 -> 01
card1.minions -> 02

01: {name: "String",
attack: 1,
health: 4,
minions: 02 }
02: [03, 04]
03: {name: "String",
attack: 1,
health: 4,
}
04: {name: "String",
attack: 1,
health: 4,
}

let card1Copy = {card1}

card1Copy -> 06

06: {name: "String",
attack: 1,
health: 4,
minions: 02 }

card1.minions = card1.minions.map((minion)=> {return {minion}})

06: {name: "String",
attack: 1,
health: 4,
minions: 07 }

07: [08, 09]
08: {name: "String",
attack: 1,
health: 4,
}
09: {name: "String",
attack: 1,
health: 4,
}

myCardArray = [card1Copy, ...card1Copy.minions]

myCardArray -> 10

10: [06, 08, 09]
