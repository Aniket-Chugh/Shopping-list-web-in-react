import React, { useState } from "react";
import './ShoppingUI.css';



function ShoppingList() {
    const[content,SetContent]= useState("");
const[tasks,Settasks] = useState([]);

    const HandleChange = (e)=>{
        SetContent(e.target.value);
    }

    const Addnewtask = ()=>{
      const newItem = content;
const newArr = [...tasks];
newArr.push(newItem);
Settasks(newArr);
SetContent("");

    }

    const DeleteTask = (index)=>{
        const ModefiedArr = [];
for (let i = 0; i < tasks.length; i++) {
    if (i!==index) {
ModefiedArr.push(tasks[i]);
    }

}
Settasks(ModefiedArr);
    };

return (
<div className="card">
    <div className="Input-container">

<div className="input-part">

<input type="text" value={content} onChange={HandleChange}  />
</div>


<div className="btn-part">
<button onClick={Addnewtask} >Click me</button>
</div>

    </div>

<div className="tasksList">
    <div className="tasks">
<ul>
{tasks.map((item, index) => (
    <li key={index}>
        <span>{item}</span>
<button className="DeleteBtn" onClick={()=> {DeleteTask(index)}}>Delete</button>
</li>))}
</ul>
    </div>

    <div className="deleteBtn">

    </div>
</div>


</div>
);
}


export default ShoppingList;
