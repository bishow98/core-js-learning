//day 5 scope . Global scope and Local scope 
// var c = 3232
let a = 443

if(true){
    let a = 3
    const b = 32
    // var c = 43

}

// console.log(a)
// console.log(b)
// console.log(c) //block scope ma defined gareko xa tara pani bahira access bhairaxa 
// console.log(a)//global scope bata aako a lai print garxa block scope bata aako lai yesle chindaina 

//nested scope 

function one(){
    const username= "bishow"

    function two(){
        const website = "facebook"
        // console.log(username);
    }

    // console.log(website)
    two()
}

one()


// interesting concept of two types of declaration of function

console.log(addone(7))
function addone(num){ //using direct function method we can call the function at the top as well like 
    return num + 1
}

// addone(5)



// addTwo(6)
const addTwo = function(num){//while holding the function in variable we cannot call the function at the top as it throw the error : referenceError ->cannot access addTwo before initialization
    return num + 2
}

addTwo(8)