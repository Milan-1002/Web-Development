// let firstPromise = new Promise((resolve, reject)=> {
//     console.log('Milan');
//     reject(new Error("internal server error"));
// });


// let firstPromise = new Promise((resolve, reject) => {
// setTimeout(function sayMyName(){
//    console.log("My name is Milan suanr");
// },10000);

// });

// let promise1 = new Promise((resolve, reject) => {
//     let success = false;
//     if(success){
//         resolve("promise fulfilled");
//     }
//     else{
//         reject("promise rejected");
//     }
// });


// promise1.then((message) => {
//     console.log("Then messege is: " + message);
// }).catch((error) =>{
//     console.log("Error: "+ error);
// })

let promise1 = new Promise ((resolve, reject) =>{
    setTimeout(resolve, 1000, "First");
})
let promise2= new Promise ((resolve, reject) =>{
    setTimeout(resolve, 2000, "second");
})
let promise3 = new Promise ((resolve, reject) =>{
    setTimeout(resolve, 3000, "third");
})

Promise.all([promise1, promise2, promise3])
.then((value) =>{
    console.log(value);
})