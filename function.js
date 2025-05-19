// defning a function

// const Name = function(usaerName){
//     console.log(usaerName);
// }
// let myName = prompt("enter youir name")
// Name(myName)

//Anonimous function

// (function (){
//     console.log("function caled");
// })()


function simpleReturn(arg1 , arg2){
    console.log("function called");
    return `this function returns ${arg1} and ${arg2}`;
}
console.log(simpleReturn("hello" , "world"));


// existing array is passes to the function and the 0th index of array is changed to 101

function arrayChanger (myArr){
    myArr[0]=101;
}

const arr = [1,2,3,4,5];

console.log(arr);
arrayChanger(arr);
console.log(arr);

