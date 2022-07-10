/*
    The Global Environment and The Global Object

    Execution Context (Global):
    Global Object: this

    This in the first instance is window, in browsers the Window is the global object.

    The global object in browsers is Window, the JS execution creates a variable called this; this is equal to the global window object. 

    Global variables and functions, those not held within a function, are lexically held in the window object. 
*/

var a = "Hello world!";

function b() {}

console.log(window);
console.log(window.a);
