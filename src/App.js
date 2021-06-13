import React, { useState } from "react";
import Todo from "./Todo";
//import AddIcon from '@material-ui/icons/Add';
const App=()=>{
   const [count,setcount]=useState();
   const [item,itemcount]=useState([]);
   const change =(event)=>{
      setcount(event.target.value);
   };
   const submited =()=>{
     console.log("clicked")
      itemcount((olditems)=>{
         return [...olditems,count];
      });
      setcount("");
   };
   const deleteItems=(id)=>{
      console.log("delted")
      itemcount((olditems)=>{
         return olditems.filter((arrElem,index)=>{
           return index !== id;
         });
      })
   };
   return (
      <>
    <div className="main_div">
  <div className="center_div">
<br/>
<h1> ToDo List </h1>
<br/>
<input 
type="text" 
placeholder="Add a item"
value={count}
onChange={change}
/>
<button onClick={submited}>+ </button>
<ol>
  
   {item.map((itemval, index)=>{
     return <Todo 
     key={index} 
     id={index} 
     text={itemval}
     onselect={deleteItems}
      />
   })}
</ol>
  </div>
    </div>
      </>
   );
}
export default App;