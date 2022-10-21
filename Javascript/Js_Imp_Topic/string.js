// String :
 
let str = "Prasad";
// length : 
console.log(str.length);

// Extracting(Removing) String Parts : 3 Methods :

// slice(start,end) : 
console.log(str.slice(3,str.length));

// substring(start,end) : 
console.log(str.substring(3,5));

// substr(start,length) : 
console.log(str.substr(2,4));

// replace(searchrValue,replaceValue) : 
let str1 = "Hii I am Bad Boy";
console.log(str1);
console.log(str1.replace('Bad','Good'));

// toUpperCase() : 
console.log(str.toUpperCase());

// toLowerCase() : 
let str3 = "PRASAD";
console.log(str3.toLowerCase());

// toLocaleUpperCase() : 
console.log(str.toLocaleUpperCase());

// toLocaleLowerCase() : 
console.log(str3.toLocaleLowerCase());

// concat(...string);
console.log(str.concat(str3));

// trim() : remove White Spaces
let str4 ="   trim    ";
console.log(str4);
console.log(str4.trim());

// trimEnd() : remove White Spaces at End
let t = " trimEnd     ";
console.log(t.trimEnd());

// trimStart() : remove White Spaces at Start
console.log(str4.trimStart());

let str5 = "p";

// padStart(maxLength,fillString):
console.log(str5.padStart(5,"*"));

// padEnd(maxLength,fillString):
console.log(str5.padEnd(5,"*"));

// Extracting String Characters : 3 Methods :

let str6 = 'Hello';
// charAt(position) : 
console.log(str6.charAt(0));  // H

// charCodeAt(index) : 
console.log(str6.charCodeAt(0)); // 72

// str[index] : property access :
console.log(str6[0]); // H

// split() : convert string to array :
console.log(str6.split("")) //['H', 'e', 'l', 'l', 'o']

let str7 = "Hello World";
// endsWith();
console.log(str7.endsWith('World')) // true

// startsWith();
console.log(str7.startsWith('Hello')) // true

// String.fromCharCode(code) : 
console.log(String.fromCharCode(65)); // A

// includes(searchStr,position) : Check String Contains spacific string or character.
console.log(str7.includes("World")) // true

let str8 = 'Hello World Hello World';
// indexOf(searchString,position) : return position of first found occurence of a spacified value in string.
console.log(str8.indexOf("World")); // 6

// lastIndexOf(searchString,position) : return position of last found occurence of a spacified value in string.
console.log(str8.lastIndexOf("World")); // 18

// localeCompare() : 
let a = "abc";
let b = "abc";
console.log(a.localeCompare(b)); // 0

// match(matcherRegex) : 
let str9 = "The rain in spain again";
console.log(str9.match(/ain/g)); //['ain', 'ain', 'ain']

// repeat(count) :
console.log(str7.repeat(2)); // Hello WorldHello World

// search() : 
console.log(str7.search("World")); // 6 

// toString() : 
let strArr = [1,2,3,4];
console.log(strArr.toString());
console.log(str7.toString());

// valueOf() :
console.log(str7.valueOf()) 

