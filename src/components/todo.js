import React from 'react';


const Todo = (a) => {
    //events
    const delHandler=() => {
        a.setTodos(a.todos.filter((x)=> x.id !== a.td.id))
    }

    const compltHandler= () => {
        a.setTodos(a.todos.map((item)=>{
            if(item.id == a.td.id){
                return {
                    ...item, completed: !item.completed
                }; 
            }
            return item;
        }));
    };

    return(
        <div className="todo">
            <li className={`todo-item ${a.td.completed ? 'completed' : ''} `}>{a.text}</li>
            <button onClick={compltHandler} className='complete-btn'>
                <i className='fas fa-check'></i>
            </button>
            <button onClick={delHandler} className='trash-btn'>
                <i className='fas fa-trash'>
            </i></button>
        </div>
    );
};

export default Todo;