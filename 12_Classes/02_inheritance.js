class User{
    constructor(username){
        this.username = username;
    }
    logMe(){
        console.log(`Username : ${this.username}`);
    }
}


//teacher is inherited by the user
//extends keyword is used to inherit the properties of parent class
//super() is used to call the constructor of parent class
// behind the scene super() is calling the constructor of parent class
// username is passed to the constructor of parent class , and return value is stored in this.username of teacher class

class Teacher extends User{
    constructor(username, email, password){
        super(username);
        this.email = email ;
        this.password = password ;
    }
    addCourse(){
        console.log(`Course is added by ${this.username}`);
    }

}

// as teacher is inherited from the user, 
// teacher can access the properties of user,
// but user can not access the properties of teacher

const teacher = new Teacher("darshan", "darshan@gmail.com", 123);

teacher.addCourse();

const userOne = new User("pluto", "pluto@gmail.com", 123);
userOne.logMe(); // Username : pluto
teacher.logMe(); // Username : darshan
// userOne.addCourse(); //error

// child class can access the properties of parent class 
// but parent class can not access the properties of child class



console.log(teacher instanceof User); // true
console.log(userOne instanceof User); // true
console.log(teacher instanceof Teacher); // ture
console.log(userOne instanceof Teacher); //false