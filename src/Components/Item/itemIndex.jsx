import React, {useState}from 'react';
import "./item.css"

function Item(props){
    const {id,name,done,updateTodo,deleteTodo} = props;
    const [mouse,setMouse] = useState(false);
   function handleMouse (flag){
        return()=>{
            setMouse(flag);
        }
    }
    function handleCheck(id,done){
        updateTodo(id,!done)
    }

    function handleDelete(id){
        if(window.confirm('Are you sure you want to delete this?')){
            deleteTodo(id);
        }
    }
    return(
        <div>
            <li style={{backgroundColor: mouse? '#ddd' : 'white'}} onMouseEnter={handleMouse(true)} onMouseLeave={handleMouse(false)}>
                <label>
                    <input type="checkbox" checked={done} onChange={()=>handleCheck(id,done)}/>
                    <span>{name}</span>
                </label>
                <button onClick={()=>{handleDelete(id)}}className="btn btn-danger"style={{display:mouse?'block':'none'}}>Delete</button>
            </li>
        </div>
    )
}

export default Item;