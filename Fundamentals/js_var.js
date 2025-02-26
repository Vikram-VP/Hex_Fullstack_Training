// create variable using var keyword --- old fashioned way 
var userName='Harry';
var age=20;

// Note :during runtime , Node will auto detect the data types of the variables 

console.log('username is '+ userName);
console.log('Age is '+age);

// create variables using let and const --- new way

const name='harry potter';
// name='harry potter';// X Assignment to constant variable.

console.log("Name is "+ name);

let email='harry@gmail.com';//with let it is possible to change the value of the variable
email='harry@yahoo.com';

console.log("Email is "+ email);

/*
Developer tip:

Always use const and let keyword instead of var keyword.
var is for general declaration of variables.
*/
