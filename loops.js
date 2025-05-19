const myArr = ["apple" , "banana" , "orange" , "kiwi" , "strawberry"];
const myNum = [1,2,3,4,5]
const multipliedNum = []

// for loop

// for(i=0; i<myArr.length; i++ ){
//     console.log(myArr[i]);   
// }

// foreach

myArr.forEach(element => {
    console.log(element);
    
});

myNum.forEach(multiplyFun)

function multiplyFun(number){
    multipliedNum.push(number*20)
}

console.log(multipliedNum);

