
//while conversion to any datatype write first letter Capital

// let score = 33;

// console.log(typeof score)
// console.log(typeof(score));


// let valueInNumber = Number(score);
// console.log(typeof valueInNumber);
// console.log( valueInNumber);

// conversion to number
// "33" => 33
// "33abc" => NaN
// "true" => 1
// "false" => 0



//conversion to boolean
// let IsLoggedIn = "";
// console.log(typeof IsLoggedIn);

// let booleanIsLoggedIn = Boolean(IsLoggedIn);
// console.log(typeof booleanIsLoggedIn);
// console.log(booleanIsLoggedIn);

//conversion to boolean
//"darshan" => true
// 1 => true
// 0 => flase
// null => false
//undefined => false
// "" => flase


//Converison to string

// let someString= true ;
// console.log(typeof someString);

// let conversionToString = String(someString);
// console.log(typeof conversionToString);
// console.log(conversionToString);

// 33 => "33" string
// null => null
// true => "true"

//----------------------------Operations-----------------------------//

// let value = 5;
// let negValue = -value;
// console.log(negValue); 

// console.log(2+2);
// console.log(2-2);
// console.log(2*2);
// console.log(2**3); // 2 to the power 3
// console.log(2/2);
// console.log(2%2);



// let str1 ="Hello";
// let str2 =" darshan"
// let str3 = str1 + str2;
// console.log(str3);


// console.log("1" + 2 + 2) //122
// console.log(1 + 2 + "2") //32


//-------------Unary + operator -----------------
// The unary + operator is used to convert a value to a number.
// It can be applied to various types of values, including strings, booleans, and objects.

// Applying the unary + operator to a truthy value results in 1.
// console.log(+true); //1 - The unary plus operator converts the boolean 'true' to the number 1.

// Applying the unary + operator to a falsy value results in 0.
// console.log(+null); //0 

// Applying the unary + operator to a non-numeric string results in NaN.
// console.log(+"darshan"); //NaN

// Aplying the unary + operator to a numeric string results in the number itself.
// console.log(+"123"); //123 
// console.log(+123); //123


//-----increment and decrement-----
//link -  https://tc39.es/ecma262/multipage/abstract-operations.html#sec-type-conversion

// let x = 3;
// const y = x++;
// console.log(`x:${x}, y:${y}`);
// Expected output: "x:4, y:3"

// let a = 3;
// const b = ++a;
// console.log(`a:${a}, b:${b}`);
// Expected output: "a:4, b:4"
