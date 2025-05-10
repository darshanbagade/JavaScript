"use strict"; //treat all JS code as newer version

//alert(3 + 4); // we are using node js, not browser

//coding readability should be high
// console.log(3+3);
// console.log("Darshan");


//----Data types in JavaScript -----

// number =>  2 to power 53
// bigint =>  a very big number
// string => ""
// boolean => true/flase
// null => standalone value
// undefined => type isn't defined
// symbol => unique (will used in react)
// object => collection of key value pairs

// 'typeof null' is 'object'
// console.log(typeof null) 

//Ex.Undefined : when variable is decalred and if no value assigned to it, then it is undefined
// let myVariable;
// console.log(myVariable); //undefined
// console.log(typeof myVariable); //undefined

// Null :
// null expresses a lack of identification, indicating that a variable points to no object
// typeof null; // "object" (not "null" for legacy reasons)
// typeof undefined; // "undefined"
// null === undefined; // false
// null == undefined; // true
// null === null; // true
// null == null; // true
// !null; // true
// Number.isNaN(1 + null); // false
// Number.isNaN(1 + undefined); // true
