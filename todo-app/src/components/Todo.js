import React from 'react';


const Todo = ({ item, todos, setTodos }) => {

    const deleteTodoHandler = () => {
        console.log(item);

        // Remove todo item 
        setTodos(todos.filter(el => el.id !== item.id));
    };

    const completeHandler = () => {
        console.log(item);

        // Update state complete: true 
        setTodos(todos.map( el => {
            if (el.id === item.id) {
                return {
                    ...el, completed: !el.completed
                }
            }
            return el;
        }))
    };

    return (
        <div className="todo">
            <li className={`todo-item ${item.completed ? "completed": ""}`}>{item.text}</li>
            <button className="complete-btn" onClick={completeHandler}>
                <i className="fas fa-check"></i>
            </button>
            <button className="trash-btn" onClick={deleteTodoHandler}>
                <i className="fas fa-trash"></i>
            </button>
        </div>
    );
}

export default Todo;
