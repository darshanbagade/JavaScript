
// Prototype:


// Assigning a method to the top-level Object so that the property 
// can be accessible to any child (any lower level) of that object

const myArray = [ "GSOC" , "MLN", "Atlasian"];
const myString = "Open Source";

const myObj = {
    username: "darshan",
    gender : "male",

    getUsername : function(){
        console.log(this.username);
    }
}

//assigning method to top level Object : 
//so that the property can be accessible to any child(any lower level) of that object
Object.prototype.darshan = function(){
    console.log("darshan is present in all objects");
}

// myArray.darshan();
// myString.darshan();
// myObj.darshan();



// -------------------------------------------------------------

// Use this approach to assign a method to a specific object/array/string

// If we assign the method to a particular child, 
// The parent level cannot access the assigned method
// Its parent level cannot access the assigned method.



const myArray2 = [ "GSOC" , "MLN", "Atlasian"];
const myString2 = "Open Source";

Array.prototype.sayDarshan = function(){
    console.log("Hello Darshan");
}

myArray2.sayDarshan();// Hello Darshan

// myString2.sayDarshan();
// sayDarshan method can't accesiible by string
// because it is assigned to the Array




// -------------------------------------------------------------

// ..Inheritance:


// inheritance

const User = {
    name: "chai",
    email: "chai@google.com"
}

const Teacher = {
    makeVideo: true
}

const TeachingSupport = {
    isAvailable: false
}

const TASupport = {
    makeAssignment: 'JS assignment',
    fullTime: true,
    __proto__: TeachingSupport //properties of TeachingSupport will be inherited by TASupport
}

// modern syntax:

// properties of User will be inherited to Teacher
// teacher can access properties of User
// teacher is inherited from User
Object.setPrototypeOf(Teacher, User);

// TeachingSupport can now access properties and methods directly on Teacher, 
// such as static properties and methods.
Object.setPrototypeOf(TeachingSupport, Teacher);



// -------------------------------------------------------------


let anotherUsername = "Darshan     ";

String.prototype.trueLength = function(){
    console.log(`${this}`);
    console.log(`True length is: ${this.trim().length}`);
}

anotherUsername.trueLength();
"darshanbagade".trueLength();
"opesource     ".trueLength();