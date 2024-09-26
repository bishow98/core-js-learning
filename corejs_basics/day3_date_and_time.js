//day 3 
let todayDate = new Date();
// console.log(todayDate);

// console.log(todayDate.toLocaleDateString())
// console.log(todayDate.toString())
// console.log(todayDate.toLocaleString())
// console.log(todayDate.toDateString())

// console.log(todayDate.getMilliseconds())


const myCreatedDate = new Date(2024,1,16)//oen method of date declaration 
// console.log(myCreatedDate.toDateString());

const myCreated = new Date(2024, 0, 22, 5,4)
// console.log(myCreated.toLocaleString())

const myDateString = new Date("2024-09-28")
// console.log(myDateString.toDateString())
// console.log(myDateString.toLocaleString())


//Date.now() gives the current time in milisecond and type is number  
const myTimeStamp = Date.now()
// console.log(myTimeStamp)

//to conver into the second we must divide the current date in milisecond by the 1000 and then floor the value of the output 
// console.log(Math.floor(Date.now()/1000))
// console.log(myCreated.getTime())


let newDate = new Date()
console.log(newDate.getMonth());
console.log(newDate.getDay());
console.log(newDate.getDate())


console.log( newDate.toLocaleDateString('default',{
    weekday: 'long'
    
}))



