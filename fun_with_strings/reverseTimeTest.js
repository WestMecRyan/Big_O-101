let someStr;
let charCount;
function revStrConcat(str) { 
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
console.time(`revStrConcat test ${charCount}`);
revStrConcat(someStr);
console.timeEnd(`revStrConcat test ${charCount}`);
// console.log(revStrConcat(someStr));
charCount = 100;
someStr = buildStr(charCount);
console.time(`revStrConcat test ${charCount}`);
revStrConcat(someStr);
console.timeEnd(`revStrConcat test ${charCount}`);
// console.log(revStrConcat(someStr));
