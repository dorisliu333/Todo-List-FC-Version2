import React from 'react';
import Item from "../Item/itemIndex.jsx"
import "./list.css"
function List({todos,updateTodo,deleteTodo}){
    return(
        <ul className="todo-main">
            {
                todos.map((todo)=>{
                    return <Item key={todo.id} {...todo} updateTodo={updateTodo} deleteTodo={deleteTodo}/>
                })
            }
        </ul>
    )
}

export default List;
