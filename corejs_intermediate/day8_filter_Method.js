//day 8 : filter ,map and reduce method in details for the backend and frontend 

// const coding = ["js","ruby","java","python","cpp"]

//normally foreach le return gardaina values haru kei pani 
// const values = coding.forEach( (item)=>{
// console.log(item)
// })

// console.log(values)


const myNum = [1,2,3,4,5,6,7,8,9,10]

// filter method le sabai number lai iterate garxa ra return pani garna milxa unlike forEach tesma return garna mildaina thiyo values haru lai 
//filter method bata return vako values haru chai array hunxa ra array ko kunai pani method majaley chalauna sakinxa 

// const newNums = myNum.filter( (value)=> {return value> 5})
// console.log(newNums)




//forEach ma pani yedi return garna ko lagi alag techniques use garney alik
// const newNums = []
// myNum.forEach((num)=>{
//     if(num>5){
//         newNums.push(num)
//     }
// })
// console.log(newNums)

//real life example: 
const books = [
    {
      "title": "Book-1",
      "genre": "Science",
      "publish": "2010",
      "edition": "3th Edition"
    },
    {
      "title": "Book-2",
      "genre": "Science",
      "publish": "2001",
      "edition": "2th Edition"
    },
    {
      "title": "Book-3",
      "genre": "Self-Development",
      "publish": "2004",
      "edition": "4th Edition"
    },
    {
      "title": "Book-4",
      "genre": "Science",
      "publish": "2020",
      "edition": "4th Edition"
    },
    {
      "title": "Book-5",
      "genre": "Science",
      "publish": "2009",
      "edition": "2th Edition"
    },
    {
      "title": "Book-6",
      "genre": "Self-Development",
      "publish": "2021",
      "edition": "5th Edition"
    },
    {
      "title": "Book-7",
      "genre": "Self-Development",
      "publish": "2006",
      "edition": "3th Edition"
    },
    {
      "title": "Book-8",
      "genre": "Science",
      "publish": "2018",
      "edition": "2th Edition"
    },
    {
      "title": "Book-9",
      "genre": "Fiction",
      "publish": "2020",
      "edition": "3th Edition"
    },
    {
      "title": "Book-10",
      "genre": "History",
      "publish": "2006",
      "edition": "5th Edition"
    },
    {
      "title": "Book-11",
      "genre": "Fiction",
      "publish": "2012",
      "edition": "5th Edition"
    },
    {
      "title": "Book-12",
      "genre": "Self-Development",
      "publish": "2001",
      "edition": "5th Edition"
    },
    {
      "title": "Book-13",
      "genre": "Science",
      "publish": "2012",
      "edition": "1th Edition"
    },
    {
      "title": "Book-14",
      "genre": "Self-Development",
      "publish": "2022",
      "edition": "2th Edition"
    },
    {
      "title": "Book-15",
      "genre": "Self-Development",
      "publish": "2000",
      "edition": "1th Edition"
    }
  ]
  
  let userBooks = books.filter( (bk)=>bk.genre === "History")

   userBooks = books.filter( (bk)=>{
    return Number(bk.publish) > 2010 && bk.genre === "Science"})
  console.log(userBooks)











