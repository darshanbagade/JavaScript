// Date

//toString() converts the String object to premitive string

//let myDate = new Date();  

//***Date is object in JavaScript****
// console.log(typeof myDate); //object


// console.log(myDate); // 2024-11-17T14:21:21.606Z
// console.log(myDate.toString()); //Sun Nov 17 2024 14:26:44 GMT+0000 (Coordinated Universal Time)

// console.log(myDate.toDateString());   //Sun Nov 17 2024
// console.log(myDate.toTimeString());   //14:26:44 GMT+0000 (Coordinated Universal Time)

// console.log(myDate.toLocaleString());     // 11/17/2024, 2:26:44 PM
// console.log(myDate.toLocaleDateString()); //11/17/2024
// console.log(myDate.toLocaleTimeString()); //2:26:44 PM








//Date in specified format 
//let myCreatedDate = new Date(2023, 0, 14); //when we write date in mentioned format , month starts with index 0(january);

// let myCreatedDate = new Date(2023, 0, 14, 5 ,4); //1/14/2023, 5:04:00 AM
// console.log(myCreatedDate.toLocaleString());

// let myCreatedDate = new Date("2023-01-14"); //  1/14/2023, 12:00:00 AM
// console.log(myCreatedDate.toLocaleString());

// let myCreatedDate = new Date("01-14-2023"); //  1/14/2023, 12:00:00 AM
// console.log(myCreatedDate.toLocaleString());



// let myCreatedDate = new Date("2023-01-14");

// let myTimeStamp = Date.now();

// console.log(myTimeStamp);
// console.log(myCreatedDate.getTime()); //gives time in millisecond from the given date "2023-01-14"
// console.log(Math.floor( Date.now()/1000) ); //in seconds



// let newDate = new Date("2023-01-14");
// console.log(newDate.getDate());
// console.log(newDate.getDay());
// console.log(newDate.getFullYear());


//for customization of date and time format
let newDate = new Date();
newDate.toLocaleString( 'default' ,{
    weekday : "long"
})


