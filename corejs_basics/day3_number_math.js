//day 3
const score = 500;
// console.log(score)

const numberValue = new Number(443);
// console.log(numberValue)

// console.log(numberValue.toString())

// console.log(numberValue.toString().length)
// console.log((numberValue.toFixed(3)))

const longNumber = 453.49843;
// console.log(longNumber.toPrecision(3))//yo use garda chai decimal aagadiko herxa ra round up gardinxa . To use this toPrecision method be careful

const balanceNumber = 5000000;
// console.log(balanceNumber.toLocaleString("en-IN"))

//==============================Maths=====================================
//

// console.log(Math.E)
// console.log(Math.abs(-3))
// console.log(Math.round(5.4))
// console.log(Math.ceil(5.7))
// console.log(Math.floor(5.3))
// console.log(Math.min(5,6,4,3,1))
// console.log(Math.max(6,5,4,24))
// console.log(Math.sqrt(3))
// console.log(Math.pow(4,3))

// console.log(Math.round(Math.random()*10))

const randomNumber = Math.random() * 10 + 1;
console.log(Math.floor(randomNumber));

//to find the random number within the range use this formula
const min = 10;
const max = 15;

console.log(Math.floor(Math.random() * (max - min + 1) + min));
