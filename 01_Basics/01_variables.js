
const accountId = 23070912; 
let accountEmail = "darshan@gmail.com";
var accountPassword = "abcdefghijklmnopqrstuvwxyz";

accountCity = "Mumbai"; 
//it will consider as global variable ,
//but in the 'strict mode' it will throw the error

// accountId ="123212" //re-assigning to 'const' is not allowed

/*
Prefer not to use var
beacause of the issue block scope and funtion scope
*/


//display of all vaules in table 
console.table([accountId ,accountEmail, accountPassword, accountCity]);

