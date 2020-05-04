const action = getAction();
const userNumbers = getUserNumbers();

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

function getUserNumbers() {
    let numbers = [];

    do {
        userInput = prompt('Put your numbers');
    } while (!userInput);

    // userInput - 10,'',5 4
    /// 1
    numbers = userInput
        .split(' ') //['10','','3a' '4']
        .filter((item) => item && !isNaN(item))
        .map((item) => Number(item)); // [10, 4]

    /// 2

    // numbers = userInput.split(' ');
    // let arr = [];
    // for (let i = 0; i < numbers.length; i++) {
    //     numbers[i] = Number(numbers[i]);
    // }

    // for (let i = 0; i < numbers.length; i++) {
    //     if (!isNaN(numbers[i])) {
    //         arr.push(numbers[i]);
    //     }
    // }

    // for(item of numbers){
    //     if(!isNaN(item)){
    //         arr.push(item);
    //     }
    // }

    return numbers;
}

function calculate(operation, operands) {
    console.log(operands);
    switch (operation) {
        case '/':
            div(operands);
            break;
        case '+':
            sum(operands);
            break;
        case '-':
            sub(operands);
            break;
        case '*':
            mult(operands);
            break;
    }
}

function div(operands) {
    let result = operands[0];
    let expression = operands[0];

    for (let i = 1; i < operands.length; i++) {
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

    console.log(expression + ' = ' + result);
}

function sub(operands) {
    let result = operands[0];
    let expression = operands[0];

    console.log('sub', operands);
    for (let i = 1; i < operands.length; i++) {
        result -= operands[i];
        expression += ' - ' + operands[i];
    }

    console.log(expression + ' = ' + result);
}

function mult(operands) {
    let result = operands[0];
    let expression = operands[0];

    for (let i = 1; i < operands.length; i++) {
        result *= operands[i];
        expression += ' * ' + operands[i];
    }

    console.log(expression + ' = ' + result);
}
