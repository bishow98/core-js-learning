//day 5 : Immediately Invoked Function Expressions(IIFE)

//eg database connection garda immediateley function execute garnu parney hunxa so tyo condition ko lagi chai IIFE ko concept aauxa 

//function call garney yo eauta method ho but 
// function one(){
//     console.log(`Db connected`)
// }
// one() 


//IIFE run garna lai ( ) ( ) yesari small brackets ma wrap garney ra immediately invoke garxa . This doesn't pollute the global scope . but at the end of the () ; semicolon is needed . Yesle chai kaha gayera end garney vanera patta lagauna sakdaina so ; semicolon diyepaxi tyo end vayo vanney bujhxa 
(function two(){ 
    //it is also called named IIFE as two is function name 
    console.log(`Db connected`)
}) ();


//now another case is that : 2 ta IIFE use garna lai ; semicolon last ma chainxa chainxa 

( ()=>{
    //it is unnamed IIFE using arrow function 
    console.log(`Db connected at port: `)
}) ();


//as a argument and parameter 
(  (name)=>{
    console.log(`Hello ${name}`)
}) ("Bishow")