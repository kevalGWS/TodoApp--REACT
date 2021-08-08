import { text } from '@fortawesome/fontawesome-svg-core';
import React from 'react';
import { v4 as uidv4 } from "uuid";


const Form= (a) => {

    const ipTextHandler=(e)=>{
        console.log(e.target.value);
        a.setipText(e.target.value);
    }

    const subitTodoHandler= (e)=>{
        e.preventDefault();
        a.setTodos([...a.todos,{text:a.ipText , completed:false, id: uidv4() }]);
        a.setipText('');
    }

    const filterHandler= (e) => {
        a.setFilter(e.target.value);
    }

    return(
        <form >
            <input value={a.ipText} onChange={ipTextHandler} type="text" className='todo-input' />
            <button onClick={subitTodoHandler} className='todo-button' type='submit'>
                <i className='fas fa-plus-square'></i>
            </button>
            <div className='select'>
                <select onChange={filterHandler} name="todos" className='filter-todo'>
                    <option value="all">All</option>
                    <option value="completed">completed</option>
                    <option value="uncompleted">Uncompleted</option>
                </select>
            </div>

        </form>
    )
};

export default Form;