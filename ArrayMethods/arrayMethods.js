'use strict';
let ar1=[1,2,3,4,5]

//x.slice
console.log(ar1.slice(2)) //Output: [ 3, 4, 5 ]

//1.Length 
console.log(ar1.length) //Output: 5

//2. toString()
console.log(ar1.toString()) //Output: 1,2,3,4,5
console.log(typeof ar1.toString()) //Output: string

//3.join()
console.log(ar1.join('*')) //Output: 1*2*3*4*5
console.log(typeof ar1.join('*')) //Output: string

//4.push()
ar1.push(6);
console.log(ar1) //Output: [ 1, 2, 3, 4, 5, 6 ]

//5.pop()
ar1.pop();
console.log(ar1) //Output: [ 1, 2, 3, 4, 5 ]

//6.shift() Remove from element from 0th index and readjust the indexes.
ar1.shift();
console.log(ar1) //Output: [ 2, 3, 4, 5 ]

//7.unshift() Add element to 0th index and readjust the indexes.
ar1.unshift(1);
console.log(ar1) //Output: [ 1, 2, 3, 4, 5 ]

//Accessing Elements
console.log(ar1[4]) //Output: 5

//Adding element to an array
ar1[ar1.length]=7
console.log(ar1) //Output: [ 1, 2, 3, 4, 5, 7 ]

