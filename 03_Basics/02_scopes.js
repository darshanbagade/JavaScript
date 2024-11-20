

//block scope: if variables/datatypes initialised inside the block, we can not access them outside the block ;
// but we can access those variables/datatypes inside the block which are initialised globally(or outside the block)

// let a = 300
// var c = 300

// if (true) {
//     let a = 10
//     const b = 20
//     var c =30;
    // console.log("INNER: ", a); //10
    
// }

// console.log(a); //300
// console.log(b); // not accessible
// console.log(c); // 30
//var can be accesiible outside the block scope, that is why we don't use it 


// function one(){
//     const username = "hitesh"

//     function two(){
//         const website = "youtube"
//         console.log(username); //hitesh
//     }
//     // console.log(website); //can not be accessible outside the function block

//      two()
// }

//  one(); //"hitesh"

if (true) {
    const username = "hitesh"
    if (username === "hitesh") {
        const website = " youtube"
        console.log(username + website);//hitesh youtube
    }
    // console.log(website);//error : website is not defined (can not be accessible outside the block)
}

//  console.log(username);//username is not defined ( (can not be accessible outside the if block))





// ++++++++++++++++++ interesting ++++++++++++++++++
///Hoisting


// normal function can be accesseble before its initialisation

// console.log(addone(5));  //6

// function addone(num){
//     return num + 1
// }






//expression function  --> we can not call the expression function before initialisation

// addTwo(5) ; //error: Cannot access 'addTwo' before initialization
// const addTwo = function(num){
//     return num + 2
// }