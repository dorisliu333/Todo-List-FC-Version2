import React from 'react';

import "./footer.css"

function Footer(props){
    const {todos,checkAllDone,deleteAllDone} = props;
    const total = todos.length;
    const isDoneTotal=todos.reduce((pre,todo)=>pre+(todo.done?1:0),0)
   const handleCheck=(event)=>{
        checkAllDone(event.target.checked)
    }
    
    const handleDeleteAllDone=()=>{
        deleteAllDone();
    }
    return(
        
        <div className="todo-footer">
            <label>
            <input type="checkbox" onChange={handleCheck} checked={isDoneTotal === total&&total !==0 ? true : false}/>
            </label>
            
            <span>Finished {isDoneTotal}</span><span>/ Total {total}</span>
            <button onClick={handleDeleteAllDone}className="btn btn-danger">Clear All Finished</button>
        </div>
    )
}

export default Footer;