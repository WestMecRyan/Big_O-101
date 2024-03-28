let someStr = "Hello World";
function revStrConcat(str) { 
    let revStr = ""; 
    for (let i = str.length - 1; i >= 0; i--) { 
        revStr += str[i];
    }
    return revStr;
}
console.log(revStrConcat(someStr));