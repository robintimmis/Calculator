const readline = require('readline-sync');

console.log('Welcome to the calculator!');
console.log('==========================');

console.log('\nPlease enter the operator:');
const operator =  readline.prompt();

console.log('\nPlease enter the first number:');
const firstargument = readline.prompt();
const firstnumber = +firstargument;

console.log('\nPlease enter the second number:');
const secondargument = readline.prompt();
const secondnumber = +secondargument;

if (operator == '+') {
    const answer = firstnumber + secondnumber;
    console.log('\nThe answer is: ' + answer);
} else if (operator == '-') {
    const answer = firstnumber - secondnumber;
    console.log('\nThe answer is: ' + answer);
} else if (operator == '*') {
    const answer = firstnumber * secondnumber;
    console.log('\nThe answer is: ' + answer);
} else if (operator == '/') {
    const answer = firstnumber/secondnumber;
    console.log('\nThe answer is: ' + answer);
}




