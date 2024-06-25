//objects
const person = {
    firstname: "Tejasvi",
    lastname: "Sudugu",
    age: 21,
    address: {
        place: "ramnagar",
        portno: "500020",
        district: "Telangana"
    },
    fullName: function() {
        console.log(this.firstname + " " + this.lastname);
    }
};


person.fullName(); 


//using constructor

class Person {
    constructor(firstname, lastname, age, address) {
        this.firstname = firstname;
        this.lastname = lastname;
        this.age = age;
    }

    fullName() {
        console.log(this.firstname + " " + this.lastname);
    }
}

const p1 = new Person("Tejasvi", "Sudugu", 21);
p1.fullName(); 
