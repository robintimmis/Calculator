const readline = require('readline-sync');

console.log('Welcome to the calculator!');

console.log('Multiplication. Please enter a number:');
const number1 = readline.prompt();

console.log('Please enter another number:');
const number2 = readline.prompt();


console.log((+number1)*(+number2))

