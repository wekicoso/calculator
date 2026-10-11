let firstNumber = 88;
let secondNumber = 43;
let displayText = "";
let operator = "";

const NUMBER = {
    one: 1,
    two: 2,
    three: 3,
    four: 4,
    five: 5,
    six: 6,
    seven: 7,
    eight: 8,
    nine: 9,
    zero: 0,
    dot: ".",
}

const DISPLAY = {
    maxNumbers: 15,
    zero: 0,
    empty: "",
}

const OPERATIONS = {
    divide: "/",
    times: "*",
    minus: "-",
    plus: "+",
}


// Make button clickable effect visible
function styleHtml() {
    const btn = document.querySelector("#buttons");
    btn.addEventListener('mousedown', (e) => {
        e.target.classList.add("click");
        e.target.addEventListener('mouseout', (e) => {
            e.target.classList.remove("click");
        });

    });
    btn.addEventListener('mouseup', (e) => {
        e.target.classList.remove("click");
    });
}

// Operation functions
function add(first, second) {
    return first + second;
}

function substract(first, second) {
    return first - second;
}

function divide(first, second) {
    return first / second;
}

function times(first, second) {
    return first * second;
}

// Handling of operations functions and returning result
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
            return times(first, second);
            break;
    }
}

const display = document.querySelector("#display");
display.textContent = DISPLAY.zero;

// Only for updating display
function addEventListnersToButtons() {
    // function displayIncludesOperation(textContent) {
    //     function returnOperation() {

    //     }


    //     if (textContent.includes(OPERATIONS.divide)
    //         || textContent.includes(OPERATIONS.minus)                               
    //         || textContent.includes(OPERATIONS.plus)                                
    //         || textContent.includes(OPERATIONS.times)){
    //             if (r == true) {
    //                 return 
    //             }
    //     } 
    // }

    function getOperator(text) {
        for (let item of text) {
            if (!Number.isInteger(+item)) {
                return item;
            }
        }
        return "";
    }

    const btnsNumber = document.querySelectorAll(".number");
    btnsNumber.forEach(item => {
        item.addEventListener('click', e => {
            // If is 0 on display, reset field for numbers to can be typed in
            if (display.textContent == DISPLAY.zero && e.target.id != "dot" && display.textContent != "0.") {
                display.textContent = DISPLAY.empty;
            }
            // If "dot" clicked, only one is possible
            if (e.target.id != "dot") {
                display.textContent += NUMBER[e.target.id];
            } else {
                if (!display.textContent.includes(".")) {
                    display.textContent += NUMBER[e.target.id];
                }
            }

        });
    });

    const btnsDelete = document.querySelectorAll(".delete");
    btnsDelete.forEach(item => {
        item.addEventListener('click', e => {
            if (e.target.id == "ac") {
                display.textContent = DISPLAY.zero;
            } else if (e.target.id == "ce") {
                display.textContent = DISPLAY.zero;
            } else if (e.target.id == "backspace") {
                if (display.textContent.length == 1) {
                    display.textContent = DISPLAY.zero;
                } else {
                    display.textContent = display.textContent.slice(0, display.textContent.length - 1);
                }
            }
        });
    });

    const btnsOperation = document.querySelectorAll(".operation");
    btnsOperation.forEach(item => {
        item.addEventListener('click', e => {
            if (display.textContent != DISPLAY.zero) {
                display.textContent += OPERATIONS[e.target.id];
            }

            if (displayIncludesOperation(display.textContent)) {

            }
        });
    });

    const btnEquals = document.querySelector("#equals");
    btnEquals.addEventListener('click', e => {
        displayText = display.textContent;
        operator = getOperator(displayText);

        if (operator != "") {
            [firstNumber, secondNumber] = displayText.split(operator);
            display.textContent = operate(firstNumber, secondNumber, operator);
        }
    });
}

styleHtml();
addEventListnersToButtons();