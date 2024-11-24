//for in : used to iterate over the properties of an object
//it gives the keys of the object

const myObj= {
    js: "javscript",
    py: "python",
    cpp: "c++",
    rb: "ruby"
}

// for(const key in myObj){
//     console.log(key);
// }

//  js
//  py
//  cpp
//  rb


//for accesing the values using for in loop
for(const key in myObj){
//    console.log(key, ':- ', myObj[key]);
}
// js :-  javscript
// py :-  python
// cpp :-  c++
// rb :-  ruby



//for in on array
const arr = ["js","py","java","cpp"];

for(const index in arr){
//    console.log(index , ":" , arr[index]);
}
// 0 : js
// 1 : py
// 2 : java
// 3 : cpp




//for in is not applicable for map 
//because map is not iterable
const map = new Map()
map.set('IN', "India")
map.set('USA', "United States of America")
map.set('Fr', "France")
map.set('IN', "India")

for(const key in map){
//    console.log(key);
}
//don't give any output