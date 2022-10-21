// Destructring :

const user = {
  name: "prasad",
  age: 23,
  email: "prasad@gmail.com",
};

console.log(user);
// let name = user.name;
// let age = user.age;
// let email = user.email;
// console.log(name);
// console.log(age);
// console.log(email);

// Using Destructuring :

let { name, age, email } = user;
console.log(name);
console.log(age);
console.log(email);

// Spread Operatior :
userArr = ["prasad", "Gajanan", "Rohan"];
console.log(...userArr);

// Triple Equality : === also check Type

if (1 == "1") {
  console.log("Ok");
} else {
  console.log("Not Ok");
}

// === also check type :

if ("1" === "1") {
  console.log("Ok");
} else {
  console.log("Not Ok");
}
