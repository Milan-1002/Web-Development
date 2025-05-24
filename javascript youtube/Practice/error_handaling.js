// compile time error 
//console.log(1   syntax error --> compile time error



// Runtime error
//console.log(x);  // has't define x so it is an ex of runtime error

// Error handaling
// try{
//     console.log("try block start here"); 
//     console(x);
//     console.log("try block ends here")

// }

// catch(e){
//     //define what do you want to do with error
//     // retry logic
//     // falback mechanism
//     // custom error

//     console.log("I am inside catch block"); 
//     console.log("your error is here: ",  e);
// }


// finally block --> this will run if there is error or not

// try{

// }
// catch{

// }
// finally{

// }

// finally{
//     console.log("I am finally block and run whatever ");
// }


//LET'S CREATE CUSTOM ERROR

// try{
//     // reference error
//     console.log(x);

// }

// catch(err){
//     throw new Error("this is the custom error message ");
    
// }


let errorCode = 100;

if(errorCode == 100){
    throw new Error("Invalid JSON");
}

