let someStr;

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
        str += i;
    }
    return str;
}
someStr = buildStr(20);
console.time('for loop reverse string');
revStrFor(someStr);
console.timeEnd('for loop reverse string');

console.log(revStrFor(someStr));