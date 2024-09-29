//day 6 control flow is normal if else 


// const balance = 18000

// if(balance>10000) console.log("yeah its greater");


//ternary operator ( condition ?"true" : "false")
const value =5
const result = value>5? "greater": "smaller"
// console.log(result)

// console.log(5>2?"true":"false")


const userLoggedIn = true
const debitCard = true
if(userLoggedIn && debitCard){//this is also called short circuit method 
    // console.log("you can make a payment");
}


const loggedInFromGoogle = false
const loggedInFromEmail = true
if(loggedInFromEmail || loggedInFromGoogle){
    // console.log("login successful");
}


//switch case statement : break vayena vaney tyo vanda tala ko sabai execute garxa except default 

const day = 3
switch (day) {
    case 1:
        console.log("Sunday")
        break;
    case 2:
        console.log("Monday")
        break;
    case 3:
        console.log("Tuesday")
        break;
    case 4:
        console.log("Wednesday")
        break;


    default:
        console.log("default value")
        break;
}

//truthy and falsy value concept 
//suppose database bata userEmail aairaxa 
// const userEmail = "bishow@gmail.com" //true 
const userEmail = []


if(userEmail){
    console.log("Got user email")
}else{
    console.log("Don't have the user email")
}

// falsy value : false, "" , 0 , -0 , BigInt 0n , null, undefined, NaN 


// Truthy value : true, [], {}, "0", "false", " ", function(){} 

if(userEmail.length === 0){
    console.log("Empty userEmail");
}

const emptyObject = {}
if(Object.keys(emptyObject).length===0){
    console.log("emptyObject")
}


//Nullish Coalescing Operatior (??) : null undefined 
// jastai kunai case ma null value wa undedined aauxa vaney ?? operator le aauney aarko value lai set garxa it means secure value pathauna help garxa rather than null value 
let val1 ;
// val1 =  4 ?? 10
// val1 = null ?? 10

// val1 = undefined?? 15

// val1 = null ?? 10 ?? 20
val1 = null ?? true

console.log(val1)
