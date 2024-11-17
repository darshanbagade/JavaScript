//array
//JavaScript arrays are resizable and can contain a mix of different data types.
//JavaScript array-copy operations create shallow copies.
//A 'shallow copy' of an object is a copy whose properties share the same references

// const myArr = [0, 1, 2, 3, 4, 5, 6];
// const myHeros =  ["A.P.J Kalam", "Ratan Tata", "Darshan"];

// console.log(myHeros[2]); //Darshan
// console.log(myHeros[0]); //A.P.J Kalam
// console.log(myHeros[1]); //Ratan Tata

//---------------------Array Methods---------------------------

//premitive array --> directly stored in stack
//Array Object --> reference stored in heap
const newArr = new Array(1,2,3,4,5);

//push
// console.log(newArr);  //  [ 1, 2, 3, 4, 5 ]
// newArr.push(99);      // 99 insert at end
// console.log(newArr);  // [ 1, 2, 3, 4, 5, 99 ]

//pop
// console.log(newArr);  //  [ 1, 2, 3, 4, 5 ]
// newArr.pop(99);      // remove from end
// console.log(newArr);  // [ 1, 2, 3, 4, 5, 99 ]


//slice --> do not change the original array , gives the copy of some elements form the array
// console.log(newArr);   //[ 1, 2, 3, 4, 5 ]
// console.log(newArr.slice(1,4)); //[ 2, 3, 4 ] //  last index is excluded
// console.log(newArr);   //[ 1, 2, 3, 4, 5 ]


//splice --> delete the splice range elements from the original array
// console.log(newArr);             // [ 1, 2, 3, 4, 5 ]
// console.log(newArr.splice(1,3)); // [ 2, 3, 4 ] //last index is included
// console.log(newArr);             // [ 1, 5 ] 