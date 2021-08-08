import React,{useState,useEffect} from 'react';
import './App.css';

//components
import Form from './components/form';
import TodoList from './components/todoList';

function App() {
  const[ipText,setipText]=useState('');
  const [todos,setTodos]=useState([]);
  const [filter,setFilter]=useState('all');
  const [fltrdTodos,setFltrdTodos]=useState([]);

  //run once when app start
  useEffect(() => {
    getLocalTodos();
  },[]);

  useEffect(()=>{
    filterHandler();
    saveLocalTodos();
  },[todos,filter]);

  //function 
  const filterHandler= () =>{
    switch (filter){
      case "completed":
        setFltrdTodos(todos.filter((td)=> td.completed === true));
        break;
      case "uncompleted":
        setFltrdTodos(todos.filter((td)=> td.completed === false));  
        break;
      default:
        setFltrdTodos(todos);
        break;
    }
  }; 
  //save to local
  const saveLocalTodos = () => {
      localStorage.setItem('todos',JSON.stringify(todos));
  }

  const getLocalTodos =() =>{
    if(localStorage.getItem('todos') == null ){
      localStorage.setItem('todos',JSON.stringify([]));
    }else{
      let todoLocal=JSON.parse(localStorage.getItem('todos'));
      setTodos(todoLocal);
    }
  }

  return (
    <div className="App">
      <header>
        <h1>Keval's Todo list</h1>
      </header>
      <Form ipText={ipText} setipText={setipText} setTodos={setTodos} todos={todos} setFilter={setFilter} /> 
      <TodoList fltrdTodos={fltrdTodos} todos={todos} setTodos={setTodos} />
    </div>
  );
}

export default App;
