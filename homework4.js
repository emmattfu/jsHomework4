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
    if (!text.length) return new Error('text empty');
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


// Todo
// Add, Edit, Delete
let todos = [
    {
        text: 'Learn JavaScript',
        id: 0
    },
    {
        text: 'Learn Angular',
        id: 1
    }
];

function addTask(text) {
    if (typeof text !== 'string') return new Error('text is not a string');
    if (!text.length) return new Error('text empty');

    // Create new task obj
    const newTask = {
        id: todos.length,
        text
    };

    // Add new task
    todos.push(newTask); // push, pop, unshift, shift

    return todos;
}

function deleteTask(id) {
    if (id !== 0 && !id) return new Error('id required');
    if (isNaN(id)) return new Error('id must be a number');
    id = Number(id);

    let todo;

    for (let i = 0; i < todos.length; i++ ) {
        if (todos[i].id === id) {
            todo = todos[i];
            todos.splice(i, 1);
            break;
        }
    }

    return todo || 'task not found';
}