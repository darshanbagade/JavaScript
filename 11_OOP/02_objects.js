// We don't need to declare the variables inside the object explicitly
// because when we assign a value to a variable, it automatically creates the variable and it becomes a property of the object.

const user = {
    username: 'darshan',
    loginCount: 10,
    signedIn: true,

    getUserDetail: function() {
        console.log('Got the detail');
        console.log(this.username);
        // 'this' represents the current context
        console.log(this);
    }
}

// console.log(user.username);
// console.log(user.getUserDetail());

// console.log(this);
// In a browser, it returns the 'window' object.
// In a Node.js environment, it returns an empty object {}

// The global context of the browser has APIs, DOM, methods, etc.
// Therefore, it returns the 'window' object.

// But in a Node.js environment, the global context is different
// and 'this' gives an empty object {}.

//------------------------------------------------------------------------

// Constructor: 
// It allows creating multiple instances from the same object literal.
// It is a reference to the context.
// It is a reference to the object.
// We create multiple instances using the 'new' keyword and a constructor function.

// 'new':
//  1. It creates an empty object or new context.
//  2. The constructor function is called due to the 'new' keyword.
//  3. Arguments are injected into 'this' as properties.
//  4. We get the instance.
const promiseOne = new Promise(() => {});
const date = new Date();

function UserDetail(username, loginCount, isLoggedIn) {
    this.username = username; 
    this.loginCount = loginCount;
    this.isLoggedIn = isLoggedIn;

    // LHS is our declared variable
    // RHS is the passed value/parameter  

    this.greeting = function() {
        console.log(`Welcome ${this.username}`);
    }

    // return this; // This is implicit and not needed
}

// If we don't use the 'new' keyword, it will overwrite the values of userOne
// const userOne = UserDetail("darshan", 10, true);
// console.log(userOne); // undefined
// const userTwo = UserDetail("aryan", 10, false);
// console.log(userOne); // undefined

// To avoid overwriting values, we use the 'new' keyword
const userOne = new UserDetail("darshan", 10, true);
const userTwo = new UserDetail("aryan", 10, false);

console.log(userOne.constructor); 
// It gives the reference of the context
// [Function: UserDetail]