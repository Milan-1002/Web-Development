// const numbers = [1,2,3,4,5,6,7,8];
// const evenNumbers = numbers.filter(number => number % 2=== 0);
// console.log(evenNumbers);


// FILTER METHOD WITH ARRAYS OF OBJECT

// const employees = [
//     {id: 1, name: 'Alice', role: 'desiner'},
//     {id: 2, name: 'Ram', role: 'developer'},
//     {id: 3, name: 'daniel', role: 'manager'},
//     {id: 4, name: 'charlie', role: 'developer'},
// ]

// const developers = employees.filter(employee => employee.role === 'developer');
// console.log(developers);


const arr = [10,20,30];
const ansArr = arr.map((num) => {
    return num * num;
});
console.log(ansArr)