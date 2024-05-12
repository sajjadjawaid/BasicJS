// -> Declaring Variables.
// 1- var:- variables declared with var are function scoped or globally scoped variables.
// it can be redefined and reassigned.
// var a = 2;
// console.log(a);
// {
// var a = 3;
// console.log(a);
// }
// console.log(a);

// 2- let:- variables declared with let are block scoped.
// it can only be reassigned, however it can redefined in a block.

// let b = 10;
// console.log(b);
// {
//     let b = 11;
//     console.log(b);
// }
// console.log(b);

// {
//     let a =4;
//     console.log(a);
// }
// console.log(a); //this will throw error as let is block scoped.

// -3 const:- variables declared with const are block scoped.
// it cannot be redefined nor reassigned, however it can redefined in a block.

// const a =5;
// console.log(a);
// {
//     const a =7;
//     console.log(a);
// }
// console.log(a);
