// initialize someString
let someString = "Hello World";
// create a named function that takes a string 'str' as an argument
function reverseString(str) { 
    // inside the function reverse the string 
    str = str.split("").reverse().join("");
    //and return the reversed string
    return str; 
}
// reverseString(someString);
// then console log the function and pass in someString
console.log(reverseString(someString));