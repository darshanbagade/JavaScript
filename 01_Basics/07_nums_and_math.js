// const num = 223;//variable automatically detect number datatype
//console.log(num);

//if we have strictly mention the number
// const numObj =new Number(34342);
// console.log(numObj);

//when we convert numObj to string, we can apply the string methods
// console.log(numObj.toString().length);
// console.log(numObj.toString().split(4));

// const number= 23.44653;

//if we want only 2 digits after decimal
// console.log(number.toFixed(3));


//Precision
//if we want answer in 1 digit
// console.log(number.toPrecision(1));

//answer in 3 digit
// console.log(number.toPrecision(3));


// const numFormat = 100000000;

// console.log(numFormat.toLocaleString('en-IN')); // 10,00,00,000




//---------------------------Maths----------------------------

// console.log(Math);

// console.log(Math.abs(-4)); // =>4
// console.log(Math.round(4.566)); // =>5 (roundoff)
// console.log(Math.ceil(4.2)); // =>Nearest Greatest integer =>5
// console.log(Math.floor(4.7)); // =>Nearest Smallest integer =>4

// console.log(Math.min(2,4,6,3)); //=> minimum of all => 2
// console.log(Math.max(2,4,6,3)); //=> maximum of all => 6



//random number(0-1)
// console.log(Math.random());

//random number(0-9)
// console.log( Math.random()*10 );

//random number(1-10)
// console.log( Math.random()*10 + 1 );

//random number btw range (min , max)
const min =10;
const max =30;
// console.log( (Math.random()*(max - min + 1)) + min );




let random =Math.floor((Math.random()*(max - min + 1)) + min);
// while(random !=10){
//     console.log(random);
//     random=Math.floor((Math.random()*(max - min + 1)) + min);
// }

console.log(random);
