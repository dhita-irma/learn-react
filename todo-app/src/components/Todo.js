import React from 'react';


const Todo = ({ item, todos, setTodos }) => {

    const deleteTodoHandler = () => {
        console.log(item);
        
        // Remove todo item 
        setTodos(todos.filter(el => el.id !== item.id));
    };

    return (
        <div className="todo">
            <li className="todo-item">{item.text}</li>
            <button className="complete-btn">
                <i className="fas fa-check"></i>
            </button>
            <button className="trash-btn" onClick={deleteTodoHandler}>
                <i className="fas fa-trash"></i>
            </button>
        </div>
    );
}

export default Todo;
