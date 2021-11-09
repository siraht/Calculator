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
let currentOperator
let func2
let operationNumber = 0;
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
    operator = '';
    operationNumber = 0;
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

// Display results functions
let updateResults = () => { results.textContent = currentDisplay }
let replaceResults = (item) => { currentDisplay = item.id };
let addToResults = (item) => { currentDisplay += item.id };

// Operator functions


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
    newDiv.textContent = `${index}`;
    numberInput.appendChild(newDiv);
}

// Add eventListeners to number buttons to update display

let addNumberListener = (item) => {
    item.addEventListener('click', event => {
        if (currentTotal == currentDisplay) {
            replaceResults(item);
            updateResults();
        } else {
            addToResults(item);
            updateResults();
        }

    })
}

document.querySelectorAll('.numberButton').forEach(addNumberListener)

// Add listeners to operator buttons

let addOperatorListener = (item) => {
    item.addEventListener('click', event => {
        let operator = translate(item.id);
        if (item.id == 'C') {
            clearAll();
            updateResults();
        } else if (item.id == '=') {
            currentTotal = operate(translate(currentOperator), Number(currentTotal), Number(currentDisplay));
            results.textContent = currentTotal;
            operationNumber = 0;
        } else {
            operationNumber += 1;
            if (currentTotal) {
                if (operationNumber >= 1) {

                } else {

                }
                currentOperator = item.id;
                currentTotal = operator(Number(currentTotal), Number(currentDisplay));
                results.textContent = currentTotal;
            } else {
                currentTotal = Number(currentDisplay);
                currentOperator = item.id;
            }

        }
    })
}

document.querySelectorAll('.operatorButton').forEach(addOperatorListener);

// Add eventListeners to number buttons to update display
/* document.querySelectorAll('.numberButton').forEach(item => {
    item.addEventListener('click', event => {

        if (!numberOne) {
            if (currentDisplay == 0) {
                replaceResults(item);
                updateResults();
            } else {
                addToResults(item);
                updateResults();
            }

        } else if (numberOne) {
            if (numberOne && currentDisplay == 0) {
                replaceResults(item);
                updateResults();
            } else {
                addToResults(item);
                updateResults();
            }
        }
    })
})
 */
// Add listeners to operator buttons
/* document.querySelectorAll('.operatorButton').forEach(item => {
    item.addEventListener('click', event => {

        if (item.id == "C") {
            clearAll();
            updateResults();
        } else if (item.id == "=") {

            if (currentDisplay == 0) {

            } else if (currentDisplay && numberOne) {
                let operatorFunction = translate(currentOperator);
                currentDisplay = operate(operatorFunction, numberOne, Number(currentDisplay));
                currentOperator = '';
                updateResults();
            } else {
            }
        }

        else {
            if (!numberOne) {
                numberOne = Number(currentDisplay)
                currentDisplay = 0;
                currentOperator = item.id;
            } else {
                currentDisplay = numberOne;
                currentOperator = item.id;
                numberOne = 0;
            }

        }
    })
}) */

/* document.querySelectorAll('.numberButton').forEach(item => {
    item.addEventListener('click', event => {

        if (!numberOne) {
            if (currentDisplay == 0) {
                replaceResults(item);
                updateResults();
            } else {
                addToResults(item);
                updateResults();
            }

        } else if (numberOne) {
            if (numberOne && currentDisplay == 0) {
                replaceResults(item);
                updateResults();
            } else {
                addToResults(item);
                updateResults();
            }
        }
    })
}) */