let someStr = "Hello";

function revStrFor(str) { 
    let revStr = "";
    for (let i = str.length - 1; i >= 0; i--) { 
        revStr += str[i];
    }
    return revStr;
}
console.time('for loop reverse string');
revStrFor(someStr);
console.timeEnd('for loop reverse string');

// console.log(revStrFor(someStr));