//singleton object
//const Obj = new Object();

/*
const gitUser ={};

//adding the key , value into the empty object
gitUser.name ="darshan";
gitUser.gmail= "darshan@github.com";
gitUser.longestStrike = '10 days';

console.log(gitUser);
*/




/* 
// objects inside the objects

const userData ={
    name:"darshan",
    gitDetails:{
        username:"darshanbagade",
        gitRepos:{
            repoName:['js', 'cpp', 'hacktoberfest']
        }
    }
}

//accessing the repo names
console.log(userData.gitDetails.gitRepos.repoName);   //[ 'js', 'cpp', 'hacktoberfest' ]
console.log(userData.gitDetails.gitRepos.repoName[2]);  //hacktoberfest

 */




//concatenating the objects

const obj1 = {1:'a' , 2: 'b'};
const obj2 = {3:'c' , 4: 'd'};

//it brings two objects into the single object
// const obj3 ={ obj1 , obj2};
// console.log(obj3); //{ obj1: { '1': 'a', '2': 'b' }, obj2: { '3': 'c', '4': 'd' } }



//merging of all elements of obj1 & obj2 into obj3
// const obj3 = Object.assign({}, obj1, obj2 );       //   {} (target:destination )  & obj1,obj2 (sources) 
// console.log(obj3); // { '1': 'a', '2': 'b', '3': 'c', '4': 'd' } 


//using spread operator
// const obj4 = {...obj1 , ...obj2 }
// console.log(obj4); //{ '1': 'a', '2': 'b', '3': 'c', '4': 'd' }



//**array of objects
//it is very usefull when we fetch the data 
// by implementing the loop to the array (index)


const user =[
    {
        name:"darshan",
        age: "19"
    },
    {
        name:"aryan",
        age: "19"
    },
    {
        name:"nutan",
        age: "19"
    },
]

// console.log(user[1].name); // aryan



//object methods
const myObj= {
    name : "darshan",
    email: "darshan@github.com",
    age : "19"
}

//if we want all keys of the object , Object.keys(objName) brings the keys in array datatype
// console.log(Object.keys(myObj));  //[ 'name', 'email', 'age' ]

// console.log(Object.values(myObj)); //[ 'darshan', 'darshan@github.com', '19' ]

//it shows of keys and value into the array format
// console.log(Object.entries(myObj)); 
 //[ [ 'name', 'darshan' ], [ 'email', 'darshan@github.com' ],[ 'age', '19' ] ]



 //check is any key value is present in the object or not
//  console.log(myObj.hasOwnProperty('name')); //true
//  console.log(myObj.hasOwnProperty('address')); //flase
 



 //--------------------------------------------------------------------
//De-constructing the objects

const course ={
    name:"Chai Aur JavaScript",
    courseInstructor:"Hitesh Choudhary",
    price:999
}
console.log(course.courseInstructor); //Hitesh Choudhary
/*
When we have to access the 'courseInstructor' multiple time 
we have to write 'course.courseInstructor' again and again
to simplify this process we can use object deconstructor 
*/

//declaring the single variable courseInstructor for accessing course.courseInstructor
// const {courseInstructor} = course;
// console.log(courseInstructor);  //Hitesh Choudhary

//we can also declare the variable for that key property
const {courseInstructor : instructor } = course;
console.log(instructor);  //Hitesh Choudhary


//-------------JSON-------------------

//JSON : Javascript Object Notation
// we use to fetch the data in JSON format from the APIs 

// JSON format
// {
//     "key1" : "value1",
//     "key2" : "value2",
//     "key3" : "value3",
// }

// [
//     {},
//     {},
//     {}
// ]