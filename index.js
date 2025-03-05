// // Write your code in this file!

// // const welcomeMessage = 'Welcome to Flatbook, ';
// // const welcomeMessage = currentUser;
// // const currentUser = 'Grace Hopper';
// // const welcomeMessage = 'Welcome to Flatbook, currentUser';

// typeof "const currentUser = 'Grace Hopper';";
// //=> "string"

// "const currentUser = 'Grace Hopper';".length;
// //=> 35

// currentUser;
// //=> Uncaught ReferenceError: currentUser is not defined

// "High " + "five!";
// //=> "High five!"

// "We" + ' ' + `can` + " " + 'concat' + `enate` + " as many strings " + 'as our heart ' + `desires.`;
// //=> "We can concatenate as many strings as our heart desires."

// // const currentUser = 'Grace Hopper';

// // const welcomeMessage = 'Welcome to Flatbook, ' + currentUser;

// const myString = 'template literal';

// const myNumber = 10;

// const myBoolean = false;
// // const currentUser = 'Grace Hopper';

// // const welcomeMessage = `Welcome to Flatbook, ${currentUser}!`;

// // const currentUser = 'Grace Hopper';

// const welcomeMessage = `Welcome to Flatbook, ${currentUser}!`;

// const excitedWelcomeMessage = welcomeMessage.toUpperCase();


 const currentUser = 'Grace Hopper';



 const shortGreeting = `Welcome, ${currentUser.slice(0, 1)}!`;

// index.js
// const currentUser = "Grace Hopper"; // Define currentUser here or dynamically assign
const welcomeMessage = `Welcome to Flatbook, ${currentUser}!`;

console.log(welcomeMessage); // This should now print: "Welcome to Flatbook, Grace Hopper!"

// index.js
// const currentUser = "Grace Hopper"; // Define currentUser here or dynamically assign
const excitedWelcomeMessage = `WELCOME TO FLATBOOK, ${currentUser.toUpperCase()}!`;

console.log(excitedWelcomeMessage); // This should print: "WELCOME TO FLATBOOK, GRACE HOPPER!"



