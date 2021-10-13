// Setting JS DOM selectors
const body = document.querySelector('.body');
const main = document.querySelector('.main');
const calculator = document.querySelector('.calculator');
const numberInput = document.querySelector('.numberInput');
const operators = document.querySelector('.operators');
const results = document.querySelector('.results');

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

// Create HTMl calculator
// Create number buttons
const operatorsArray = ['+', '-', '*', '/', '='];
for (let i = 0; i < 5; i++) {
    newDiv = document.createElement('div');
    newDiv.classList.add('operatorButton');
    newDiv.textContent = `${operatorsArray[i]}`
    operators.appendChild(newDiv);
}

// Create operator buttons
for (let index = 9; index >= 0; index--) {
    newDiv = document.createElement('div');
    newDiv.classList.add('numberButton');
    newDiv.textContent = `${index}`
    numberInput.appendChild(newDiv);
}


results.textContent = '183747';