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
        var title = document.querySelector('.title');
        title.classList.add('hidden');
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
    displayRoll: function(die) {
        let newDiv = this.createDiv();
        let modifier = parseInt(this.addModifier());
        let roll = parseInt(this.rollDice(die));
        let sum = modifier + roll;
        newDiv.innerHTML =`<span>Dice: <em>D${die}</em></span>`;
        if(this.addModifier() > 0) {
            newDiv.innerHTML += `<span>Modifier: <strong>+${modifier}</strong> </span>\r\n`;
            newDiv.innerHTML +=  `<span>Roll: <strong>${roll}</strong> </span>\r\n`;
            newDiv.innerHTML += `<span>Total Sum: <strong>${sum}</strong> </span>`;
        } else if(this.addModifier() < 0){
            newDiv.innerHTML += `<span>Modifier: <strong>${modifier}</strong> </span>\r\n`;
            newDiv.innerHTML +=  `<span>Roll: <strong>${roll}</strong> </span>\r\n`;
            newDiv.innerHTML += `<span>Total Sum: <strong>${sum}<strong></span>`;
        } else {
            newDiv.innerHTML += `<span>Total Roll: <strong>${roll}</strong></span>`;
        }
    },
    // Get Modifier Value and Add to this.display function
    addModifier: function() {
        return modifier = document.getElementById('modifier').value;
    },
    createDiv: function() {
        var newDiv = document.createElement('div')
        newDiv.classList.add("dice-roll")
        return document.getElementById('dice-results').appendChild(newDiv)
    },
    clearAll: function() {
        console.log('why no work')
        var node = document.getElementById("dice-results");
        node.innerHTML = '';
    }
}

// EVENT LISTENERS

// Listen for Clear All

// Listen for which dice to display up front
// This should also remove the Main Title of the screen
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

// Listen for Roll Button for each dice
// Can this be refactored? Instead of labelling each dice, try to get them in a single multi-use function
document.querySelector(".all-dice").addEventListener('click', function(e) {
    switch(e.target.id) {
        case "d4Dice":
            rollNum = parseInt(document.getElementById("d4Num").value)
            if (isNaN(rollNum)) {
                rollNum = 1;
            }
            for (let i = 0; i < rollNum; i++) {
                handlers.displayRoll(dice.d4Dice);
            }
           break;
        case "d6Dice":
            rollNum = parseInt(document.getElementById("d6Num").value)
            if (isNaN(rollNum)) {
                rollNum = 1;
            }
            for (let i = 0; i < rollNum; i++) {
                handlers.displayRoll(dice.d6Dice);
            }
            break;
        case "d8Dice":
            rollNum = parseInt(document.getElementById("d8Num").value)
            if (isNaN(rollNum)) {
                rollNum = 1;
            }
            for (let i = 0; i < rollNum; i++) {
                handlers.displayRoll(dice.d8Dice);
            }
            break;
        case "d10Dice":
            rollNum = parseInt(document.getElementById("d10Num").value)
            if (isNaN(rollNum)) {
                rollNum = 1;
            }
            for (let i = 0; i < rollNum; i++) {
                handlers.displayRoll(dice.d10Dice);
            }
            break;
        case "d12Dice":
            rollNum = parseInt(document.getElementById("d12Num").value)
            if (isNaN(rollNum)) {
                rollNum = 1;
            }
            for (let i = 0; i < rollNum; i++) {
                handlers.displayRoll(dice.d12Dice);
            }
            break;
        case "d20Dice":
            rollNum = parseInt(document.getElementById("d20Num").value)
            if (isNaN(rollNum)) {
                rollNum = 1;
            }
            for (let i = 0; i < rollNum; i++) {
                handlers.displayRoll(dice.d20Dice);
            }
            break;
        case "d100Dice":
            rollNum = parseInt(document.getElementById("d100Num").value)
            if (isNaN(rollNum)) {
                rollNum = 1;
            }
            for (let i = 0; i < rollNum; i++) {
                handlers.displayRoll(dice.d100Dice);
            }
            break;
        
    }
})

document.getElementById("clear-all-button").addEventListener('click', function(e) {
    handlers.clearAll();
})


