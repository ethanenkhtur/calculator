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
    // console.log("ITERATION STARTS");

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
            display.textContent = operate(
                first_number,
                operator,
                second_number
            );
            first_number = display.textContent;
            second_number = "";
        }

        operator = clickedButton;
    }

    if (clickedButton === "=") {
        // if (!has_two_or_more_operation)
        second_number = display.textContent;
        // clearDisplay();

        display.textContent = operate(first_number, operator, second_number);
        first_number = display.textContent;
        second_number = "";
        has_two_or_more_operation = false;
    }

    if (clickedButton === "C") clear();

    // ------------------------------------------------------

    // if (numbers.includes(clickedButton)) {
    //     if (operator === "") {
    // if (!has_two_or_more_operation) {
    //     first_number += clickedButton;
    //     console.log(
    //         first_number + " => FIRST NUMBER  WITH ONEOPERATION = false"
    //     );
    // } else {
    //     first_number = operate(first_number, operator, second_number);
    //     console.log(
    //         first_number + " => FIRST NUMBRER WITH ONEOPERATION = true"
    //     );
    // }
    //         if (!has_two_or_more_operation) first_number += clickedButton;
    //     } else {
    //         second_number += clickedButton;
    //         console.log(second_number + " => SECOND NUMBER");
    //         has_two_or_more_operation = true;
    //     }

    // if (has_two_or_more_operation) {
    //     first_number = operate(
    //         display.textContent,
    //         operator,
    //         second_number
    //     );
    // }
}

// if (operators.includes(clickedButton)) {
//     operator = clickedButton;
//     console.log(operator + " => THIS IS CURRENT OPERATOR");
//     console.log(
//         "Currently number 1: " +
//             first_number +
//             "\nNumber 2: " +
//             second_number
//     );
//     if (has_two_or_more_operation) {
//         first_number = operate(first_number, operator, second_number);
//     }

//     clearDisplay();
// }

// if (clickedButton === "=") {
//     display.textContent = operate(first_number, operator, second_number);
//     console.log(
//         "RESULT: " + operate(first_number, operator, second_number)
//     );
//     has_two_or_more_operation = false;
// }

// if (clickedButton === "C") clear();

// console.log("ITERATION ENDS");

//---------------------------------------------------------

// if (operators.includes(clickedButton)) {
//     if (!has_two_or_more_operation) {
//         first_number = display.textContent;
//         operator = clickedButton;
//         has_two_or_more_operation = true;

//         clearDisplay();
//     } else {
//         second_number = display.textContent;
//         clearDisplay();
//         first_number = operate(first_number, operator, second_number);
//         display.textContent = first_number;
//     }
//     console.log(has_two_or_more_operation);
// }

// if (clickedButton === "=") {
//     second_number = display.textContent;
//     clearDisplay();
//     display.textContent = operate(first_number, operator, second_number);
//     has_two_or_more_operation = true;
// }

// if (clickedButton === "C") clear();

// ------------------------------------------

// if (operators.includes(clickedButton)) {
//     first_number = display.textContent;
//     operator = clickedButton;

//     clearDisplay();
// }

// if (clickedButton === "=") {
//     second_number = display.textContent;
//     clearDisplay();
//     display.textContent = operate(first_number, operator, second_number);
// }
// }

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
