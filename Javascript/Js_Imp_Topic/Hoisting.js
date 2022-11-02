// Hoisting : Variable can be used before it has been declared.

// var store in global object memory space.
a = 5;
console.log(a);
var a;

b = 7;
console.log(b);
// let b; // Error :  Uncaught ReferenceError: Cannot access 'b' before initialization

// reason : var store in global object memory space but
        //  let store in separate memory space. so we can not access memory space .
        //  let and const declaraton before you have putting some value in them .
        //  i.e. What Hoisting in let.

// Temporal deadzone : Temporal deadzone is a time . since when this let variable are hoisted 
                     // till it's initialize some value between that time is known as "Temporal Deadzone".

                     

/*
Temporal Dead Zone : 
Temporal Dead Zone is the period of time during which the let and const declarations cannot be accessed.
Temporal Dead Zone starts when the code execution enters the block which contains the let or const declaration and continues until the declaration has executed.  
*/


// Example :
  
//  let and const :
 
// carName = 'TATA';
// console.log(carName);
// let carName;     // declared  
// Error : Uncaught ReferenceError: Cannot access 'carName' before initialization

try{
carName = 'TATA';
let carName;     // declared  
}
catch(e){
console.log(e)
}


// bikeName = 'Duke';
// const bikeName; 
// Error :  Uncaught SyntaxError: Missing initializer in const declaration

