//while loop: it will run until the condition is true
// we need initialise increment or decrement variable outside the loop


let index = 0
while (index <= 10) {
    console.log(`Value of index is ${index}`);
    index = index + 2
}
/*
Value of index is 0
Value of index is 2
Value of index is 4
Value of index is 6
Value of index is 8
Value of index is 10
Score is 11
*/


// let myArray = ['flash', "batman", "superman"]
// let arr = 0
// while (arr < myArray.length) {
//     console.log(`Value is ${myArray[arr]}`);
//     arr = arr + 1
// }
//flash
//batman
//superman




//do while loop: it will run at least onc
//firstly it will execute the code then it will check the condition
let score = 11
do {
    console.log(`Score is ${score}`);
    score++
} while (score <= 10);

//11