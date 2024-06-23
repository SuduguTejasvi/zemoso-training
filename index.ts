//any type
let something: any = "Hello";
something = 42; 
something = true; 

//Array
let numbers:number[]=[1,2,3,4]
let strings: string[] = ["a", "b", "c"];
//more generic way
// let numbers: Array<number> = [1, 2, 3, 4, 5];
// let strings: Array<string> = ["a", "b", "c"];

//Tuples
let person: [number, string] = [1, "Tejasvi"];

console.log(person);

//enums
enum size{Small=1,Medium,large}
let mysize:size=size.Small;
console.log(mysize);


//functions
function add(a: number, b: number): number {
    if(a+b>32)
        return 5;
    //if only mentioned if then else may return any null or undefined type so gives error
    else
    return 0;
}
console.log(add(10,20));

//objects
let person1: { name: string, age: number } = 
{ name:'Teju',
    age: 21,
}
console.log(person1.age);

//objects with methods

let person2: { name: string, age: number, sayHello: () => void }
= { name: 'Teju', age: 21, sayHello: function() { console.log("hello,good morning!");}

};

console.log(person2.sayHello());

//type 

type Person={
    name: string, age: number, sayHello: () => void
}
let person3:Person={
    name:'Teju',
    age:21,
    sayHello:function(){
        console.log("hello,good morning!");
    }

};
console.log(person3.sayHello());

//union
function kgToLbs(weight:number|string):number{
    if(typeof weight==='number')
        return weight*2.2;
    else
    return parseInt(weight)*2.2;
}

console.log(kgToLbs(10));
console.log(kgToLbs('10'));

//intersection
type Draggable={
    drag:()=>void
}
type Resizable={
    resize:()=>void
    }
type UIWidget=Draggable&Resizable
let textBox: UIWidget={
    drag: function(){
        console.log("dragging");
        },
        resize: function(){
            console.log("resizing");
            }
}


//literals
type Quantity=50|100;
let quality:Quantity=100

type Metrics='cm'|'inch'
let metrics:Metrics='cm'

//optional parameters
function greet(name: string, greeting?: string): string {
    if (greeting) {
      return `${greeting}, ${name}!`;
    } else {
      return `Hello, ${name}!`;
    }
  }
  
  console.log(greet("Alice"));
  console.log(greet("Bob", "Hi")); 
  