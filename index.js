const readline = require('readline-sync');

console.log('Welcome to the calculator!');
console.log('==========================');

console.log('\nPlease enter the operator:');
const operator =  readline.prompt();

console.log('\nHow many numbers do you want to ' + operator + '?')
const iterations = +readline.prompt();

let number_arr = [];
for (let i = 1; i <= iterations;i++) { 
    console.log('\nPlease enter number ' + i + ':');
    const argument = readline.prompt();
    const number = +argument;
    number_arr.push(number);
} 

let answer = number_arr[0];
switch (operator) {
    case '+':
        for (var i of number_arr.slice(1,)) {
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

console.log('\nThe answer is: ' + answer);
