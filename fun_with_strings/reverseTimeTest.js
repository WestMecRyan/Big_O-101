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
    for (let i = 0; i <= n; i++) { 
        str += i;
    }
    return str;
}
charCount = 10;
someStr = buildStr(charCount);
console.time('revStrConcat test');
revStrConcat(someStr);
console.timeEnd('revStrConcat test');
// console.log(revStrConcat(someStr));