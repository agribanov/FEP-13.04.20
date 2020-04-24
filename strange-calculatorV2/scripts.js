'use strict';

const operation = prompt('What do you want to do? + - / * pow cos sin');
const operands = getOperands(operation);

calculate(operation, operands);

function calculate(op, operands) {
    switch (op) {
        case '+':
            sum(operands[0], operands[1]);
            break;
        case '-':
            sub(operands[0], operands[1]);
            break;
        case '/':
            mult(operands[0], operands[1]);
            break;
        case '*':
            div(operands[0], operands[1]);
            break;
        case 'pow':
            pow(operands[0], operands[1]);
            break;
        case 'cos':
            cos(operands[0]);
            break;
        case 'sin':
            sin(operands[0]);
            break;
    }
}

function getOperands(op) {
    const nums = [];

    nums[0] = +prompt('Argument A');

    switch (op) {
        case '+':
        case '-':
        case '/':
        case '*':
        case 'pow':
            nums[1] = +prompt('Argument B');
            break;
    }

    return nums;
}

function sin(a) {
    const result = Math.sin(a);

    console.log(`sin(${a})= ${result}`);

    return result;
}

function cos(a) {
    const result = Math.cos(a);

    console.log(`cos(${a})= ${result}`);

    return result;
}

function pow(a, b) {
    const result = Math.pow(a, b);

    console.log(`${a} ^ ${b} = ${result}`);

    return result;
}

function sum(a, b) {
    const result = a + b;

    console.log(`${a} + ${b} = ${result}`);

    return result;
}

function sub(a, b) {
    const result = a - b;
    console.log(a + ' - ' + b + ' = ' + result);

    return result;
}
function mult(a, b) {
    const result = a * b;
    console.log(a + ' * ' + b + ' = ' + result);

    return result;
}

function div(a, b) {
    const result = a / b;
    console.log(a + ' / ' + b + ' = ' + result);

    return result;
}
