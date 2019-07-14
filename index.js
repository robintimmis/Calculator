const userInput = require('./userInput'); 
const vowelCounting = require('./vowelCounting'); 
const arithmetic = require('./arithmetic'); 

const ARITHMETIC_MODE = '1';
const VOWEL_COUNTING_MODE = '2';


printWelcomeMessage();

while (true) {
  const calculationMode = getCalculationMode();
  if (calculationMode === ARITHMETIC_MODE) {
    arithmetic.performOneArithmeticCalculation();
  } else if (calculationMode === VOWEL_COUNTING_MODE) {
    vowelCounting.performOneVowelCountingCalculation();
  } else if (calculationMode === 'q') {
      break;
  } else {
    console.log('That is not a valid option, please try again.')
  }
} 

function printWelcomeMessage() {
    console.log('Welcome to the calculator!');
    console.log('==========================');
}

function getCalculationMode() {
    return userInput.getStringFromPrompt(`Which calculator mode do you want?
     ${ARITHMETIC_MODE}) Arithmetic
     ${VOWEL_COUNTING_MODE  }) Vowel counting
    or type q to quit`);
}
