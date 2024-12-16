//JavaScript after the ES6


class User {
    //constructor will call when object is created
    constructor(username, email, password ){
        this.username = username;
        this.email = email; 
        this.password = password;
    }

    //no need to use function keyword in side the class
    encryptPassword(){
        return `${this.password}abc`
    }
    
    capitalUsername(){
        return `${this.username.toUpperCase()}`
    }
}

const userOne = new User("Darshan", "darshanbagade123@gmail.com", "123");

console.log(userOne);

console.log(userOne.encryptPassword());
console.log(userOne.capitalUsername());


//----------------------------Behind the scene---------------------------------


function myUser(username, email, password){
    this.username = username;
    this.email = email; 
    this.password = password;
}


myUser.prototype.encryptPassword = function(){
    return `${this.username}abc`;
}
myUser.prototype.capitalUsername = function(){
    return `${this.username.toUpperCase()}`;
}

const myUserOne = new myUser("pluto", "pluto@gmail.com", "123");
console.log(myUserOne);
console.log(myUserOne.encryptPassword());
console.log(myUserOne.capitalUsername());
