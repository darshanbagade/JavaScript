
const accountId = 23070912; 
let accountEmail = "darshan@gmail.com";
var accountPassword = "abcdefghijklmnopqrstuvwxyz";

accountCity = "Mumbai"; //this is non sctrict mode .
//it will consider as global variable ,
//but in the 'strict mode' it will throw the error

// accountId ="123212" //re-assigning to 'const' is not allowed

/*
Prefer not to use var
beacause of the issue block scope and funtion scope
*/


//display of all vaules in table 
console.table([accountId ,accountEmail, accountPassword, accountCity]);



/*
Variable declaration and Strict mode in JavaScript

1. Variable Declaration:
- Use const for values that should not change.
- Use let for values that can change.
- Avoid using var because it has function scope and can cause issues with block scope.

2.Global Variables in Non-Strict Mode:
- Assigning a value to an undeclared variable (e.g., accountCity = "Mumbai";) creates a global variable automatically.
- This can lead to unexpected behavior.
- Assigning to undeclared variables throws a ReferenceError.

3.Strict Mode:
- Use "use strict"; to enable strict mode.
- In strict mode:
  - You must declare variables using let, const, or var.
  - Assigning to undeclared variables throws a ReferenceError.

4. Best Practices:
- Always declare variables explicitly.
- Prefer const and let over var.
- Use strict mode to write cleaner and safer code.

Example:
"use strict";
let accountCity = "Mumbai"; // Correct in strict mode
console.log(accountCity);

*/
