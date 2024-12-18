//
//we use getter and setter for not giving the access of some properties
// or to give custumisable code



class User{
    constructor(email, password){
        this.email = email;
        this.password = password;
    }

    //use to get the value form outside the class
    get password(){
        return `${this.new_password}darshan`;
        // if we use the same vaiable name (this.password),
        // it will give the error : Maximum call stack size exceeded

    }

    //use to set value
    set password(value){
        this.new_password =value;
    }


    get email(){
        return this._email.toUpperCase();
    }
    set email(value){
        this._email = value;
    }
}
const pluto = new User("pluto@gmail.com", "123abc");

console.log(pluto.password); // 123abcdarshan
console.log(pluto.email); // PLUTO@GMAIL.COM
