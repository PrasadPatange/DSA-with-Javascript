// let = not redeclare but reassign 
// let a;
//  a = 'prasad';
// console.log(a);

// const = not redeclare but not reassign 
// const b = 'const';
// console.log(b);
var g = "Global";
console.log("Global : ",g);
function a(){
    let p = 0;
    console.log("function Scope : ",p);
    console.log("Global Inside Function : ",g);
    
    if(p==0){
        let p = 1;
        let q = 2;
        console.log("Inside block p: ",p);
        console.log("Inside Block q: ",q);
        console.log("Global Inside Block : ",g);
    }
    console.log("Outside block p but reffer function scope var: ",p);
    // console.log("Inside Block q: ",q); //error

}
a();