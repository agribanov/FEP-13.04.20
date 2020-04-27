const action = getAction();
const operandsCount = getOperandsCount();
const userNumbers = getUserNumbers(operandsCount);

calculate(action, userNumbers);

function getAction() {
    let userInput;

    do {
        userInput = prompt('What to do? + - / *');
    } while (checkAction(userInput));

    return userInput;
}

function checkAction(actionInput) {
    return (
        actionInput != '+' &&
        actionInput != '-' &&
        actionInput != '/' &&
        actionInput != '*'
    );
}

function getOperandsCount() {
    let userInput;

    do {
        userInput = +prompt('How many?');
    } while (checkOperandsCount(userInput));

    return userInput;
}

function checkOperandsCount(operandsCountInput) {
    return (
        operandsCountInput === '' ||
        isNaN(userNumberInput) ||
        operandsCountInput < 2
    );
}

function getUserNumbers(count) {
    let numbers = [];

    for (let i = 0; i < count; i++) {
        numbers.push(getUserNumber());
    }

    return numbers;
}

function getUserNumber() {
    let userInput;

    do {
        userInput = prompt('Enter number');
    } while (checkUserNumber(userInput));

    return +userInput;
}

function checkUserNumber(userNumberInput) {
    return userNumberInput === '' || isNaN(userNumberInput);
}

function calculate(operation, operands) {
    switch (operation) {
        case '/':
            div(operands);
            break;
        case '+':
            sum(operands);
            break;
        // case '-':
        //     sub(operands);
        //     break;
        // case '*':
        //     mult(operands);
        //     break;
    }
}

function div(operands) {
    let result = operands[0];
    let expression = operands[0];

    for (let i = 1; i < operands.length; i) {
        result /= operands[i];
        expression += ' / ' + operands[i];
    }

    console.log(expression + ' = ' + result);
}

function sum(operands) {
    let result = operands[0];

    for (let i = 1; i < operands.length; i++) {
        result += operands[i];
    }

    console.log('результат: ' + result);
}

// 1) Что ты хочешь сделать +

// 2) Сколько чисел +

// 3) каждое число +
// 4) Выводим результат +
