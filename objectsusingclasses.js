
/* const person = {
    firstName: "gireesh"
}
console.log(person);


const person = new Object();
person.firstName = "gireesh";

function Person(firstName,lastname) {
    this.firstName = firstName;
    this.lastname = lastname;
    this.fullName = function() {
        return this.first + ' ' + this.lastname;
    };
}

const p1 = new Person("gir" ,"eesh");
const p2 = new Person("eesh" ,"gir");
console.log(p1);
console.log(p2);
console.log(p2.fullName());
*/

// type script playground code

class person {
    public firstName!: string;
    public lastName!: string;
    constructor(fname:String,lname:String) {
        this.firstName = fname;
        this.lastName= lname;   
    }
    public get fullName() {
        return this.firstName + ' ' + this.lastName
    }
}

const p1 = new person('sri');
console.log(p1);
