//day 5 function complete understanding 

// function hello (){   //
//     console.log("Hello");
// }

// hello();


// function addNum(num1,num2){ //function keyword use garda return keyword hunxa ra return keyword paxi kei code xa vaney teslai execute gardaina 
//     console.log(num1+ num2);

// }

// addNum(5,8)


// function addNum(num1,num2){//return statement gare paxi variable ma store garna sakinxa later call garda 

//     return num1 + num2;
// }
// const result = addNum(5,1)
// console.log(result)


// function loginUserMessage(username = "ram"){
//     if(!username){
//         console.log("enter username ");
//         return
//     }
//     return `${username} just logged in`
// }

// const username = loginUserMessage()
// console.log(username)


//rest operator in javascript is nothing but a ... operator where it accumulates the input and convert it into the array 
function addToCart(...num1){
return num1
}

console.log(addToCart(400,300,200))


const user= {
    username:"bishow",
    age:21
}

function handleObject (anyObject){
    console.log(`Username is ${anyObject.username} and age is ${anyObject.age}`)

}
handleObject(user)



const arrayValue = [400,450,200,100];

function handleArray (getArray){
    return getArray[0]
}
console.log(handleArray(arrayValue))