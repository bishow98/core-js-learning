//day 4 array Details methods and depth concepts 

const movie = ["saw","the dark knight","tenent"]
const songs = ["K garu","sano prakash", "samarpan"]

// movie.push(songs) //yesle chai array vitra aarko index banayera [] same eauta index ma push gardinxa 

// console.log(movie)


// const list = movie.concat(songs); //combine and return a new array of the strings 
// console.log(list)

//spread operator ... this is another method to join the two array with easy process 

// const list_final = [...movie, ...songs] //each value in array is spread and combined in this case 
// console.log(list_final);


//suppose yesto type ko array aayo vaney chai flat vanney method le multiple array inside array lai single without intended array ma convert gardinxa 
const newArray = [1,2,3,4,[5,6,7],8,9,[10,11,[12,13]]]
// console.log(newArray.flat(3))


console.log(Array.isArray("hello"))//gives true or false value 

console.log(Array.from("hello ram"))//convert the given string into an array of object

console.log(Array.from({name:"Bishow"}))// this also convert into array and this method can convert the object also by specifying on the basis of key and value but at this condition it is empty 

console.log(Array.from([1,2,3],(x)=>x + x))

const val1 = 43
const val2 = 23
const val3 = 32

console.log(Array.of(val1,val2,val3))// returns a new array form set of elements 


