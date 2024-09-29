// day 8 : for in , for of ,foreach

//note: object lai loop chalauna lai we use for in loop 
//note array lai loop chalauna lai we use for of loop 


//for of 
const arr = [2,3,5,6,7,8,9]

for (const num of arr) {
    // console.log(num)
    
}

for (const val of "hello world") {
    if(val==" "){
        continue;
    }
    // console.log(val)
    
}

//Map is an object which holds the key value pair in unique key set garxa . ra jun order ma use xa tei order ma aauxa 
const map = new Map()
map.set("name","bishow")
map.set("age",25)
map.set("no","0888")
// console.log(map)

for (const [key, value] of map) {
    // console.log(key, ":" ,value)
}

const myObject = {
    name:"Bishow",
    age: 43,
    address: "Kathmandu"
}


//for of loop is not iterable in Object data type 
// for (const key of myObject) {
//     console.log(key)
// }


for (const key in myObject) {
//   console.log(`${key} value is ${myObject[key]}`);
}

const programming = ["js","ruby","pthon","cpp","java"]

for( const key in programming){
    // console.log(programming[key])
}

for (const key in map) { //Map is not iterable in for in loop
    // console.log(key)
}

//foreach:
//foreach is used to iterate over array and object

//foreach is a higher order function call back linxa matlab function ko name hudaina 
const coding = ["js","ruby","python","java","cpp"]

// coding.forEach( function(item){
//     console.log(item)
// })

coding.forEach( (item)=>{
    // console.log(item)
})


// function printMe(item){
//     console.log(item)

// }

// coding.forEach(printMe)

// coding.forEach( (item,index,arr)=>{
//     console.log(item);
//     console.log(index);
//     console.log(arr);
// })


const myCoding = [
    {
        languageName:"javascript",
        languageFile:"js",
    },
    {
        languageName:"ruby",
        languageFile:"rb"
    },
    {
        languageName:"python",
        languageFile:"py"
    }
]

myCoding.forEach( (item)=>{
    console.log(item.languageName)
})



