//this keyword
//'this' keyword only used in context of object
//when we have to access the variable inside the same object 

// const user = {
//     username : "darshan",
//     price : 999,
//     welcomeMessage : function(){
//         console.log(`${this.username}`)
//     }
// }

// console.log(user);
// user.welcomeMessage(); //darshan
// user.username = "hero"; //context of object is changed here
// console.log(user);
// user.welcomeMessage(); // hero



// console.log(this); //{}


// when we print 'this' in browser, it returns the document object
//console.log(this); 
//**'Document'is the Global object of browser .






// function chai(){
//     const username = "darshan";
    //  'this' keyword is only applicable in context of objects, not in functions
//     console.log(this.username); // undefined
// }
// chai();



// const user = function(){
//     const username = "darshan";
//     console.log(username);//darshan
//     console.log(this.username); //undefined 
//     //this keyword is only applicable in the context of object
//     console.log(this); //return the global object
// } 
// user();









//Arrow function

// const chai =  () => {
//     let username = "hitesh";
//     console.log(this); //{}
//     console.log(username);//hitesh
// }
// chai();



// const addNums = (num1,num2) => {
//     return num1+num2;
// }
// console.log(addNums(5,10)); //15


//**implicit arrow function
// const addNums = (num1, num2) => num1 + num2;
// const addNums = (num1, num2) => (num1 + num2);
//  console.log(addNums(5,3)); //8


//explicit return
//***when we use {curly braces}in function, we have to write the "return" keyword

 //implicit return
//when we use () in function , we do not use 'return' keyword




//Return object in arrow function
// we return object inside the ()
// const user = () => ({username: "darshan"})
// console.log(user());





// const myArray = [2, 5, 3, 7, 8]
// myArray.forEach()