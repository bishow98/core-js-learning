//day 4 Objects : to learn the javascript : object and events should be mastered 

//singleton  : constructor bata banxa vaney singleton banxa 
//Object.create : yesari constructor method bata banxa ra singleton banxa 

//oblect literals 

const mySymbol = Symbol("key1")
const User = {
        name:"ramesh",
        "full name":"ramesh lekhak",
        [mySymbol]: "mykey",
        age: 23,
        location: "khanar",
        email:"bishow@gmail.com",
        isLoggedIn: true,
        lastLoginDay:["sunday","monday"]
}

// console.log( User.name)
// console.log(User["name"])
// console.log(User.lastLoginDay)
// console.log(User["lastLoginDay"])
// console.log(User["full name"])

// console.log((User[mySymbol]))
// console.log(typeof mySymbol)

//overwrite object 
User.email = "ramesh@gmail.com"


//object ko value change na hos vanera freeze garna milxa 
// Object.freeze(User)
User.email= "hello@gmail.com"//there is no change in email now 

// console.log(User)

User.greeting = function(){
    console.log("hello user")
}

User.greetingTwo = function(){
    console.log(`hello js user, ${this.name}`)
}

console.log(User.greeting())
console.log(User.greetingTwo())

//Note : object lai access garna lai . matra haina [""] yo method lai pani dhyan ma rakhney 