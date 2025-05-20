// const getUl = document.querySelector(".lists")
// console.log(getUl);

// const newLi = document.createElement("li")
// newLi.innerText = "new list"

// const allLi = document.querySelectorAll("li")
// console.log(allLi);

// const newLi = document.createElement("li")
// newLi.innerText = "new list"

// allLi.forEach(function(e){
//         e.remove()
        
//     }
// )

// const newA = document.createElement("a")
// newA.innerText = "click me";
// newA.setAttribute("href" , "#")
// newLi.className = "new-list-created";
// getUl.append(newLi)
// newLi.append(newA);

// const ulChild = getUl.children; // Returns HTML collection
// ulChild[1].remove()

// Array.from(getUl.children).forEach(function(e){
//     console.log(e);
    
// })

// const arrUl =  Array.from(getUl.children)
// console.log(arrUl);

const getUl = document.querySelector(".lists") // return HTML collection ... has to be converted to array before using forEach

const clrBtn = document.querySelector(".clear-button")
clrBtn.addEventListener("click" , function(){     
    
// converting childrens of getUl to array so we can use foreach

const userValidate = confirm("are you sure?")
console.log(userValidate);


if (userValidate){
    document.querySelector("body").classList.add("green") // trigger the class on every click like add or removing the class
       Array.from(getUl.children).forEach(function(e){
    e.remove()
   })
}

else{
    document.querySelector("body").classList.toggle("red")
}

})