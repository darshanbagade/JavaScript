// for loop: it is used to iterate over a block of code multiple times

for (let i = 0; i <= 10; i++) {
    const element = i;
    if (element == 5) {
        console.log("5 is best number");
    }
    console.log(element);   
}
// console.log(element); // out of scope

//nested for loop
// for (let i = 1; i <= 10; i++) {
//    console.log(`Outer loop value: ${i}`);
//    for (let j = 1; j <= 10; j++) {
//        console.log(`Inner loop value ${j} and inner loop ${i}`);
//    console.log(i + '*' + j + ' = ' + i*j );
//    }   
// }




//for loop with array:

// let myArray = ["flash", "batman", "superman"]
// //console.log(myArray.length);
// for (let index = 0; index < myArray.length; index++) {
//     const element = myArray[index];
//     //console.log(element);
    
// }

//for of loop : it is used to iterate over the values of an array
// for (const iterator of myArray) {
//     console.log(iterator);
// }



// ---break and continue---

//break: it will break the loop
// for (let index = 1; index <= 20; index++) {
//     if (index == 5) {
//         console.log(`Detected 5`);
//         break;
//     }
//    console.log(`Value of i is ${index}`);
// }



//continue: it will skip the current iteration
// for (let index = 1; index <= 20; index++) {
//     if (index == 5) {
//         console.log(`Detected 5`);
//         continue;
//     }
//    console.log(`Value of i is ${index}`);
// }