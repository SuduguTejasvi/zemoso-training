//let and const
//both have a block scope
let x = 10;
if (true) {
    let x = 20; //can be changed
    console.log(x); // 20
}
console.log(x); // 10
const y = 30;
//  y = 40; TypeError: Assignment to constant variable.
console.log(y); // 30

// Arrow functions

let age=(a)=>{
    console.log("Age is:"+a);

}
age(21);

//Default Parameters
function sum(a,b=10) {
    console.log("sum="+(a+b));
}

sum(20);//30
sum(10,30);//40

//default values for the first parameter
// function sum(a=10,b) {
//     console.log("sum="+(a+b));
// }

// sum(20);//NaN

// For of loop

let arr=[2,3,4,5,6];
for (let value of arr) {
    console.log(value);
   }
   
//    Spread attributes

let sumValues=(arr)=>{
    let sum=0;
    for(let v of arr)
        {
            sum+=v;
        }
        console.log("sum of elements="+sum);
}
sumValues([1,2,3,4,5]);

// Maps

var map=new Map();
map.set("name","Teju");
map.set("age",21);
console.log("There are "+map.size+" elements");
for(var key of map.keys())
    {
        console.log("key:"+key+" value:"+map.get(key));
    }

// Sets

var sets = new Set();
sets.add('a');
sets.add('b');
sets.add('a'); // We are adding duplicate value.
for (let element of sets) {
 console.log(element);
}

// Static methods

class Greetings {
    static greet() {
    console.log("Hi Static method");
    }
   }
Greetings.greet();
   

// Getters and Setters
class People {
        get Name() {
          return this.name;
        }
        set Name(name) {
          this.name = name;
        }
    }
    let person = new People();
    person.Name = "Tejasvi";
    console.log(person.Name);

    // Array Destructuring

const fruits = ["Banana", "Orange", "Apple", "Mango"];

// Destructuring Assignment
let [fruit1, fruit2] = fruits;

console.log(fruit1);
console.log(fruit2);


// JavaScript Classes

class Car {
    constructor(name, year) {
      this.name = name;
      this.year = year;
    }
  }
const c=new Car('Teju','2024');
console.log(c.name);

//includes
const sentence = "The quick brown fox jumps over the lazy dog.";

console.log(sentence.includes("quick")); // true

//String.startsWith()/endsWith()
const str = "Hello World";
console.log(str.startsWith("Hello")); // true
console.log(str.endsWith("end")); // false


//Template Literals
let tname='Krishna';
console.log(`${tname} is known as neelameghashyaama`)

