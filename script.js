let first_number = "",
    operator = "",
    second_number = "";

const calculator = document.querySelector(".calculator");
const display = document.querySelector(".display");
display.textContent = "";
const numbers = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"];
const operators = ["+", "-", "*", "/"];
let has_two_or_more_operation = false;

const buttons = calculator.querySelectorAll(".button");
buttons.forEach((button) => {
    button.addEventListener("click", (event) => {
        clicked_button = event.target.textContent;
        decideAction(clicked_button);
    });
});

function decideAction(clickedButton) {
    if (numbers.includes(clickedButton)) {
        if (has_two_or_more_operation) clearDisplay();
        if (display.textContent.length < 10)
            display.textContent += clickedButton;
    }

    if (operators.includes(clickedButton)) {
        if (!has_two_or_more_operation) {
            first_number = display.textContent;
            has_two_or_more_operation = true;
            clearDisplay();
        } else {
            second_number = display.textContent;
            display.textContent = checkForLength(
                operate(first_number, operator, second_number)
            );
            first_number = display.textContent;
            second_number = "";
        }

        operator = clickedButton;
    }

    if (clickedButton === "=") {
        second_number = display.textContent;

        if (first_number !== "" && second_number !== "")
            display.textContent = checkForLength(
                operate(first_number, operator, second_number)
            );
        first_number = display.textContent;
        second_number = "";
        has_two_or_more_operation = false;
    }

    if (clickedButton === "C") clear();
}

function checkForLength(content) {
    if (content.length > 10) {
        return content.slice(0, 10);
    } else {
        return content;
    }
}

function clearDisplay() {
    display.textContent = "";
}

function clear() {
    display.textContent = "";
    first_number = "";
    second_number = "";
    operator = "";
    has_two_or_more_operation = false;
}

function operate(num1, operator, num2) {
    let result;

    switch (operator) {
        case "+":
            result = add(num1, num2);
            break;
        case "-":
            result = subtract(num1, num2);
            break;
        case "*":
            result = multiply(num1, num2);
            break;
        case "/":
            if (parseInt(num2) === 0) {
                result = "DON'T";
            } else {
                result = divide(num1, num2);
            }
            break;
    }

    return result.toString();
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
