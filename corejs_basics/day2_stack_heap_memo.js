//day 2 
// Stack(Primitive) ma use hunxa . copy value dinxa, Heap (Non-Primitive) reference tarika le kaam garxa ra direct access dinxa 

let channelone = "code with harry"
let channelTwo = channelone
channelTwo = "chai aur code" //here only the copy of the data is given not the refrence in primtive data types declarations 

// console.log(channelone);
// console.log(channelTwo);


//this is non-primitive data type  because it is an object 
let userOne = {
    email:"bishow@gmail.com",
    name:"bishow"
}

let userTwo = userOne
userTwo.name = "bishow chauhan" //direct reference dina painxa ra original data ma change garna milxa 

console.log(userOne);
console.log(userTwo);