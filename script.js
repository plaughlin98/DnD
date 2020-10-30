var dice = {
    d4Dice: 4,
    d6Dice: 6,
    d8Dice: 8,
    d100Dice: 100,
    d10Dice: 10,
    d12Dice: 12,
    d20Dice: 20,
}

function getRandomInt(max) {
    return Math.floor(Math.random() * Math.floor(max));
}

var handlers = {
    rollDice: function() {
        
    },
    chooseDie: function() {

    },
    numOfRoll: function() {

    },
    display: function(diceDisplay, die) {
        console.log(diceDisplay);
        console.log(rollDice(die));
        document.querySelector(diceDisplay).innerText = `Total Roll Sum: ${rollDice(die)}`;
    },
    toggleAdvantage: function() {

    },
    addModifier: function() {

    },
}

function rollDice(dice) {
    return getRandomInt(dice) + 1;
}

document.querySelector(".all-dice").addEventListener('click', function(e) {
    switch(e.target.id) {
        case "d4Dice":
           handlers.display(".d4DiceSum", dice.d4Dice);
           break;
        case "d6Dice":
            handlers.display(".d6DiceSum", dice.d6Dice);
            break;
        case "d8Dice":
            handlers.display(".d8DiceSum", dice.d8Dice);
            break;
        case "d10Dice":
            handlers.display(".d10DiceSum", dice.d10Dice);
            break;
        case "d12Dice":
            handlers.display(".d12DiceSum", dice.d12Dice);
            break;
        case "d20Dice":
            handlers.display(".d20DiceSum", dice.d20Dice);
            break;
        case "d100Dice":
            handlers.display(".d100DiceSum", dice.d100Dice);
            break;
        
    }
})
function chooseDie() {

}

