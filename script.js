let first_number, operator, second_number;

const calculator = document.querySelector(".calculator");
const display = document.querySelector(".display");
display.textContent = "";

const buttons = calculator.querySelectorAll(".button");
buttons.forEach((button) => {
    button.addEventListener("click", (event) => {
        clicked_number = event.target.textContent;
        display.textContent = clicked_number;
    });
});

function operate(num1, operator, num2) {
    const result = 0;

    switch (operator) {
        case "+":
            result = add(num1, num2);
            break;
        case "-":
            result = substract(num1, num2);
            break;
        case "*":
            result = multiply(num1, num2);
            break;
        case "/":
            result = divide(num1, num2);
            break;
    }

    return result;
}

function add(num1, num2) {
    return num1 + num2;
}

function substract(num1, num2) {
    return num1 - num2;
}

function multiply(num1, num2) {
    return num1 * num2;
}

function divide(num1, num2) {
    return num1 / num2;
}
