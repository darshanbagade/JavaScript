// Nullish Coalescing Operator (??): null undefined
//it is used when we fetch data from API and we want to set default value if data is not available or null or undefined 
//then we return default value


// let val1 = 5 ?? 10 
// console.log(val1);//5

// const val2 = null ?? 10;
// console.log(val2);//10

// const val3 = undefined ?? 15;
// console.log(val3);//15

// let val4 = null ?? 10 ?? 20;
//console.log(val4);//10 //if we have multiple nullish coalescing operator, it will return first non null value 



// Terniary Operator : it is used to write if else in one line
// condition ? true : false

const iceTeaPrice = 100
iceTeaPrice <= 80 ? console.log("less than 80") : console.log("more than 80");
//return more than 80