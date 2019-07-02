const readline = require('readline-sync');

console.log('Welcome to the calculator!');

console.log('\nMultiplication. \nPlease enter a number:');
const firstargument = readline.prompt();
const firstnumber = +firstargument

console.log('\nPlease enter another number:');
const secondargument = readline.prompt();
const secondnumber = +secondargument

const answer = firstnumber*secondnumber
console.log('\n' + firstargument + ' times ' + secondargument + ' equals ' + answer)

