'use strict';

const firstNum = +prompt('Argument A');
const secondNum = +prompt('Argument B');

sum(firstNum, secondNum);
sub(firstNum, secondNum);
mult(firstNum, secondNum);
div(firstNum, secondNum);

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
