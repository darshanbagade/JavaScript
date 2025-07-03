//objects

//singleton:
//if object is made by constructor ,(it is only single object)
// Object.create
// const obj = new Object();


// object literals: not singleton, and it can create multiple instances of the object

// const JsUser = {
//     name : "darshan", // 'name' is a key and "darshan" is a value
//     age : 19,
//     location : 'nagpur',
//     isLoggedIn: false,
//     lastLoginDays: ["Monday", "Saturday"]
// }

// -------1.accessing the values inside the object--------
// console.log(JsUser.name);
// console.log(JsUser["name"]);




//-------2 . accessing key value using [""]-------
// const myUser ={
//     "full name": "darshan bagade", 
//     // here I used space in key value, it will not accessed by (.)dot operator
//     // it will only accessed by using JsUser["full name"]

// }

// console.log(JsUser["full name"]);// accessing the  "full name"






//------3. accessing the symbol in objects------
// const mySym = Symbol("abc");
// const userData = {
//     [mySym]: "symm"  //we have to write the symbols key inside [] sqr braces 
// }
// console.log(userData[mySym]);// access symbols inside the objects using [] sqr. braces



//-------------------------------------------------

/*
 if we have to fix value of the key, means it will not change
  when it is manupulated 
*/
const myObj= {
    name : "darshan",
    email: "darshan@github.com"
}

console.log(myObj.email); //darshan@github.com

Object.freeze(myObj);
myObj.email = "darshan@google.com";

// the original email value will not change, bcoz it is fixed
console.log(myObj.email); //darshan@github.com


//-------------------------------------------------


/*
 if we have to insert new function and 
we have to use the key value of same object inside that function then
we use 'this' key word ,it refers to  the current object 
*/
const Obj ={
    name : "darshan",
    age: 19
}

Obj.greeting = function(){
    console.log(`Hello ${this.name} , you are ${this.age} years old.`);   
}

Obj.greeting();// calling function