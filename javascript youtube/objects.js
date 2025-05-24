// const dog = {
//     name : 'max',
//     age : 4,
//     eyecolor : 'blue'
// }

// const keys = Object.keys(dog);
// console.log(keys);

// const values = Object.values(dog);
// console.log(values);

// const entries = Object.entries(dog);
// console.log(entries);


// HOW TO CREATE TWO DIFFERENT OBJECT OF SAME PROPERTY
// WHICH ARE NOT IN THE SAME MEMORY

// let a = {value: 10};
//let b = a; 
// in this case value is passed by reference so both value will be 20
// b.value = 20; 
// console.log(a);
// console.log(b);

//IN THIS CASE TWO SEPERATE OBJECTS WILL HAVE SAME PROPERTY BUT IN DIFFERENT MEMEORY LOCATION

// let a = {value: 10};
// let b = {};

// Object.assign(b,a);
// b.value = 30;
// console.log(a);
// console.log(b);

// this is also do the same as above we don't have to write assign here 
let a = {value: 10};
let b = {...a};

//Object.assign(b,a);
b.value = 30;
console.log(a);
console.log(b);