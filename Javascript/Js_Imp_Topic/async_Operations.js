// Async JS Programming :
// Call Back | Promise | Async & Await

console.log("Call Back");

const users = [
    {name:"prasad", desg:"SE"},
    {name:"gajanan", desg:"SE"}
]

// Problem statement
// createUser() required 2 sec to add user and getUsers() display data 
// in 1 sec here create a problem that 3 users not display on list


function getUsers(){
    setTimeout(() => {
        let user="";
        users.forEach((data,index)=>{
             user +=`<li>${data.name}</li>` ;
        });
        console.log(user);
        document.body.innerHTML = user;
    }, 1000);
}
/*
function createUser(newUser){
    setTimeout(() => {
        users.push(newUser);
    }, 2000);
}

createUser({name:'rohan',desg:'HR'});
getUsers();
*/
/*
Output : prasad
         gajanan
*/
// ***********************************************************************************************************
// Solution:
// 1) To Handle This Problem We Use Callback() : callback fun pass as a argument to another fun .
// callback fun called after main fun executed completely.

/*
function createUser(newUser,callback){
    setTimeout(()=>{
        users.push(newUser);
        callback();
    },2000);
}

createUser({name:'Rohan',desg:'HR'},getUsers);
*/

/*
Output : prasad
         gajanan
         Rohan
*/
// ***********************************************************************************************************

// 2) Promise :
/*
function createUser(newUser){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            users.push(newUser);
            let error = false;
            if(!error){
                resolve();
            }else{
                reject("Something Went Wrong!!!!");
            }
        },2000);
    })
}

createUser({name:"Rohan",desg:"HR"}).then(getUsers);

*/

/*
Output : prasad
         gajanan
         Rohan
*/

// If getting error then Handle error in catch Block
/*
function createUser(newUser){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            users.push(newUser);
            let error = true;
            if(!error){
                resolve();
            }else{
                reject("Something Went Wrong!!!!");
            }
        },2000);
    })
}

createUser({name:"Rohan",desg:"HR"})
.then(getUsers)
.catch((err)=>console.log(err));
*/
/*
Output : Something Went Wrong!!!!
*/

// ************************************************************************************************

// 3) Async and Await : 

function createUser(newUser){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            users.push(newUser);
            let error = false;
            if(!error){
                resolve();
            }else{
                reject("Something Went Wrong!!!!");
            }
        },2000);
    })
}

async function start(){
    await createUser({name:'Rohan',desg:'HR'});
     getUsers();
}
start();

/*
Output : prasad
         gajanan
         Rohan
*/