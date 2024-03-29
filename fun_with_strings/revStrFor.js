let someStr;
let charCount;
function revStrFor(str) { 
    let revStr = "";
    for (let i = str.length - 1; i >= 0; i--) { 
        revStr += str[i];
    }
    return revStr;
}
function buildStr(n) { 
    let str = "";
    for (let i = 1; i <= n; i++) { 
        str += "a";
    }
    return str;
}
charCount = 10;
someStr = buildStr(charCount);
console.time(`for loop reverse string ${charCount}`);
revStrFor(someStr);
console.timeEnd(`for loop reverse string ${charCount}`);
charCount = 100;
someStr = buildStr(charCount);
console.time(`for loop reverse string ${charCount}`);
revStrFor(someStr);
console.timeEnd(`for loop reverse string ${charCount}`);
charCount = 1000;
someStr = buildStr(charCount);
console.time(`for loop reverse string ${charCount}`);
revStrFor(someStr);
console.timeEnd(`for loop reverse string ${charCount}`);

charCount = 10000;
someStr = buildStr(charCount);
console.time(`for loop reverse string ${charCount}`);
revStrFor(someStr);
console.timeEnd(`for loop reverse string ${charCount}`);

charCount = 100000;
someStr = buildStr(charCount);
console.time(`for loop reverse string ${charCount}`);
revStrFor(someStr);
console.timeEnd(`for loop reverse string ${charCount}`);


charCount = 1000000;
someStr = buildStr(charCount);
console.time(`for loop reverse string ${charCount}`);
revStrFor(someStr);
console.timeEnd(`for loop reverse string ${charCount}`);
// console.log(revStrFor(someStr));