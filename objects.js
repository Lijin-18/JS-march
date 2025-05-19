const information = {
    name : "lijin",
    age : 21,
    graduate : true,
    skill : ["HTML" , "css"],
    canTalk : function(){
        console.log("yes");
    }
}

let info ;
info = information.name;
info = information.skill[1]
info = information.canTalk()
console.log(info);
