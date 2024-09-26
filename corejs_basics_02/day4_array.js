//day 4 array 

let oneArray = [1,2,3,"ram","hari"];
// console.log(oneArray)
// console.log(oneArray.length) //length of array

// oneArray.push("ramlal");
// console.log(oneArray)// push method direclty change the value in the original array 
// oneArray.pop();//deletes the value of last array 

// console.log(oneArray) // pop method also change the value in the original array

// oneArray.unshift(88)
// oneArray.shift()

// console.log(oneArray.includes("ram"))//returns true or false boolean value

//join converts the array into the string 
// const newArray = oneArray.join();
// console.log(newArray)
// console.log(oneArray)

//now learn the concept of slice and splice 
const newArray = [1,2,3,4,5,6,7]

console.log("A ", newArray);

const myn1 = newArray.slice(1,3)//second argument vanda 1 step less value dinxa but it doesn't affect the original array 

console.log(myn1);

console.log("B ",newArray);


const myn2 = newArray.splice(1,3)// it prints 1 to 3 array in new array and this spilice also changes the original array 

console.log(myn2);

console.log("C ",newArray);


//