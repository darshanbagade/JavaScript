//everthing in JavaSrcipt is object

// function comes from the prototype object
// array comes from the prototype object
// string comes from the prototype object

//function->object->prototype->null
//array->prototype->object->null
//string->prototype->object->null


//-----------------------------------------------------------
//normal function
function multiplyBy5(num){
    return num*5;
}

multiplyBy5.power = 2;

// console.log(multiplyBy5(5));
// console.log(multiplyBy5.prototype);
// console.log(multiplyBy5.power)

//------------------------------------------------------------

//adding new properties to the prototype of function

//constructor function
const user = function(username, followers){
    this.username = username;
    this.followers = followers;
}

user.prototype.printMe = function(){
    console.log("Username : ", this.username);
    console.log("followers : ", this.followers);
}

user.prototype.incFollowers = function(){
    this.followers++;
}

const userOne = new user("darshan",21);
// console.log(userOne);

userOne.printMe();
// Username :  darshan
// followers :  21

userOne.incFollowers();

userOne.printMe();
// Username :  darshan
// followers :  22



//------------------------------------------------------------

/*

Here's what happens behind the scenes when the new keyword is used:

A new object is created: The new keyword initiates the creation of a new 
JavaScript object.

A prototype is linked: The newly created object gets linked to the prototype 
property of the constructor function. This means that it has access to properties 
and methods defined on the constructor's prototype.

The constructor is called: The constructor function is called with the specified 
arguments and this is bound to the newly created object. If no explicit return value
is specified from the constructor, JavaScript assumes this, the newly created object, 
to be the intended return value.

The new object is returned: After the constructor function has been called, 
if it doesn't return a non-primitive value (object, array, function, etc.), 
the newly created object is returned.

*/