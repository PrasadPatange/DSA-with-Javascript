// Array Important Methods : 

var arr = [1,2,3,4,5];

// forEach(value,index,array) : 
 arr.forEach((element,i,arr) => {
    console.log(element + " " + "Index = " + i + " arr=> " + arr );
});

// map() :
 arr.map((num) => {
      console.log(num);
})
console.log("---------------");

 var mapArr = arr.map((num) => {
    //   console.log(num*2);
    return num*2;
})
console.log(mapArr); // [2, 4, 6, 8, 10]

const lessThan5Arr = mapArr.map((num) =>{
    return num < 5;
});
console.log(lessThan5Arr); //[true, true, false, false, false]

// filter() : 
const filterLessThan5Arr = mapArr.filter((num) =>{
    return num < 5; 
});
console.log(filterLessThan5Arr); // [2, 4]

const addNum5reduceArr = filterLessThan5Arr.reduce((prev,curr)=>{
    return prev + curr;
});
console.log(addNum5reduceArr); // 6

// reduce() : 
const addNumreduceArr = mapArr.reduce((prev,curr)=>{
    return prev + curr;
});
console.log(addNumreduceArr); // 30

// every() : 
const everyArr = mapArr.every((num)=>{
    return num < 20;
});

console.log("Every : ",everyArr); // true

// some() : 
 someArr = mapArr.some((num) => {
    return num > 5;
});

console.log("Some : ",someArr); // true

var fruit = ["apple","orange","mango","apple"];
console.log(fruit);

// indexOf() : 
console.log(fruit.indexOf('apple')); // 0

// lastIndexOf() : 
console.log(fruit.lastIndexOf('apple')); // 3

// includes() : 
console.log(fruit.includes("mango")); // true;

// find() :
findArr = arr.find((num) => {
    return num > 2;
})
console.log(findArr); // find first number > 2 i.e = 3;


// findIndex() : 
findIndexArr = arr.findIndex((val,index) =>{
    return val > 2; 
});
console.log(findIndexArr); // find index of first number > 2  num = 3 i.e = 2;

// from() : 
fromArr = Array.from([10,20,30,40]);
console.log(fromArr);

// keys() : 
keys = fruit.keys();
for (const k of keys) {
    console.log(k); // Index
}

// copyWithin() : 
arrCopy = ['a','b','c','d'];
console.log(arrCopy.copyWithin(2,0));

// entries() :
en = fruit.entries();
for (const e of en) {
    console.log(e) //[key,value]
}

// [0, 'apple']
// [1, 'orange'] 
// [2, 'mango']
// [3, 'apple']

// fill() : overwrite original array :
console.log(fruit.fill('kiwi',2,4));

// valueOf() :
console.log(fruit.valueOf());

//Example : 1) create even array using map()
         // 2) take normal array and return even array
         // 3) sum odd no. in array.

var arr = [1,2,3,4,5,6,7,8,9,10];

console.log(arr);

var evenArr = arr.map(val => {
    return val*2;
})
console.log(evenArr);

var findOddArr = arr.filter(val => {
    return val%2 !==0;
});
console.log(findOddArr);

var sumArr = findOddArr.reduce((prev,curr) => {
    return prev + curr ;
})

console.log(sumArr);  