//Immediately Invoked Funtion Expression 

//***many times we face the problem due to the global scope pollution 
// to avoid the pollution of that global scope or variables iife
//we use IIFE for immediate database connectivity

//syntax
// ()()
//first () -->function definetion
//second ()--> fuction execution



//we use it for immediate database connectivity
// (function myfunc(){
       //named IIFE -->function has name  i.e. mufunc
//     console.log(`DATABASE CONNECTED`)
// })();
//we have to write ; semicolon to end IIFE function



//When we use arrow function in IIFE --> Unnamed IIFE (simple IIFE)
// ((username) => {
//     console.log(username);
// } )('darshan'); 
//we have to write ; semicolon to end IIFE function

// when we write two IIFE use ;semicolon at he end of IIFE 