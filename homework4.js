// Задача № 1

function multiply(num) {
    if (isNaN(num)) return 0;
    num = Number(num);
    let res = 1;
    for (let i = 0; i < arguments.length; i++) {
       res *= arguments[i];
    }
    return res;
}

// Задача № 3

function reverseString(string) {
    if (typeof string !== 'string') return new Error('Not a string'); // я так понимаю проверку на пусткую строку делать не нужно ведь будет ошибка в цикле при пустой строке
    let str = '';
    for (let i = 1; i <= string.length; i++) {
        str += string[string.length - i];
    }
    return str;
}

// Задача № 4
function getCodeStringFromText(string) {
    if (typeof string !== 'string') return new Error('Not a string');
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
        text,
        id: todos.length
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

function editTask(newText, id) {
    if (typeof newText !== 'string') return new Error('text is not a string');
    if (!newText.length) return new Error('text empty');
    if (id !== 0 && !id) return new Error('id required');
    if (isNaN(id)) return new Error('id must be a number');
    id = Number(id);

    let todo;

    for (let i = 0; i < todos.length; i++) {
        if (todos[i].id === id) {
            todo = todos[i];
            todo.text = newText;
        }
    }
    return todos;
}