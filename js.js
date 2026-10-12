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
}
const DISPLAY = {
    error: "Err",
    zero: 0,
}
const OPERATIONS = {
    divide: "/",
    times: "*",
    minus: "-",
    plus: "+",
}

let firstNumber = 0;
let secondNumber = 0;
let operator = "";
let result = 0;

const display = document.querySelector("#display");
display.textContent = DISPLAY.zero;


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
    return Number(first) + Number(second);
}

function substract(first, second) {
    return Number(first) - Number(second);
}

function divide(first, second) {
    const result = Number(first) / Number(second);
    if (result == Infinity) {
        return "Err";
    }
    return result;
}

function times(first, second) {
    return Number(first) * Number(second);
}

// Handling of operations functions and returning result
function operate(first, second, operator) {
    switch (operator) {
        case "+":
            return add(first, second);
        case "-":
            return substract(first, second);
        case "/":
            return divide(first, second);
        case "*":
            return times(first, second);
    }
}

function addFunctionalitiesToButtons () {
    const btnsDelete = document.querySelectorAll(".delete");
    const btnsNumber = document.querySelectorAll(".number");
    const btnsOperation = document.querySelectorAll(".operation");
    const btnDot = document.querySelector("#dot");
    const btnEquals = document.querySelector("#equals");

    function deleteButtons() {
        btnsDelete.forEach(item => {
            item.addEventListener('click', e => {

            });
        });
    }

    function numberButtons() {
        btnsNumber.forEach(item => {
            item.addEventListener('click', e => {

            });
        });
    }

    function operationButtons() {
        btnsOperation.forEach(item => {
            item.addEventListener('click', e => {

            });
        });
    }

    function dotButton() {
        btnDot.addEventListener('click', e => {

        });
    }

    function equalsButton() {
        btnEquals.addEventListener('click', e => {

        });
    }
}





// Only for updating display
// function addEventListnersToButtons() {

//     function getOperator(text) {
//         for (let item of text) {
//             if (item == ".") {
//                 continue;
//             }
//             if (!Number.isInteger(+item)) {
//                 return item;

//             }
//         }
//         return "";
//     }

//     const btnsNumber = document.querySelectorAll(".number");
//     btnsNumber.forEach(item => {
//         item.addEventListener('click', e => {
//             if (display.textContent.length < 15) {
//                 // If is 0 on display, reset field for numbers to can be typed in
//                 if (display.textContent == DISPLAY.zero && e.target.id != "dot" && display.textContent != "0." || display.textContent == "Err") {
//                     display.textContent = DISPLAY.empty;
//                 }

//                 // If "dot" clicked, let only one dot is possible on the display

//                 if (e.target.id != "dot") {
//                     display.textContent += NUMBER[e.target.id];
//                 } else {
//                     if (!display.textContent.includes(".")) {
//                         display.textContent += NUMBER[e.target.id];
//                     }
//                 }
//             }
//         });
//     });

//     const btnsDelete = document.querySelectorAll(".delete");
//     btnsDelete.forEach(item => {
//         item.addEventListener('click', e => {
//             if (e.target.id == "ac") {
//                 display.textContent = DISPLAY.zero;
//                 firstNumber = 0;
//                 secondNumber = 0;
//             } else if (e.target.id == "ce") {
//                 display.textContent = DISPLAY.zero;
//             } else if (e.target.id == "backspace") {
//                 if (display.textContent.length == 1 || display.textContent == "Err") {
//                     display.textContent = DISPLAY.zero;
//                 } else {
//                     display.textContent = display.textContent.slice(0, display.textContent.length - 1);
//                 }
//             }
//         });
//     });

//     const btnsOperation = document.querySelectorAll(".operation");
//     btnsOperation.forEach(item => {
//         item.addEventListener('click', e => {
//             if (display.textContent.length < 13) {
//                 // Checking if possible to print operator on display
//                 if (display.textContent != "Err") {
//                     if (getOperator(display.textContent) == Boolean("")) {
//                         display.textContent += OPERATIONS[e.target.id];
//                     }
//                 }
//             }
//         });
//     });

//     const btnEquals = document.querySelector("#equals");
//     btnEquals.addEventListener('click', e => {
//         operator = getOperator(display.textContent);

//         if (Boolean(operator)) {
//             [firstNumber, secondNumber] = display.textContent.split(operator);
//             display.textContent = operate(firstNumber, secondNumber, operator);
//             display.textContent = parseFloat(display.textContent);
//             display.textContent = display.textContent.substring(0, 12);
//             display.textContent = String(Math.floor(+display.textContent * 1000) / 1000);
//         }
//     });
// }

styleHtml();