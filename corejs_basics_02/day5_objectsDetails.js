//Day 5 Object details 

// const tinderUser = new Object() //this is singleton object 

const users = {}

users.id = "123abcded"
users.name = "Bishow "
users.email = "bishow@gmail.com"

// console.log(users)

const appUsers = {
    email:"ram@gmail.com",
    name:{
        username:{
            firstname:"Bishow",
            lastname:"Chauhan"
        }
    }
}

// console.log(appUsers.name.username.firstname)


const ob1 = {1:"a",2:"b", 3:"c"}
const ob2 = {4:"d",5:"e", 6:"f"}

//Object.assign(target, sorce)// target ma copy hunxa 
// const ob4 = Object.assign({},ob1,ob2)//object assign is a method that copy all the enumerable own properties and takes first argument as {} empty object to ensure that the type is objectand that empty{} ma chai aako xa vanera bujhinxa  and other parameter can have the other object to merge 
// console.log(ob4)

const ob3 = {...ob1, ...ob2}

// console.log(ob3)

const userObject = [
    {id:1, name:"Bishow"},
    {id:2, name:"hari"},
    {id:3, name:"ram"},
]

// console.log(userObject[0].name)


console.log(users)
console.log(Object.keys(users))
console.log(Object.values(users))
console.log(Object.entries(users)) //returns array of key value pairs
console.log(users.hasOwnProperty("email"))

console.log(users.valueOf())
console.log(users.toString())

//more exploration of Object in javascript 
