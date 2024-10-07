//code here 

const buttons = document.querySelectorAll(".button")
console.log(buttons)
const body = document.querySelector("body")

buttons.forEach( (button)=>{
console.log(button)
console.log(button.id)
button.addEventListener("click",function(e){
    console.log(e)
    console.log(e.target)//kaha bata aako xa tyo event herxa
    switch (e.target.id) {
        case "grey":
            body.style.backgroundColor = e.target.id
            break;
        
        case "white":
            body.style.backgroundColor = e.target.id
            break;
        
        case "blue":
            body.style.backgroundColor = e.target.id
            break;

        case "yellow":
            body.style.backgroundColor = e.target.id
            break;
    
        default:
            break;
    }
})
})
