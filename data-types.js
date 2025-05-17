// primitive data types 
// primitive data types hold only one value

let name = "lijin"; // string
let age = 21; // number
let on = true; // boolean
let unde = undefined; // undefined
let nul = null; // null value

console.log(name);
console.log(age);
console.log(on);
console.log(unde);
console.log(nul);

// typeof returens the type of the variable 

console.log(typeof(name));
console.log(typeof(age));
console.log(typeof(on));
console.log(typeof(unde));
console.log(typeof(nul));

//reference type variables
//holds multiple values which is array and objects

const myArr = ["lijin",25,true,null,undefined];
console.log(myArr);

// objects 

const myObj = {
    name : "lijin david",
    age : 25,
    on : true,
    unde : undefined,
    nul : null,
    myFun : function(){
        console.log(this.name); // function inside a object is called as method
        
    }
}

console.log(myObj.myFun());









