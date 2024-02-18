import { v4 as uuidv4 } from 'uuid';

export const todoType = {
    todo: 'todo',
    counter: 'counter'
}

export const initialTodos = (() => {
    const value = {};
    const todos = ['Learn React-JS', 'always be motivated', 'Actively look for new opportunities'];
    todos.forEach((todo) => {
        const id = uuidv4();
        value[id] = {
            value: todo,
            isDone: false,
            id
        }
    })
    return value;
})();
