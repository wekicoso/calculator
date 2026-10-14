let firstNumber = NaN;
let secondNumber = NaN;
let operator = "";
let result = 0;

const BUTTONS = {
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
    ac: "ac",
    ce: "ce",
    backspace: "backspace",
    divide: "/",
    times: "*",
    minus: "-",
    plus: "+",
    equals: "=",
}

const display = document.querySelector("#display");
display.style.userSelect = "none";
display.textContent = '0';

const btnAllButtons = document.querySelectorAll("button");
btnAllButtons.forEach(item => {
    item.style.userSelect = "none";
    item.addEventListener('click', e => {
        updateDisplay(BUTTONS[e.target.id]);
    });
});



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
function addOperation(first, second) {
    return Number(first) + Number(second);
}

function substractOperation(first, second) {
    return Number(first) - Number(second);
}

function divideOperation(first, second) {
    return Number(first) / Number(second);

}

function timesOperation(first, second) {
    return Number(first) * Number(second);
}

// Handling of operations functions and returning result
function operate(first, second, operator) {
    switch (operator) {
        case "+":
            return addOperation(first, second);
        case "-":
            return substractOperation(first, second);
        case "/":
            return divideOperation(first, second);
        case "*":
            return timesOperation(first, second);
    }
}


function updateDisplay(input) {
    const length = display.textContent.length;
    const maxLength = 15;

    switch (input) {
        case 0:
            if (!zeroPossible()) return;
            appendDisplay(input);
            break;
        case 1:
        case 2:
        case 3:
        case 4:
        case 5:
        case 6:
        case 7:
        case 8:
        case 9:
            if (!oneToNinePossible()) return;
            if (display.textContent == "0") {
                display.textContent = "";
            }
            appendDisplay(input);
            break;
        case ".":
            if (!dotPossible()) return;
            appendDisplay();
            break;
        case "ac":
            resetDisplay();
            firstNumber = NaN;
            secondNumber = NaN;
            operator = "";
            result = 0;
            break;
        case "ce":
            resetDisplay();
            firstNumber = 0;
            secondNumber = 0;
            break;
        case "backspace":
            handleBackspace();
            break;
        case "/":
        case "*":
        case "-":
        case "+":
            if (!operationPossible()) return;
            appendDisplay();
            break;
        case "=":
            handleEquals();
            break;
    }



    function resetDisplay() {
        display.textContent = "0";
    }

    function appendDisplay() {
        function isPossibleToAppend() {
            if (length >= maxLength) {
                return false;
            }
            return true;
        }
        if (isPossibleToAppend()) {
            display.textContent += input;
        }

    }

    function hasOperator(text = display.textContent) {
        if (text.includes("/")
            || text.includes("*")
            || text.includes("+")
            || text.includes("-")) {
            return true;
        }
        return false;
    }

    function getOperator(text = display.textContent) {
        for (let char of text) {
            if (char != "." && !Number.isInteger(+char)) {
                return char;
            }
        }
    }

    function hasDot(text) {
        if (text.includes(".")) {
            return true;
        }
        return false;
    }

    function zeroPossible() {
        if (display.textContent == "0") {
            return false;
        }

        if (display.textContent == "Err") {
            display.textContent = "";
            return true;
        }
        return true;
    }

    function oneToNinePossible() {
        if (display.textContent == "Err") {
            display.textContent = "";
            return true;
        }

        if (hasOperator(display.textContent.substring(1, length)) && display.textContent.charAt(length - 1) == "0" && display.textContent.charAt(length - 2) != ".") {
            display.textContent = display.textContent.substring(0, length - 1);
            return true;
        }

        return true;
    }

    function dotPossible() {
        if (display.textContent.charAt(length - 1) == ".") {
            return false;
        }

        if (display.textContent == "Err") {
            return false;
        }

        if (!hasOperator(display.textContent.substring(1, length)) && !hasDot(display.textContent)) {
            return true;
        }



        if (hasOperator() && display.textContent.charAt(0) != "-") {
            let [str1, str2] = display.textContent.split(getOperator());
            if (!hasDot(str2) && str2.length > 0) {
                return true;
            } else {
                return false;
            }
        }

        if (display.textContent.charAt(0) == "-" && hasOperator(display.textContent.substring(1, length))) {
            let [str1, str2] = display.textContent.substring(1, length).split(getOperator(display.textContent.substring(1, length)));
            if (!hasDot(str2) && str2.length > 0) {
                return true;
            } else {
                return false;
            }
        }

        if (hasDot() && display.textContent.charAt(0) == "-" && hasOperator(display.textContent.substring(1, length))) {
            return false;
        }
        return true;
    }

    function handleBackspace() {
        if (display.textContent == "Err") {
            display.textContent = "0";
            return;
        }

        if (length == 1) {
            display.textContent = "0";
        } else {
            display.textContent = display.textContent.substring(0, length - 1);
        }

    }

    function operationPossible() {
        if (display.textContent == "Err") {
            return false;
        }

        if (getOperator(display.textContent) == "-" && hasOperator(display.textContent.substring(1, length - 1))) {
            return false;
        }

        if (input == "-" && display.textContent == "0") {
            display.textContent = "";
            return true;
        }

        if (hasOperator(display.textContent.charAt(length - 1)) || display.textContent.charAt(length - 1) == ".") {
            display.textContent = display.textContent.substring(0, length - 1);
            if (!hasOperator(display.textContent.substring(1, length))) {
                return true;
            }

        }


        if (hasOperator(display.textContent.substring(1, length))) {
            return false;
        }

        if (!hasOperator() && display.textContent.charAt(display.textContent.length - 1) == ".") {
            display.textContent = display.textContent.substring(0, length);
            return true;
        }

        return true;
    }



    function handleEquals() {
        let content = display.textContent;
        let result = 0;

        function getResult() {
            content = display.textContent;

            if (hasOperator(content.substring(1, content.length - 1))) {
                operator = getOperator(content.substring(1, content.length));
            }

            if (isNaN(firstNumber)) {
            
      
                let firstAndSecontString = "";
                let firstNumberString = "";
                if (display.textContent.charAt(0) == "-") {
                    firstAndSecontString = display.textContent.substring(1, length).split(operator);
                    firstNumberString = "-";
                } else {
                    firstAndSecontString = display.textContent.split(operator);
                }

                firstNumberString += firstAndSecontString[0];
                firstNumber = Number(firstNumberString);
                secondNumber = Number(firstAndSecontString[1]);


                result = operate(firstNumber, secondNumber, operator);


                if (result == "Err" || isNaN(result) || result === Infinity || result == "-Infinity") {
                    display.textContent = "Err";
                    firstNumber = NaN;
                    secondNumber = NaN;
                    operator = "";
                    result = 0;
                } else {
                    result = Math.round(result * 10000) / 10000;
                    if (result > 999) {
                        result = Math.round(result * 100) / 100;
                    }
                    display.textContent = result;
                }

                return;

            } else if (!isNaN(firstNumber) && !hasOperator(display.textContent.substring(1, length))) {
               
                firstNumber = +display.textContent;
                result = operate(firstNumber, secondNumber, operator);

                if (result == "Err" || isNaN(result) || result === Infinity || result == "-Infinity") {
                    display.textContent = "Err";
                    firstNumber = NaN;
                    secondNumber = NaN;
                    operator = "";
                    result = 0;
                } else {
                    result = Math.round(result * 10000) / 10000;
                    if (result > 999) {
                        result = Math.round(result * 100) / 100;
                    }
                    display.textContent = result;
                }

                return;
            }

            let firstAndSecontString = "";
            let firstNumberString = "";
            if (display.textContent.charAt(0) == "-") {
                firstAndSecontString = display.textContent.substring(1, length).split(operator);
                firstNumberString = "-";
            } else {
                firstAndSecontString = display.textContent.split(operator);
            }

            firstNumberString += firstAndSecontString[0];
            firstNumber = Number(firstNumberString);
            secondNumber = Number(firstAndSecontString[1]);
            result = operate(firstNumber, secondNumber, operator);

            if (result == "Err" || isNaN(result) || result === Infinity || result == "-Infinity") {
                display.textContent = "Err";
                firstNumber = NaN;
                secondNumber = NaN;
                operator = "";
                result = 0;
            } else {
                result = Math.round(result * 10000) / 10000;
                if (result > 999) {
                    result = Math.round(result * 100) / 100;
                }
                display.textContent = result;
            }
        }

        function hasOperatorAtTheEnd() {
            if (hasOperator(content[length - 1])) {
                return true;
            }
            return false;
        }

        function removeLastChar() {
            display.textContent = content.substring(0, content.length - 1);
            content = display.textContent;
        }


        if (hasDot(content[content.length - 1]) || hasOperatorAtTheEnd()) {
            removeLastChar();
        }

        function isValidContent() {
            if (!hasOperator() && isNaN(firstNumber)) {
                return false;
            }

            if (!hasOperator() && !isNaN(firstNumber)) {
                return true;
            }

            if (!hasOperator()) {
                return false;
            }

            return true;
        }

        if (isValidContent()) {
            getResult();
        }
    }

}


styleHtml();