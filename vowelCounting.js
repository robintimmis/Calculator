const userInput = require('./userInput'); 

exports.performOneVowelCountingCalculation = function() {
    const upperCaseString = userInput.getStringFromPrompt('\nPlease enter a string:').toUpperCase();

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