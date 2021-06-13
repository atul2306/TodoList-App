import React from "react";
 //import CancelIcon from '@material-ui/icons/Cancel';
const Todo=(props)=>{
  
    return (
    <>
    <div className="todo_style">
    <button 
    className="fa-times" 
    onClick={()=>{
        props.onselect(props.id)
    }}>
    -</button>
   <li> {props.text} </li>
    </div>
   </>
   );
    
};
export default Todo;
