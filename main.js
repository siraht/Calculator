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
let currentOperator
let operationNumber = 0;
let lastButtonClicked

// Display update functionality
let updateResults = () => { results.textContent = currentDisplay }
let replaceResults = (item) => { currentDisplay = item.id };
let addToResults = (item) => { currentDisplay += item.id };

updateResults();


// Evaluation functionality
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
    operator = '';
    operationNumber = 0;
    lastButtonClicked = '';
    currentOperator = '';
    updateResults();
    lastClickWasOperator();
}

const equals = () => {
    currentTotal = operate(translate(currentOperator), Number(currentTotal), Number(currentDisplay));
    results.textContent = currentTotal;
    operationNumber = 0;
    lastClickWasOperator();
}

const translate = (string) => {
    switch (string) {
        case '+':
            return add;
        case '-':
            return subtract;
        case '*':
            return multiply;
        case '/':
            return divide;
    }
}

// Miscellaneous functionality
lastClickWasOperator = () => {
    lastButtonClicked = 'operator';
}

lastClickWasNumber = () => {
    lastButtonClicked = 'number';
}

setCurrentOperator = (obj) => {
    currentOperator = obj;
}


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
    newDiv.textContent = `${index}`;
    numberInput.appendChild(newDiv);
}

// Number button functionality
let addNumberListener = (item) => {
    item.addEventListener('click', event => {
        if (lastButtonClicked == 'number') {
            addToResults(item);
            updateResults();
        }
        else {
            replaceResults(item);
            updateResults();
        }
        lastClickWasNumber();
    })
}

document.querySelectorAll('.numberButton').forEach(addNumberListener)

// Operator button functionality
let addOperatorListener = (item) => {
    item.addEventListener('click', event => {
        if (item.id == 'C') {
            clearAll();
        } else if (item.id == '=') {
            equals();
        } else {
            if (lastButtonClicked == 'operator') {
                setCurrentOperator(item.id);
            } else {
                if (currentTotal) {
                    let operator = translate(currentOperator);
                    currentTotal = operator(Number(currentTotal), Number(currentDisplay));
                    setCurrentOperator(item.id);
                    results.textContent = currentTotal;
                } else {
                    currentTotal = Number(currentDisplay);
                    setCurrentOperator(item.id);
                }
                lastClickWasOperator();
            }
        }
    })
}

document.querySelectorAll('.operatorButton').forEach(addOperatorListener);