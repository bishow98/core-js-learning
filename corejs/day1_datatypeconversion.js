/*let age = 23
let score = "40abc"

console.log(typeof(age))
console.log(typeof(score))


let valueInNumber= Number(score);
console.log(typeof(valueInNumber));
console.log(valueInNumber);
*/

// '33' => converted  to 33
// "22abc" => NaN (Not a Number) but type of ma chai number nai aayo
//true = 1 , false = 0

let isLoggedIn = "";
let boleanIsLoggedIn = Boolean(isLoggedIn);
// console.log(boleanIsLoggedIn);

//"" empty string means false and "content" this string is true

let numbers = 45;
let stringNumber = String(numbers);
// console.log(stringNumber);
// console.log(typeof stringNumber);

//herda ta number nai dekhinxa tara typeof use garera check garney ho vaney it is converted to string 

// ***********************Operations *****************

let str1 = "Hello ";
let str2 = " Bishow";
let str3 = str1 + str2;
// console.log(str3)


// console.log(1+ 2);
// console.log("1"+ 2);//yo case ma aagadi string xa vaney paxadi ko number lai pani string treat garxa 
// console.log(1+5+"4");//yo case ma aagadi Number xa vaney sum garera string lai add garxa 
// console.log("3"+5+5+"4");

// console.log(((3+(4 * 5)) %3))

// console.log(+true);//yaha chai boolean value lai convert gardixna ra 1 print hunxa 

//to understand the increment and decrement
let x = 3;
const y = x++;

console.log(`x:${x}, y:${y}`);
// Expected output: "x:4, y:3"

let a = 3;
const b = ++a;

console.log(`a:${a}, b:${b}`);
// Expected output: "a:4, b:4"



