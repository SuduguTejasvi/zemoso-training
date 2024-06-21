//function declaration
function squareSum(a,b)
{
    return Math.pow(a,2)+Math.pow(b,2);
}
console.log(squareSum(5,6));

//function expression
let greetings=function(name){
    return "Good Afternoon "+name+" have a nice day.";
}
console.log(greetings("Rahul"));

//Arrow function
let fullName=(firstname,lastname)=>{
    return firstname+" "+lastname;
}
console.log(fullName("Rahul","Sharma"));


// Anonymous function with setTimeout example of call back function 
setTimeout(function() {
    console.log("Say Hello!");
}, 5000);  

//Promises 
const p = new Promise((resolve, reject) => {
    let a=1+1;
        if (a==2) {
            resolve('successful'); 
        } else {
            reject(new Error('Failure')); 
        }
});

p.then((message)=>{
    console.log( `${message}`);
}).catch((message)=>{
    console.log( `${message}`);
});

//async/await

async function weather() {
    let delhiWhether = new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("35 degrees");  // Resolve with the temperature
        }, 1000);
    });

    let chennaiWhether = new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("30 degrees");  // Resolve with the temperature
        }, 3000);
    });
    console.log("loading delhi weather...");
    let delhiw = await delhiWhether;
    console.log("Delhi weather "+delhiw);
    console.log("loading chennai weather...");
    let chennaiw = await chennaiWhether;
    console.log("Chennai weather "+chennaiw);
    return [delhiw, chennaiw];
}

weather().then((data) => {
    console.log(data);  // Output: ['35 degrees', '30 degrees']
}).catch((error) => { 
    console.log(error);
});
