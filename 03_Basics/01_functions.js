//function --> block of code that performsthe specific task

//definetion
// function myfunc(name){
//     console.log(`You are ${name}`);
// }

// myfunc ; //function reference
// myfunc("darshan");//function execution ( function call)





//return
// function addTwoNums(num1,num2){
//     return num1+num2;
//    console.log("Hello world");//no code will execute after the 'return' keyword

// }
// console.log(addTwoNums(5,10));




//Parameters and arguments
//when we define the function, we get parameters
//function funcName(parameters){
//}
//funcName(arguments) //when we call the function, we pass arguments




//when no value is assigned to the parameter --> it is undefined .
//to avoid this we can pass defult value to the function("hero")
// function logUserMessage(username="hero"){
//     if(!username){
//         console.log("Please enter a username");
//         return;
//     }
//     return `${username} just logged in`;
// }
// console.log(logUserMessage("darshan"));//darshan just logged in

// if we document mention default value it will return 'Please enter a username'





//sometime we have to pass multiple values to the function ,And we can't tell the no. of values that we are passing to the function 
// we use **rest operator ...
//Spread and rest(collect) operators are same ,but functionailty of both is different

//collect values in array,,we can apply the loop
// function calculatePrice(val1,val2, ...nums){
//     return nums; 
// }
// console.log(calculatePrice(200,300,400,500));//[ 400, 500 ]






//Passing the object to the function
// const user = {
//     username: "hitesh",
//     price: 199
// }

// function handleObject(anyobject){
//     console.log(`Username is ${anyobject.username} and price is ${anyobject.price}`);
// }

// handleObject(user); //Username is hitesh and price is 199

// handleObject({
//     username: "sam",
//     price: 399
// });       //Username is sam and price is 399




//Passing array to the funtion
// const myNewArray = [200, 400, 100, 600]

// function returnSecondValue(getArray){
//     return getArray[1];
// }

// console.log(returnSecondValue(myNewArray));   //400
// console.log(returnSecondValue([200,350, 500, 1000]));  //350