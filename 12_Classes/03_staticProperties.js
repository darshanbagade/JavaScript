// static method in side the class can be accessibe only inside that class
// that method can not be accessed by any other instances of that class

// we use static keyword to define static method , 
// when we want to hide some method from the instances of the class


class User{
    constructor(username){
        this.username = username;
    }
    logMe(){
        console.log(`Username : ${this.username}`);
    }
    static createId(){
        return `123`;
    }
}
const userOne = new User("Darshan");

// userOne.logMe(); //Username : Darshan
// console.log(darshan.createId()); //error as createId method declared as static

console.log(User.createId());//123



class Teacher extends User{
    constructor(username, email){
        // super() passing username to super constructor 
        // and return vale stor in this.user name of teacher
        super(username);
        this.email = email;
    }
}

const teacher = new Teacher("iphone" , "i@gmail.com");

// teacher.logMe(); // Username : iphone
// console.log(teacher.createId()); 
