//day 1 comparision 

//normal comparision can be done easily but 
// console.log(null>0); //output is false 
// console.log(null<0); //output is false
// console.log(null==0);//output is false 
// console.log(null<=0);//output is true .  >(greaterthan) <(lessthan) this operator convert the null into number that is why this is true 

//avoid this conversion for better code /clean code 
console.log(undefined==0);//false
console.log(undefined>=0);//false 

console.log("3"===3);//strict checking . data type ra value 2tai check garxa 
