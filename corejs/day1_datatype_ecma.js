//day 1 data type with new type of datatype symbol and how it works 
let sym1 = Symbol();
let sym2 = Symbol('description');
let sym3 = Symbol('description');

console.log(sym1 === sym2); // false (unique symbols)
console.log(sym2 === sym3); // false (even with the same description, they are unique)


