// Array :

let arr = [1,2,3,4];

// length:
console.log(arr.length);

// toString() : convert array to string.
console.log(arr.toString());

// join() : convert array to string.
console.log(arr.join(" "));

// pop() : remove from last
console.log(arr.pop());
console.log(arr);

// push() : add to last
console.log(arr.push(4,5));
console.log(arr);

// shift() : remove from start
console.log(arr.shift());
console.log(arr);

// unshift() : add to start
console.log(arr.unshift(10));
console.log(arr);

// slice() : add/remove from any position of array :
console.log(arr.splice(2,0,30));
console.log(arr);
console.log(arr.splice(4,1));
console.log(arr);

// empty array :
// console.log(arr.splice(0,arr.length));
// console.log(arr);

// Object of Array {[]} : 
const arrObj = {
    arr: [1,2,3,4],
    name:'prasad'
}
console.log(arrObj);
console.log(arrObj.arr[2]);
console.log(arrObj.name);

// Merging :
// concat() :
const conArr = [10,20,30,40];
console.log(conArr);
console.log(arr.concat(conArr));

// Set(array) : to remove duplicate element from array : 
const uniqueArr = new Set(arr.concat(conArr))
console.log(uniqueArr);

// slice(start,end) : 
console.log(conArr.slice(1,3));

// sort() :
const messArr = [2,1,3,5,4];
console.log(messArr.sort());

// reverse() : 
console.log(messArr.sort().reverse());

// flat() : The flat() method creates a new array with all sub-array elements concatenated
//  into it recursively up to the specified depth.
const nestedArr = [1,[2,3,[4,[5,[6,7,[8]]]]]];
console.log(nestedArr);
console.log(nestedArr.flat());
console.log(nestedArr.flat(1)); //same as above
console.log(nestedArr.flat(2));
console.log(nestedArr.flat(Infinity));



