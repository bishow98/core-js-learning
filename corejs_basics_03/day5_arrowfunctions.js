//day 5 : arrow function and this keyword 

const user = {
    name: 'John',
    price: 199,
    welcomeMessage: function(){
        console.log(`${this.name} welcome to website`) //this le current context lai refer garxa 
        console.log(this)
    }
}

// user.welcomeMessage()
// user.name = "bishow"
// user.welcomeMessage()

// console.log(this) //node vitra current context ma {} empty object hunxa 

// function one(){
//     let user = "bishow"
//     console.log(this) //this le object vitra chai kaam garyo yo point samma this.user yo function vitra run garda undefined aayo 
// }
// one()

// function one(){
//     let user = "bishow"
//     console.log(this.user)
// }
// one() // undefined output aauxa 

//arrow function and what does it return 

const value = ()=>{
    let user = "bishow"
    console.log(this)
}
// value()

const addTwo = (num1 ,num2)=>{ //arrow function lai { } curly bracket vitra lekhinxa vaney teslai return keyword chainxa 
    return num1 + num2;
}
console.log( addTwo(5,3))


const addThree = (num1, num2,num3) =>(num1+num2+num3) //in arrow function  small bracket (      ) doesn't need to be returned 


console.log(addThree(6,7,8))


const objectreturn = ()=> ({name:"bishow"})
console.log(objectreturn()) //objectreturn() garda implicit return gardiney vayo yesle chai



