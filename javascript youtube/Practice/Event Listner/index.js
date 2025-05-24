
// function changeText(){
//     //console.log(event)
//     let fpara = document.getElementById('fpara');
//     fpara.textContent = "Hello Milan"
// }

//     let fpara = document.getElementById('fpara');
// fpara.addEventListener('click', changeText);


//this is use to remove the event listner, here parameters should be always same as the addEventListner
// creating function outside and passing the name in the eventListner is the best practice
//fpara.removeEventListener('click',changeText);

// let anchorElement = document.getElementById('fanchor');
// anchorElement.addEventListener('click', function(event){
//     event.preventDefault();
//     anchorElement.textContent = 'click done';

// });




let paras = document.querySelectorAll('p');

//METHOD 1: 
// NOT A GOOD PRACTICE HERE I AM CREATING 4 INSTANCES OF THE EVENT
// INSTED I SHOULD HAVE USED ONLY ONE INSTANCE

// for(let i = 0; i < paras.length; i++){
//     let para = paras[i];
//     para.addEventListener('click', function(){
//         alert("you have clicked on para: "+ (i+1));
//     });
// }

//METHOD 2: 


function alertPara(event){
    alert("you have clicked on para: " + event.target.textContent);

}

// for(let i = 0; i < paras.length; i++){
//     let para = paras[i];
//     para.addEventListener('click',alertPara);
// }

//METHOD 3: 
let mydiv = document.getElementById('wrapper');
document.addEventListener('click', alertPara);