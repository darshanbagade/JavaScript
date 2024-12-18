function User(email, password){
    this._email=email;
    this._password=password;

    Object.defineProperty(this, 'emial' , {

        get: function(){
            return this._email.toUpperCase();
        },
        set :function(value){
            this._email =value;
        }
    })
}

const userOne = new User("pluto", "pluto@gmail.com");
console.log(userOne);