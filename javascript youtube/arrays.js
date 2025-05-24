// const numbers = [1,2,3,4,5];
// console.log(numbers);

// numbers.push(5);
// console.log(numbers);

// numbers.push(9);
// console.log(numbers);

// //add element to the front of the list
// numbers.unshift(11);
// console.log(numbers);

// //to add the element in the middle
// numbers.splice(2,0,25,26); //first parameter is from where i want ot start in this case index 2
// console.log(numbers);      // second parameter which element i want to delete
//                             // third parameter or more elements to add

// ARRAYS OF OBJECTS*****************

const employee = [
    {
        id : 1,
        name: 'jim'
    },
    {
        id: 2,
        name : "micheal"
    },
    {
        id: 3,
        name: 'pam'
    },
];

// for the array of objects we have to use find insted of includes method
const employee1 = employee.find(function(e){
    return e.name === 'pam';
});
console.log(employee1);