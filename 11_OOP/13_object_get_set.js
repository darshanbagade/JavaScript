const User = {

    //_variableName means it is private and cant accessible 
    // in ES2022 we use #varableName 
    _email: "pluto@pluto.com",
    _password : "abc",

    get email(){
        return this._email.toUpperCase();
    },

    set email(value){
        this._email =value;
    }
}

//factory function
const userOne = Object.create(User)

console.log(userOne.email);