//day 2 
const name = "Bishow" // behid the scene it works as object 
const age = 21

// console.log(name+ age);//old fashioned 

// console.log(`Your name is ${name} and age is ${age}`);


//another method to declare the string .. and its some methods 
// const nameData = new String("Manish kumar");

// console.log(nameData.length)
// console.log(nameData.charAt(3))
// console.log(nameData.indexOf("i"))
// console.log(nameData.substring(0,5))// end value vanda 1 kam nai dinxa
// console.log(nameData.slice(-12,3))//slice le chai end vanda 1char below samma value provide garxa plus yo chai -dida reverse behaviour ma treat garxa 


const formdata = "     bishow   chauhan ";
console.log(formdata);
console.log(formdata.trim());

//regular expression use garera extra space lai pani hatauna sakinxa 
console.log(formdata.trim().replace(/\s+/g," "))


const url = "https://localhost:5000/about%20/search";
console.log(url.replace("%20","+"))

console.log(url.includes("local"))

console.log(url.split('/'))

const longString="hey this is bishow chauhan and this whole thing is in array"

const newLongString = longString.split(" ")
console.log((newLongString[3]))








