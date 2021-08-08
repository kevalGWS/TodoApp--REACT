import React from 'react';
import Todo from './todo';

const TodoList= (a) => {
    return(
        <div className='todo-container'>
            <ul className='todo-list'>
                {a.fltrdTodos.map((td)=> (
                 <Todo key={td.id} text={td.text} setTodos={a.setTodos} todos={a.todos} td={td} />   
                ))}
            </ul>
        </div>
    )
};

export default TodoList;