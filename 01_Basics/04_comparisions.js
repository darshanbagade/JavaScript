// console.log(2>1);
// console.log( 3 == 4);
// console.log( "4" == 4);
// console.log( "04" == 4);

//---------Coercion-----------
/*
Definition:
Coercion is the process of converting a value from one data type to another, 
either automatically (implicit) or manually (explicit).

Implicit Coercion:
Happens automatically during operations involving different data types.
Example:
console.log("5" + 2); // "52" (number 2 is converted to a string)
console.log("5" - 2); // 3 (string "5" is converted to a number)

Explicit Coercion:
Happens when you manually convert a value using functions or operators.
Example:
console.log(Number("5")); // 5 (string to number)
console.log(String(5));   // "5" (number to string)

*/




//----------------------------Comparision-----------------------------//
//this is not good practice of comparisions
// == equality operator do not perform type coercion
// console.log(null == 0)// false

// comparision operators performs the type coercion ( convert null to 0 while comparision with > ,< , >= , <=)
// console.log(null > 0) // false  --> (0 > 0)
// console.log(null < 0) // false  --> (0 < 0)
// console.log(null >= 0) // true
// console.log(null <= 0) //true


//equality  == ,and comparision operators(< , > , >= , <=) both have different meaning


//console.log("2" == 2);  // only checks the value
//console.log("2" === 2); //checks value + datatype

