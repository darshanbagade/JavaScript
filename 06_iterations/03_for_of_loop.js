//for of : used to iterate over the values of an iterable object like an array or a string  or a map or a set 
//it gives the values of the object
//objects are not iterable by for of loop




// const arr =[1,2,3,4,5];
// for(const num of arr){
//     console.log(num);
// }
/*
        1
        2
        3
        4
        5
*/


// const str = "hello world";
// for(const char of str){

//     //skip the space
//     if(char===" "){
//         continue; 
//     }

//     console.log(char);
// };


//--------------------------------------------
//Map :  Map object holds key-value pairs and remembers the original insertion order of the keys 

const map = new Map();

map.set('name', 'darshan');
map.set('age', '19');
map.set('gender', 'male');

//console.log(map);

// for(const i of map){
//     console.log(i);
// }
/*
[ 'name', 'darshan' ]
[ 'age', '19' ]
[ 'gender', 'male' ]
*/




for(const [key, value] of map){
    console.log(key, ':- ', value);
}
/*
name : darshan
age : 19
gender : male
*/



