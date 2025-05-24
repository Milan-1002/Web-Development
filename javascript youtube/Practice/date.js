// let curr = new Date();
// console.log(curr);

let src = {
    age: 12,
    wt : 68,
    ht : 180,
};

// console.log(obj);
// obj.color = 'white';  //objects are dynamic in nature we can change at the runtime

// console.log(obj)

//WAYS TO CLONE THE OBJECTS

// 1. spread operator --> using {...src} operator
// 2. assign  -->  dest = Object.assign({}, src)
// 3. iterationg method --> using loops


// 1. spread operator --> using {...src} operator

// console.log(src);
// src.age = 90;  // here i am changing the age of src if the object has clone/copy properly
//                 // then the only src's age should be changed not the dest age
// let dest = {...src};
// console.log(dest);


// 2. assign  -->  dest = Object.assign({}, src)
let src2 = {
    value: 101,
    name: 'Milan sunar',
}
 let dest = Object.assign({}, src, src2);
 console.log(dest);


 //3. iteration method







