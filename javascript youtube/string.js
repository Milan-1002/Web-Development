let sentence = 'A new sentence';

const doesIncludesNew = sentence.includes('new');
console.log(doesIncludesNew);

const startWith = sentence.startsWith('A');
console.log(startWith);

const endsWith = sentence.endsWith('new');
console.log(endsWith);

const updatedSentence = sentence.replace('new', 'short');
console.log(updatedSentence);


//method to remove spaces from begining and end
trimmedSentence = sentence.trim();
console.log(trimmedSentence);

//this will split the sentence whenever it encounters the space in this case and put them in an array
const wordsInSentence = sentence.split(' ');
console.log(wordsInSentence);


let firstName = 'Milan';
let lastName = 'sunar';

let fullName = firstName + ' ' + lastName;
console.log(fullName);

// I can achieve exactly same results wiht the ``
let fullName1 = `${firstName} ${lastName}`;
console.log(fullName1);
