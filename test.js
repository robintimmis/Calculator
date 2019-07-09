// go over end of array methods once done functions
// also go over iterative methods for arrays
// also closures (functions)

const readline = require('readline-sync');


console.log(getNumberFromPrompt('hi there'));


function getNumberFromPrompt(prompt) {
    let number;
    while (true) {
        console.log(prompt);
        const response = readline.prompt();
        number = +response;
        if (isNaN(number)) {
            console.log('Sorry that is not a number, please try again.')
          } else {
            break;
        }
    }
    return number;
}


