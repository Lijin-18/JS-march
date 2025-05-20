const division = document.querySelector("#container");
const mouseEnter = document.querySelector(".mouse-enter")
const mouseClick = document.querySelector(".mouse-click")
// division.addEventListener("click", simpleClick) // simple click event 
// division.addEventListener("click", simpleClick) 

mouseEnter.addEventListener("mouseenter", MouseEnter)
mouseClick.addEventListener("click" , MouseClick)
// function simpleClick(event){
//     console.log("click event happened");
    
// }

function MouseEnter(){
    console.log("mouse entered");  
    
}
function MouseClick(){
    console.log("mouse clicked");
    
}