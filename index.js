const readline = require('readline-sync');

printWelcomeMessage();

let run;
do {
    performOneCalculation();
    run =  getStringFromPrompt('\nWould you like to do another calculation? (y/n)');   
} while (run == 'y');


function printWelcomeMessage() {
    console.log('Welcome to the calculator!');
    console.log('==========================');
}


function performOneCalculation() {
    const operator =  getStringFromPrompt('\nPlease enter the operator:');
    const numberOfNumbers = getNumberFromPrompt(
        '\nHow many numbers do you want to ' + operator + '?'
        );
    const numbers = getNumberArrayFromPrompt(numberOfNumbers);
    const answer = calculateAnswer(numbers, operator);
    console.log('\nThe answer is: ' + answer);
}


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

function getStringFromPrompt(prompt) {
    console.log(prompt);
    const response = readline.prompt();
    return response;
}

function getNumberArrayFromPrompt(arrayLength) {
    let number_arr = [];              //in sample solution starts with correct sized array, which is better?
    for (let i = 1; i <= arrayLength;i++) { 
        const number = getNumberFromPrompt(
            '\nPlease enter number ' + i + ':'
        );
        number_arr.push(number);
    } 
    return number_arr;
}
function calculateAnswer(number_arr, operator) {
    let answer = number_arr[0];
    switch (operator) {
        case '+':
            for (var i of number_arr.slice(1,)) {     //in sample solution use for loop not for .. of, which better?
               answer += i;
            }
            break;
        case '-':
            for (var i of number_arr.slice(1,)) {
                answer -= i;
            }        
            break;
        case '*':
            for (var i of number_arr.slice(1,)) {
                answer *= i;
            }
            break;
        case '/':
            for (var i of number_arr.slice(1,)) {
                answer /= i;
            }
            break;
    }
    return answer
}