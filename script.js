let first_number, operator, second_number;

const calculator = document.querySelector(".calculator");
const display = document.querySelector(".display");
display.textContent = "";
const numbers = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"];
const operators = ["+", "-", "*", "/"];
let one_operation = false;

const buttons = calculator.querySelectorAll(".button");
buttons.forEach((button) => {
    button.addEventListener("click", (event) => {
        clicked_button = event.target.textContent;
        decideAction(clicked_button);
    });
});

function decideAction(clickedButton) {
    display.textContent += clickedButton;

    if (operators.includes(clickedButton)) {
        if (!one_operation) {
            first_number = display.textContent.slice(
                0,
                display.textContent.length - 1
            );
            operator = clickedButton;
            one_operation = true;

            clearDisplay();
        } else {
            second_number = display.textContent;
            clearDisplay();
            first_number = operate(first_number, operator, second_number);
            display.textContent = first_number;
        }
        console.log(one_operation);
    }

    if (clickedButton === "=") {
        second_number = display.textContent;
        clearDisplay();
        display.textContent = operate(first_number, operator, second_number);
        one_operation = true;
    }

    if (clickedButton === "C") clear();

    // if (operators.includes(clickedButton)) {
    //     first_number = display.textContent.slice(
    //         0,
    //         display.textContent.length - 1
    //     );
    //     operator = clickedButton;

    //     clearDisplay();
    // }

    // if (clickedButton === "=") {
    //     second_number = display.textContent;
    //     clearDisplay();
    //     display.textContent = operate(first_number, operator, second_number);
    // }
}

function clearDisplay() {
    display.textContent = "";
}

function clear() {
    display.textContent = "";
    first_number = null;
    second_number = null;
    operator = null;
    one_operation = false;
}

function operate(num1, operator, num2) {
    let result = 0;

    switch (operator) {
        case "+":
            result = add(parseInt(num1), parseInt(num2));
            break;
        case "-":
            result = subtract(parseInt(num1), parseInt(num2));
            break;
        case "*":
            result = multiply(parseInt(num1), parseInt(num2));
            break;
        case "/":
            result = divide(parseInt(num1), parseInt(num2));
            break;
    }

    return result;
}

function add(num1, num2) {
    return num1 + num2;
}

function subtract(num1, num2) {
    return num1 - num2;
}

function multiply(num1, num2) {
    return num1 * num2;
}

function divide(num1, num2) {
    return num1 / num2;
}
