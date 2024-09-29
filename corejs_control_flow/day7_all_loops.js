//day 7 
//loops in javascript 
// const array = [1,2,3,4,5,6]
// for (let index = 0; index < array.length; index++) {
//     const element = array[index];
//     console.log(element);
// }

for (let i = 0; i < 10; i++) {
    // console.log(`Outer loop : ${i}`)
    
  for (let j = 0; j < 5; j++) {
    // console.log(`Innner Loops : ${j} and outerloop is  ${i}`)
    
  }
    
}

//break le chai control flow bata nai bahira aaidinxa 
// for (let i = 0; i <= 15; i++) {
//     if(i== 5){
//         console.log(`Detected: ${i}`)
//         break;
//     }
//     console.log(`value of i is ${i}`)
    
// }

//continue le eakpalta chai condition skip gardinxa ra baki raheko sabai kaam garxa 
// for (let i = 1; i <= 15; i++) {
//     if(i== 5){
//         console.log(`Detected: ${i}`)
//         continue;
//     }
//     console.log(`value of i is ${i}`)
    
// }


//while and do while 

// let i = 0
// while (i<=10) {
//     console.log(i);
//     i++;
    
// }

let value = 11
do {
    console.log(`The value is ${value}`);
    value++;
} while (value<=10);


