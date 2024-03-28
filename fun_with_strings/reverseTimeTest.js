let someStr;
let charCount;
function revStrArr(str) { 
    return str.split('').reverse().join('');
}
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
console.time(`revStrArr test ${charCount}`);
revStrArr(someStr);
console.timeEnd(`revStrArr test ${charCount}`);
// console.log(revStrConcat(someStr));
charCount = 100;
someStr = buildStr(charCount);
console.time(`revStrConcat test ${charCount}`);
revStrConcat(someStr);
console.timeEnd(`revStrConcat test ${charCount}`);
console.time(`revStrArr test ${charCount}`);
revStrArr(someStr);
console.timeEnd(`revStrArr test ${charCount}`);
// console.log(revStrConcat(someStr));
charCount = 1000;
someStr = buildStr(charCount);
console.time(`revStrConcat test ${charCount}`);
revStrConcat(someStr);
console.timeEnd(`revStrConcat test ${charCount}`);
console.time(`revStrArr test ${charCount}`);
revStrArr(someStr);
console.timeEnd(`revStrArr test ${charCount}`);
// console.log(revStrConcat(someStr));
charCount = 10000;
someStr = buildStr(charCount);
console.time(`revStrConcat test ${charCount}`);
revStrConcat(someStr);
console.timeEnd(`revStrConcat test ${charCount}`);
console.time(`revStrArr test ${charCount}`);
revStrArr(someStr);
console.timeEnd(`revStrArr test ${charCount}`);
// console.log(revStrConcat(someStr));
charCount = 100000;
someStr = buildStr(charCount);
console.time(`revStrConcat test ${charCount}`);
revStrConcat(someStr);
console.timeEnd(`revStrConcat test ${charCount}`);
console.time(`revStrArr test ${charCount}`);
revStrArr(someStr);
console.timeEnd(`revStrArr test ${charCount}`);
// console.log(revStrConcat(someStr));
charCount = 1000000;
someStr = buildStr(charCount);
console.time(`revStrConcat test ${charCount}`);
revStrConcat(someStr);
console.timeEnd(`revStrConcat test ${charCount}`);
console.time(`revStrArr test ${charCount}`);
revStrArr(someStr);
console.timeEnd(`revStrArr test ${charCount}`);
// console.log(revStrConcat(someStr));
charCount = 10000000;
someStr = buildStr(charCount);
console.time(`revStrConcat test ${charCount}`);
revStrConcat(someStr);
console.timeEnd(`revStrConcat test ${charCount}`);
console.time(`revStrArr test ${charCount}`);
revStrArr(someStr);
console.timeEnd(`revStrArr test ${charCount}`);
// console.log(revStrConcat(someStr));
