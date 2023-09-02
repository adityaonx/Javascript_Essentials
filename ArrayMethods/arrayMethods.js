'use strict';
let ar0=[1,2,3,4,5]

//Accessing Elements
console.log(ar0[4]) //Output: 5

//Adding element to an array
ar0[ar0.length]=7
console.log(ar0) //Output: [ 1, 2, 3, 4, 5, 7 ]

//Deleting elements from array #Warning: leaves undefined in array. Use Pop,Shift to avoid.
delete ar0[4]
console.log(ar0) //Output: [ 1, 2, 3, 4, <1 empty item>, 7 ]

//1.Length 
let ar1=[1,2,3,4,5]
console.log(ar1.length) //Output: 5

//2. toString()
let ar2=[1,2,3,4,5]
console.log(ar2.toString()) //Output: 1,2,3,4,5
console.log(typeof ar2.toString()) //Output: string

//3.join()
let ar3=[1,2,3,4,5]
console.log(ar3.join('*')) //Output: 1*2*3*4*5
console.log(typeof ar3.join('*')) //Output: string

//4.push()
let ar4=[1,2,3,4,5]
ar4.push(6);
console.log(ar4) //Output: [ 1, 2, 3, 4, 5, 6 ]

//5.pop()
let ar5=[1,2,3,4,5]
ar5.pop();
console.log(ar5) //Output: [ 1, 2, 3, 4]

//6.shift() Remove from element from 0th index and readjust the indexes.
let ar6=[1,2,3,4,5]
ar6.shift();
console.log(ar6) //Output: [ 2, 3, 4, 5 ]

//7.unshift() Add element to 0th index and readjust the indexes.
let ar7=[1,2,3,4,5]
ar7.unshift(0);
console.log(ar7) //Output: [ 0, 1, 2, 3, 4, 5 ]

//8.concat() Adding two arrays //Returns A new array without changing existing arrays
//Example1
let ar8_1=[1,2,3,4,5]
let ar8_2=[6,7,8,9]
let ar8_3=[10,11,12]
let ar8=ar8_1.concat(ar8_2,ar8_3)
console.log(ar8)
//Example2 Adding String element
let ar8_4=ar8.concat("A String Keyword")
console.log(ar8_4) //Output: [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 'A String Keyword' ]

//9.flat()
const ar9 = [[1,2],[3,4],[5,6]];
const ar9_1 = ar9.flat();
console.log(ar9_1) //Output: [ 1, 2, 3, 4, 5, 6 ]

//10.splice()
//Example1- Specifying 0 as 2nd argument doesnt remove any no element
let ar10=[1,2,3,4,5]
ar10.splice(1,0,"1st","2nd","3rd")
console.log(ar10.toString()) //Output: 1,1st,2nd,3rd,2,3,4,5

//Example2- Specifying 1 as 2nd argument remove element '2' from stated index 1
let ar10_2=[1,2,3,4,5]
ar10_2.splice(1,1,"1st","2nd","3rd")
console.log(ar10_2.toString()) //Output: 1,1st,2nd,3rd,3,4,5

//Example3- Specifying 2 as 2nd argument removes element '2' and '3' from stated index 1
let ar10_3=[1,2,3,4,5]
ar10_3.splice(1,2,"1st","2nd","3rd")
console.log(ar10_3.toString()) //Output: 1,1st,2nd,3rd,4,5

//11.slice
let ar11=[1,2,3,4,5]
console.log(ar11.slice(2)) //Output: [ 3, 4, 5 ]