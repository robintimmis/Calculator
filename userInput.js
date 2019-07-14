const readline = require('readline-sync');

exports.getNumberFromPrompt = getNumberFromPrompt;
exports.getStringFromPrompt = getStringFromPrompt;
exports.getNumberArrayFromPrompt = getNumberArrayFromPrompt;
exports.getOperator = getOperator;

function getNumberFromPrompt(prompt) {
    let number;
    while (true) {
        number = +getStringFromPrompt(prompt);
        if (isNaN(number)) {
            console.log('Sorry that is not a number, please try again.')
          } else {
                break;
        }
    }
    return number;
}

function getOperator() {
    let operator;
    while (true) {
        operator = getStringFromPrompt('Please enter the operator');
        if (operator == '+' | operator == '-' | operator == '*' | operator == '/') {
            break;
          } else {
            console.log('Sorry that is not a valid operator, please choose one of: + - * /')
        }
    }
    return operator;
}

function getStringFromPrompt(prompt) {
    console.log(prompt);
    const response = readline.prompt();
    return response;
}


function getNumberArrayFromPrompt(arrayLength) {
    let number_arr = [];              //in sample solution starts with correct sized array, which is better?
    for (let i = 1; i <= arrayLength;i++) { 
        const number = getNumberFromPrompt(
            `Please enter number ${i}:`
        );
        number_arr.push(number);
    } 
    return number_arr;
}

