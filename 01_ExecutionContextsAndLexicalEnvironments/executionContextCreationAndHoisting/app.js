/*
    The Execution Context - Creation and Hoisting

    Execution Context, created in two phases: 
        Creation Phase - global object and this created with the outer environment; in this creation phase the parser recognizes and sets up the Memory Space for Variables and Functions which is "Hoisting"

    Hoisting - Memory space set aside for functions and variables set up in the creation phase of execution. Functions are more easily held, but variables are given a placeholder of 'undefined' as the code knows a variable exists there but does not know it's value yet. All variables are initially set to undefined and functions sit in memory in their entirety. 

    Best to always set up the code in the most JS legible way, not relying on hoisting.
*/

b(); // Called b!
console.log(a); // undefined

var a = "Hello world";

function b() {
  console.log("Called b!");
}

b(); // Called b!
console.log(a); // Hello world
