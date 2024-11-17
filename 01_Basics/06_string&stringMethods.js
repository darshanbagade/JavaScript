// This is the module for String And String methods

//Follow the backtick `` for printing the string , it is more convinient method
//Although we can use ""  or ''  for printting the string

// const name = 'darshan';
// const rollNo = '35';
// console.log(`I am ${name} and my roll number is ${rollNo}`);

//------------------------------------------

// String concatenation

// const str1 ="darshan";
// const str2 ="is cool";
// const str3 = str1 + ' ' + str2 ;

// console.log(str3);
// console.log(str1.concat(' ',str2));

//------------------------------------------


// Another way to declare a string

//const myStr ="darshan"//premitive string

// const str = new String('darshan');//object String
// it creates the string in form of object , although normal declaration also followsthe same procedure

// we can acces individual element in using respective index
// console.log(str); // => [String: 'darshan']

// to access the char at particular index
// console.log(str[3]); 
// console.log(str5.charAt(2)); 



//---------------------------------------------

let str5 = "darshan";
const str6 ="is-COOL";


// for Uppercase & Lowercase
// console.log(str5.toUpperCase());
// console.log(str6.toLowerCase());


//tells index of particular char
// console.log(str5.indexOf('s'));


//provides access to the prototype of an object.
// console.log(str5.__proto__);


//gives length of the string
// console.log(str5.length);


//substring
// console.log(str5.substring(2,5)); // 5th index is excluded


//slice
//const str = 'The quick brown fox jumps over the lazy dog.';

//console.log(str.slice(31));
// Expected output: "the lazy dog."

//console.log(str.slice(4, 9)); //9th is excluded
// Expected output: "quick brown fox"

//console.log(str.slice(-4)); //form end
// Expected output: "dog."

// console.log(str.slice(-9, -5));
// Expected output: "lazy"

//.split
// const strName= "dar-sh-an ";
// console.log(strName.split('-')); // => [ 'dar', 'sh', 'an' ]

//replace first occurrence
// console.log(strName.replace('-',"*"));
//replaceAll
// console.log(strName.replaceAll('-',"*"));

//repeat
// console.log(strName.repeat(3));





//convert obj string to premitive string
// const strObj =new String('darshan');

// console.log(strObj); //[String: 'darshan']
// console.log(strObj.toString()); //darshan




//trim()

// const myStr1 ="     darshan      ";
// console.log(myStr1.trim()); //removes extra right and left whitespaces


//includes -->checks given text present or not
// const url = "https://hitesh.com/hitesh%20choudhary"

// console.log(url.replace('%20', '-'))
// console.log(url.includes('sundar'))
