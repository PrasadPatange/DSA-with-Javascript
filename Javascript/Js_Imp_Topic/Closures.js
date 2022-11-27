/*

Closure : 
- A function with lexical scope is known as closure. 
- A closure is the combination of a function bundled together (enclosed) with references to its surrounding state (the lexical environment).
In other words, a closure gives you access to an outer function's scope from an inner function. 
In JavaScript, closures are created every time a function is created, at function creation time.

- In JavaScript, a Closure is a function that references variables in the outer scope from its inner scope. 
- The closure preserves the outer scope inside its inner scope even after outer function is returned.

- A closure is the combination of a function and the lexical environment within which that function was declared. 

*/
console.log("*** Closure :  ***");
console.log("*** lexical Scoping :  ***");

function init() {
    var name = 'Mozilla'; // name is a local variable created by init
    function displayName() {
        // displayName() is the inner function, a closure
        console.log(name); // use variable declared in the parent function
    }
    displayName();
}
init();

/*
init() creates a local variable called name and a function called displayName().
The displayName() function is an inner function that is defined inside init() and is available only within the body of the init() function. 
Note that the displayName() function has no local variables of its own. However, since inner functions have access to the variables of outer functions,
displayName() can access the variable name declared in the parent function, init().
*/
 
console.log("*** Closure :  ***");

function makeFunc() {
    const name = 'Prasad';
    function displayName() {
      console.log(name);
    }
    return displayName;
  }
  
  const myFunc = makeFunc();
  myFunc();

/*
The reason is that functions in JavaScript form closures.
A closure is the combination of a function and the lexical environment within which that function was declared.
This environment consists of any local variables that were in-scope at the time the closure was created.
 In this case, myFunc is a reference to the instance of the function displayName that is created when makeFunc is run. 
 The instance of displayName maintains a reference to its lexical environment, within which the variable name exists.
For this reason, when myFunc is invoked,the variable name remains available for use, and "Prasad" is passed to console.log.
*/