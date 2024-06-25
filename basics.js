function variables() {
    var age = 12;
    //shadowing is allowed in var 
    age=23;
    if (age >= 18) {
        const bloodgroup="O+";
        name="priya";
        //Error TypeError: Assignment to constant variable.
        // bloodgroup="A+";
        //we can get both the values because let is in same block and age has function scope
        // console.log("you are a major"+name+" "+age);
        console.log("you are major "+name+" "+bloodgroup);
    } else {
        // Error ReferenceError: name is not defined because let is a block level variable 
        // console.log("you are a minor"+name+" "+age); 
        // we donot get any error because var has function scope
        // console.log("your are minor with a age of "+age);
        console.log("your are minor");
    }
}

// variables();

//Data Types 

function dataTypes() {
    let age = 21;
    
    // Check if age is not a number
    if (isNaN(age)) {
        console.log("Age is not a number, please enter in correct format");
        dataTypes(); // Prompt again
        return; // Exit function to prevent further execution
    }

    age = parseInt(age); // Convert age to integer
    
    if (age >= 18) {
        console.log("You are eligible to vote");

        let firstname = "Tejasvi";
        let lastname = "sudugu";
        let phonenumber = "8008852559";

        // Concatenate firstname and lastname with a space
        let fullname = firstname + " " + lastname;
        console.log("Your name is " + fullname);

        // Validate phone number
        if (phonenumber.length === 10 && /^[6-9]\d{9}$/.test(phonenumber)) {
            console.log("Your voter ID = " + fullname.substring(0, 4) + phonenumber.substring(4, 10));
        } else {
            console.log("Entered wrong phone number");
        }
    } else {
        console.log("Sorry, you are not eligible to vote (your age should be greater than or equal to 18)");
    }
}

// Call the function to start
dataTypes();

//functions

