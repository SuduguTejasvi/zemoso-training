setTimeout(function(){
console.log("hello");
},5000)

const getIntials=(firstName,secondName)=>{
 return firstName.charAt(0)+secondName.charAt(0);
}
console.log(getIntials("Roger","Waters"));