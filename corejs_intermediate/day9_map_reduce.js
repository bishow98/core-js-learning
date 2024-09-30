// day 9 map and reduce
const myNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

//map le chai condition basis ma kaam gardaina yedi condition check garney ho vaney it defines true or false rather than its value but rather it iterates all the values and return all value inside the array

// const newNums = myNumbers.map((num)=>{return num+5})

//chainings
const newNums = myNumbers
                         .map((num) => num * 10)
                         .map((num) => num + 5)
                         .filter((num)=> num>=40)

// console.log(newNums);




//reduce method: especially takes two argument accumulator and currentValue . accumulator value lai chai initailly declare gardiney 0 vanera ra accumulator + currentValue add gardiney . 

//this method is used in shopping card functionality !!

// reduce( (accumulator, currentValue)=>(accumulator+currentValue),0)//yo 0 chai initially accumulator ko value lai assign garxa tespaxi aafai kaam garxa yesle accumulator lai add gardai janxa currentValue sanga ra final result dinxa 


const myNums = [1,2,3]
// const myTotal = myNums.reduce( function (accumulator, currentValue){
//     console.log(`accumulator = ${accumulator} currentValue = ${currentValue}`)
//     return accumulator + currentValue

// },0)

const myTotal = myNums.reduce( (accumulator,currentValue)=>accumulator + currentValue, 0)

// console.log(myTotal)

const shoppingCart = [
    {
        itemName: "js course",
        price: 100
    },
    {
        itemName: "python course",
        price: 599
    },
    {
        itemName: "ML course",
        price: 999
    },
    {
        itemName: "Java course",
        price: 699
    },
    {
        itemName: "mobile dev course",
        price: 1599
    }

]

const priceToPay = shoppingCart.reduce((acc,item)=>(acc + item.price),0)
console.log(priceToPay)

