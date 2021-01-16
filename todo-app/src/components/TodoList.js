import React from 'react';

import Todo from './Todo';


const TodoList = ({ todos, setTodos, filteredTodos }) => {
    return(
        <div className="todo-container">
            <ul className="todo-list">
                {filteredTodos.map(item => <Todo 
                    item={item} 
                    todos={todos} 
                    setTodos={setTodos} 
                    key={item.id}/>
                )}
            </ul>
        </div>
    );
}

export default TodoList;
