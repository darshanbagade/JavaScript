//Datatypes are divided into two types on the basis of :  How data is stored and How to access the data

//dynamically typed
// JavaScript is a weakly typed programming language because you do not have to specify the variable type in advance.

//Premitives :
// 7 categories : String , Boolean, null, undefined, Number, symbol, BigInt

// const id =Symbol("123");
// const newId =Symbol("123");
// console.log(id === newId)
// console.log(typeof id);//symbol

// const bigInt = 13243345546544535654n;




//Reference(Non-Premitives) :
//Array, Objects, Functions

// const arr = ["darshan" , "aryan" , "nutan"];

// let myObj= {
//     name : "darshan",
//     age : "20"
// }

// const myFunction = function(){
//     console.log("Hello Darshan");
// }
// myFunction();

//to display the datatype of variables
// console.log(typeof null); //object
// console.log(typeof myFunction) // function
// console.log(typeof myObj) //object





//+++++++++++++++++++++++++++++++++++++++++++++++++++++\\
//stack(premitives are stored)
//heap( non premitives are stored)


//stack
// const name1 = "darshan";
// let name2 = name1; //copy of name1 is assigned , not reference
// name2= "aryan";
// console.log(name1);
// console.log(name2);

//heap
let obj1 = {
    email:"darshan@gmail.com",
    age:20
}
let obj2 = obj1; //actual reference of the obj1 is assigned to the obj2

obj2.email= "darshanbagade@yahoo.com";
//email of obj1 is alos changed

console.log(obj1);
console.log(obj2);