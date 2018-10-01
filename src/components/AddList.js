import React, {Component} from 'react';
import "../styles/AddList.css"
import PropTypes from 'prop-types'
import List from './List'

const AddList = ({ todos, toggleTodo }) => (
    <ul>
        {todos.map(todo =>
            <List
                key={todo.id}
                {...todo}
                onClick={() => toggleTodo(todo.id)}
            />
        )}
    </ul>
);

AddList.propTypes = {
    todos: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.number.isRequired,
        completed: PropTypes.bool.isRequired,
        text: PropTypes.string.isRequired
    }).isRequired).isRequired,
    toggleTodo: PropTypes.func.isRequired
};



export default AddList;