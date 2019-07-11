// go over end of array methods once done functions
// also go over iterative methods for arrays
// also closures (functions)
// also create method for objects
// also defining methods for functions
// also read about ES9 modules

const readline = require('readline-sync');


var words = ['spray', 'limit', 'elite', 'exuberant', 'destruction', 'present'];

const result = words.filter(function(word) {return word.length > 6});

console.log(result);
// expected output: Array ["exuberant", "destruction", "present"]

