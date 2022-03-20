import React, {useState} from 'react';
import Header from "./Components/Header/headerIndex.jsx"
import List from "./Components/List/listIndex.jsx"
import Footer from "./Components/Footer/footerIndex.jsx"
import './App.css';

function App() {
  const[todos,setTodos]=useState([]);
  function addTodo(todo){
    setTodos([todo,...todos])
  }
  function updateTodo(id,done){
    const newTodos=todos.map(todo=>{
        return todo.id === id ? {...todo,done} : todo
    })
    setTodos(newTodos);
  }
  function deleteTodo(id){
    const newTodos=todos.filter(todo=>{
      return todo.id !== id
    })
    setTodos(newTodos)
  }
  function checkAllDone(done){
    const newTodos=todos.map(todo=>{
      return {...todo,done}
    })
    setTodos(newTodos)
  }
  function deleteAllDone(){
    const newTodos=todos.filter(todo=>{
      return ! todo.done
    })
    setTodos(newTodos);
  }
  return (
    <div className="todo-container">
      <div className="todo-wrap">
      <Header addTodo={addTodo} />
      <List todos={todos} updateTodo={updateTodo} deleteTodo={deleteTodo}/>
      <Footer todos={todos} checkAllDone={checkAllDone} deleteAllDone={deleteAllDone}/>
      </div>
    </div>
  );
}

export default App;
