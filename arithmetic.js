const userInput = require('./userInput'); 

exports.performOneArithmeticCalculation = function() {
    const operator =  userInput.getOperator();
    const numberOfNumbers = userInput.getNumberFromPrompt(
        `How many numbers do you want to ${operator}?`
    );
    const numbers = userInput.getNumberArrayFromPrompt(numberOfNumbers);
    const answer = calculateAnswer(numbers, operator);
    console.log(`The answer is: ${answer}`);
}


function calculateAnswer(number_arr, operator) {
    switch (operator) {
        case '+':
            return number_arr.reduce((acc, curr) => acc + curr);         
        case '-':
            return number_arr.reduce((acc, curr) => acc - curr);         
        case '*':
            return number_arr.reduce((acc, curr) => acc * curr);         
        case '/':
            return number_arr.filter(x => x !== 0).reduce((acc, curr) => acc / curr);    
        default:;
    }
}
