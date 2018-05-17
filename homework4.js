// Задача № 1

function multiply() {
    if (isNaN(arguments)) return 0;
    let res = 1;
    for (let i = 0; i < arguments.length; i++) {
       res *= arguments[i];
    }
    return res;
}

// Задача № 3

function reverseString(string) {
    if (typeof string !== 'string') return new Error('Not a string');
    let str = '';
    for (let i = 1; i <= string.length; i++) {
        str += string[string.length - i];
    }
    return str;
}

// Задача № 4

function getCodeStringFromText(string) {
    let stringFromText = '';
    for (let i = 0; i < string.length; i++) {
        stringFromText += string.charCodeAt(i) + ' ';
    }
    return stringFromText;
}