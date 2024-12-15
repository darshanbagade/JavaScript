// calling a another function from current execution context 

function setUsername(username) {
    //complex DB calls
    this.username = username;
    console.log('called');
}
function createUser(username, email, password){

    //it will call the setUsername function but it will not set the username property of createUser function
    //setUsername(username); // it will not work as expected

    // call holds the reference of the constructor function,
    // otherwise reference will be removed from called current execution context
    // 'this' passes the reference of current execution context to another called function
    // when we pass the current execution context to another called function (setUsername)
    // that called function will give all variable and properties to currecnt execution context before removed from the call stack 
    setUsername.call(this, username);

    this.email = email;
    this.password = password;
}

const userOne = new createUser("darshan", "darshan@gmail.com", 123);
console.log(userOne);