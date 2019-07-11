const userInput = require('./userInput'); 

exports.performOneArithmeticCalculation = function() {
    const operator =  userInput.getStringFromPrompt('\nPlease enter the operator:');
    const numberOfNumbers = userInput.getNumberFromPrompt(
        `How many numbers do you want to ${operator}?`
        );
    const numbers = userInput.getNumberArrayFromPrompt(numberOfNumbers);
    const answer = calculateAnswer(numbers, operator);
    console.log(`The answer is: ${answer}`);
}


function calculateAnswer(number_arr, operator) {
    let answer = number_arr[0];
    switch (operator) {
        case '+':
            for (var i of number_arr.slice(1,)) {answer += i};   //in sample solution use for loop not for .. of, which better?
            break;
        case '-':
            for (var i of number_arr.slice(1,)) {answer -= i};       
            break;
        case '*':
            for (var i of number_arr.slice(1,)) {answer *= i};
            break;
        case '/':
            for (var i of number_arr.slice(1,)) {answer /= i};
            break;
    }
    return answer
}
