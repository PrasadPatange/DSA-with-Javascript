
// *********** callback() ************************
//   callback() :
// function A(callback){
//     setTimeout(() => {
//         console.log("A First");
//         callback()
//     }, 2000);
// }

// function B(){
//     setTimeout(() => {
//         console.log("B Second");
// }, 1000);
// }

// A(B);
// ---------------------------------------------
// Example of Multiple Callbacks() : 

// function A(callback){
//   setTimeout(() => {
//       console.log("A First");
//       callback();
//   }, 2000);
// }

// function B(){
//   setTimeout(() => {
//     console.log("B Second");
//     C();
//   }, 1000);
// }

// function C(){
//     console.log("C Third");
// }

// A(B);
 
// **************** Promise ********************
// Promise :

// function A() {
//     return new Promise((resolve, reject) => {
//         let err = false;
//         setTimeout(() => {
//             if(!err){
//                 console.log("A First");
//                 resolve();
//             }else{
//                 reject("rejected!!!");
//             }
      
//         }, 2000);
//     });
  
// }

// function B() {
//     setTimeout(() => {
//             console.log("B Second");
//     }, 1000);
// }

// A()
//   .then(B)
//   .catch((err) => console.log(err));

// ------------------------------------------------
// Example of Multiple Promises :

// function A() {
//     return new Promise((resolve, reject) => {
//         let fulfill = false;
//         setTimeout(() => {
//             if(!fulfill){
//                 console.log("A First");
//                 resolve();
//             }else{
//                 reject("A rejected!!!");
//             }
      
//         }, 3000);
//     });
  
// }

// function B() {
//      return new Promise((resolve,reject) => {
//       let fulfill = false;
//       setTimeout(() => {
//         if(!fulfill){
//           console.log("B Second");
//           resolve();
//         }else{
//           reject("B Rejected!!!")
//         }
// }, 2000);

//      }) 
   
// }
// function C() {
//   setTimeout(() => {
//     console.log("C Third");
//   }, 1000);
// }

// A().then(B).then(C).catch(err => console.log(err))

// ********************** Async & Await  *******************************
//

// Async & Await :


// function A() {
//     return new Promise((resolve, reject) => {
//         let err = false;
//         setTimeout(() => {
//             if(!err){
//                 console.log("A First");
//                 resolve();
//             }else{
//                 reject("rejected!!!");
//             }
      
//         }, 3000);
//     });
  
// }

// function B() {
//     setTimeout(() => {
//             console.log("B Second");
//     }, 1000);
// }

// async function fulfill(){
//     await A();
//      B();
// }

// fulfill();
// ---------------------------------------------------------
// Example of multiple Promise with async & await :

function A() {
    return new Promise((resolve, reject) => {
        let fulfill = false;
        setTimeout(() => {
            if(!fulfill){
                console.log("A First");
                resolve();
            }else{
                reject("rejected!!!");
            }
      
        }, 3000);
    });
  
}

function B() {
    return new Promise((resolve,reject) => {
        let fulfill =false;
        setTimeout(() => {
            if(!fulfill){
            console.log("B Second");
            resolve();
            }else{
                reject("C Rejected!!!")
            }
    }, 2000);
    })
   
}

function C() {
  setTimeout(() => {
    console.log("C Third");
  }, 1000);
}

async function fulfill(){
    await A();
    await B();
     C();
}
fulfill().catch((err) => console.log(err));