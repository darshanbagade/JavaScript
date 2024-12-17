//lecture - 47

// Object.getOwnPropertyDescriptor() method is used to get a property descriptor for an own property 
// (that is, one directly present on an object and not in the object's prototype chain) of a given object.


//The value of PI can't it is not writable, enumerable and configurable
// which is set to false
const descriptor = Object.getOwnPropertyDescriptor(Math, "PI");
//console.log(descriptor);
//output
/* 
    {
        value: 3.141592653589793,
        writable: false,
        enumerable: false,
        configurable: false
    }
*/
//console.log(Math.PI);


//------------------------------------------------------------------

const user = {
    username : "pluto",
    email : "pluto@gmail.com",
    password: "123",

    getUsername : function(){
        console.log(this.username)
    }
}

user.getUsername()

// geting the property descriptor of the object
const nameProperty = Object.getOwnPropertyDescriptor( user , "username");
console.log(nameProperty);

//we can change the descriptor of the propeties(variables, functions) declared inside the object
Object.defineProperty(user , "username" , {
    writable : false, // we can't change the value of the property
    enumerable: false // we can't see the property in the object (it will not get printed or in loop)
})
user.username = "darshan"
console.log(Object.getOwnPropertyDescriptor( user , "username"));



// we can also use the Object.entries() method to get the properties of the object
//here username is not printed because we have set enumerable to false
for([key , value] of Object.entries(user)){
    if(key !== "function"){
        console.log(key , value);
    }
}