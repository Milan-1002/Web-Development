// let employee = [
//     {id: 1, name: 'jen'},
//     {id: 2, name: 'steven'},
//     {id: 3, name: 'Andrew'},
//     {id: 4, name: 'Terry'},
// ];

// employee.sort((a,b) => {
//     const lowerCaseA = a.name.toLowerCase();
//     const lowerCaseB = b.name.toLowerCase();

//     if(lowerCaseA < lowerCaseB) return -1;
//     if(lowerCaseA > lowerCaseB) return 1;
//     return 0;
// });
// console.log(employee);


//***** EVERY AND SOME METHOD IN ARRAY */
// const numbers = [2,4, 7, 8, 10];
// const areAllEven = numbers.every(number => {
//     return number %2 === 0;
// });
// console.log(`areAllEvern: ${areAllEven}`);


// Expanded code of the above function

// some method

// const numbers = [1,3,4,5,6,9];
// const hasOneEvenNumber = numbers.some(number => number % 2 === 0);
// console.log(`hasOneEvenNumber: ${hasOneEvenNumber}`);