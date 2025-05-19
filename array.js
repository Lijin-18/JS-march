let fruits = ["apple","orange","banana","grape"]
let veggies = ["carrot" , "tomato"]
fruits[4]="kiwi"; // add elemt to that index
fruits.push("strawberry") // add elemt to last
fruits.unshift("blueberry") // add elemt to front
fruits.pop() // delete from last
fruits.shift() // delete from start
fruits.splice(0,2)
fruits.splice(0,0,"tangerine" , "peach")
let combo = fruits.concat(veggies); // concate the arrays
let fruitIndex = fruits.indexOf("banana")

console.log(fruits);
console.log(combo);
console.log(fruitIndex);



