import {ADD_TODO, TOGGLE_TODO} from "./types";

let ListId = 0;

export const addList = (text)=> ({
   type: ADD_TODO,
   id: ListId++,
    text
});

export const toggleTodo = id => ({
    type: TOGGLE_TODO,
    id
});
