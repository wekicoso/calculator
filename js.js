let firstNumber = 88;
let lastNumber = 43;
let operator = "/";
let display = "";

function add(first, second) {
    return first + second;
}

function substract(first, second) {
    return first - second;
}

function divide(first, second) {
    return first / second;
}

function multiply(first, second) {
    return first * second;
}

function operate(first, second, operator) {
    switch (operator) {
        case "+":
            return add(first, second);
            break;
        case "-":
            return substract(first, second);
            break;
        case "/":
            return divide(first, second);
            break;
        case "*":
            return multiply(first, second);
            break;
    }
}

console.log(operate(firstNumber, lastNumber, operator));