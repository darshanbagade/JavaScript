const myArr = ["js", "rb", "py", "java", "cpp"];

// we write callback function inside the for each loop
//name is not included in callback function

//item will iterrate on each element in the array
// myArr.forEach( function(item) {
//     console.log(item);
// });

//js
// rb
// py
// java
// cpp









//forEach using arrow function
// myArr.forEach((item) => {
//     console.log(item);
// });
// js
// rb
// py
// java
// cpp







//forEach by using external function
myArr.forEach( printElements ) ;  //function reference,not the fuction execution

function printElements(item){
//    console.log(item);
}

// js
// rb
// py
// java
// cpp










// forEach on objects of array
const myObj = [
    {
        username : "Darshan",
        branch : "CTech"
    },
    {
        username : "Nutan",
        branch : "EnTc"
    },
    {
        username : "Aryan",
        branch : "BSC"
    },
    {
        username : "Shivraj",
        branch : "IT"
    },
];

myObj.forEach((obj) => {
    console.log(`Name: ${obj.username} , Branch: ${obj.branch}` )
})
// Name: Darshan , Branch: CTech
// Name: Nutan , Branch: EnTc
// Name: Aryan , Branch: BSC
// Name: Shivraj , Branch: IT