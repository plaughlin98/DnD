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
    // Displays the Dice Inputs/Outputs
    displayDice: function(dice) {
        var allDiceDivs = document.querySelector(".all-dice").getElementsByTagName("div");
        var allDiceDivsList = Array.prototype.slice.call(allDiceDivs);
        for (let i = 0; i < allDiceDivsList.length; i++) {
            if(allDiceDivsList[i].classList != "hidden") {
                allDiceDivsList[i].classList.add('hidden');
            } 
        }
        die = document.getElementById(dice)
        die.classList.add('frontAndCenter');
        die.classList.remove('hidden');
    },
    rollDice: function(dice) {
        return getRandomInt(dice) + 1;
    },
    numOfRoll: function() {

    },
    displayRoll: function(diceDisplay, die) {
        let modifier = parseInt(this.addModifier());
        let roll = parseInt(this.rollDice(die));
        let rollSumDisplay = document.querySelector(diceDisplay);

        if(this.addModifier() > 0) {
            rollSumDisplay.innerText = `Modifier: +${modifier} Roll: ${roll} Total Sum: ${roll + modifier} `;
        } else if(this.addModifier() < 0){
            rollSumDisplay.innerText = `Modifier: ${modifier} Roll: ${roll} Total Sum: ${roll + modifier} `;
        } else {
            rollSumDisplay.innerText = `Total Roll: ${roll}`;
        }
    },

    // Get Modifier Value and Add to this.display function
    addModifier: function() {
        return modifier = document.getElementById('modifier').value;
    },
}

function rollDice(dice) {
    
}

document.querySelector(".diceSelection").addEventListener('click', function(e){
    switch(e.target.id) {
        case "d4DiceSelector":
            handlers.displayDice("d4Display");
            break;
        case "d6DiceSelector":
            handlers.displayDice("d6Display");
            break;
        case "d8DiceSelector":
            handlers.displayDice("d8Display");
            break;
        case "d10DiceSelector":
            handlers.displayDice("d10Display");
            break;
        case "d12DiceSelector":
            handlers.displayDice("d12Display");
            break;
        case "d20DiceSelector":
            handlers.displayDice("d20Display");
            break;
        case "d100DiceSelector":
            handlers.displayDice("d100Display");
            break;
    }
})

document.querySelector(".all-dice").addEventListener('click', function(e) {
    switch(e.target.id) {
        case "d4Dice":
           handlers.displayRoll(".d4DiceSum", dice.d4Dice);
           break;
        case "d6Dice":
            handlers.displayRoll(".d6DiceSum", dice.d6Dice);
            break;
        case "d8Dice":
            handlers.displayRoll(".d8DiceSum", dice.d8Dice);
            break;
        case "d10Dice":
            handlers.displayRoll(".d10DiceSum", dice.d10Dice);
            break;
        case "d12Dice":
            handlers.displayRoll(".d12DiceSum", dice.d12Dice);
            break;
        case "d20Dice":
            handlers.displayRoll(".d20DiceSum", dice.d20Dice);
            break;
        case "d100Dice":
            handlers.displayRoll(".d100DiceSum", dice.d100Dice);
            break;
        
    }
})


