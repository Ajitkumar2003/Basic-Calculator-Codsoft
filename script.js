// JavaScript code for calculator functionality
let display = document.getElementById('display');
let currentInput = '';
let operator = null;
let firstOperand = null;

// Append characters to the display
function appendCharacter(character) {
    if (display.textContent === '0' && character !== '.') {
        display.textContent = character;
    } else {
        display.textContent += character;
    }
    currentInput = display.textContent;
}

// Clear the display
function clearDisplay() {
    display.textContent = '0';
    currentInput = '';
    operator = null;
    firstOperand = null;
}

// Delete the last character from the display
function deleteLast() {
    display.textContent = display.textContent.slice(0, -1) || '0';
    currentInput = display.textContent;
}

// Perform the calculation based on the operator
function calculate() {
    if (operator && firstOperand !== null && currentInput !== '') {
        let result;
        const secondOperand = parseFloat(currentInput);
        switch (operator) {
            case '+':
                result = firstOperand + secondOperand;
                break;
            case '-':
                result = firstOperand - secondOperand;
                break;
            case '*':
                result = firstOperand * secondOperand;
                break;
            case '/':
                result = firstOperand / secondOperand;
                break;
        }
        display.textContent = result;
        firstOperand = result;
        operator = null;
        currentInput = '';
    }
}

// Set the operator and prepare for the next input
function appendCharacter(character) {
    if (['+', '-', '*', '/'].includes(character)) {
        if (currentInput !== '') {
            firstOperand = parseFloat(currentInput);
            operator = character;
            currentInput = '';
            display.textContent += ' ' + character + ' ';
        }
    } else {
        if (display.textContent === '0' || display.textContent.includes('=')) {
            display.textContent = character;
        } else {
            display.textContent += character;
        }
        currentInput = display.textContent.split(' ').pop();
    }
}
