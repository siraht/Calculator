// Setting JS DOM selectors
const body = document.querySelector('.body');
const main = document.querySelector('.main');
const calculator = document.querySelector('.calculator');
const numberInput = document.querySelector('.numberInput');
const operators = document.querySelector('.operators');
const resultsContainer = document.querySelector('.resultsContainer');
const results = document.querySelector('.results');

// Setting global variables
let currentDisplay = 0;
let currentTotal = 0;
let numberOne
let numberTwo
let numberThree
let numberFour
let numberFive
let numberSix
let numberSeven
let operator
results.textContent = currentDisplay


// Evaluation functions
const add = (num, num2) => {
    return num + num2;
}
const subtract = (num, num2) => {
    return num - num2;
}
const multiply = (num, num2) => {
    return num * num2;
}
const divide = (num, num2) => {
    return num / num2;
}
const operate = (func, num, num2) => {
    return func(num, num2)
}
const clearAll = () => {
    currentDisplay = 0;
    currentTotal = 0;
    numberOne = 0;
    numberTwo = 0;
}

// Display results functions
let updateResults = () => { results.textContent = currentDisplay }

// Create HTMl calculator
// Create operator buttons
const operatorsArray = ['+', '-', '*', '/', '=', 'C'];
for (let i = 0; i < 6; i++) {
    newDiv = document.createElement('div');
    newDiv.id = `${operatorsArray[i]}`
    newDiv.classList.add('operatorButton');
    newDiv.classList.add('button');
    newDiv.textContent = `${operatorsArray[i]}`
    operators.appendChild(newDiv);
}

// Create number buttons
for (let index = 9; index >= 0; index--) {
    newDiv = document.createElement('div');
    newDiv.id = `${index}`
    newDiv.classList.add('numberButton');
    newDiv.classList.add('button');
    newDiv.textContent = `${index}`
    /* newDiv.addEventListener('click', updateDisplay(`${index}`)); */
    numberInput.appendChild(newDiv);
}

// Add eventListeners to number buttons to update display
document.querySelectorAll('.numberButton').forEach(item => {
    item.addEventListener('click', event => {

        if (!numberOne) {
            if (currentDisplay == 0) {
                currentDisplay = item.id
                updateResults();
            } else {
                currentDisplay += item.id;
                updateResults();
            }

        } else if (numberOne) {
            if (numberOne && currentDisplay == 0) {
                currentDisplay = item.id
                updateResults();
            } else {
                currentDisplay += item.id
                updateResults();
            }
        }
    })
})

// Add listeners to operator buttons
document.querySelectorAll('.operatorButton').forEach(item => {
    item.addEventListener('click', event => {
        if (item.id == "C") {
            clearAll();
            results.textContent = currentDisplay;
        } else {
            if (!numberOne) {
                numberOne = Number(currentDisplay)
                currentDisplay = 0;
            } else {
                numberOne = numberOne;
            }

        }
    })
})
