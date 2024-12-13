//'new' is use to create an instance

//Promise: It is used to handle asynchronous operations in javascript
//it is object the represents the eventual completion or failure of an asynchronous operation
//Promise is an object that may produce a single value some time in the future

//promise creation : we create a promise using new Promise() constructor
//here we pass a function as an argument to the constructor , this function has two parameters resolve and reject
//resolve is a function that is called when the promise is resolved
//reject is a function that is called when the promise is rejected

//promise consume : we consume a promise using then() and catch() method
//then handles the resolve value of the promise
//catch handles the reject value of the promise
//finally() will always work either promise is resolved or rejected


// Applications of Promises:
// 1. Fetch API
// 2. Axios : it is a library that is used to make http request
// 3. Database calls
// 4. File system operations
// 5. cryptography : hashing, encryption

//----------------Promise 1----------------

//creation of promises
// const promiseOne = new Promise(function(resolve, reject){
//     //Do an asnyc task
//     //DB calls, cryptography, network

//     setTimeout(function(){
//         console.log('Async task is completed.');
//         resolve();
//     }, 1000);
// });

//consume promise
//then is related to resolve
// promiseOne.then(function(){
//     console.log("Promise Consumed");
// })




//--------------Promise 2----------------


// new Promise(function(resolve, reject){
//     setTimeout(function(){
//         console.log('Task 2 is Completed');
//         resolve();

//     }, 2000);
// }).then(function(){
//     console.log('Promise 2 Consumed')
// });



//--------------Promise 3----------------

// const promiseThree = new Promise(function(resolve, reject){
//     setTimeout(function(){
//         resolve({user: 'darshan', age:19, gender:"male"});
//         //resolve will pass the values to the consume
//     }, 1000);
// });


// promiseThree.then(function(user){
//     console.log(user);
// });




//--------------Promise 4----------------

// const promiseFour =  new Promise(function(resolve,reject){
//     setTimeout(function(){
//         let error = false;
//         if(!error){
//             resolve({username: "darshan" , password: "12345"});
//         }else{
//             reject('Error : Something went wrong');
//         }
//     } , 2000)
// });


//chaining of then
// we can use multiple then() to chain the promises , we dont use try and catch block here
// if promise is resolved it will go to 'then()' ,
// if promise is rejected it will go to 'catch()' 
// finally() will always work either promise is resolved or rejected

// promiseFour
// .then((user) => {
//     console.log(user);
//     return user.username; // it will retun to next 'then()'
// })
// .then((username) => {   // takes the return value of previous 'then()'
//     console.log(username)
// })
// .catch((message)=>{ 
//     console.log(message);
// })
// .finally(()=>{
//     console.log("Promise has either resolved or rejected");
// })





//--------------------Promise 5--------------------

// const promiseFive = new Promise(function(resolve, rejected){
//     setTimeout(function(){
//         let error= true;
//         if(!error){
//             resolve({lang:"JS", name:"Javascript"});
//         } else {
//             rejected('ERROR : JS went wrong');
//         }

//     } , 2000)
// })


// async --> it is used to make a function asynchronous
// await --> it is used to wait for the promise to be resolved or rejected
// await can only be used inside async function
// it will not go to next line until the promise is resolved or rejected
// async await do not handle the error, we have to use try and catch block to handle the error

// async function consumePromiseFive(){
//     try {
//         const response = await promiseFive; // it will wait until the promise is resolved or rejected
//         console.log(response);
//     } catch (error) {
//         console.log(error);
//     }
// }

// consumePromiseFive(); //ERROR : JS went wrong




//---------------------------------------


// fetch using async await
// async function consumeApiData(){
//     try {
//         const response = await fetch("https://api.github.com/users/darshanbagade"); // it will wait until the data is fetched
//         const data = await response.json(); // it will wait until complete string data is converted to json
//         console.log(data);
//     } catch (error) { // it will handle the error
//         console.log("E : ", error);
//     }
// }
// consumeApiData();



//-----------------------------------------------------------

//fetch():
// fetch() is used to make http request
// fetch is used to get the data from the server
// it returns a promise



// fetch using then() and catch()
fetch("https://api.github.com/users/darshanbagade")
.then((response)=>{
    const data = response.json();
    return data;
})
.then((data)=>{
    console.log(data);
    console.log(data.name);
})
.catch((error) =>{
    console.log('E :', error);
});

//------------------------------------------------------------------------------------------

//Fetch mechanism :
//fetch is divided into two parts

//1. Web browser / node : for api request
//      Handle the network request and response
//      if the request is successful it will go to onfulfilled (error 404 also goes to onfulfilled)
//      if the request is not successful it will go to onrejected

//2. Data to reserve the space for the data
//      Onfulfilled : when the data is fetched
//      Onrejected : when the data is not fetched
//      data is not directly pushed into these variables

//when the data is fetched it go to onfulfilled and then store into the variable