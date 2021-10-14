// Setting JS DOM selectors
const body = document.querySelector('.body');
const main = document.querySelector('.main');
const calculator = document.querySelector('.calculator');
const numberInput = document.querySelector('.numberInput');
const operators = document.querySelector('.operators');
const resultsContainer = document.querySelector('.resultsContainer');
const results = document.querySelector('.results');

// Setting global variables
let currentDisplay = '0'
let currentTotal = 0
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

// Buttons appear in results display
let updateDisplay = (id) => {
    currentDisplay = currentDisplay + id;
}

// Create HTMl calculator
// Create number buttons
const operatorsArray = ['+', '-', '*', '/', '=', 'C'];
for (let i = 0; i < 6; i++) {
    newDiv = document.createElement('div');
    newDiv.id = `${operatorsArray[i]}`
    newDiv.classList.add('operatorButton');
    newDiv.classList.add('button');
    newDiv.textContent = `${operatorsArray[i]}`
    operators.appendChild(newDiv);
}

// Create operator buttons
for (let index = 9; index >= 0; index--) {
    newDiv = document.createElement('div');
    newDiv.id = `${index}`
    newDiv.classList.add('numberButton');
    newDiv.classList.add('button');
    newDiv.textContent = `${index}`
    /* newDiv.addEventListener('click', updateDisplay(`${index}`)); */
    numberInput.appendChild(newDiv);
}

document.querySelectorAll('.button').forEach(item => {
    item.addEventListener('click', event => {
        if (currentDisplay == 0) {
            currentDisplay = item.id
            results.textContent = currentDisplay;
        } else {
            currentDisplay += item.id;
            results.textContent = currentDisplay;
        }
    })
})
