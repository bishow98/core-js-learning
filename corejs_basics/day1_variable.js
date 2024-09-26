//day 1 learning 
function example() {
    if (true) {
      var x = 10; // var is function-scoped
      let y = 20; // let is block-scoped
      console.log("Inside block -> x:", x); // 10
      console.log("Inside block -> y:", y); // 20
    }
    
    console.log("Outside block -> x:", x); // 10 (x is accessible because of function scope)
    // console.log("Outside block -> y:", y); // ReferenceError: y is not defined (y is block-scoped)
  }
  
  example();