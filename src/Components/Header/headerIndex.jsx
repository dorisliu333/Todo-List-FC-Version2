import React from 'react';
import {nanoid} from "nanoid"
import "./header.css"

function Header({addTodo}){
   
    function handleKeyUp(e){
        if(e.keyCode !== 13) return;
        if(e.target.value.trim()===""){
            alert("can not enter empty")
            return;
        }
       addTodo({ id:nanoid(),name:e.target.value, done:false})
       e.target.value ="";
    }

    return(
        <div className="todo-header">
           <input onKeyUp={handleKeyUp}type="text" placeholder="please type and press enter"/>
        </div>
    )
}

export default Header;