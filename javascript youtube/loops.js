let numbers = [1,2,3,4,5];

// let person = {
//     name : 'Milan',
//     age : 21,
//     height : 24
// }

// for(let i = 0; i < numbers.length; i++){
//     console.log(numbers[i]);
// }
// let j = 0;
// while( j < numbers.length){
//     console.log(numbers[j++]);
// }

// for-in loop for iterating over objects
// for(const key in person){    // key here is the variabel could be anything
//     console.log(person[key]);
// }

// for-of loop is use to iterate over an array

for(const elements of numbers){
    console.log(numbers[elements-1]);
}