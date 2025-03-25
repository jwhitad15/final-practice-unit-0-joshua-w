const readline = require('readline-sync'); // this installs the readline-sync module, which allows for user input and real-time processing for accurate outputs
//----------------------------------------------------------------------------------------------------------
// In this first section, I wrote example code to prompt My Psalm users to create a password for their profile. 
// This section utilizes mainly primitive data types, including nominal values, numerical values, booleans, and null values.
// This section also uses readline.question to ask for custom user input, and it also uses the + operator to perform concatenation.
let password;
const minLength = 8; // use of Lesson 6 Data Type (number)
let hasUpperCase = false // use of Lesson 6 Data Type (Boolean)
let hasNumber = false; // use of Boolean
console.log("Hi! Welcome to My Psalm, the essential application for modern day artists & creators.")
console.log("Before we get started, let's create your profile.")
let name = readline.question("What is your name?")
console.log( "Hello, " + name + "!");
console.log("By default, your username will be MyPsalm_" + name[0] + "."); // use of character indexing (Lesson )
console.log("Now, you'll need to create a secure password that is 8 characters long, and contains at least one upper case and one number.");
console.log("Please create one now.")
    // this next portion of the first section uses a do..while loop (Lesson ) to prompt the user to create a valid password. 
    // This do..while iteration performs at least one execution before determining which path the loop will take. 
    // If the user's password meets all of the stated requirements, the user will be able to move forward.
    // If the user's password does not meet all of the requirements, the user will be looped back to the password propmt until a valid password is created.
do {
    password = readline.question("Please enter your password:");


    if (password === "" || password === null) { 
        console.log("Password input cancelled.:");
        break; // use of a falsy value (null) - Lesson 6
    }

    if (password.length < minLength) {
        console.log("Invalid. Please check password requirements!");
    }

    hasNumber = /\d/.test(password); // This variable ensures a number is used.
    hasUpperCase = /[A-Z]/.test(password); // This variable ensures an upper case letter is used.
} while (password.length < minLength || !hasNumber || !hasUpperCase); // Here I use boolean expressions to determine how the application will flow based on the user meeting the requirements. 

if (password && password.length >= minLength && hasNumber){ // Another example of boolean use. In addition, this portion utilizes .length functions to confirm valid password length.
    console.log("Access granted.");
}
//----------------------------------------------------------------------------------------------------------
// This section is meant to collect more user info. It primarily uses readline.questions, strings, and concatentation.
console.log("Great! Now that you've created your password, let's gather some additional information from you.");

let phone = readline.question("What is your phone number?");
    console.log("You have input " + phone + ".");
let address = readline.question("What is your address?")
    console.log( "You have input " + address + ".");
let moniker = readline.question("What is your artist moniker?")
    console.log( "You have input " + moniker + ".");

console.log("Great! Welcome to My Psalm, " + name + ". We have received your basic information and have created the shell of your user profile. You may now further customize your profile.")
    //-----------------------------------------------------------------------------------------------------------
    // This final section of example code includes objects, arrays, and other methods of manipulating strings and arrays.
    // This section is meant to prompt the user to select the profile style (artist or creator), which will help build the foundation for the user's custom profile.
let userProfile = ["Joshua", "J White", ["618-830-1737", "123 Code Lane", {state: "California"}]] // Here a mixed array is used, containing a nested array, an object, and strings.
let userMoniker = userProfile.slice(0, 1); // This string method allows me to create a variable, select and assign the variable with a value from inside the nested array. 
console.log("Hello, " + userMoniker + ". Our records indicate that you are from" + userProfile[2][2] + ". This information will be publicly visible on your profile.")
    // The above console utilizes concatenation to output a confirmation statement. There is also bracket notation, which keeps the console more concise and easier to read. 
console.log("To further customize your profile, please select whether you will be operating as an artist or creator:")
let profileChoice = readline.question("Are you an artist or creator?")

let smiley = String.fromCodePoint(128578); // This line of code uses a Unicode point to insert an emoji.
if (profileChoice === "artist") {
    console.log("You have selected \'artist\' for your profile type. In this user setting, you'll be able to upload, distribute, and stream your music seamlessly.")
} else if (profileChoice === "creator") {
    profileChoice = readline.question("Are you an image creator or a multidisciplinary creator?")
}       if (profileChoice === "image creator" || profileChoice === "multidisciplinary creator") {
            console.log("Great, Creator " + name + ". Please see the RESOURCES tab for more information on how to maximize your experience with the My Psalm application. " + smiley); // use of Lesson 8 (special case unicode insertion)
        
}
    
// FINAL COMMENTS
// This example code for the My Psalm app utilizes at least one piece of information from each module listed on the Unit 0 Final Instructions. 

// LESSON: Values, Data Types, and Operations
    /// I utilize both primitive & complex data types in these examples. Specifically, strings, nominal values, numerical values, boolean values, a null value, and an emoji symbol were used for the primitive types.
    /// Both an object {state: California} and a mixed array (userProfile) were used as complex data types.

// LESSON: Values, Data Types, and Operations
    /// This example code includes one of the more common string methods, concatenation, as well as the use of special case symbols, which in this example was a smiling emoji. 

// LESSON: Values, Data Types, and Operations
    /// There are a couple instances where I use conditional statements and boolean expressions to control how My Psalm interacts with the user.
        //// The conditionals create choices and pathways for the user to decide on, while the boolean expressions create parameters and boundaries for what the user inputs.

// LESSON: Values, Data Types, and Operations
    /// If the user's input does not meet the boolean requirements, the conditional statements will continue to loop back on itself, prompting the user to enter a password until it's considered valid.

// LESSON: Values, Data Types, and Operations
    /// To log the user's additional information like moniker, address, & city, I built a mixed array and assigned a userProfile variable as a way to hold the user's information in a more concise way.

// LESSON: Values, Data Types, and Operations
    /// After building the mixed array, I use array methods like .slice and bracket notation to extract the user's name and city from the mixed array. This allowed me to print a message using the input info from the user. 