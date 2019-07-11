const readline = require('readline-sync');

const ARITHMETIC_MODE = '1';
const VOWEL_COUNTING_MODE = '2';
 
printWelcomeMessage();
while (true) {
  const calculationMode = getCalculationMode();
  if (calculationMode === ARITHMETIC_MODE) {
    performOneArithmeticCalculation();
  } else if (calculationMode === VOWEL_COUNTING_MODE) {
    performOneVowelCountingCalculation();
  } else if (calculationMode === 'q') {
      break;
  } 
} 

function performOneVowelCountingCalculation() {
    const upperCaseString = getStringFromPrompt('\nPlease enter a string:').toUpperCase();

    let obj = {A:0,
        E:0,
        I:0,
        O:0,
        U:0};
   
    counts = getLetterCounts(obj, upperCaseString);

    console.log('The vowel counts are:')
    for (let vowel in obj) {
        console.log(`  ${vowel}: ${answer[vowel]}`);
    }
}

function getLetterCounts(counts, string) {
    for (let char of string) {
        if (counts.hasOwnProperty(char)) {
            counts[char]++;
        }
    return counts;
    }
}


function getCalculationMode() {
    return getStringFromPrompt(`Which calculator mode do you want?
     ${ARITHMETIC_MODE}) Arithmetic
     ${VOWEL_COUNTING_MODE}) Vowel counting
    or type q to quit`);
}

function printWelcomeMessage() {
    console.log('Welcome to the calculator!');
    console.log('==========================');
}


function performOneArithmeticCalculation() {
    const operator =  getStringFromPrompt('\nPlease enter the operator:');
    const numberOfNumbers = getNumberFromPrompt(
        `How many numbers do you want to ${operator}?`
        );
    const numbers = getNumberArrayFromPrompt(numberOfNumbers);
    const answer = calculateAnswer(numbers, operator);
    console.log(`The answer is: ${answer}`);
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
            `Please enter number ${i}:`
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

